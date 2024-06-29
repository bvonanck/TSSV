import { Interface } from 'tssv/lib/core/TSSV';
/**
 * TSSV Interface bundle for the ACE5_LiteACP_rtl protocol
 */
export class ACE5_LiteACP_rtl extends Interface {
    /**
     * Create a new ACE5_LiteACP_rtl Interface bundle with either master or slave port interface
     * or just a bundle of interconnect wires
     * @param params param value set
     * @param role sets the role of this instance to choose master or slave port interface
     * or just a bundle of interconnect wires
     */
    constructor(params = {}, role = undefined) {
        super('ACE5_LiteACP_rtl', {
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
            AWREGION: { width: params.AW || 32 },
            AWLEN: { width: 8 },
            AWSIZE: { width: params.DIW || 8 },
            AWBURST: { width: params.DIW || 8 },
            AWLOCK: { width: params.DIW || 8 },
            AWCACHE: { width: 4 },
            AWPROT: { width: 3 },
            AWNSE: { width: params.DIW || 8 },
            AWQOS: { width: params.DIW || 8 },
            AWUSER: { width: params.DIW || 8 },
            AWDOMAIN: { width: 2 },
            AWSNOOP: { width: params.DIW || 8 },
            AWSTASHNID: { width: 11 },
            AWSTASHNIDEN: { width: 1 },
            AWSTASHLPID: { width: 5 },
            AWSTASHLPIDEN: { width: 1 },
            AWTRACE: { width: 1 },
            AWLOOP: { width: params.DIW || 8 },
            AWMMUVALID: { width: params.DIW || 8 },
            AWMMUSECSID: { width: params.DIW || 8 },
            AWMMUSID: { width: params.DIW || 8 },
            AWMMUSSIDV: { width: params.DIW || 8 },
            AWMMUSSID: { width: params.DIW || 8 },
            AWMMUATST: { width: params.DIW || 8 },
            AWMMUFLOW: { width: params.DIW || 8 },
            AWPBHA: { width: params.DIW || 8 },
            AWNSAID: { width: params.DIW || 8 },
            AWSUBSYSID: { width: params.DIW || 8 },
            AWATOP: { width: params.DIW || 8 },
            AWMPAM: { width: params.DIW || 8 },
            AWIDUNQ: { width: 1 },
            AWCMO: { width: params.DIW || 8 },
            AWTAGOP: { width: params.DIW || 8 },
            AWMECID: { width: params.DIW || 8 },
            AWVALIDCHK: { width: 1 },
            AWREADYCHK: { width: 1 },
            AWIDCHK: { width: params.DIW || 8 },
            AWADDRCHK: { width: params.DIW || 8 },
            AWLENCHK: { width: 1 },
            AWCTLCHK0: { width: 1 },
            AWCTLCHK1: { width: 1 },
            AWCTLCHK2: { width: 1 },
            AWCTLCHK3: { width: params.DIW || 8 },
            AWUSERCHK: { width: params.DIW || 8 },
            AWSTASHNIDCHK: { width: 1 },
            AWSTASHLPIDCHK: { width: 1 },
            AWTRACECHK: { width: 1 },
            AWLOOPCHK: { width: params.DIW || 8 },
            AWMMUCHK: { width: params.DIW || 8 },
            AWMMUSIDCHK: { width: params.DIW || 8 },
            AWMMUSSIDCHK: { width: params.DIW || 8 },
            AWPBHACHK: { width: params.DIW || 8 },
            AWNSAIDCHK: { width: params.DIW || 8 },
            AWMPAMCHK: { width: 1 },
            AWSUBSYSIDCHK: { width: params.DIW || 8 },
            AWMECIDCHK: { width: params.DIW || 8 },
            WVALID: { width: 1 },
            WREADY: { width: 1 },
            WDATA: { width: 128 },
            WSTRB: { width: 16 },
            WTAG: { width: params.DIW || 8 },
            WTAGUPDATE: { width: params.DIW || 8 },
            WLAST: { width: 1 },
            WUSER: { width: params.DIW || 8 },
            WPOISON: { width: 2 },
            WTRACE: { width: 1 },
            WVALIDCHK: { width: 1 },
            WREADYCHK: { width: 1 },
            WDATACHK: { width: 16 },
            WSTRBCHK: { width: 2 },
            WTAGCHK: { width: params.DIW || 8 },
            WLASTCHK: { width: 1 },
            WUSERCHK: { width: params.DIW || 8 },
            WPOISONCHK: { width: 1 },
            WTRACECHK: { width: 1 },
            BVALID: { width: 1 },
            BREADY: { width: 1 },
            BID: { width: params.DIW || 8 },
            BIDUNQ: { width: 1 },
            BRESP: { width: params.DIW || 8 },
            BCOMP: { width: params.DIW || 8 },
            BPERSIST: { width: params.DIW || 8 },
            BTAGMATCH: { width: params.DIW || 8 },
            BUSER: { width: params.DIW || 8 },
            BTRACE: { width: 1 },
            BLOOP: { width: params.DIW || 8 },
            BBUSY: { width: params.DIW || 8 },
            BVALIDCHK: { width: 1 },
            BREADYCHK: { width: 1 },
            BIDCHK: { width: params.DIW || 8 },
            BRESPCHK: { width: 1 },
            BUSERCHK: { width: params.DIW || 8 },
            BTRACECHK: { width: 1 },
            BLOOPCHK: { width: params.DIW || 8 },
            ARVALID: { width: 1 },
            ARREADY: { width: 1 },
            ARID: { width: params.DIW || 8 },
            ARADDR: { width: params.AW || 32 },
            ARREGION: { width: params.AW || 32 },
            ARLEN: { width: 8 },
            ARSIZE: { width: params.DIW || 8 },
            ARBURST: { width: params.DIW || 8 },
            ARLOCK: { width: params.DIW || 8 },
            ARCACHE: { width: 4 },
            ARPROT: { width: 3 },
            ARNSE: { width: params.DIW || 8 },
            ARQOS: { width: params.DIW || 8 },
            ARUSER: { width: params.DIW || 8 },
            ARDOMAIN: { width: 2 },
            ARSNOOP: { width: params.DIW || 8 },
            ARTRACE: { width: 1 },
            ARLOOP: { width: params.DIW || 8 },
            ARMMUVALID: { width: params.DIW || 8 },
            ARMMUSECSID: { width: params.DIW || 8 },
            ARMMUSID: { width: params.DIW || 8 },
            ARMMUSSIDV: { width: params.DIW || 8 },
            ARMMUSSID: { width: params.DIW || 8 },
            ARMMUATST: { width: params.DIW || 8 },
            ARMMUFLOW: { width: params.DIW || 8 },
            ARPBHA: { width: params.DIW || 8 },
            ARNSAID: { width: params.DIW || 8 },
            ARSUBSYSID: { width: params.DIW || 8 },
            ARMPAM: { width: params.DIW || 8 },
            ARCHUNKEN: { width: 1 },
            ARIDUNQ: { width: 1 },
            ARTAGOP: { width: params.DIW || 8 },
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
            ARLOOPCHK: { width: params.DIW || 8 },
            ARMMUCHK: { width: params.DIW || 8 },
            ARMMUSIDCHK: { width: params.DIW || 8 },
            ARMMUSSIDCHK: { width: params.DIW || 8 },
            ARNSAIDCHK: { width: params.DIW || 8 },
            ARMPAMCHK: { width: 1 },
            ARPBHACHK: { width: params.DIW || 8 },
            ARSUBSYSIDCHK: { width: params.DIW || 8 },
            ARMECIDCHK: { width: params.DIW || 8 },
            RVALID: { width: 1 },
            RREADY: { width: 1 },
            RID: { width: params.DIW || 8 },
            RIDUNQ: { width: 1 },
            RDATA: { width: 128 },
            RTAG: { width: params.DIW || 8 },
            RRESP: { width: params.DIW || 8 },
            RLAST: { width: 1 },
            RUSER: { width: params.DIW || 8 },
            RPOISON: { width: 2 },
            RTRACE: { width: 1 },
            RLOOP: { width: params.DIW || 8 },
            RCHUNKV: { width: 1 },
            RCHUNKNUM: { width: params.DIW || 8 },
            RCHUNKSTRB: { width: params.DIW || 8 },
            RBUSY: { width: params.DIW || 8 },
            RVALIDCHK: { width: 1 },
            RREADYCHK: { width: 1 },
            RIDCHK: { width: params.DIW || 8 },
            RDATACHK: { width: 16 },
            RTAGCHK: { width: params.DIW || 8 },
            RRESPCHK: { width: 1 },
            RLASTCHK: { width: 1 },
            RCHUNKCHK: { width: 1 },
            RUSERCHK: { width: params.DIW || 8 },
            RPOISONCHK: { width: 1 },
            RTRACECHK: { width: 1 },
            RLOOPCHK: { width: params.DIW || 8 },
            ACVALID: { width: params.DIW || 8 },
            ACREADY: { width: params.DIW || 8 },
            ACADDR: { width: params.AW || 32 },
            ACVMIDEXT: { width: params.DIW || 8 },
            ACTRACE: { width: params.DIW || 8 },
            ACVALIDCHK: { width: params.DIW || 8 },
            ACREADYCHK: { width: params.DIW || 8 },
            ACADDRCHK: { width: params.DIW || 8 },
            ACVMIDEXTCHK: { width: params.DIW || 8 },
            ACTRACECHK: { width: params.DIW || 8 },
            CRVALID: { width: params.DIW || 8 },
            CRREADY: { width: params.DIW || 8 },
            CRTRACE: { width: params.DIW || 8 },
            CRVALIDCHK: { width: params.DIW || 8 },
            CRREADYCHK: { width: params.DIW || 8 },
            CRTRACECHK: { width: params.DIW || 8 },
            VAWQOSACCEPT: { width: params.DIW || 8 },
            VARQOSACCEPT: { width: params.DIW || 8 },
            VAWQOSACCEPTCHK: { width: params.DIW || 8 },
            VARQOSACCEPTCHK: { width: params.DIW || 8 },
            AWAKEUP: { width: 1 },
            ACWAKEUP: { width: params.DIW || 8 },
            AWAKEUPCHK: { width: 1 },
            ACWAKEUPCHK: { width: params.DIW || 8 },
            SYSCOREQ: { width: params.DIW || 8 },
            SYSCOACK: { width: params.DIW || 8 },
            SYSCOREQCHK: { width: params.DIW || 8 },
            SYSCOACKCHK: { width: params.DIW || 8 },
            BROADCASTATOMIC: { width: params.DIW || 8 },
            BROADCASTSHAREABLE: { width: 1 },
            BROADCASTCACHEMAINT: { width: params.DIW || 8 },
            BROADCASTCMOPOPA: { width: params.DIW || 8 },
            BROADCASTPERSIST: { width: params.DIW || 8 }
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
ACE5_LiteACP_rtl.VLNV = {
    vendor: 'amba.com',
    library: 'AMBA5',
    name: 'ACE5-LiteACP_rtl',
    version: 'r0p3_0'
};
