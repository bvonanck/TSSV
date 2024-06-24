import { Interface } from 'tssv/lib/core/TSSV';
/**
 * TSSV Interface bundle for the AXI5_rtl protocol
 */
export class AXI5_rtl extends Interface {
    /**
     * Create a new AXI5_rtl Interface bundle with either master or slave port interface
     * or just a bundle of interconnect wires
     * @param params param value set
     * @param role sets the role of this instance to choose master or slave port interface
     * or just a bundle of interconnect wires
     */
    constructor(params = {}, role = undefined) {
        super('AXI5_rtl', {
            AIW: params.AIW || 8,
            AW: params.AW || 32,
            DIW: params.DIW || 8,
            DW: params.DW || 32
        }, role);
        this.signals = {
            ACLK: { width: 1 },
            ACLKEN: { width: 1 },
            ACLKENCHK: { width: 1 },
            ARESETn: { width: 1 },
            AWVALID: { width: 1 },
            AWREADY: { width: 1 },
            AWID: { width: params.DIW || 8 },
            AWADDR: { width: params.AW || 32 },
            AWREGION: { width: 4 },
            AWLEN: { width: 8 },
            AWSIZE: { width: 3 },
            AWBURST: { width: 2 },
            AWLOCK: { width: 1 },
            AWCACHE: { width: 4 },
            AWPROT: { width: 3 },
            AWNSE: { width: 1 },
            AWQOS: { width: 4 },
            AWUSER: { width: params.DIW || 8 },
            AWDOMAIN: { width: 2 },
            AWSNOOP: { width: params.DIW || 8 },
            AWSTASHNID: { width: 11 },
            AWSTASHNIDEN: { width: 1 },
            AWSTASHLPID: { width: 5 },
            AWSTASHLPIDEN: { width: 1 },
            AWTRACE: { width: 1 },
            AWLOOP: { width: params.DIW || 8 },
            AWMMUVALID: { width: 1 },
            AWMMUSECSID: { width: params.DIW || 8 },
            AWMMUSID: { width: params.DIW || 8 },
            AWMMUSSIDV: { width: 1 },
            AWMMUSSID: { width: params.DIW || 8 },
            AWMMUATST: { width: 1 },
            AWMMUFLOW: { width: 2 },
            AWPBHA: { width: 4 },
            AWNSAID: { width: 4 },
            AWSUBSYSID: { width: params.DIW || 8 },
            AWATOP: { width: 6 },
            AWMPAM: { width: params.DIW || 8 },
            AWIDUNQ: { width: 1 },
            AWCMO: { width: params.DIW || 8 },
            AWTAGOP: { width: 2 },
            AWMECID: { width: params.DIW || 8 },
            AWVALIDCHK: { width: 1 },
            AWREADYCHK: { width: 1 },
            AWIDCHK: { width: params.DIW || 8 },
            AWADDRCHK: { width: params.DIW || 8 },
            AWLENCHK: { width: 1 },
            AWCTLCHK0: { width: 1 },
            AWCTLCHK1: { width: 1 },
            AWCTLCHK2: { width: 1 },
            AWCTLCHK3: { width: 1 },
            AWUSERCHK: { width: params.DIW || 8 },
            AWSTASHNIDCHK: { width: 1 },
            AWSTASHLPIDCHK: { width: 1 },
            AWTRACECHK: { width: 1 },
            AWLOOPCHK: { width: 1 },
            AWMMUCHK: { width: 1 },
            AWMMUSIDCHK: { width: params.DIW || 8 },
            AWMMUSSIDCHK: { width: params.DIW || 8 },
            AWPBHACHK: { width: 1 },
            AWNSAIDCHK: { width: 1 },
            AWMPAMCHK: { width: 1 },
            AWSUBSYSIDCHK: { width: 1 },
            AWMECIDCHK: { width: params.DIW || 8 },
            WVALID: { width: 1 },
            WREADY: { width: 1 },
            WDATA: { width: params.DW || 32 },
            WSTRB: { width: params.DIW || 8 },
            WTAG: { width: params.DIW || 8 },
            WTAGUPDATE: { width: params.DIW || 8 },
            WLAST: { width: 1 },
            WUSER: { width: params.DIW || 8 },
            WPOISON: { width: params.DIW || 8 },
            WTRACE: { width: 1 },
            WVALIDCHK: { width: 1 },
            WREADYCHK: { width: 1 },
            WDATACHK: { width: params.DIW || 8 },
            WSTRBCHK: { width: params.DIW || 8 },
            WTAGCHK: { width: params.DIW || 8 },
            WLASTCHK: { width: 1 },
            WUSERCHK: { width: params.DIW || 8 },
            WPOISONCHK: { width: params.DIW || 8 },
            WTRACECHK: { width: 1 },
            BVALID: { width: 1 },
            BREADY: { width: 1 },
            BID: { width: params.DIW || 8 },
            BIDUNQ: { width: 1 },
            BRESP: { width: params.DIW || 8 },
            BCOMP: { width: 1 },
            BPERSIST: { width: 1 },
            BTAGMATCH: { width: 2 },
            BUSER: { width: params.DIW || 8 },
            BTRACE: { width: 1 },
            BLOOP: { width: params.DIW || 8 },
            BBUSY: { width: 2 },
            BVALIDCHK: { width: 1 },
            BREADYCHK: { width: 1 },
            BIDCHK: { width: params.DIW || 8 },
            BRESPCHK: { width: 1 },
            BUSERCHK: { width: params.DIW || 8 },
            BTRACECHK: { width: 1 },
            BLOOPCHK: { width: 1 },
            ARVALID: { width: 1 },
            ARREADY: { width: 1 },
            ARID: { width: params.DIW || 8 },
            ARADDR: { width: params.AW || 32 },
            ARREGION: { width: 4 },
            ARLEN: { width: 8 },
            ARSIZE: { width: 3 },
            ARBURST: { width: 2 },
            ARLOCK: { width: 1 },
            ARCACHE: { width: 4 },
            ARPROT: { width: 3 },
            ARNSE: { width: 1 },
            ARQOS: { width: 4 },
            ARUSER: { width: params.DIW || 8 },
            ARDOMAIN: { width: 2 },
            ARSNOOP: { width: params.DIW || 8 },
            ARTRACE: { width: 1 },
            ARLOOP: { width: params.DIW || 8 },
            ARMMUVALID: { width: 1 },
            ARMMUSECSID: { width: params.DIW || 8 },
            ARMMUSID: { width: params.DIW || 8 },
            ARMMUSSIDV: { width: 1 },
            ARMMUSSID: { width: params.DIW || 8 },
            ARMMUATST: { width: 1 },
            ARMMUFLOW: { width: 2 },
            ARPBHA: { width: 4 },
            ARNSAID: { width: 4 },
            ARSUBSYSID: { width: params.DIW || 8 },
            ARMPAM: { width: params.DIW || 8 },
            ARCHUNKEN: { width: 1 },
            ARIDUNQ: { width: 1 },
            ARTAGOP: { width: 2 },
            ARMECID: { width: params.DIW || 8 },
            ARVALIDCHK: { width: 1 },
            ARREADYCHK: { width: 1 },
            ARIDCHK: { width: params.DIW || 8 },
            ARADDRCHK: { width: params.DIW || 8 },
            ARLENCHK: { width: 1 },
            ARCTLCHK0: { width: 1 },
            ARCTLCHK1: { width: 1 },
            ARCTLCHK2: { width: 1 },
            ARCTLCHK3: { width: 1 },
            ARUSERCHK: { width: params.DIW || 8 },
            ARTRACECHK: { width: 1 },
            ARLOOPCHK: { width: 1 },
            ARMMUCHK: { width: 1 },
            ARMMUSIDCHK: { width: params.DIW || 8 },
            ARMMUSSIDCHK: { width: params.DIW || 8 },
            ARNSAIDCHK: { width: 1 },
            ARMPAMCHK: { width: 1 },
            ARPBHACHK: { width: 1 },
            ARSUBSYSIDCHK: { width: 1 },
            ARMECIDCHK: { width: params.DIW || 8 },
            RVALID: { width: 1 },
            RREADY: { width: 1 },
            RID: { width: params.DIW || 8 },
            RIDUNQ: { width: 1 },
            RDATA: { width: params.DW || 32 },
            RTAG: { width: params.DIW || 8 },
            RRESP: { width: params.DIW || 8 },
            RLAST: { width: 1 },
            RUSER: { width: params.DIW || 8 },
            RPOISON: { width: params.DIW || 8 },
            RTRACE: { width: 1 },
            RLOOP: { width: params.DIW || 8 },
            RCHUNKV: { width: 1 },
            RCHUNKNUM: { width: params.DIW || 8 },
            RCHUNKSTRB: { width: params.DIW || 8 },
            RBUSY: { width: 2 },
            RVALIDCHK: { width: 1 },
            RREADYCHK: { width: 1 },
            RIDCHK: { width: params.DIW || 8 },
            RDATACHK: { width: params.DIW || 8 },
            RTAGCHK: { width: params.DIW || 8 },
            RRESPCHK: { width: 1 },
            RLASTCHK: { width: 1 },
            RCHUNKCHK: { width: 1 },
            RUSERCHK: { width: params.DIW || 8 },
            RPOISONCHK: { width: params.DIW || 8 },
            RTRACECHK: { width: 1 },
            RLOOPCHK: { width: 1 },
            ACVALID: { width: 1 },
            ACREADY: { width: 1 },
            ACADDR: { width: params.AW || 32 },
            ACVMIDEXT: { width: 4 },
            ACTRACE: { width: 1 },
            ACVALIDCHK: { width: 1 },
            ACREADYCHK: { width: 1 },
            ACADDRCHK: { width: params.DIW || 8 },
            ACVMIDEXTCHK: { width: 1 },
            ACTRACECHK: { width: 1 },
            CRVALID: { width: 1 },
            CRREADY: { width: 1 },
            CRTRACE: { width: 1 },
            CRVALIDCHK: { width: 1 },
            CRREADYCHK: { width: 1 },
            CRTRACECHK: { width: 1 },
            VAWQOSACCEPT: { width: 4 },
            VARQOSACCEPT: { width: 4 },
            VAWQOSACCEPTCHK: { width: 1 },
            VARQOSACCEPTCHK: { width: 1 },
            AWAKEUP: { width: 1 },
            ACWAKEUP: { width: 1 },
            AWAKEUPCHK: { width: 1 },
            ACWAKEUPCHK: { width: 1 },
            SYSCOREQ: { width: 1 },
            SYSCOACK: { width: 1 },
            SYSCOREQCHK: { width: 1 },
            SYSCOACKCHK: { width: 1 },
            BROADCASTATOMIC: { width: 1 },
            BROADCASTSHAREABLE: { width: 1 },
            BROADCASTCACHEMAINT: { width: 1 },
            BROADCASTCMOPOPA: { width: 1 },
            BROADCASTPERSIST: { width: 1 }
        };
        this.modports = {
            master: {
                ACLK: 'input',
                ACLKEN: 'input',
                ACLKENCHK: 'input',
                ARESETn: 'input',
                AWVALID: 'output',
                AWREADY: 'input',
                AWID: 'output',
                AWADDR: 'output',
                AWREGION: 'output',
                AWLEN: 'output',
                AWSIZE: 'output',
                AWBURST: 'output',
                AWLOCK: 'output',
                AWCACHE: 'output',
                AWPROT: 'output',
                AWNSE: 'output',
                AWQOS: 'output',
                AWUSER: 'output',
                AWDOMAIN: 'output',
                AWSNOOP: 'output',
                AWSTASHNID: 'output',
                AWSTASHNIDEN: 'output',
                AWSTASHLPID: 'output',
                AWSTASHLPIDEN: 'output',
                AWTRACE: 'output',
                AWLOOP: 'output',
                AWMMUVALID: 'output',
                AWMMUSECSID: 'output',
                AWMMUSID: 'output',
                AWMMUSSIDV: 'output',
                AWMMUSSID: 'output',
                AWMMUATST: 'output',
                AWMMUFLOW: 'output',
                AWPBHA: 'output',
                AWNSAID: 'output',
                AWSUBSYSID: 'output',
                AWATOP: 'output',
                AWMPAM: 'output',
                AWIDUNQ: 'output',
                AWCMO: 'output',
                AWTAGOP: 'output',
                AWMECID: 'output',
                AWVALIDCHK: 'output',
                AWREADYCHK: 'input',
                AWIDCHK: 'output',
                AWADDRCHK: 'output',
                AWLENCHK: 'output',
                AWCTLCHK0: 'output',
                AWCTLCHK1: 'output',
                AWCTLCHK2: 'output',
                AWCTLCHK3: 'output',
                AWUSERCHK: 'output',
                AWSTASHNIDCHK: 'output',
                AWSTASHLPIDCHK: 'output',
                AWTRACECHK: 'output',
                AWLOOPCHK: 'output',
                AWMMUCHK: 'output',
                AWMMUSIDCHK: 'output',
                AWMMUSSIDCHK: 'output',
                AWPBHACHK: 'output',
                AWNSAIDCHK: 'output',
                AWMPAMCHK: 'output',
                AWSUBSYSIDCHK: 'output',
                AWMECIDCHK: 'output',
                WVALID: 'output',
                WREADY: 'input',
                WDATA: 'output',
                WSTRB: 'output',
                WTAG: 'output',
                WTAGUPDATE: 'output',
                WLAST: 'output',
                WUSER: 'output',
                WPOISON: 'output',
                WTRACE: 'output',
                WVALIDCHK: 'output',
                WREADYCHK: 'input',
                WDATACHK: 'output',
                WSTRBCHK: 'output',
                WTAGCHK: 'output',
                WLASTCHK: 'output',
                WUSERCHK: 'output',
                WPOISONCHK: 'output',
                WTRACECHK: 'output',
                BVALID: 'input',
                BREADY: 'output',
                BID: 'input',
                BIDUNQ: 'input',
                BRESP: 'input',
                BCOMP: 'input',
                BPERSIST: 'input',
                BTAGMATCH: 'input',
                BUSER: 'input',
                BTRACE: 'input',
                BLOOP: 'input',
                BBUSY: 'input',
                BVALIDCHK: 'input',
                BREADYCHK: 'output',
                BIDCHK: 'input',
                BRESPCHK: 'input',
                BUSERCHK: 'input',
                BTRACECHK: 'input',
                BLOOPCHK: 'input',
                ARVALID: 'output',
                ARREADY: 'input',
                ARID: 'output',
                ARADDR: 'output',
                ARREGION: 'output',
                ARLEN: 'output',
                ARSIZE: 'output',
                ARBURST: 'output',
                ARLOCK: 'output',
                ARCACHE: 'output',
                ARPROT: 'output',
                ARNSE: 'output',
                ARQOS: 'output',
                ARUSER: 'output',
                ARDOMAIN: 'output',
                ARSNOOP: 'output',
                ARTRACE: 'output',
                ARLOOP: 'output',
                ARMMUVALID: 'output',
                ARMMUSECSID: 'output',
                ARMMUSID: 'output',
                ARMMUSSIDV: 'output',
                ARMMUSSID: 'output',
                ARMMUATST: 'output',
                ARMMUFLOW: 'output',
                ARPBHA: 'output',
                ARNSAID: 'output',
                ARSUBSYSID: 'output',
                ARMPAM: 'output',
                ARCHUNKEN: 'output',
                ARIDUNQ: 'output',
                ARTAGOP: 'output',
                ARMECID: 'output',
                ARVALIDCHK: 'output',
                ARREADYCHK: 'input',
                ARIDCHK: 'output',
                ARADDRCHK: 'output',
                ARLENCHK: 'output',
                ARCTLCHK0: 'output',
                ARCTLCHK1: 'output',
                ARCTLCHK2: 'output',
                ARCTLCHK3: 'output',
                ARUSERCHK: 'output',
                ARTRACECHK: 'output',
                ARLOOPCHK: 'output',
                ARMMUCHK: 'output',
                ARMMUSIDCHK: 'output',
                ARMMUSSIDCHK: 'output',
                ARNSAIDCHK: 'output',
                ARMPAMCHK: 'output',
                ARPBHACHK: 'output',
                ARSUBSYSIDCHK: 'output',
                ARMECIDCHK: 'output',
                RVALID: 'input',
                RREADY: 'output',
                RID: 'input',
                RIDUNQ: 'input',
                RDATA: 'input',
                RTAG: 'input',
                RRESP: 'input',
                RLAST: 'input',
                RUSER: 'input',
                RPOISON: 'input',
                RTRACE: 'input',
                RLOOP: 'input',
                RCHUNKV: 'input',
                RCHUNKNUM: 'input',
                RCHUNKSTRB: 'input',
                RBUSY: 'input',
                RVALIDCHK: 'input',
                RREADYCHK: 'output',
                RIDCHK: 'input',
                RDATACHK: 'input',
                RTAGCHK: 'input',
                RRESPCHK: 'input',
                RLASTCHK: 'input',
                RCHUNKCHK: 'input',
                RUSERCHK: 'input',
                RPOISONCHK: 'input',
                RTRACECHK: 'input',
                RLOOPCHK: 'input',
                ACVALID: 'input',
                ACREADY: 'output',
                ACADDR: 'input',
                ACVMIDEXT: 'input',
                ACTRACE: 'input',
                ACVALIDCHK: 'input',
                ACREADYCHK: 'output',
                ACADDRCHK: 'input',
                ACVMIDEXTCHK: 'input',
                ACTRACECHK: 'input',
                CRVALID: 'output',
                CRREADY: 'input',
                CRTRACE: 'output',
                CRVALIDCHK: 'output',
                CRREADYCHK: 'input',
                CRTRACECHK: 'output',
                VAWQOSACCEPT: 'input',
                VARQOSACCEPT: 'input',
                VAWQOSACCEPTCHK: 'input',
                VARQOSACCEPTCHK: 'input',
                AWAKEUP: 'output',
                ACWAKEUP: 'input',
                AWAKEUPCHK: 'output',
                ACWAKEUPCHK: 'input',
                SYSCOREQ: 'output',
                SYSCOACK: 'input',
                SYSCOREQCHK: 'output',
                SYSCOACKCHK: 'input',
                BROADCASTATOMIC: 'input',
                BROADCASTSHAREABLE: 'input',
                BROADCASTCACHEMAINT: 'input',
                BROADCASTCMOPOPA: 'input',
                BROADCASTPERSIST: 'input'
            },
            slave: {
                ACLK: 'input',
                ACLKEN: 'input',
                ACLKENCHK: 'input',
                ARESETn: 'input',
                AWVALID: 'input',
                AWREADY: 'output',
                AWID: 'input',
                AWADDR: 'input',
                AWREGION: 'input',
                AWLEN: 'input',
                AWSIZE: 'input',
                AWBURST: 'input',
                AWLOCK: 'input',
                AWCACHE: 'input',
                AWPROT: 'input',
                AWNSE: 'input',
                AWQOS: 'input',
                AWUSER: 'input',
                AWDOMAIN: 'input',
                AWSNOOP: 'input',
                AWSTASHNID: 'input',
                AWSTASHNIDEN: 'input',
                AWSTASHLPID: 'input',
                AWSTASHLPIDEN: 'input',
                AWTRACE: 'input',
                AWLOOP: 'input',
                AWMMUVALID: 'input',
                AWMMUSECSID: 'input',
                AWMMUSID: 'input',
                AWMMUSSIDV: 'input',
                AWMMUSSID: 'input',
                AWMMUATST: 'input',
                AWMMUFLOW: 'input',
                AWPBHA: 'input',
                AWNSAID: 'input',
                AWSUBSYSID: 'input',
                AWATOP: 'input',
                AWMPAM: 'input',
                AWIDUNQ: 'input',
                AWCMO: 'input',
                AWTAGOP: 'input',
                AWMECID: 'input',
                AWVALIDCHK: 'input',
                AWREADYCHK: 'output',
                AWIDCHK: 'input',
                AWADDRCHK: 'input',
                AWLENCHK: 'input',
                AWCTLCHK0: 'input',
                AWCTLCHK1: 'input',
                AWCTLCHK2: 'input',
                AWCTLCHK3: 'input',
                AWUSERCHK: 'input',
                AWSTASHNIDCHK: 'input',
                AWSTASHLPIDCHK: 'input',
                AWTRACECHK: 'input',
                AWLOOPCHK: 'input',
                AWMMUCHK: 'input',
                AWMMUSIDCHK: 'input',
                AWMMUSSIDCHK: 'input',
                AWPBHACHK: 'input',
                AWNSAIDCHK: 'input',
                AWMPAMCHK: 'input',
                AWSUBSYSIDCHK: 'input',
                AWMECIDCHK: 'input',
                WVALID: 'input',
                WREADY: 'output',
                WDATA: 'input',
                WSTRB: 'input',
                WTAG: 'input',
                WTAGUPDATE: 'input',
                WLAST: 'input',
                WUSER: 'input',
                WPOISON: 'input',
                WTRACE: 'input',
                WVALIDCHK: 'input',
                WREADYCHK: 'output',
                WDATACHK: 'input',
                WSTRBCHK: 'input',
                WTAGCHK: 'input',
                WLASTCHK: 'input',
                WUSERCHK: 'input',
                WPOISONCHK: 'input',
                WTRACECHK: 'input',
                BVALID: 'output',
                BREADY: 'input',
                BID: 'output',
                BIDUNQ: 'output',
                BRESP: 'output',
                BCOMP: 'output',
                BPERSIST: 'output',
                BTAGMATCH: 'output',
                BUSER: 'output',
                BTRACE: 'output',
                BLOOP: 'output',
                BBUSY: 'output',
                BVALIDCHK: 'output',
                BREADYCHK: 'input',
                BIDCHK: 'output',
                BRESPCHK: 'output',
                BUSERCHK: 'output',
                BTRACECHK: 'output',
                BLOOPCHK: 'output',
                ARVALID: 'input',
                ARREADY: 'output',
                ARID: 'input',
                ARADDR: 'input',
                ARREGION: 'input',
                ARLEN: 'input',
                ARSIZE: 'input',
                ARBURST: 'input',
                ARLOCK: 'input',
                ARCACHE: 'input',
                ARPROT: 'input',
                ARNSE: 'input',
                ARQOS: 'input',
                ARUSER: 'input',
                ARDOMAIN: 'input',
                ARSNOOP: 'input',
                ARTRACE: 'input',
                ARLOOP: 'input',
                ARMMUVALID: 'input',
                ARMMUSECSID: 'input',
                ARMMUSID: 'input',
                ARMMUSSIDV: 'input',
                ARMMUSSID: 'input',
                ARMMUATST: 'input',
                ARMMUFLOW: 'input',
                ARPBHA: 'input',
                ARNSAID: 'input',
                ARSUBSYSID: 'input',
                ARMPAM: 'input',
                ARCHUNKEN: 'input',
                ARIDUNQ: 'input',
                ARTAGOP: 'input',
                ARMECID: 'input',
                ARVALIDCHK: 'input',
                ARREADYCHK: 'output',
                ARIDCHK: 'input',
                ARADDRCHK: 'input',
                ARLENCHK: 'input',
                ARCTLCHK0: 'input',
                ARCTLCHK1: 'input',
                ARCTLCHK2: 'input',
                ARCTLCHK3: 'input',
                ARUSERCHK: 'input',
                ARTRACECHK: 'input',
                ARLOOPCHK: 'input',
                ARMMUCHK: 'input',
                ARMMUSIDCHK: 'input',
                ARMMUSSIDCHK: 'input',
                ARNSAIDCHK: 'input',
                ARMPAMCHK: 'input',
                ARPBHACHK: 'input',
                ARSUBSYSIDCHK: 'input',
                ARMECIDCHK: 'input',
                RVALID: 'output',
                RREADY: 'input',
                RID: 'output',
                RIDUNQ: 'output',
                RDATA: 'output',
                RTAG: 'output',
                RRESP: 'output',
                RLAST: 'output',
                RUSER: 'output',
                RPOISON: 'output',
                RTRACE: 'output',
                RLOOP: 'output',
                RCHUNKV: 'output',
                RCHUNKNUM: 'output',
                RCHUNKSTRB: 'output',
                RBUSY: 'output',
                RVALIDCHK: 'output',
                RREADYCHK: 'input',
                RIDCHK: 'output',
                RDATACHK: 'output',
                RTAGCHK: 'output',
                RRESPCHK: 'output',
                RLASTCHK: 'output',
                RCHUNKCHK: 'output',
                RUSERCHK: 'output',
                RPOISONCHK: 'output',
                RTRACECHK: 'output',
                RLOOPCHK: 'output',
                ACVALID: 'output',
                ACREADY: 'input',
                ACADDR: 'output',
                ACVMIDEXT: 'output',
                ACTRACE: 'output',
                ACVALIDCHK: 'output',
                ACREADYCHK: 'input',
                ACADDRCHK: 'output',
                ACVMIDEXTCHK: 'output',
                ACTRACECHK: 'output',
                CRVALID: 'input',
                CRREADY: 'output',
                CRTRACE: 'input',
                CRVALIDCHK: 'input',
                CRREADYCHK: 'output',
                CRTRACECHK: 'input',
                VAWQOSACCEPT: 'output',
                VARQOSACCEPT: 'output',
                VAWQOSACCEPTCHK: 'output',
                VARQOSACCEPTCHK: 'output',
                AWAKEUP: 'input',
                ACWAKEUP: 'output',
                AWAKEUPCHK: 'input',
                ACWAKEUPCHK: 'output',
                SYSCOREQ: 'input',
                SYSCOACK: 'output',
                SYSCOREQCHK: 'input',
                SYSCOACKCHK: 'output',
                BROADCASTATOMIC: 'input',
                BROADCASTSHAREABLE: 'input',
                BROADCASTCACHEMAINT: 'input',
                BROADCASTCMOPOPA: 'input',
                BROADCASTPERSIST: 'input'
            }
        };
    }
}
/**
 * VLNV Metadata
 */
AXI5_rtl.VLNV = {
    vendor: 'amba.com',
    library: 'AMBA5',
    name: 'AXI5_rtl',
    version: 'r0p2_0'
};
