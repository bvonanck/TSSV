import { Interface } from 'tssv/lib/core/TSSV';
/**
 * TSSV Interface bundle for the CHI_C_RNI_rtl protocol
 */
export class CHI_C_RNI_rtl extends Interface {
    /**
     * Create a new CHI_C_RNI_rtl Interface bundle with either master or slave port interface
     * or just a bundle of interconnect wires
     * @param params param value set
     * @param role sets the role of this instance to choose master or slave port interface
     * or just a bundle of interconnect wires
     */
    constructor(params = {}, role = undefined) {
        super('CHI_C_RNI_rtl', {
            AIW: params.AIW || 8,
            AW: params.AW || 32,
            DIW: params.DIW || 8,
            DW: params.DW || 32
        }, role);
        this.signals = {
            CLK: { width: 1 },
            CLKEN: { width: 1 },
            RESETn: { width: 1 },
            TXLINKACTIVEREQ: { width: 1 },
            TXLINKACTIVEACK: { width: 1 },
            RXLINKACTIVEREQ: { width: 1 },
            RXLINKACTIVEACK: { width: 1 },
            TXSACTIVE: { width: 1 },
            RXSACTIVE: { width: 1 },
            TXREQFLITPEND: { width: 1 },
            TXREQFLITV: { width: 1 },
            TXREQFLIT_QoS: { width: 4 },
            TXREQFLIT_TgtID: { width: params.DIW || 8 },
            TXREQFLIT_SrcID: { width: params.DIW || 8 },
            TXREQFLIT_TxnID: { width: 8 },
            TXREQFLIT_ReturnNID: { width: params.DIW || 8 },
            TXREQFLIT_StashNIDValid: { width: 1 },
            TXREQFLIT_ReturnTxnID: { width: 8 },
            TXREQFLIT_Opcode: { width: 6 },
            TXREQFLIT_Size: { width: 3 },
            TXREQFLIT_Addr: { width: params.AW || 32 },
            TXREQFLIT_NS: { width: 1 },
            TXREQFLIT_LikelyShared: { width: 1 },
            TXREQFLIT_AllowRetry: { width: 1 },
            TXREQFLIT_Order: { width: 2 },
            TXREQFLIT_PCrdType: { width: 4 },
            TXREQFLIT_MemAttr: { width: 4 },
            TXREQFLIT_SnpAttr: { width: 1 },
            TXREQFLIT_LPID: { width: 5 },
            TXREQFLIT_Excl: { width: 1 },
            TXREQFLIT_ExpCompAck: { width: 1 },
            TXREQFLIT_TraceTag: { width: 1 },
            TXREQFLIT_RSVDC: { width: params.DIW || 8 },
            TXREQLCRDV: { width: 1 },
            TXRSPFLITPEND: { width: 1 },
            TXRSPFLITV: { width: 1 },
            TXRSPFLIT_QoS: { width: 4 },
            TXRSPFLIT_TgtID: { width: params.DIW || 8 },
            TXRSPFLIT_SrcID: { width: params.DIW || 8 },
            TXRSPFLIT_TxnID: { width: 8 },
            TXRSPFLIT_Opcode: { width: 4 },
            TXRSPFLIT_RespErr: { width: 2 },
            TXRSPFLIT_Resp: { width: 3 },
            TXRSPFLIT_FwdState: { width: 3 },
            TXRSPFLIT_DBID: { width: 8 },
            TXRSPFLIT_PCrdType: { width: 4 },
            TXRSPFLIT_TraceTag: { width: 1 },
            TXRSPLCRDV: { width: 1 },
            TXDATFLITPEND: { width: 1 },
            TXDATFLITV: { width: 1 },
            TXDATFLIT_QoS: { width: 4 },
            TXDATFLIT_TgtID: { width: params.DIW || 8 },
            TXDATFLIT_SrcID: { width: params.DIW || 8 },
            TXDATFLIT_TxnID: { width: 8 },
            TXDATFLIT_HomeNID: { width: params.DIW || 8 },
            TXDATFLIT_Opcode: { width: 4 },
            TXDATFLIT_RespErr: { width: 2 },
            TXDATFLIT_Resp: { width: 3 },
            TXDATFLIT_FwdState: { width: 3 },
            TXDATFLIT_DBID: { width: 8 },
            TXDATFLIT_CCID: { width: 2 },
            TXDATFLIT_DataID: { width: 2 },
            TXDATFLIT_TraceTag: { width: 1 },
            TXDATFLIT_RSVDC: { width: params.DIW || 8 },
            TXDATFLIT_BE: { width: params.DIW || 8 },
            TXDATFLIT_Data: { width: params.DW || 32 },
            TXDATFLIT_DataCheck: { width: params.DIW || 8 },
            TXDATFLIT_Poison: { width: params.DIW || 8 },
            TXDATLCRDV: { width: 1 },
            RXRSPFLITPEND: { width: 1 },
            RXRSPFLITV: { width: 1 },
            RXRSPFLIT_QoS: { width: 4 },
            RXRSPFLIT_TgtID: { width: params.DIW || 8 },
            RXRSPFLIT_SrcID: { width: params.DIW || 8 },
            RXRSPFLIT_TxnID: { width: 8 },
            RXRSPFLIT_Opcode: { width: 4 },
            RXRSPFLIT_RespErr: { width: 2 },
            RXRSPFLIT_Resp: { width: 3 },
            RXRSPFLIT_FwdState: { width: 3 },
            RXRSPFLIT_DBID: { width: 8 },
            RXRSPFLIT_PCrdType: { width: 4 },
            RXRSPFLIT_TraceTag: { width: 1 },
            RXRSPLCRDV: { width: 1 },
            RXDATFLITPEND: { width: 1 },
            RXDATFLITV: { width: 1 },
            RXDATFLIT_QoS: { width: 4 },
            RXDATFLIT_TgtID: { width: params.DIW || 8 },
            RXDATFLIT_SrcID: { width: params.DIW || 8 },
            RXDATFLIT_TxnID: { width: 8 },
            RXDATFLIT_HomeNID: { width: params.DIW || 8 },
            RXDATFLIT_Opcode: { width: 4 },
            RXDATFLIT_RespErr: { width: 2 },
            RXDATFLIT_Resp: { width: 3 },
            RXDATFLIT_FwdState: { width: 3 },
            RXDATFLIT_DBID: { width: 8 },
            RXDATFLIT_CCID: { width: 2 },
            RXDATFLIT_DataID: { width: 2 },
            RXDATFLIT_TraceTag: { width: 1 },
            RXDATFLIT_RSVDC: { width: params.DIW || 8 },
            RXDATFLIT_BE: { width: params.DIW || 8 },
            RXDATFLIT_Data: { width: params.DW || 32 },
            RXDATFLIT_DataCheck: { width: params.DIW || 8 },
            RXDATFLIT_Poison: { width: params.DIW || 8 },
            RXDATLCRDV: { width: 1 }
        };
        this.modports = {
            master: {
                CLK: 'input',
                CLKEN: 'input',
                RESETn: 'input',
                TXLINKACTIVEREQ: 'output',
                TXLINKACTIVEACK: 'input',
                RXLINKACTIVEREQ: 'input',
                RXLINKACTIVEACK: 'output',
                TXSACTIVE: 'output',
                RXSACTIVE: 'input',
                TXREQFLITPEND: 'output',
                TXREQFLITV: 'output',
                TXREQFLIT_QoS: 'output',
                TXREQFLIT_TgtID: 'output',
                TXREQFLIT_SrcID: 'output',
                TXREQFLIT_TxnID: 'output',
                TXREQFLIT_ReturnNID: 'output',
                TXREQFLIT_StashNIDValid: 'output',
                TXREQFLIT_ReturnTxnID: 'output',
                TXREQFLIT_Opcode: 'output',
                TXREQFLIT_Size: 'output',
                TXREQFLIT_Addr: 'output',
                TXREQFLIT_NS: 'output',
                TXREQFLIT_LikelyShared: 'output',
                TXREQFLIT_AllowRetry: 'output',
                TXREQFLIT_Order: 'output',
                TXREQFLIT_PCrdType: 'output',
                TXREQFLIT_MemAttr: 'output',
                TXREQFLIT_SnpAttr: 'output',
                TXREQFLIT_LPID: 'output',
                TXREQFLIT_Excl: 'output',
                TXREQFLIT_ExpCompAck: 'output',
                TXREQFLIT_TraceTag: 'output',
                TXREQFLIT_RSVDC: 'output',
                TXREQLCRDV: 'input',
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
                TXRSPFLIT_DBID: 'output',
                TXRSPFLIT_PCrdType: 'output',
                TXRSPFLIT_TraceTag: 'output',
                TXRSPLCRDV: 'input',
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
                RXRSPFLITPEND: 'input',
                RXRSPFLITV: 'input',
                RXRSPFLIT_QoS: 'input',
                RXRSPFLIT_TgtID: 'input',
                RXRSPFLIT_SrcID: 'input',
                RXRSPFLIT_TxnID: 'input',
                RXRSPFLIT_Opcode: 'input',
                RXRSPFLIT_RespErr: 'input',
                RXRSPFLIT_Resp: 'input',
                RXRSPFLIT_FwdState: 'input',
                RXRSPFLIT_DBID: 'input',
                RXRSPFLIT_PCrdType: 'input',
                RXRSPFLIT_TraceTag: 'input',
                RXRSPLCRDV: 'output',
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
                RXDATFLIT_DBID: 'input',
                RXDATFLIT_CCID: 'input',
                RXDATFLIT_DataID: 'input',
                RXDATFLIT_TraceTag: 'input',
                RXDATFLIT_RSVDC: 'input',
                RXDATFLIT_BE: 'input',
                RXDATFLIT_Data: 'input',
                RXDATFLIT_DataCheck: 'input',
                RXDATFLIT_Poison: 'input',
                RXDATLCRDV: 'output'
            },
            slave: {
                CLK: 'input',
                CLKEN: 'input',
                RESETn: 'input',
                TXLINKACTIVEREQ: 'input',
                TXLINKACTIVEACK: 'output',
                RXLINKACTIVEREQ: 'output',
                RXLINKACTIVEACK: 'input',
                TXSACTIVE: 'input',
                RXSACTIVE: 'output',
                TXREQFLITPEND: 'input',
                TXREQFLITV: 'input',
                TXREQFLIT_QoS: 'input',
                TXREQFLIT_TgtID: 'input',
                TXREQFLIT_SrcID: 'input',
                TXREQFLIT_TxnID: 'input',
                TXREQFLIT_ReturnNID: 'input',
                TXREQFLIT_StashNIDValid: 'input',
                TXREQFLIT_ReturnTxnID: 'input',
                TXREQFLIT_Opcode: 'input',
                TXREQFLIT_Size: 'input',
                TXREQFLIT_Addr: 'input',
                TXREQFLIT_NS: 'input',
                TXREQFLIT_LikelyShared: 'input',
                TXREQFLIT_AllowRetry: 'input',
                TXREQFLIT_Order: 'input',
                TXREQFLIT_PCrdType: 'input',
                TXREQFLIT_MemAttr: 'input',
                TXREQFLIT_SnpAttr: 'input',
                TXREQFLIT_LPID: 'input',
                TXREQFLIT_Excl: 'input',
                TXREQFLIT_ExpCompAck: 'input',
                TXREQFLIT_TraceTag: 'input',
                TXREQFLIT_RSVDC: 'input',
                TXREQLCRDV: 'output',
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
                TXRSPFLIT_DBID: 'input',
                TXRSPFLIT_PCrdType: 'input',
                TXRSPFLIT_TraceTag: 'input',
                TXRSPLCRDV: 'output',
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
                RXRSPFLITPEND: 'output',
                RXRSPFLITV: 'output',
                RXRSPFLIT_QoS: 'output',
                RXRSPFLIT_TgtID: 'output',
                RXRSPFLIT_SrcID: 'output',
                RXRSPFLIT_TxnID: 'output',
                RXRSPFLIT_Opcode: 'output',
                RXRSPFLIT_RespErr: 'output',
                RXRSPFLIT_Resp: 'output',
                RXRSPFLIT_FwdState: 'output',
                RXRSPFLIT_DBID: 'output',
                RXRSPFLIT_PCrdType: 'output',
                RXRSPFLIT_TraceTag: 'output',
                RXRSPLCRDV: 'input',
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
                RXDATFLIT_DBID: 'output',
                RXDATFLIT_CCID: 'output',
                RXDATFLIT_DataID: 'output',
                RXDATFLIT_TraceTag: 'output',
                RXDATFLIT_RSVDC: 'output',
                RXDATFLIT_BE: 'output',
                RXDATFLIT_Data: 'output',
                RXDATFLIT_DataCheck: 'output',
                RXDATFLIT_Poison: 'output',
                RXDATLCRDV: 'input'
            }
        };
    }
}
/**
 * VLNV Metadata
 */
CHI_C_RNI_rtl.VLNV = {
    vendor: 'amba.com',
    library: 'AMBA5',
    name: 'CHI-C-RNI_rtl',
    version: 'r0p0_0'
};
