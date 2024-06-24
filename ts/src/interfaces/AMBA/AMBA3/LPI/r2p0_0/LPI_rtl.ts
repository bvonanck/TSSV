import { type TSSVParameters, type IntRange, Interface } from 'tssv/lib/core/TSSV'

/**
 * Interface defining the parameters of the LPI_rtl TSSV Interface bundle
 */
export interface LPI_rtl_Parameters extends TSSVParameters {
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
export type LPI_rtl_Role = 'master' | 'slave' | undefined

/**
 * TSSV Interface bundle for the LPI_rtl protocol
 */
export class LPI_rtl extends Interface {
  declare params: LPI_rtl_Parameters
  /**
   * VLNV Metadata
   */
  static readonly VLNV = {
    vendor: 'amba.com',
    library: 'AMBA3',
    name: 'LPI_rtl',
    version: 'r2p0_0'
  }

  /**
   * Create a new LPI_rtl Interface bundle with either master or slave port interface
   * or just a bundle of interconnect wires
   * @param params param value set
   * @param role sets the role of this instance to choose master or slave port interface
   * or just a bundle of interconnect wires
   */
  constructor (params: LPI_rtl_Parameters = {}, role: LPI_rtl_Role = undefined) {
    super(
      'LPI_rtl',
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
      CSYSREQ: { width: 1 },
      CSYSACK: { width: 1 },
      CACTIVE: { width: 1 }
    }
    this.modports = {
      master: {
        CLK: 'input',
        CLKEN: 'input',
        RESETn: 'input',
        CSYSREQ: 'output',
        CSYSACK: 'input',
        CACTIVE: 'input'
      },
      slave: {
        CLK: 'input',
        CLKEN: 'input',
        RESETn: 'input',
        CSYSREQ: 'input',
        CSYSACK: 'output',
        CACTIVE: 'output'
      }
    }
  }
}
