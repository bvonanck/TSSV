import { Interface } from 'tssv/lib/core/TSSV';
/**
 * TSSV Interface bundle for the CHI_D_SNF_rtl protocol
 */
export class CHI_D_SNF_rtl extends Interface {
    /**
     * Create a new CHI_D_SNF_rtl Interface bundle with either master or slave port interface
     * or just a bundle of interconnect wires
     * @param params param value set
     * @param role sets the role of this instance to choose master or slave port interface
     * or just a bundle of interconnect wires
     */
    constructor(params = {}, role = undefined) {
        super('CHI_D_SNF_rtl', {
            AIW: params.AIW || 8,
            AW: params.AW || 32,
            DIW: params.DIW || 8,
            DW: params.DW || 32
        }, role);
        this.signals = {
            CLK: { width: 1 },
            CLKEN: { width: 1 },
            CLKENCHK: { width: 1 },
            RESETn: { width: 1 },
            TXLINKACTIVEREQ: { width: 1 },
            TXLINKACTIVEACK: { width: 1 },
            RXLINKACTIVEREQ: { width: 1 },
            RXLINKACTIVEACK: { width: 1 },
            TXSACTIVE: { width: 1 },
            RXSACTIVE: { width: 1 },
            TXLINKACTIVEREQCHK: { width: 1 },
            TXLINKACTIVEACKCHK: { width: 1 },
            RXLINKACTIVEREQCHK: { width: 1 },
            RXLINKACTIVEACKCHK: { width: 1 },
            TXSACTIVECHK: { width: 1 },
            RXSACTIVECHK: { width: 1 },
            TXRSPFLITPEND: { width: 1 },
            TXRSPFLITV: { width: 1 },
            TXRSPFLIT_QoS: { width: 4 },
            TXRSPFLIT_TgtID: { width: params.DIW || 8 },
            TXRSPFLIT_SrcID: { width: params.DIW || 8 },
            TXRSPFLIT_TxnID: { width: 10 },
            TXRSPFLIT_Opcode: { width: 4 },
            TXRSPFLIT_RespErr: { width: 2 },
            TXRSPFLIT_Resp: { width: 3 },
            TXRSPFLIT_FwdState: { width: 3 },
            TXRSPFLIT_CBusy: { width: 3 },
            TXRSPFLIT_DBID: { width: 10 },
            TXRSPFLIT_PCrdType: { width: 4 },
            TXRSPFLIT_TraceTag: { width: 1 },
            TXRSPLCRDV: { width: 1 },
            TXRSPFLITPENDCHK: { width: 1 },
            TXRSPFLITVCHK: { width: 1 },
            TXRSPFLITCHK: { width: params.DIW || 8 },
            TXRSPLCRDVCHK: { width: 1 },
            TXDATFLITPEND: { width: 1 },
            TXDATFLITV: { width: 1 },
            TXDATFLIT_QoS: { width: 4 },
            TXDATFLIT_TgtID: { width: params.DIW || 8 },
            TXDATFLIT_SrcID: { width: params.DIW || 8 },
            TXDATFLIT_TxnID: { width: 10 },
            TXDATFLIT_HomeNID: { width: params.DIW || 8 },
            TXDATFLIT_Opcode: { width: 4 },
            TXDATFLIT_RespErr: { width: 2 },
            TXDATFLIT_Resp: { width: 3 },
            TXDATFLIT_FwdState: { width: 4 },
            TXDATFLIT_CBusy: { width: 3 },
            TXDATFLIT_DBID: { width: 10 },
            TXDATFLIT_CCID: { width: 2 },
            TXDATFLIT_DataID: { width: 2 },
            TXDATFLIT_TraceTag: { width: 1 },
            TXDATFLIT_RSVDC: { width: params.DIW || 8 },
            TXDATFLIT_BE: { width: params.DIW || 8 },
            TXDATFLIT_Data: { width: params.DW || 32 },
            TXDATFLIT_DataCheck: { width: params.DIW || 8 },
            TXDATFLIT_Poison: { width: params.DIW || 8 },
            TXDATLCRDV: { width: 1 },
            TXDATFLITPENDCHK: { width: 1 },
            TXDATFLITVCHK: { width: 1 },
            TXDATFLITCHK: { width: params.DIW || 8 },
            TXDATLCRDVCHK: { width: 1 },
            RXREQFLITPEND: { width: 1 },
            RXREQFLITV: { width: 1 },
            RXREQFLIT_QoS: { width: 4 },
            RXREQFLIT_TgtID: { width: params.DIW || 8 },
            RXREQFLIT_SrcID: { width: params.DIW || 8 },
            RXREQFLIT_TxnID: { width: 10 },
            RXREQFLIT_ReturnNID: { width: params.DIW || 8 },
            RXREQFLIT_StashNIDValid: { width: 1 },
            RXREQFLIT_ReturnTxnID: { width: 10 },
            RXREQFLIT_Opcode: { width: 6 },
            RXREQFLIT_Size: { width: 3 },
            RXREQFLIT_Addr: { width: params.AW || 32 },
            RXREQFLIT_NS: { width: 1 },
            RXREQFLIT_LikelyShared: { width: 1 },
            RXREQFLIT_AllowRetry: { width: 1 },
            RXREQFLIT_Order: { width: 2 },
            RXREQFLIT_PCrdType: { width: 4 },
            RXREQFLIT_MemAttr: { width: 4 },
            RXREQFLIT_SnpAttr: { width: 1 },
            RXREQFLIT_LPID: { width: 5 },
            RXREQFLIT_Excl: { width: 1 },
            RXREQFLIT_ExpCompAck: { width: 1 },
            RXREQFLIT_TraceTag: { width: 1 },
            RXREQFLIT_MPAM: { width: 11 },
            RXREQFLIT_RSVDC: { width: params.DIW || 8 },
            RXREQLCRDV: { width: 1 },
            RXREQFLITPENDCHK: { width: 1 },
            RXREQFLITVCHK: { width: 1 },
            RXREQFLITCHK: { width: params.DIW || 8 },
            RXREQLCRDVCHK: { width: 1 },
            RXDATFLITPEND: { width: 1 },
            RXDATFLITV: { width: 1 },
            RXDATFLIT_QoS: { width: 4 },
            RXDATFLIT_TgtID: { width: params.DIW || 8 },
            RXDATFLIT_SrcID: { width: params.DIW || 8 },
            RXDATFLIT_TxnID: { width: 10 },
            RXDATFLIT_HomeNID: { width: params.DIW || 8 },
            RXDATFLIT_Opcode: { width: 4 },
            RXDATFLIT_RespErr: { width: 2 },
            RXDATFLIT_Resp: { width: 3 },
            RXDATFLIT_FwdState: { width: 4 },
            RXDATFLIT_CBusy: { width: 3 },
            RXDATFLIT_DBID: { width: 10 },
            RXDATFLIT_CCID: { width: 2 },
            RXDATFLIT_DataID: { width: 2 },
            RXDATFLIT_TraceTag: { width: 1 },
            RXDATFLIT_RSVDC: { width: params.DIW || 8 },
            RXDATFLIT_BE: { width: params.DIW || 8 },
            RXDATFLIT_Data: { width: params.DW || 32 },
            RXDATFLIT_DataCheck: { width: params.DIW || 8 },
            RXDATFLIT_Poison: { width: params.DIW || 8 },
            RXDATLCRDV: { width: 1 },
            RXDATFLITPENDCHK: { width: 1 },
            RXDATFLITVCHK: { width: 1 },
            RXDATFLITCHK: { width: params.DIW || 8 },
            RXDATLCRDVCHK: { width: 1 }
        };
        this.modports = {
            master: {
                CLK: 'input',
                CLKEN: 'input',
                CLKENCHK: 'input',
                RESETn: 'input',
                TXLINKACTIVEREQ: 'input',
                TXLINKACTIVEACK: 'output',
                RXLINKACTIVEREQ: 'output',
                RXLINKACTIVEACK: 'input',
                TXSACTIVE: 'input',
                RXSACTIVE: 'output',
                TXLINKACTIVEREQCHK: 'input',
                TXLINKACTIVEACKCHK: 'output',
                RXLINKACTIVEREQCHK: 'output',
                RXLINKACTIVEACKCHK: 'input',
                TXSACTIVECHK: 'input',
                RXSACTIVECHK: 'output',
                TXRSPFLITPEND: 'input',
                TXRSPFLITV: 'input',
                TXRSPFLIT_QoS: 'input',
                TXRSPFLIT_TgtID: 'input',
                TXRSPFLIT_SrcID: 'input',
                TXRSPFLIT_TxnID: 'input',
                TXRSPFLIT_Opcode: 'input',
                TXRSPFLIT_RespErr: 'input',
                TXRSPFLIT_Resp: 'input',
                TXRSPFLIT_FwdState: 'input',
                TXRSPFLIT_CBusy: 'input',
                TXRSPFLIT_DBID: 'input',
                TXRSPFLIT_PCrdType: 'input',
                TXRSPFLIT_TraceTag: 'input',
                TXRSPLCRDV: 'output',
                TXRSPFLITPENDCHK: 'input',
                TXRSPFLITVCHK: 'input',
                TXRSPFLITCHK: 'output',
                TXRSPLCRDVCHK: 'output',
                TXDATFLITPEND: 'input',
                TXDATFLITV: 'input',
                TXDATFLIT_QoS: 'input',
                TXDATFLIT_TgtID: 'input',
                TXDATFLIT_SrcID: 'input',
                TXDATFLIT_TxnID: 'input',
                TXDATFLIT_HomeNID: 'input',
                TXDATFLIT_Opcode: 'input',
                TXDATFLIT_RespErr: 'input',
                TXDATFLIT_Resp: 'input',
                TXDATFLIT_FwdState: 'input',
                TXDATFLIT_CBusy: 'input',
                TXDATFLIT_DBID: 'input',
                TXDATFLIT_CCID: 'input',
                TXDATFLIT_DataID: 'input',
                TXDATFLIT_TraceTag: 'input',
                TXDATFLIT_RSVDC: 'input',
                TXDATFLIT_BE: 'input',
                TXDATFLIT_Data: 'input',
                TXDATFLIT_DataCheck: 'input',
                TXDATFLIT_Poison: 'input',
                TXDATLCRDV: 'output',
                TXDATFLITPENDCHK: 'input',
                TXDATFLITVCHK: 'input',
                TXDATFLITCHK: 'input',
                TXDATLCRDVCHK: 'output',
                RXREQFLITPEND: 'output',
                RXREQFLITV: 'output',
                RXREQFLIT_QoS: 'output',
                RXREQFLIT_TgtID: 'output',
                RXREQFLIT_SrcID: 'output',
                RXREQFLIT_TxnID: 'output',
                RXREQFLIT_ReturnNID: 'output',
                RXREQFLIT_StashNIDValid: 'output',
                RXREQFLIT_ReturnTxnID: 'output',
                RXREQFLIT_Opcode: 'output',
                RXREQFLIT_Size: 'output',
                RXREQFLIT_Addr: 'output',
                RXREQFLIT_NS: 'output',
                RXREQFLIT_LikelyShared: 'output',
                RXREQFLIT_AllowRetry: 'output',
                RXREQFLIT_Order: 'output',
                RXREQFLIT_PCrdType: 'output',
                RXREQFLIT_MemAttr: 'output',
                RXREQFLIT_SnpAttr: 'output',
                RXREQFLIT_LPID: 'output',
                RXREQFLIT_Excl: 'output',
                RXREQFLIT_ExpCompAck: 'output',
                RXREQFLIT_TraceTag: 'output',
                RXREQFLIT_MPAM: 'output',
                RXREQFLIT_RSVDC: 'output',
                RXREQLCRDV: 'input',
                RXREQFLITPENDCHK: 'output',
                RXREQFLITVCHK: 'output',
                RXREQFLITCHK: 'output',
                RXREQLCRDVCHK: 'input',
                RXDATFLITPEND: 'output',
                RXDATFLITV: 'output',
                RXDATFLIT_QoS: 'output',
                RXDATFLIT_TgtID: 'output',
                RXDATFLIT_SrcID: 'output',
                RXDATFLIT_TxnID: 'output',
                RXDATFLIT_HomeNID: 'output',
                RXDATFLIT_Opcode: 'output',
                RXDATFLIT_RespErr: 'output',
                RXDATFLIT_Resp: 'output',
                RXDATFLIT_FwdState: 'output',
                RXDATFLIT_CBusy: 'output',
                RXDATFLIT_DBID: 'output',
                RXDATFLIT_CCID: 'output',
                RXDATFLIT_DataID: 'output',
                RXDATFLIT_TraceTag: 'output',
                RXDATFLIT_RSVDC: 'output',
                RXDATFLIT_BE: 'output',
                RXDATFLIT_Data: 'output',
                RXDATFLIT_DataCheck: 'output',
                RXDATFLIT_Poison: 'output',
                RXDATLCRDV: 'input',
                RXDATFLITPENDCHK: 'output',
                RXDATFLITVCHK: 'output',
                RXDATFLITCHK: 'output',
                RXDATLCRDVCHK: 'input'
            },
            slave: {
                CLK: 'input',
                CLKEN: 'input',
                CLKENCHK: 'input',
                RESETn: 'input',
                TXLINKACTIVEREQ: 'output',
                TXLINKACTIVEACK: 'input',
                RXLINKACTIVEREQ: 'input',
                RXLINKACTIVEACK: 'output',
                TXSACTIVE: 'output',
                RXSACTIVE: 'input',
                TXLINKACTIVEREQCHK: 'output',
                TXLINKACTIVEACKCHK: 'input',
                RXLINKACTIVEREQCHK: 'input',
                RXLINKACTIVEACKCHK: 'output',
                TXSACTIVECHK: 'output',
                RXSACTIVECHK: 'input',
                TXRSPFLITPEND: 'output',
                TXRSPFLITV: 'output',
                TXRSPFLIT_QoS: 'output',
                TXRSPFLIT_TgtID: 'output',
                TXRSPFLIT_SrcID: 'output',
                TXRSPFLIT_TxnID: 'output',
                TXRSPFLIT_Opcode: 'output',
                TXRSPFLIT_RespErr: 'output',
                TXRSPFLIT_Resp: 'output',
                TXRSPFLIT_FwdState: 'output',
                TXRSPFLIT_CBusy: 'output',
                TXRSPFLIT_DBID: 'output',
                TXRSPFLIT_PCrdType: 'output',
                TXRSPFLIT_TraceTag: 'output',
                TXRSPLCRDV: 'input',
                TXRSPFLITPENDCHK: 'output',
                TXRSPFLITVCHK: 'output',
                TXRSPFLITCHK: 'input',
                TXRSPLCRDVCHK: 'input',
                TXDATFLITPEND: 'output',
                TXDATFLITV: 'output',
                TXDATFLIT_QoS: 'output',
                TXDATFLIT_TgtID: 'output',
                TXDATFLIT_SrcID: 'output',
                TXDATFLIT_TxnID: 'output',
                TXDATFLIT_HomeNID: 'output',
                TXDATFLIT_Opcode: 'output',
                TXDATFLIT_RespErr: 'output',
                TXDATFLIT_Resp: 'output',
                TXDATFLIT_FwdState: 'output',
                TXDATFLIT_CBusy: 'output',
                TXDATFLIT_DBID: 'output',
                TXDATFLIT_CCID: 'output',
                TXDATFLIT_DataID: 'output',
                TXDATFLIT_TraceTag: 'output',
                TXDATFLIT_RSVDC: 'output',
                TXDATFLIT_BE: 'output',
                TXDATFLIT_Data: 'output',
                TXDATFLIT_DataCheck: 'output',
                TXDATFLIT_Poison: 'output',
                TXDATLCRDV: 'input',
                TXDATFLITPENDCHK: 'output',
                TXDATFLITVCHK: 'output',
                TXDATFLITCHK: 'output',
                TXDATLCRDVCHK: 'input',
                RXREQFLITPEND: 'input',
                RXREQFLITV: 'input',
                RXREQFLIT_QoS: 'input',
                RXREQFLIT_TgtID: 'input',
                RXREQFLIT_SrcID: 'input',
                RXREQFLIT_TxnID: 'input',
                RXREQFLIT_ReturnNID: 'input',
                RXREQFLIT_StashNIDValid: 'input',
                RXREQFLIT_ReturnTxnID: 'input',
                RXREQFLIT_Opcode: 'input',
                RXREQFLIT_Size: 'input',
                RXREQFLIT_Addr: 'input',
                RXREQFLIT_NS: 'input',
                RXREQFLIT_LikelyShared: 'input',
                RXREQFLIT_AllowRetry: 'input',
                RXREQFLIT_Order: 'input',
                RXREQFLIT_PCrdType: 'input',
                RXREQFLIT_MemAttr: 'input',
                RXREQFLIT_SnpAttr: 'input',
                RXREQFLIT_LPID: 'input',
                RXREQFLIT_Excl: 'input',
                RXREQFLIT_ExpCompAck: 'input',
                RXREQFLIT_TraceTag: 'input',
                RXREQFLIT_MPAM: 'input',
                RXREQFLIT_RSVDC: 'input',
                RXREQLCRDV: 'output',
                RXREQFLITPENDCHK: 'input',
                RXREQFLITVCHK: 'input',
                RXREQFLITCHK: 'input',
                RXREQLCRDVCHK: 'output',
                RXDATFLITPEND: 'input',
                RXDATFLITV: 'input',
                RXDATFLIT_QoS: 'input',
                RXDATFLIT_TgtID: 'input',
                RXDATFLIT_SrcID: 'input',
                RXDATFLIT_TxnID: 'input',
                RXDATFLIT_HomeNID: 'input',
                RXDATFLIT_Opcode: 'input',
                RXDATFLIT_RespErr: 'input',
                RXDATFLIT_Resp: 'input',
                RXDATFLIT_FwdState: 'input',
                RXDATFLIT_CBusy: 'input',
                RXDATFLIT_DBID: 'input',
                RXDATFLIT_CCID: 'input',
                RXDATFLIT_DataID: 'input',
                RXDATFLIT_TraceTag: 'input',
                RXDATFLIT_RSVDC: 'input',
                RXDATFLIT_BE: 'input',
                RXDATFLIT_Data: 'input',
                RXDATFLIT_DataCheck: 'input',
                RXDATFLIT_Poison: 'input',
                RXDATLCRDV: 'output',
                RXDATFLITPENDCHK: 'input',
                RXDATFLITVCHK: 'input',
                RXDATFLITCHK: 'input',
                RXDATLCRDVCHK: 'output'
            }
        };
    }
}
/**
 * VLNV Metadata
 */
CHI_D_SNF_rtl.VLNV = {
    vendor: 'amba.com',
    library: 'AMBA5',
    name: 'CHI-D-SNF_rtl',
    version: 'r0p0_0'
};
