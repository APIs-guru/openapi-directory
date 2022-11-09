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
import { IncomingPhoneNumberMobileEnumAddressRequirementEnum } from "./incomingphonenumbermobileenumaddressrequirementenum";
import { IncomingPhoneNumberMobileEnumEmergencyAddressStatusEnum } from "./incomingphonenumbermobileenumemergencyaddressstatusenum";
import { IncomingPhoneNumberMobileEnumEmergencyStatusEnum } from "./incomingphonenumbermobileenumemergencystatusenum";
import { IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum } from "./incomingphonenumbermobileenumvoicereceivemodeenum";
// ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities
/**
 * Indicate if a phone can receive calls or messages
**/
var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities = /** @class */ (function (_super) {
    __extends(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities, _super);
    function ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fax" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities.prototype, "fax", void 0);
    __decorate([
        Metadata({ data: "json, name=mms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities.prototype, "mms", void 0);
    __decorate([
        Metadata({ data: "json, name=sms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities.prototype, "sms", void 0);
    __decorate([
        Metadata({ data: "json, name=voice" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities.prototype, "voice", void 0);
    return ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities;
}(SpeakeasyBase));
export { ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities };
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum || (ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum = {}));
var ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile = /** @class */ (function (_super) {
    __extends(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile, _super);
    function ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=address_requirements" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "addressRequirements", void 0);
    __decorate([
        Metadata({ data: "json, name=address_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "addressSid", void 0);
    __decorate([
        Metadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=beta" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "beta", void 0);
    __decorate([
        Metadata({ data: "json, name=bundle_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "bundleSid", void 0);
    __decorate([
        Metadata({ data: "json, name=capabilities" }),
        __metadata("design:type", ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "capabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_address_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "emergencyAddressSid", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_address_status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "emergencyAddressStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "emergencyStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=identity_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "identitySid", void 0);
    __decorate([
        Metadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "origin", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_application_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "smsApplicationSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=trunk_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "trunkSid", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "uri", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_application_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "voiceApplicationSid", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_caller_id_lookup" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_receive_mode" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "voiceReceiveMode", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.prototype, "voiceUrl", void 0);
    return ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile;
}(SpeakeasyBase));
export { ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile };
