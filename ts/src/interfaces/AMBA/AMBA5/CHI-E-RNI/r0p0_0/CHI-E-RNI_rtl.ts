import { type TSSVParameters, type IntRange, Interface } from 'tssv/lib/core/TSSV'

/**
 * Interface defining the parameters of the CHI_E_RNI_rtl TSSV Interface bundle
 */
export interface CHI_E_RNI_rtl_Parameters extends TSSVParameters {
  /**
   * Defines the bit width of the source identifier signal
   */
  AIW?: IntRange<1, 32>
  /**
   * Defines the bit width of the address signal
   */
  AW?: IntRange<8, 64>
  /**
   * Defines the bit width of the sink identifier signal
   */
  DIW?: IntRange<1, 32>
  /**
   * Defines the data bus width
   */
  DW?: 32 | 64
}

/**
 * Defines the role of the Interface instance
 * master is used in module port interfaces that are transaction initiators
 * slave is used in module port interfaces that are transaction responders
 * leave role undefined to create just a bundle of interconnect wires
 */
export type CHI_E_RNI_rtl_Role = 'master' | 'slave' | undefined

/**
 * TSSV Interface bundle for the CHI_E_RNI_rtl protocol
 */
export class CHI_E_RNI_rtl extends Interface {
  declare params: CHI_E_RNI_rtl_Parameters
  /**
   * VLNV Metadata
   */
  static readonly VLNV = {
    vendor: 'amba.com',
    library: 'AMBA5',
    name: 'CHI-E-RNI_rtl',
    version: 'r0p0_0'
  }

  /**
   * Create a new CHI_E_RNI_rtl Interface bundle with either master or slave port interface
   * or just a bundle of interconnect wires
   * @param params param value set
   * @param role sets the role of this instance to choose master or slave port interface
   * or just a bundle of interconnect wires
   */
  constructor (params: CHI_E_RNI_rtl_Parameters = {}, role: CHI_E_RNI_rtl_Role = undefined) {
    super(
      'CHI_E_RNI_rtl',
      {
        AIW: params.AIW || 8,
        AW: params.AW || 32,
        DIW: params.DIW || 8,
        DW: params.DW || 32
      },
      role
    )
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
      TXREQFLITPEND: { width: 1 },
      TXREQFLITV: { width: 1 },
      TXREQFLIT_QoS: { width: 4 },
      TXREQFLIT_TgtID: { width: params.DIW || 8 },
      TXREQFLIT_SrcID: { width: params.DIW || 8 },
      TXREQFLIT_TxnID: { width: 12 },
      TXREQFLIT_ReturnNID: { width: params.DIW || 8 },
      TXREQFLIT_StashNIDValid: { width: 1 },
      TXREQFLIT_ReturnTxnID: { width: 12 },
      TXREQFLIT_Opcode: { width: 7 },
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
      TXREQFLIT_GroupIDExt: { width: 3 },
      TXREQFLIT_Excl: { width: 1 },
      TXREQFLIT_ExpCompAck: { width: 1 },
      TXREQFLIT_TagOp: { width: 2 },
      TXREQFLIT_TraceTag: { width: 1 },
      TXREQFLIT_MPAM: { width: 11 },
      TXREQFLIT_RSVDC: { width: params.DIW || 8 },
      TXREQLCRDV: { width: 1 },
      TXREQFLITPENDCHK: { width: 1 },
      TXREQFLITVCHK: { width: 1 },
      TXREQFLITCHK: { width: params.DIW || 8 },
      TXREQLCRDVCHK: { width: 1 },
      TXRSPFLITPEND: { width: 1 },
      TXRSPFLITV: { width: 1 },
      TXRSPFLIT_QoS: { width: 4 },
      TXRSPFLIT_TgtID: { width: params.DIW || 8 },
      TXRSPFLIT_SrcID: { width: params.DIW || 8 },
      TXRSPFLIT_TxnID: { width: 12 },
      TXRSPFLIT_Opcode: { width: 5 },
      TXRSPFLIT_RespErr: { width: 2 },
      TXRSPFLIT_Resp: { width: 3 },
      TXRSPFLIT_FwdState: { width: 3 },
      TXRSPFLIT_CBusy: { width: 3 },
      TXRSPFLIT_DBID: { width: 12 },
      TXRSPFLIT_PCrdType: { width: 4 },
      TXRSPFLIT_TagOp: { width: 2 },
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
      TXDATFLIT_TxnID: { width: 12 },
      TXDATFLIT_HomeNID: { width: params.DIW || 8 },
      TXDATFLIT_Opcode: { width: 4 },
      TXDATFLIT_RespErr: { width: 2 },
      TXDATFLIT_Resp: { width: 3 },
      TXDATFLIT_FwdState: { width: 4 },
      TXDATFLIT_CBusy: { width: 3 },
      TXDATFLIT_DBID: { width: 12 },
      TXDATFLIT_CCID: { width: 2 },
      TXDATFLIT_DataID: { width: 2 },
      TXDATFLIT_TagOp: { width: 2 },
      TXDATFLIT_Tag: { width: params.DIW || 8 },
      TXDATFLIT_TU: { width: params.DIW || 8 },
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
      RXRSPFLITPEND: { width: 1 },
      RXRSPFLITV: { width: 1 },
      RXRSPFLIT_QoS: { width: 4 },
      RXRSPFLIT_TgtID: { width: params.DIW || 8 },
      RXRSPFLIT_SrcID: { width: params.DIW || 8 },
      RXRSPFLIT_TxnID: { width: 12 },
      RXRSPFLIT_Opcode: { width: 5 },
      RXRSPFLIT_RespErr: { width: 2 },
      RXRSPFLIT_Resp: { width: 3 },
      RXRSPFLIT_FwdState: { width: 3 },
      RXRSPFLIT_CBusy: { width: 3 },
      RXRSPFLIT_DBID: { width: 12 },
      RXRSPFLIT_PCrdType: { width: 4 },
      RXRSPFLIT_TagOp: { width: 2 },
      RXRSPFLIT_TraceTag: { width: 1 },
      RXRSPLCRDV: { width: 1 },
      RXRSPFLITPENDCHK: { width: 1 },
      RXRSPFLITVCHK: { width: 1 },
      RXRSPFLITCHK: { width: params.DIW || 8 },
      RXRSPLCRDVCHK: { width: 1 },
      RXDATFLITPEND: { width: 1 },
      RXDATFLITV: { width: 1 },
      RXDATFLIT_QoS: { width: 4 },
      RXDATFLIT_TgtID: { width: params.DIW || 8 },
      RXDATFLIT_SrcID: { width: params.DIW || 8 },
      RXDATFLIT_TxnID: { width: 12 },
      RXDATFLIT_HomeNID: { width: params.DIW || 8 },
      RXDATFLIT_Opcode: { width: 4 },
      RXDATFLIT_RespErr: { width: 2 },
      RXDATFLIT_Resp: { width: 3 },
      RXDATFLIT_FwdState: { width: 4 },
      RXDATFLIT_CBusy: { width: 3 },
      RXDATFLIT_DBID: { width: 12 },
      RXDATFLIT_CCID: { width: 2 },
      RXDATFLIT_DataID: { width: 2 },
      RXDATFLIT_TagOp: { width: 2 },
      RXDATFLIT_Tag: { width: params.DIW || 8 },
      RXDATFLIT_TU: { width: params.DIW || 8 },
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
    }
    this.modports = {
      master: {
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
        TXREQFLIT_GroupIDExt: 'output',
        TXREQFLIT_Excl: 'output',
        TXREQFLIT_ExpCompAck: 'output',
        TXREQFLIT_TagOp: 'output',
        TXREQFLIT_TraceTag: 'output',
        TXREQFLIT_MPAM: 'output',
        TXREQFLIT_RSVDC: 'output',
        TXREQLCRDV: 'input',
        TXREQFLITPENDCHK: 'output',
        TXREQFLITVCHK: 'output',
        TXREQFLITCHK: 'output',
        TXREQLCRDVCHK: 'input',
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
        TXRSPFLIT_TagOp: 'output',
        TXRSPFLIT_TraceTag: 'output',
        TXRSPLCRDV: 'input',
        TXRSPFLITPENDCHK: 'output',
        TXRSPFLITVCHK: 'output',
        TXRSPFLITCHK: 'output',
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
        TXDATFLIT_TagOp: 'output',
        TXDATFLIT_Tag: 'output',
        TXDATFLIT_TU: 'output',
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
        RXRSPFLIT_CBusy: 'input',
        RXRSPFLIT_DBID: 'input',
        RXRSPFLIT_PCrdType: 'input',
        RXRSPFLIT_TagOp: 'input',
        RXRSPFLIT_TraceTag: 'input',
        RXRSPLCRDV: 'output',
        RXRSPFLITPENDCHK: 'input',
        RXRSPFLITVCHK: 'input',
        RXRSPFLITCHK: 'input',
        RXRSPLCRDVCHK: 'output',
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
        RXDATFLIT_TagOp: 'input',
        RXDATFLIT_Tag: 'input',
        RXDATFLIT_TU: 'input',
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
      },
      slave: {
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
        TXREQFLIT_GroupIDExt: 'input',
        TXREQFLIT_Excl: 'input',
        TXREQFLIT_ExpCompAck: 'input',
        TXREQFLIT_TagOp: 'input',
        TXREQFLIT_TraceTag: 'input',
        TXREQFLIT_MPAM: 'input',
        TXREQFLIT_RSVDC: 'input',
        TXREQLCRDV: 'output',
        TXREQFLITPENDCHK: 'input',
        TXREQFLITVCHK: 'input',
        TXREQFLITCHK: 'input',
        TXREQLCRDVCHK: 'output',
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
        TXRSPFLIT_TagOp: 'input',
        TXRSPFLIT_TraceTag: 'input',
        TXRSPLCRDV: 'output',
        TXRSPFLITPENDCHK: 'input',
        TXRSPFLITVCHK: 'input',
        TXRSPFLITCHK: 'input',
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
        TXDATFLIT_TagOp: 'input',
        TXDATFLIT_Tag: 'input',
        TXDATFLIT_TU: 'input',
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
        RXRSPFLIT_CBusy: 'output',
        RXRSPFLIT_DBID: 'output',
        RXRSPFLIT_PCrdType: 'output',
        RXRSPFLIT_TagOp: 'output',
        RXRSPFLIT_TraceTag: 'output',
        RXRSPLCRDV: 'input',
        RXRSPFLITPENDCHK: 'output',
        RXRSPFLITVCHK: 'output',
        RXRSPFLITCHK: 'output',
        RXRSPLCRDVCHK: 'input',
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
        RXDATFLIT_TagOp: 'output',
        RXDATFLIT_Tag: 'output',
        RXDATFLIT_TU: 'output',
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
      }
    }
  }
}
