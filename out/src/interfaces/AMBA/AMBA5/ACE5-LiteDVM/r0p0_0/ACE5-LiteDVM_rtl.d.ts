import { type TSSVParameters, type IntRange, Interface } from 'tssv/lib/core/TSSV';
/**
 * Interface defining the parameters of the ACE5_LiteDVM_rtl TSSV Interface bundle
 */
export interface ACE5_LiteDVM_rtl_Parameters extends TSSVParameters {
    /**
     * Defines the bit width of the source identifier signal
     */
    AIW?: IntRange<1, 32>;
    /**
     * Defines the bit width of the address signal
     */
    AW?: IntRange<8, 64>;
    /**
     * Defines the bit width of the sink identifier signal
     */
    DIW?: IntRange<1, 32>;
    /**
     * Defines the data bus width
     */
    DW?: 32 | 64;
}
/**
 * Defines the role of the Interface instance
 * master is used in module port interfaces that are transaction initiators
 * slave is used in module port interfaces that are transaction responders
 * leave role undefined to create just a bundle of interconnect wires
 */
export type ACE5_LiteDVM_rtl_Role = 'master' | 'slave' | undefined;
/**
 * TSSV Interface bundle for the ACE5_LiteDVM_rtl protocol
 */
export declare class ACE5_LiteDVM_rtl extends Interface {
    params: ACE5_LiteDVM_rtl_Parameters;
    /**
     * VLNV Metadata
     */
    static readonly VLNV: {
        vendor: string;
        library: string;
        name: string;
        version: string;
    };
    /**
     * Create a new ACE5_LiteDVM_rtl Interface bundle with either master or slave port interface
     * or just a bundle of interconnect wires
     * @param params param value set
     * @param role sets the role of this instance to choose master or slave port interface
     * or just a bundle of interconnect wires
     */
    constructor(params?: ACE5_LiteDVM_rtl_Parameters, role?: ACE5_LiteDVM_rtl_Role);
}
