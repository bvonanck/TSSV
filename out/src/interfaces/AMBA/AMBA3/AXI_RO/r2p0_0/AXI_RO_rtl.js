import { Interface } from 'tssv/lib/core/TSSV';
/**
 * TSSV Interface bundle for the AXI_RO_rtl protocol
 */
export class AXI_RO_rtl extends Interface {
    /**
     * Create a new AXI_RO_rtl Interface bundle with either master or slave port interface
     * or just a bundle of interconnect wires
     * @param params param value set
     * @param role sets the role of this instance to choose master or slave port interface
     * or just a bundle of interconnect wires
     */
    constructor(params = {}, role = undefined) {
        super('AXI_RO_rtl', {
            AIW: params.AIW || 8,
            AW: params.AW || 32,
            DIW: params.DIW || 8,
            DW: params.DW || 32
        }, role);
        this.signals = {
            ACLK: { width: 1 },
            ACLKEN: { width: 1 },
            ARESETn: { width: 1 },
            AWID: { width: params.DIW || 8 },
            AWADDR: { width: params.AW || 32 },
            AWLEN: { width: params.DIW || 8 },
            AWSIZE: { width: params.DIW || 8 },
            AWBURST: { width: params.DIW || 8 },
            AWLOCK: { width: params.DIW || 8 },
            AWCACHE: { width: params.DIW || 8 },
            AWPROT: { width: params.DIW || 8 },
            AWVALID: { width: params.DIW || 8 },
            AWREADY: { width: params.DIW || 8 },
            WID: { width: params.DIW || 8 },
            WDATA: { width: params.DW || 32 },
            WSTRB: { width: params.DIW || 8 },
            WLAST: { width: params.DIW || 8 },
            WVALID: { width: params.DIW || 8 },
            WREADY: { width: params.DIW || 8 },
            BID: { width: params.DIW || 8 },
            BRESP: { width: params.DIW || 8 },
            BVALID: { width: params.DIW || 8 },
            BREADY: { width: params.DIW || 8 },
            ARID: { width: params.DIW || 8 },
            ARADDR: { width: params.AW || 32 },
            ARLEN: { width: 4 },
            ARSIZE: { width: 3 },
            ARBURST: { width: 2 },
            ARLOCK: { width: 2 },
            ARCACHE: { width: 4 },
            ARPROT: { width: 3 },
            ARVALID: { width: 1 },
            ARREADY: { width: 1 },
            RID: { width: params.DIW || 8 },
            RDATA: { width: params.DW || 32 },
            RRESP: { width: 2 },
            RLAST: { width: 1 },
            RVALID: { width: 1 },
            RREADY: { width: 1 },
            AWUSER: { width: params.DIW || 8 },
            WUSER: { width: params.DIW || 8 },
            BUSER: { width: params.DIW || 8 },
            ARUSER: { width: params.DIW || 8 },
            RUSER: { width: params.DIW || 8 },
            ACLKCHK: { width: 1 },
            ACLKENCHK: { width: 1 },
            ARESETnCHK: { width: 1 },
            AWIDCHK: { width: params.DIW || 8 },
            AWADDRCHK: { width: params.DIW || 8 },
            AWLENCHK: { width: params.DIW || 8 },
            AWVALIDCHK: { width: params.DIW || 8 },
            AWREADYCHK: { width: params.DIW || 8 },
            WIDCHK: { width: params.DIW || 8 },
            WDATACHK: { width: params.DIW || 8 },
            WSTRBCHK: { width: params.DIW || 8 },
            WLASTCHK: { width: params.DIW || 8 },
            WVALIDCHK: { width: params.DIW || 8 },
            WREADYCHK: { width: params.DIW || 8 },
            BIDCHK: { width: params.DIW || 8 },
            BRESPCHK: { width: params.DIW || 8 },
            BVALIDCHK: { width: params.DIW || 8 },
            BREADYCHK: { width: params.DIW || 8 },
            ARIDCHK: { width: params.DIW || 8 },
            ARADDRCHK: { width: params.DIW || 8 },
            ARLENCHK: { width: params.DIW || 8 },
            ARSIZECHK: { width: params.DIW || 8 },
            ARBURSTCHK: { width: params.DIW || 8 },
            ARLOCKCHK: { width: params.DIW || 8 },
            ARCACHECHK: { width: params.DIW || 8 },
            ARPROTCHK: { width: params.DIW || 8 },
            ARVALIDCHK: { width: 1 },
            ARREADYCHK: { width: 1 },
            RIDCHK: { width: params.DIW || 8 },
            RDATACHK: { width: params.DIW || 8 },
            RRESPCHK: { width: params.DIW || 8 },
            RLASTCHK: { width: 1 },
            RVALIDCHK: { width: 1 },
            RREADYCHK: { width: 1 },
            AWUSERCHK: { width: params.DIW || 8 },
            WUSERCHK: { width: params.DIW || 8 },
            BUSERCHK: { width: params.DIW || 8 },
            ARUSERCHK: { width: params.DIW || 8 },
            RUSERCHK: { width: params.DIW || 8 },
            ARCTLCHK0: { width: 1 },
            ARCTLCHK1: { width: 1 },
            AWCTLCHK0: { width: params.DIW || 8 },
            AWCTLCHK1: { width: params.DIW || 8 }
        };
        this.modports = {
            master: {
                ACLK: 'input',
                ACLKEN: 'input',
                ARESETn: 'input',
                AWID: 'output',
                AWADDR: 'output',
                AWLEN: 'output',
                AWSIZE: 'output',
                AWBURST: 'output',
                AWLOCK: 'output',
                AWCACHE: 'output',
                AWPROT: 'output',
                AWVALID: 'output',
                AWREADY: 'input',
                WID: 'output',
                WDATA: 'output',
                WSTRB: 'output',
                WLAST: 'output',
                WVALID: 'output',
                WREADY: 'input',
                BID: 'input',
                BRESP: 'input',
                BVALID: 'input',
                BREADY: 'output',
                ARID: 'output',
                ARADDR: 'output',
                ARLEN: 'output',
                ARSIZE: 'output',
                ARBURST: 'output',
                ARLOCK: 'output',
                ARCACHE: 'output',
                ARPROT: 'output',
                ARVALID: 'output',
                ARREADY: 'input',
                RID: 'input',
                RDATA: 'input',
                RRESP: 'input',
                RLAST: 'input',
                RVALID: 'input',
                RREADY: 'output',
                AWUSER: 'output',
                WUSER: 'output',
                BUSER: 'input',
                ARUSER: 'output',
                RUSER: 'input',
                ACLKCHK: 'input',
                ACLKENCHK: 'input',
                ARESETnCHK: 'input',
                AWIDCHK: 'output',
                AWADDRCHK: 'output',
                AWLENCHK: 'output',
                AWVALIDCHK: 'output',
                AWREADYCHK: 'input',
                WIDCHK: 'output',
                WDATACHK: 'output',
                WSTRBCHK: 'output',
                WLASTCHK: 'output',
                WVALIDCHK: 'output',
                WREADYCHK: 'input',
                BIDCHK: 'input',
                BRESPCHK: 'input',
                BVALIDCHK: 'input',
                BREADYCHK: 'output',
                ARIDCHK: 'output',
                ARADDRCHK: 'output',
                ARLENCHK: 'output',
                ARSIZECHK: 'output',
                ARBURSTCHK: 'output',
                ARLOCKCHK: 'output',
                ARCACHECHK: 'output',
                ARPROTCHK: 'output',
                ARVALIDCHK: 'output',
                ARREADYCHK: 'input',
                RIDCHK: 'input',
                RDATACHK: 'input',
                RRESPCHK: 'input',
                RLASTCHK: 'input',
                RVALIDCHK: 'input',
                RREADYCHK: 'output',
                AWUSERCHK: 'output',
                WUSERCHK: 'output',
                BUSERCHK: 'input',
                ARUSERCHK: 'output',
                RUSERCHK: 'input',
                ARCTLCHK0: 'output',
                ARCTLCHK1: 'output',
                AWCTLCHK0: 'output',
                AWCTLCHK1: 'output'
            },
            slave: {
                ACLK: 'input',
                ACLKEN: 'input',
                ARESETn: 'input',
                AWID: 'input',
                AWADDR: 'input',
                AWLEN: 'input',
                AWSIZE: 'input',
                AWBURST: 'input',
                AWLOCK: 'input',
                AWCACHE: 'input',
                AWPROT: 'input',
                AWVALID: 'input',
                AWREADY: 'output',
                WID: 'input',
                WDATA: 'input',
                WSTRB: 'input',
                WLAST: 'input',
                WVALID: 'input',
                WREADY: 'output',
                BID: 'output',
                BRESP: 'output',
                BVALID: 'output',
                BREADY: 'input',
                ARID: 'input',
                ARADDR: 'input',
                ARLEN: 'input',
                ARSIZE: 'input',
                ARBURST: 'input',
                ARLOCK: 'input',
                ARCACHE: 'input',
                ARPROT: 'input',
                ARVALID: 'input',
                ARREADY: 'output',
                RID: 'output',
                RDATA: 'output',
                RRESP: 'output',
                RLAST: 'output',
                RVALID: 'output',
                RREADY: 'input',
                AWUSER: 'input',
                WUSER: 'input',
                BUSER: 'output',
                ARUSER: 'input',
                RUSER: 'output',
                ACLKCHK: 'input',
                ACLKENCHK: 'input',
                ARESETnCHK: 'input',
                AWIDCHK: 'input',
                AWADDRCHK: 'input',
                AWLENCHK: 'input',
                AWVALIDCHK: 'input',
                AWREADYCHK: 'output',
                WIDCHK: 'input',
                WDATACHK: 'input',
                WSTRBCHK: 'input',
                WLASTCHK: 'input',
                WVALIDCHK: 'input',
                WREADYCHK: 'output',
                BIDCHK: 'output',
                BRESPCHK: 'output',
                BVALIDCHK: 'output',
                BREADYCHK: 'input',
                ARIDCHK: 'input',
                ARADDRCHK: 'input',
                ARLENCHK: 'input',
                ARSIZECHK: 'input',
                ARBURSTCHK: 'input',
                ARLOCKCHK: 'input',
                ARCACHECHK: 'input',
                ARPROTCHK: 'input',
                ARVALIDCHK: 'input',
                ARREADYCHK: 'output',
                RIDCHK: 'output',
                RDATACHK: 'output',
                RRESPCHK: 'output',
                RLASTCHK: 'output',
                RVALIDCHK: 'output',
                RREADYCHK: 'input',
                AWUSERCHK: 'input',
                WUSERCHK: 'input',
                BUSERCHK: 'output',
                ARUSERCHK: 'input',
                RUSERCHK: 'output',
                ARCTLCHK0: 'input',
                ARCTLCHK1: 'input',
                AWCTLCHK0: 'input',
                AWCTLCHK1: 'input'
            }
        };
    }
}
/**
 * VLNV Metadata
 */
AXI_RO_rtl.VLNV = {
    vendor: 'amba.com',
    library: 'AMBA3',
    name: 'AXI_RO_rtl',
    version: 'r2p0_0'
};
