import { writeFileSync, mkdirSync } from 'fs';
// import * as fs from 'fs'
import { IpXactComponent } from 'tssv/lib/modules/IpXactComponent';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
try {
    mkdirSync('sv-examples/IpxactComponent');
}
catch (e) { }
const xml_path = join(__dirname, '../../../../ts/test/modules/IpxactComponent/AXI/axiSample.xml');
const sv_path = join(__dirname, '../../../../ts/test/modules/IpxactComponent/AXI/architectureSample.sv');
// AXI component
const component = new IpXactComponent({
    name: 'axiComponent',
    xmlDataPath: xml_path,
    svFilePath: sv_path
});
try {
    const TB = `
    // verilator lint_off DECLFILENAME
    // verilator lint_off UNUSED
    ${component.writeSystemVerilog()}
`;
    writeFileSync('sv-examples/IpxactComponent/componentExample.sv', TB);
}
catch (err) {
    console.error(err);
}
// APB component
const xml_path_apb = join(__dirname, '../../../../ts/test/modules/IpxactComponent/APB/apbSample.xml');
const sv_path_apb = join(__dirname, '../../../../ts/test/modules/IpxactComponent/APB/apbArchitecture.sv');
const apbComponent = new IpXactComponent({
    name: 'apbComponent',
    xmlDataPath: xml_path_apb,
    svFilePath: sv_path_apb
});
try {
    const TB = `
      // verilator lint_off DECLFILENAME
      // verilator lint_off UNUSED
      ${apbComponent.writeSystemVerilog()}
  `;
    writeFileSync('sv-examples/IpxactComponent/apbComponentExample.sv', TB);
}
catch (err) {
    console.error(err);
}
