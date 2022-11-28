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
import { InputConfigurationContainer } from "./inputconfigurationcontainer";
import { OutputConfigurationContainer } from "./outputconfigurationcontainer";
import { SwitchConfigurationContainer } from "./switchconfigurationcontainer";
export var SmartMeDeviceConfigurationContainerDnsUpdateStateEnum;
(function (SmartMeDeviceConfigurationContainerDnsUpdateStateEnum) {
    SmartMeDeviceConfigurationContainerDnsUpdateStateEnum["NoUpdate"] = "NoUpdate";
    SmartMeDeviceConfigurationContainerDnsUpdateStateEnum["DnsUpdatePublicIp"] = "DnsUpdatePublicIp";
    SmartMeDeviceConfigurationContainerDnsUpdateStateEnum["DnsUpdateInternalIp"] = "DnsUpdateInternalIp";
})(SmartMeDeviceConfigurationContainerDnsUpdateStateEnum || (SmartMeDeviceConfigurationContainerDnsUpdateStateEnum = {}));
export var SmartMeDeviceConfigurationContainerUploadIntervalEnum;
(function (SmartMeDeviceConfigurationContainerUploadIntervalEnum) {
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval1s"] = "UploadInterval_1s";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval5s"] = "UploadInterval_5s";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval10s"] = "UploadInterval_10s";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval30s"] = "UploadInterval_30s";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval60s"] = "UploadInterval_60s";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval5min"] = "UploadInterval_5min";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval15min"] = "UploadInterval_15min";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval30min"] = "UploadInterval_30min";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval60min"] = "UploadInterval_60min";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval6h"] = "UploadInterval_6h";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval12h"] = "UploadInterval_12h";
    SmartMeDeviceConfigurationContainerUploadIntervalEnum["UploadInterval24h"] = "UploadInterval_24h";
})(SmartMeDeviceConfigurationContainerUploadIntervalEnum || (SmartMeDeviceConfigurationContainerUploadIntervalEnum = {}));
// SmartMeDeviceConfigurationContainer
/**
 * API Container class for the meter configuration
**/
var SmartMeDeviceConfigurationContainer = /** @class */ (function (_super) {
    __extends(SmartMeDeviceConfigurationContainer, _super);
    function SmartMeDeviceConfigurationContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceEncryptionKey" }),
        __metadata("design:type", String)
    ], SmartMeDeviceConfigurationContainer.prototype, "deviceEncryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DevicePinCode" }),
        __metadata("design:type", String)
    ], SmartMeDeviceConfigurationContainer.prototype, "devicePinCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsUpdateState" }),
        __metadata("design:type", String)
    ], SmartMeDeviceConfigurationContainer.prototype, "dnsUpdateState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableModbusTcp" }),
        __metadata("design:type", Boolean)
    ], SmartMeDeviceConfigurationContainer.prototype, "enableModbusTcp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], SmartMeDeviceConfigurationContainer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputConfiguration", elemType: InputConfigurationContainer }),
        __metadata("design:type", Array)
    ], SmartMeDeviceConfigurationContainer.prototype, "inputConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputConfiguration", elemType: OutputConfigurationContainer }),
        __metadata("design:type", Array)
    ], SmartMeDeviceConfigurationContainer.prototype, "outputConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShowReactiveEnergy" }),
        __metadata("design:type", Boolean)
    ], SmartMeDeviceConfigurationContainer.prototype, "showReactiveEnergy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SwitchConfiguration", elemType: SwitchConfigurationContainer }),
        __metadata("design:type", Array)
    ], SmartMeDeviceConfigurationContainer.prototype, "switchConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UploadInterval" }),
        __metadata("design:type", String)
    ], SmartMeDeviceConfigurationContainer.prototype, "uploadInterval", void 0);
    return SmartMeDeviceConfigurationContainer;
}(SpeakeasyBase));
export { SmartMeDeviceConfigurationContainer };
