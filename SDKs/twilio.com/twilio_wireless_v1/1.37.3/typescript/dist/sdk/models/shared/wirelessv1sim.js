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
import { SimEnumResetStatusEnum } from "./simenumresetstatusenum";
import { SimEnumStatusEnum } from "./simenumstatusenum";
export var WirelessV1SimCommandsCallbackMethodEnum;
(function (WirelessV1SimCommandsCallbackMethodEnum) {
    WirelessV1SimCommandsCallbackMethodEnum["Head"] = "HEAD";
    WirelessV1SimCommandsCallbackMethodEnum["Get"] = "GET";
    WirelessV1SimCommandsCallbackMethodEnum["Post"] = "POST";
    WirelessV1SimCommandsCallbackMethodEnum["Patch"] = "PATCH";
    WirelessV1SimCommandsCallbackMethodEnum["Put"] = "PUT";
    WirelessV1SimCommandsCallbackMethodEnum["Delete"] = "DELETE";
})(WirelessV1SimCommandsCallbackMethodEnum || (WirelessV1SimCommandsCallbackMethodEnum = {}));
export var WirelessV1SimSmsFallbackMethodEnum;
(function (WirelessV1SimSmsFallbackMethodEnum) {
    WirelessV1SimSmsFallbackMethodEnum["Head"] = "HEAD";
    WirelessV1SimSmsFallbackMethodEnum["Get"] = "GET";
    WirelessV1SimSmsFallbackMethodEnum["Post"] = "POST";
    WirelessV1SimSmsFallbackMethodEnum["Patch"] = "PATCH";
    WirelessV1SimSmsFallbackMethodEnum["Put"] = "PUT";
    WirelessV1SimSmsFallbackMethodEnum["Delete"] = "DELETE";
})(WirelessV1SimSmsFallbackMethodEnum || (WirelessV1SimSmsFallbackMethodEnum = {}));
export var WirelessV1SimSmsMethodEnum;
(function (WirelessV1SimSmsMethodEnum) {
    WirelessV1SimSmsMethodEnum["Head"] = "HEAD";
    WirelessV1SimSmsMethodEnum["Get"] = "GET";
    WirelessV1SimSmsMethodEnum["Post"] = "POST";
    WirelessV1SimSmsMethodEnum["Patch"] = "PATCH";
    WirelessV1SimSmsMethodEnum["Put"] = "PUT";
    WirelessV1SimSmsMethodEnum["Delete"] = "DELETE";
})(WirelessV1SimSmsMethodEnum || (WirelessV1SimSmsMethodEnum = {}));
export var WirelessV1SimVoiceFallbackMethodEnum;
(function (WirelessV1SimVoiceFallbackMethodEnum) {
    WirelessV1SimVoiceFallbackMethodEnum["Head"] = "HEAD";
    WirelessV1SimVoiceFallbackMethodEnum["Get"] = "GET";
    WirelessV1SimVoiceFallbackMethodEnum["Post"] = "POST";
    WirelessV1SimVoiceFallbackMethodEnum["Patch"] = "PATCH";
    WirelessV1SimVoiceFallbackMethodEnum["Put"] = "PUT";
    WirelessV1SimVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(WirelessV1SimVoiceFallbackMethodEnum || (WirelessV1SimVoiceFallbackMethodEnum = {}));
export var WirelessV1SimVoiceMethodEnum;
(function (WirelessV1SimVoiceMethodEnum) {
    WirelessV1SimVoiceMethodEnum["Head"] = "HEAD";
    WirelessV1SimVoiceMethodEnum["Get"] = "GET";
    WirelessV1SimVoiceMethodEnum["Post"] = "POST";
    WirelessV1SimVoiceMethodEnum["Patch"] = "PATCH";
    WirelessV1SimVoiceMethodEnum["Put"] = "PUT";
    WirelessV1SimVoiceMethodEnum["Delete"] = "DELETE";
})(WirelessV1SimVoiceMethodEnum || (WirelessV1SimVoiceMethodEnum = {}));
var WirelessV1Sim = /** @class */ (function (_super) {
    __extends(WirelessV1Sim, _super);
    function WirelessV1Sim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commands_callback_method" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "commandsCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commands_callback_url" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "commandsCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], WirelessV1Sim.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], WirelessV1Sim.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=e_id" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "eId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iccid" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "iccid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], WirelessV1Sim.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate_plan_sid" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "ratePlanSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reset_status" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "resetStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_fallback_method" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "smsFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_fallback_url" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "smsFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_method" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "smsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_url" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "smsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "voiceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], WirelessV1Sim.prototype, "voiceUrl", void 0);
    return WirelessV1Sim;
}(SpeakeasyBase));
export { WirelessV1Sim };
