import { type TSSVParameters, type IntRange, Interface } from 'tssv/lib/core/TSSV'

/**
 * Interface defining the parameters of the LTI_rtl TSSV Interface bundle
 */
export interface LTI_rtl_Parameters extends TSSVParameters {
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
export type LTI_rtl_Role = 'master' | 'slave' | undefined

/**
 * TSSV Interface bundle for the LTI_rtl protocol
 */
export class LTI_rtl extends Interface {
  declare params: LTI_rtl_Parameters
  /**
   * VLNV Metadata
   */
  static readonly VLNV = {
    vendor: 'amba.com',
    library: 'AMBA5',
    name: 'LTI_rtl',
    version: 'r0p1_0'
  }

  /**
   * Create a new LTI_rtl Interface bundle with either master or slave port interface
   * or just a bundle of interconnect wires
   * @param params param value set
   * @param role sets the role of this instance to choose master or slave port interface
   * or just a bundle of interconnect wires
   */
  constructor (params: LTI_rtl_Parameters = {}, role: LTI_rtl_Role = undefined) {
    super(
      'LTI_rtl',
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
      RESETn: { width: 1 },
      LAVALID: { width: 1 },
      LAVC: { width: params.DIW || 8 },
      LACREDIT: { width: params.DIW || 8 },
      LAID: { width: params.DIW || 8 },
      LAOGV: { width: 1 },
      LAOG: { width: params.DIW || 8 },
      LAFLOW: { width: 2 },
      LAMMUV: { width: 1 },
      LASECSID: { width: params.DIW || 8 },
      LASID: { width: params.DIW || 8 },
      LASSIDV: { width: 1 },
      LASSID: { width: params.DIW || 8 },
      LAPROT: { width: params.DIW || 8 },
      LANSE: { width: 1 },
      LAADDR: { width: params.DIW || 8 },
      LATRANS: { width: 4 },
      LAATTR: { width: 4 },
      LAHWATTR: { width: 4 },
      LALOOP: { width: params.DIW || 8 },
      LATLBLOC: { width: params.DIW || 8 },
      LAUSER: { width: params.DIW || 8 },
      LAMECID: { width: params.DIW || 8 },
      LAIDENT: { width: 1 },
      LRVALID: { width: 1 },
      LRVC: { width: params.DIW || 8 },
      LRCREDIT: { width: params.DIW || 8 },
      LRID: { width: params.DIW || 8 },
      LRCTAG: { width: 1 },
      LRRESP: { width: 3 },
      LRPROT: { width: params.DIW || 8 },
      LRNSE: { width: 1 },
      LRADDR: { width: params.DIW || 8 },
      LRATTR: { width: 4 },
      LRHWATTR: { width: 4 },
      LRMPAM: { width: params.DIW || 8 },
      LRMECID: { width: params.DIW || 8 },
      LRLOOP: { width: params.DIW || 8 },
      LRUSER: { width: params.DIW || 8 },
      LCVALID: { width: 1 },
      LCCREDIT: { width: 1 },
      LCCTAG: { width: 1 },
      LCUSER: { width: params.DIW || 8 },
      LMOPENREQ: { width: 1 },
      LMOPENACK: { width: 1 },
      LMACTIVE: { width: 1 },
      LMASKCLOSE: { width: 1 }
    }
    this.modports = {
      master: {
        CLK: 'input',
        CLKEN: 'input',
        RESETn: 'input',
        LAVALID: 'output',
        LAVC: 'output',
        LACREDIT: 'input',
        LAID: 'output',
        LAOGV: 'output',
        LAOG: 'output',
        LAFLOW: 'output',
        LAMMUV: 'output',
        LASECSID: 'output',
        LASID: 'output',
        LASSIDV: 'output',
        LASSID: 'output',
        LAPROT: 'output',
        LANSE: 'output',
        LAADDR: 'output',
        LATRANS: 'output',
        LAATTR: 'output',
        LAHWATTR: 'output',
        LALOOP: 'output',
        LATLBLOC: 'output',
        LAUSER: 'output',
        LAMECID: 'output',
        LAIDENT: 'output',
        LRVALID: 'input',
        LRVC: 'input',
        LRCREDIT: 'output',
        LRID: 'input',
        LRCTAG: 'input',
        LRRESP: 'input',
        LRPROT: 'input',
        LRNSE: 'input',
        LRADDR: 'input',
        LRATTR: 'input',
        LRHWATTR: 'input',
        LRMPAM: 'input',
        LRMECID: 'input',
        LRLOOP: 'input',
        LRUSER: 'input',
        LCVALID: 'output',
        LCCREDIT: 'input',
        LCCTAG: 'output',
        LCUSER: 'output',
        LMOPENREQ: 'output',
        LMOPENACK: 'input',
        LMACTIVE: 'output',
        LMASKCLOSE: 'input'
      },
      slave: {
        CLK: 'input',
        CLKEN: 'input',
        RESETn: 'input',
        LAVALID: 'input',
        LAVC: 'input',
        LACREDIT: 'output',
        LAID: 'input',
        LAOGV: 'input',
        LAOG: 'input',
        LAFLOW: 'input',
        LAMMUV: 'input',
        LASECSID: 'input',
        LASID: 'input',
        LASSIDV: 'input',
        LASSID: 'input',
        LAPROT: 'input',
        LANSE: 'input',
        LAADDR: 'input',
        LATRANS: 'input',
        LAATTR: 'input',
        LAHWATTR: 'input',
        LALOOP: 'input',
        LATLBLOC: 'input',
        LAUSER: 'input',
        LAMECID: 'input',
        LAIDENT: 'input',
        LRVALID: 'output',
        LRVC: 'output',
        LRCREDIT: 'input',
        LRID: 'output',
        LRCTAG: 'output',
        LRRESP: 'output',
        LRPROT: 'output',
        LRNSE: 'output',
        LRADDR: 'output',
        LRATTR: 'output',
        LRHWATTR: 'output',
        LRMPAM: 'output',
        LRMECID: 'output',
        LRLOOP: 'output',
        LRUSER: 'output',
        LCVALID: 'input',
        LCCREDIT: 'output',
        LCCTAG: 'input',
        LCUSER: 'input',
        LMOPENREQ: 'input',
        LMOPENACK: 'output',
        LMACTIVE: 'input',
        LMASKCLOSE: 'output'
      }
    }
  }
}
