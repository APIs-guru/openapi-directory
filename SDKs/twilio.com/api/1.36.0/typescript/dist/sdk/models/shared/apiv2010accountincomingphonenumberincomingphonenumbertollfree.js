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
import { IncomingPhoneNumberTollFreeEnumAddressRequirementEnum } from "./incomingphonenumbertollfreeenumaddressrequirementenum";
import { IncomingPhoneNumberTollFreeEnumEmergencyAddressStatusEnum } from "./incomingphonenumbertollfreeenumemergencyaddressstatusenum";
import { IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum } from "./incomingphonenumbertollfreeenumemergencystatusenum";
import { IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum } from "./incomingphonenumbertollfreeenumvoicereceivemodeenum";
// ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities
/**
 * Indicate if a phone can receive calls or messages
**/
var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities = /** @class */ (function (_super) {
    __extends(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities, _super);
    function ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fax" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities.prototype, "fax", void 0);
    __decorate([
        Metadata({ data: "json, name=mms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities.prototype, "mms", void 0);
    __decorate([
        Metadata({ data: "json, name=sms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities.prototype, "sms", void 0);
    __decorate([
        Metadata({ data: "json, name=voice" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities.prototype, "voice", void 0);
    return ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities;
}(SpeakeasyBase));
export { ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities };
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum = {}));
var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree = /** @class */ (function (_super) {
    __extends(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree, _super);
    function ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=address_requirements" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "addressRequirements", void 0);
    __decorate([
        Metadata({ data: "json, name=address_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "addressSid", void 0);
    __decorate([
        Metadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=beta" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "beta", void 0);
    __decorate([
        Metadata({ data: "json, name=bundle_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "bundleSid", void 0);
    __decorate([
        Metadata({ data: "json, name=capabilities" }),
        __metadata("design:type", ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "capabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_address_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "emergencyAddressSid", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_address_status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "emergencyAddressStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "emergencyStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=identity_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "identitySid", void 0);
    __decorate([
        Metadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "origin", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_application_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "smsApplicationSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=trunk_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "trunkSid", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "uri", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_application_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "voiceApplicationSid", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_caller_id_lookup" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_receive_mode" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "voiceReceiveMode", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.prototype, "voiceUrl", void 0);
    return ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree;
}(SpeakeasyBase));
export { ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree };
