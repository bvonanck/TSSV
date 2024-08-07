/*
*Supports configurable any width and depth
*Supports choosing whether to output 'almost full' and 'almost_empty', which is not output by default.
*Supports adjustable water levels for almost_full and almost_empty. If not configured, the default values for almost_full are maximum depth minus 1 and almost_empty is 1
*Supports two types of SRAMs for FIFO storage: '1rw' and '1r1w', with a default value of '1r1w'.
*Please note that the FIFO read and write enable interfaces generated by these two types are different. When '1rw', rw is high write and low read
*/
import { Module, Expr } from 'tssv/lib/core/TSSV';
import { SRAM } from 'tssv/lib/modules/SRAM';
export class SFIFO extends Module {
    constructor(params) {
        super({
            // define the default parameter values
            name: params.name,
            dataWidth: params.dataWidth,
            depth: params.depth,
            InclAlmostDepth: params.InclAlmostDepth || 'none',
            rw_mode: params.rw_mode || '1r_1w'
        });
        const almost_full_depth = this.params.almost_full_depth || (params.depth - 1n);
        const almost_empty_depth = this.params.almost_empty_depth || 1n;
        // calculate address width based on depth
        const addr_width = this.bitWidth(this.params.depth - 1n);
        let addr_width_set = addr_width;
        if (this.params.depth === 1n) {
            addr_width_set = 1;
        }
        // ============================================IO define start===========================================
        // define IO signals
        this.IOs = {
            clk: { direction: 'input', isClock: 'posedge' },
            rst_n: { direction: 'input', isReset: 'lowasync' },
            data_in: { direction: 'input', width: this.params.dataWidth },
            data_out: { direction: 'output', width: this.params.dataWidth },
            empty: { direction: 'output' },
            full: { direction: 'output' },
            curr_depth: { direction: 'output', width: addr_width_set }
        };
        // IO: rd_en wr_en rw_en rw
        if (this.params.rw_mode === '1r_1w') {
            this.IOs.rd_en = { direction: 'input' };
            this.IOs.wr_en = { direction: 'input' };
        }
        else {
            this.IOs.rw_en = { direction: 'input' };
            this.IOs.rw = { direction: 'input' };
        }
        // IO: almost_full almost_empty
        if (this.params.InclAlmostDepth === 'InclAlmostDepth') {
            if (almost_full_depth <= 0) {
                console.log('Error: In \'InclAlmostDepth\' mode, the FIFO depth must be at least greater than 1');
            }
            else if (almost_full_depth >= this.params.depth) {
                console.log(`Error: almost_full_depth ${almost_full_depth} cannot be greater than or equal to this fifo's depth ${this.params.depth}`);
            }
            if (almost_empty_depth >= this.params.depth) {
                console.log(`Error: almost_full_depth ${almost_empty_depth} cannot be greater than or equal to this fifo's depth ${this.params.depth}`);
            }
            this.IOs.almost_full = { direction: 'output' };
            this.IOs.almost_empty = { direction: 'output' };
        }
        // width and depth check
        if (this.params.dataWidth <= 0)
            console.log('Error: dataWidth should be greater than 0');
        if (this.params.depth <= 0)
            console.log('Error: Depth should be greater than 0');
        // ===========================================IO define enf==============================================
        // calculate fifo_cnt width
        let fifo_cnt_width = addr_width_set;
        if (this.params.depth === 1n) {
            fifo_cnt_width = 1;
        }
        else if (Math.log2(Number(this.params.depth)) % 1 === 0) {
            fifo_cnt_width = addr_width_set + 1;
        }
        // add wr_addr and rd_addr
        this.addSignal('wr_addr', { width: addr_width_set });
        this.addSignal('rd_addr', { width: addr_width_set });
        // add temp counter
        this.addSignal('fifo_cnt', { width: fifo_cnt_width });
        // add sram read and write enable
        this.addSignal('sram_read_en', {});
        this.addSignal('sram_write_en', {});
        // Instantce RAM as the storage unit for FIFO
        if (this.params.rw_mode === '1rw') {
            this.addSignal('rd_en', {});
            this.addSignal('wr_en', {});
            this.addSignal('sram_a_addr', { width: addr_width_set });
            this.addAssign({ in: new Expr('rw_en && rw'), out: 'wr_en' }); // 'rw' high write low read
            this.addAssign({ in: new Expr('rw_en && ~rw'), out: 'rd_en' });
            this.addAssign({ in: new Expr('sram_write_en ? wr_addr : rd_addr'), out: 'sram_a_addr' });
            // instance 1rw
            this.addSubmodule(`u_${this.params.name}_sram`, new SRAM({ name: `${this.params.name}_sram`, dataWidth: this.params.dataWidth, depth: this.params.depth, ports: '1rw' }), { clk: 'clk', a_re: 'sram_read_en', a_we: 'sram_write_en', a_data_in: 'data_in', a_data_out: 'data_out', a_addr: 'sram_a_addr' });
        }
        else {
            // instance 1r_1w
            this.addSubmodule(`u_${this.params.name}_sram`, new SRAM({ name: `${this.params.name}_sram`, dataWidth: this.params.dataWidth, depth: this.params.depth, ports: '1r_1w' }), { clk: 'clk', a_re: 'sram_read_en', a_data_out: 'data_out', a_addr: 'rd_addr', b_we: 'sram_write_en', b_data_in: 'data_in', b_addr: 'wr_addr' });
        }
        this.addAssign({ in: new Expr(`(fifo_cnt == ${fifo_cnt_width}'d${this.params.depth}) ? 1'b1 : 1'b0`), out: 'full' });
        this.addAssign({ in: new Expr('~(|fifo_cnt)'), out: 'empty' });
        this.addAssign({ in: new Expr('fifo_cnt'), out: 'curr_depth' });
        if (this.params.InclAlmostDepth === 'InclAlmostDepth') {
            this.addAssign({ in: new Expr(`(fifo_cnt >= ${almost_full_depth}) ? 1 : 0`), out: 'almost_full' });
            this.addAssign({ in: new Expr(`(fifo_cnt <= ${almost_empty_depth}) ? 1 : 0`), out: 'almost_empty' });
        }
        this.addAssign({ in: new Expr('!empty && rd_en'), out: 'sram_read_en' });
        this.addAssign({ in: new Expr('!full && wr_en'), out: 'sram_write_en' });
        // fifo read
        const read_body = `
    // fifo read
    always_ff @( posedge clk or negedge rst_n ) begin
        if (!rst_n) begin
            rd_addr <= ${addr_width_set}'d0;
        end
        else if (sram_read_en) begin
            if (rd_addr == ${addr_width_set}'d${this.params.depth - 1n}) begin
                rd_addr <= ${addr_width_set}'d0;
            end else begin
                rd_addr <= rd_addr + ${addr_width_set}'d1;
                end
        end
    end
    `;
        this.addSequentialAlways({ clk: 'clk', reset: 'rst_n', outputs: ['rd_addr', 'data_out'] }, read_body);
        // fifo write
        const write_body = `
    // fifo write
    always_ff @( posedge clk or negedge rst_n ) begin
        if (!rst_n) begin
            wr_addr <= ${addr_width_set}'d0;
        end
        else if (sram_write_en) begin
            if (wr_addr == ${addr_width_set}'d${this.params.depth - 1n}) begin
                wr_addr <= ${addr_width_set}'d0;
            end else begin
                wr_addr <= wr_addr + ${addr_width_set}'d1;
            end
        end
    end
    `;
        this.addSequentialAlways({ clk: 'clk', reset: 'rst_n', outputs: ['wr_addr'] }, write_body);
        // cnt calculate
        let cnt_body = `
    // Setting FIFO counter value for different situations of read and write operations
    always_ff @( posedge clk or negedge rst_n ) begin
        if(!rst_n) begin
            fifo_cnt <= ${fifo_cnt_width}'d0;
        end else if (sram_write_en && sram_read_en) begin
            fifo_cnt <= fifo_cnt;
        end else if (sram_write_en) begin
            fifo_cnt <= fifo_cnt + ${fifo_cnt_width}'d1;
        end else if (sram_read_en) begin
            fifo_cnt <= fifo_cnt - ${fifo_cnt_width}'d1;
        end
    end
    `;
        if (this.params.rw_mode === '1rw') {
            cnt_body =
                `
    // Setting FIFO counter value for different situations of read and write operations
    always_ff @( posedge clk or negedge rst_n ) begin
        if(!rst_n) begin
            fifo_cnt <= ${fifo_cnt_width}'d0;
        end else begin
            if (sram_write_en) begin
                fifo_cnt <= fifo_cnt + ${fifo_cnt_width}'d1;
            end
            if (sram_read_en) begin
                fifo_cnt <= fifo_cnt - ${fifo_cnt_width}'d1;
            end
        end
    end
    `;
        }
        this.addSequentialAlways({ clk: 'clk', reset: 'rst_n', outputs: ['fifo_cnt'] }, cnt_body);
    }
}
export default SFIFO;
