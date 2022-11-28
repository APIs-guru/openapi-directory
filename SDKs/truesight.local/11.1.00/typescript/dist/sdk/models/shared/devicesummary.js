var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var DeviceSummaryTypeEnum;
(function (DeviceSummaryTypeEnum) {
    DeviceSummaryTypeEnum["Default"] = "DEFAULT";
    DeviceSummaryTypeEnum["EsxHost"] = "ESX_HOST";
    DeviceSummaryTypeEnum["VirtualMachine"] = "VIRTUAL_MACHINE";
    DeviceSummaryTypeEnum["VirtualCenter"] = "VIRTUAL_CENTER";
    DeviceSummaryTypeEnum["XenHost"] = "XEN_HOST";
    DeviceSummaryTypeEnum["XenMasterServer"] = "XEN_MASTER_SERVER";
    DeviceSummaryTypeEnum["XenVirtualMachine"] = "XEN_VIRTUAL_MACHINE";
    DeviceSummaryTypeEnum["XenappController"] = "XENAPP_CONTROLLER";
    DeviceSummaryTypeEnum["XenappMachine"] = "XENAPP_MACHINE";
    DeviceSummaryTypeEnum["VblockEsx"] = "VBLOCK_ESX";
    DeviceSummaryTypeEnum["VblockVirtualMachine"] = "VBLOCK_VIRTUAL_MACHINE";
    DeviceSummaryTypeEnum["VblockSwitch"] = "VBLOCK_SWITCH";
    DeviceSummaryTypeEnum["VblockStorage"] = "VBLOCK_STORAGE";
    DeviceSummaryTypeEnum["VblockChassis"] = "VBLOCK_CHASSIS";
    DeviceSummaryTypeEnum["VblockBlade"] = "VBLOCK_BLADE";
    DeviceSummaryTypeEnum["VblockEnv"] = "VBLOCK_ENV";
    DeviceSummaryTypeEnum["AixBox"] = "AIX_BOX";
    DeviceSummaryTypeEnum["AixHardPartition"] = "AIX_HARD_PARTITION";
    DeviceSummaryTypeEnum["AixPool"] = "AIX_POOL";
    DeviceSummaryTypeEnum["AixLpar"] = "AIX_LPAR";
    DeviceSummaryTypeEnum["AixWpar"] = "AIX_WPAR";
    DeviceSummaryTypeEnum["SolSystem"] = "SOL_SYSTEM";
    DeviceSummaryTypeEnum["SolFrame"] = "SOL_FRAME";
    DeviceSummaryTypeEnum["SolZone"] = "SOL_ZONE";
    DeviceSummaryTypeEnum["SolLdom"] = "SOL_LDOM";
    DeviceSummaryTypeEnum["RedhatKvmHost"] = "REDHAT_KVM_HOST";
    DeviceSummaryTypeEnum["RedhatKvmGuestInstance"] = "REDHAT_KVM_GUEST_INSTANCE";
    DeviceSummaryTypeEnum["RedhatXenHost"] = "REDHAT_XEN_HOST";
    DeviceSummaryTypeEnum["RedhatVm"] = "REDHAT_VM";
    DeviceSummaryTypeEnum["HpSystem"] = "HP_SYSTEM";
    DeviceSummaryTypeEnum["HpNpar"] = "HP_NPAR";
    DeviceSummaryTypeEnum["HpVpar"] = "HP_VPAR";
    DeviceSummaryTypeEnum["HpIntVm"] = "HP_INT_VM";
    DeviceSummaryTypeEnum["HpIntHost"] = "HP_INT_HOST";
    DeviceSummaryTypeEnum["MsHost"] = "MS_HOST";
    DeviceSummaryTypeEnum["MsVm"] = "MS_VM";
    DeviceSummaryTypeEnum["AzureVirtualmachine"] = "AZURE_VIRTUALMACHINE";
    DeviceSummaryTypeEnum["AmazonEc2"] = "AMAZON_EC2";
    DeviceSummaryTypeEnum["Os400Host"] = "OS400_HOST";
    DeviceSummaryTypeEnum["DockerHost"] = "DOCKER_HOST";
    DeviceSummaryTypeEnum["DockerNode"] = "DOCKER_NODE";
    DeviceSummaryTypeEnum["DockerContainer"] = "DOCKER_CONTAINER";
    DeviceSummaryTypeEnum["Router"] = "ROUTER";
    DeviceSummaryTypeEnum["Hub"] = "HUB";
    DeviceSummaryTypeEnum["Printer"] = "PRINTER";
    DeviceSummaryTypeEnum["Repeater"] = "REPEATER";
    DeviceSummaryTypeEnum["Workstation"] = "WORKSTATION";
    DeviceSummaryTypeEnum["Ntserver"] = "NTSERVER";
    DeviceSummaryTypeEnum["Prinetserver"] = "PRINETSERVER";
    DeviceSummaryTypeEnum["Rmonprobe"] = "RMONPROBE";
    DeviceSummaryTypeEnum["Webserver"] = "WEBSERVER";
    DeviceSummaryTypeEnum["Dbserver"] = "DBSERVER";
    DeviceSummaryTypeEnum["Mailserver"] = "MAILSERVER";
    DeviceSummaryTypeEnum["Firewall"] = "FIREWALL";
    DeviceSummaryTypeEnum["Others"] = "OTHERS";
    DeviceSummaryTypeEnum["Appserver"] = "APPSERVER";
    DeviceSummaryTypeEnum["Dedicatedagent"] = "DEDICATEDAGENT";
    DeviceSummaryTypeEnum["Remoteagent"] = "REMOTEAGENT";
    DeviceSummaryTypeEnum["Layer3Switch"] = "LAYER_3_SWITCH";
    DeviceSummaryTypeEnum["CentralOfficeSwitch"] = "CENTRAL_OFFICE_SWITCH";
    DeviceSummaryTypeEnum["AccessServer"] = "ACCESS_SERVER";
    DeviceSummaryTypeEnum["IO"] = "I_O";
    DeviceSummaryTypeEnum["WebCaching"] = "WEB_CACHING";
    DeviceSummaryTypeEnum["Management"] = "MANAGEMENT";
    DeviceSummaryTypeEnum["BlockServer"] = "BLOCK_SERVER";
    DeviceSummaryTypeEnum["FileServer"] = "FILE_SERVER";
    DeviceSummaryTypeEnum["MobileUserDevice"] = "MOBILE_USER_DEVICE";
    DeviceSummaryTypeEnum["BridgeOrExtender"] = "BRIDGE_OR_EXTENDER";
    DeviceSummaryTypeEnum["Gateway"] = "GATEWAY";
    DeviceSummaryTypeEnum["Loadbalancer"] = "LOADBALANCER";
    DeviceSummaryTypeEnum["Mainframe"] = "MAINFRAME";
    DeviceSummaryTypeEnum["Sanswitch"] = "SANSWITCH";
    DeviceSummaryTypeEnum["Sanhub"] = "SANHUB";
    DeviceSummaryTypeEnum["Sanbridge"] = "SANBRIDGE";
    DeviceSummaryTypeEnum["Sanrouter"] = "SANROUTER";
    DeviceSummaryTypeEnum["Sandirector"] = "SANDIRECTOR";
    DeviceSummaryTypeEnum["Raidstoragedevice"] = "RAIDSTORAGEDEVICE";
    DeviceSummaryTypeEnum["VirtualTapeLibrary"] = "VIRTUAL_TAPE_LIBRARY";
    DeviceSummaryTypeEnum["Jbod"] = "JBOD";
    DeviceSummaryTypeEnum["Storagesubsystem"] = "STORAGESUBSYSTEM";
    DeviceSummaryTypeEnum["StorageVirtualizer"] = "STORAGE_VIRTUALIZER";
    DeviceSummaryTypeEnum["MediaLibrary"] = "MEDIA_LIBRARY";
    DeviceSummaryTypeEnum["Extendernode"] = "EXTENDERNODE";
    DeviceSummaryTypeEnum["NasHead"] = "NAS_HEAD";
    DeviceSummaryTypeEnum["SelfcontainedNas"] = "SELFCONTAINED_NAS";
    DeviceSummaryTypeEnum["Ups"] = "UPS";
    DeviceSummaryTypeEnum["IpPhone"] = "IP_PHONE";
    DeviceSummaryTypeEnum["ManagementController"] = "MANAGEMENT_CONTROLLER";
    DeviceSummaryTypeEnum["ChassisManager"] = "CHASSIS_MANAGER";
    DeviceSummaryTypeEnum["HostbasedRaidController"] = "HOSTBASED_RAID_CONTROLLER";
    DeviceSummaryTypeEnum["StorageDeviceEnclosure"] = "STORAGE_DEVICE_ENCLOSURE";
    DeviceSummaryTypeEnum["Desktop"] = "DESKTOP";
    DeviceSummaryTypeEnum["Laptop"] = "LAPTOP";
    DeviceSummaryTypeEnum["VirtualLibrarySystem"] = "VIRTUAL_LIBRARY_SYSTEM";
    DeviceSummaryTypeEnum["BladeSystem"] = "BLADE_SYSTEM";
    DeviceSummaryTypeEnum["BladeServer"] = "BLADE_SERVER";
    DeviceSummaryTypeEnum["VpnConcentrator"] = "VPN_CONCENTRATOR";
    DeviceSummaryTypeEnum["ProxyServer"] = "PROXY_SERVER";
    DeviceSummaryTypeEnum["Layer3ProxyServer"] = "LAYER_3_PROXY_SERVER";
    DeviceSummaryTypeEnum["WanAccelerator"] = "WAN_ACCELERATOR";
    DeviceSummaryTypeEnum["SanProcessor"] = "SAN_PROCESSOR";
    DeviceSummaryTypeEnum["VirtualServerRhl"] = "VIRTUAL_SERVER_RHL";
    DeviceSummaryTypeEnum["VirtualServerWindows"] = "VIRTUAL_SERVER_WINDOWS";
    DeviceSummaryTypeEnum["EsXi"] = "ESXi";
    DeviceSummaryTypeEnum["VirtualServer"] = "VIRTUAL_SERVER";
    DeviceSummaryTypeEnum["Hypervisor"] = "HYPERVISOR";
    DeviceSummaryTypeEnum["AwsAmi"] = "AWS_AMI";
    DeviceSummaryTypeEnum["MsAzure"] = "MS_AZURE";
    DeviceSummaryTypeEnum["Unknown"] = "UNKNOWN";
})(DeviceSummaryTypeEnum || (DeviceSummaryTypeEnum = {}));
var DeviceSummary = /** @class */ (function (_super) {
    __extends(DeviceSummary, _super);
    function DeviceSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeviceSummary.prototype, "agentId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "agentName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeviceSummary.prototype, "ambientTemperature", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "collectTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "deviceTsmoKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "deviceUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeviceSummary.prototype, "heatingMargin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "heatingMarginUnit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeviceSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeviceSummary.prototype, "powerConsumption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "powerConsumptionUnit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "productVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeviceSummary.prototype, "serverId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "serverName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeviceSummary.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeviceSummary.prototype, "updateTimestamp", void 0);
    return DeviceSummary;
}(SpeakeasyBase));
export { DeviceSummary };
