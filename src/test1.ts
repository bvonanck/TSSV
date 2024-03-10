import {Module, TSSVParameters, IntRange, Sig, Expr} from './TSSV'
import {TL_UL, TL_UL_Role, TL_UL_Parameters} from './TL_UL'
import { writeFileSync } from 'fs';


export interface Adder_Parameters extends TSSVParameters {
    aWidth?:   IntRange<1,32> 
    bWidth?:  IntRange<1,32> 
}
export class Adder extends Module {
    declare params: Adder_Parameters
    constructor(params: Adder_Parameters) {            
        super({
            // define the default parameter values
            aWidth: params.aWidth || 8,
            bWidth: params.bWidth || 8
        })

        // define IO signals
        this.IOs = {
            a:  { direction: 'input', width: this.params.aWidth, isSigned: true },
            b:  { direction: 'input', width: this.params.bWidth, isSigned: true },
            sum: { direction: 'output', width: Math.max((this.params.aWidth||1),(this.params.bWidth||1))+1, isSigned: true }            
        }
        this.addAdder({a:'a', b:'b', result:'sum'})

    }
}

export interface Adder3_Parameters extends TSSVParameters {
    aWidth?:  IntRange<1,32> 
    bWidth?:  IntRange<1,32> 
    cWidth?:  IntRange<1,32>
}
export class Adder3 extends Module {
    declare params: Adder3_Parameters
    constructor(params: Adder_Parameters) {            
        super({
            // define the default parameter values
            aWidth: params.aWidth || 8,
            bWidth: params.bWidth || 8,
            cWidth: params.bWidth || 8
        })

        // add Tilelink UL responder interface
        this.addInterface('regs', new TL_UL({},'responder'))

        // define IO signals
        const sumWidth = Math.max((this.params.aWidth||1),(this.params.bWidth||1,(this.params.cWidth||1)))+2
        this.IOs = {
            a:  { direction: 'input', width: this.params.aWidth, isSigned: true },
            b:  { direction: 'input', width: this.params.bWidth, isSigned: true },
            c:  { direction: 'input', width: this.params.bWidth, isSigned: true },
            sum: { direction: 'output', width: sumWidth, isSigned: true }            
        }

        const psumWidth = Math.max((this.params.aWidth||1),(this.params.bWidth||1))+1 as IntRange<1,32>
        let psum = this.addSignal('psum',{width:psumWidth})
        this.addSubmodule('add1', new Adder({aWidth:this.params.aWidth,bWidth:this.params.bWidth}), {sum: 'psum'})

        this.addSubmodule('add2', new Adder({aWidth:this.params.cWidth,bWidth:psumWidth}), {a:"c", b:"psum", sum: 'sum'})

    }
}


let test1 = new Adder3({aWidth: 8, bWidth:8, cWidth:8})
try {
  writeFileSync('sv-examples/test1.sv', test1.writeSystemVerilog());
} catch (err) {
  console.error(err);
}
