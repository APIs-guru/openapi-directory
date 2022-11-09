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
import { IncomingPhoneNumberLocalEnumAddressRequirementEnum } from "./incomingphonenumberlocalenumaddressrequirementenum";
import { IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum } from "./incomingphonenumberlocalenumemergencyaddressstatusenum";
import { IncomingPhoneNumberLocalEnumEmergencyStatusEnum } from "./incomingphonenumberlocalenumemergencystatusenum";
import { IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum } from "./incomingphonenumberlocalenumvoicereceivemodeenum";
// ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities
/**
 * Indicate if a phone can receive calls or messages
**/
var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities = /** @class */ (function (_super) {
    __extends(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities, _super);
    function ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fax" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities.prototype, "fax", void 0);
    __decorate([
        Metadata({ data: "json, name=mms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities.prototype, "mms", void 0);
    __decorate([
        Metadata({ data: "json, name=sms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities.prototype, "sms", void 0);
    __decorate([
        Metadata({ data: "json, name=voice" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities.prototype, "voice", void 0);
    return ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities;
}(SpeakeasyBase));
export { ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities };
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum = {}));
var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal = /** @class */ (function (_super) {
    __extends(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal, _super);
    function ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=address_requirements" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "addressRequirements", void 0);
    __decorate([
        Metadata({ data: "json, name=address_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "addressSid", void 0);
    __decorate([
        Metadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=beta" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "beta", void 0);
    __decorate([
        Metadata({ data: "json, name=bundle_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "bundleSid", void 0);
    __decorate([
        Metadata({ data: "json, name=capabilities" }),
        __metadata("design:type", ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "capabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_address_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "emergencyAddressSid", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_address_status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "emergencyAddressStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "emergencyStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=identity_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "identitySid", void 0);
    __decorate([
        Metadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "origin", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_application_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "smsApplicationSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=trunk_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "trunkSid", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "uri", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_application_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "voiceApplicationSid", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_caller_id_lookup" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_receive_mode" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "voiceReceiveMode", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.prototype, "voiceUrl", void 0);
    return ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal;
}(SpeakeasyBase));
export { ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal };
