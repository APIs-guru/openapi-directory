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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var PreviewWirelessSimSmsFallbackMethodEnum;
(function (PreviewWirelessSimSmsFallbackMethodEnum) {
    PreviewWirelessSimSmsFallbackMethodEnum["Head"] = "HEAD";
    PreviewWirelessSimSmsFallbackMethodEnum["Get"] = "GET";
    PreviewWirelessSimSmsFallbackMethodEnum["Post"] = "POST";
    PreviewWirelessSimSmsFallbackMethodEnum["Patch"] = "PATCH";
    PreviewWirelessSimSmsFallbackMethodEnum["Put"] = "PUT";
    PreviewWirelessSimSmsFallbackMethodEnum["Delete"] = "DELETE";
})(PreviewWirelessSimSmsFallbackMethodEnum || (PreviewWirelessSimSmsFallbackMethodEnum = {}));
export var PreviewWirelessSimSmsMethodEnum;
(function (PreviewWirelessSimSmsMethodEnum) {
    PreviewWirelessSimSmsMethodEnum["Head"] = "HEAD";
    PreviewWirelessSimSmsMethodEnum["Get"] = "GET";
    PreviewWirelessSimSmsMethodEnum["Post"] = "POST";
    PreviewWirelessSimSmsMethodEnum["Patch"] = "PATCH";
    PreviewWirelessSimSmsMethodEnum["Put"] = "PUT";
    PreviewWirelessSimSmsMethodEnum["Delete"] = "DELETE";
})(PreviewWirelessSimSmsMethodEnum || (PreviewWirelessSimSmsMethodEnum = {}));
export var PreviewWirelessSimVoiceFallbackMethodEnum;
(function (PreviewWirelessSimVoiceFallbackMethodEnum) {
    PreviewWirelessSimVoiceFallbackMethodEnum["Head"] = "HEAD";
    PreviewWirelessSimVoiceFallbackMethodEnum["Get"] = "GET";
    PreviewWirelessSimVoiceFallbackMethodEnum["Post"] = "POST";
    PreviewWirelessSimVoiceFallbackMethodEnum["Patch"] = "PATCH";
    PreviewWirelessSimVoiceFallbackMethodEnum["Put"] = "PUT";
    PreviewWirelessSimVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(PreviewWirelessSimVoiceFallbackMethodEnum || (PreviewWirelessSimVoiceFallbackMethodEnum = {}));
export var PreviewWirelessSimVoiceMethodEnum;
(function (PreviewWirelessSimVoiceMethodEnum) {
    PreviewWirelessSimVoiceMethodEnum["Head"] = "HEAD";
    PreviewWirelessSimVoiceMethodEnum["Get"] = "GET";
    PreviewWirelessSimVoiceMethodEnum["Post"] = "POST";
    PreviewWirelessSimVoiceMethodEnum["Patch"] = "PATCH";
    PreviewWirelessSimVoiceMethodEnum["Put"] = "PUT";
    PreviewWirelessSimVoiceMethodEnum["Delete"] = "DELETE";
})(PreviewWirelessSimVoiceMethodEnum || (PreviewWirelessSimVoiceMethodEnum = {}));
var PreviewWirelessSim = /** @class */ (function (_super) {
    __extends(PreviewWirelessSim, _super);
    function PreviewWirelessSim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=commands_callback_method" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "commandsCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=commands_callback_url" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "commandsCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], PreviewWirelessSim.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], PreviewWirelessSim.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=e_id" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "eId", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=iccid" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "iccid", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], PreviewWirelessSim.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=rate_plan_sid" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "ratePlanSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_fallback_method" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_fallback_url" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_method" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_url" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "uniqueName", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], PreviewWirelessSim.prototype, "voiceUrl", void 0);
    return PreviewWirelessSim;
}(SpeakeasyBase));
export { PreviewWirelessSim };
