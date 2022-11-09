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
import { PhoneNumberEnumAddressRequirementEnum } from "./phonenumberenumaddressrequirementenum";
export var TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum;
(function (TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum) {
    TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum["Head"] = "HEAD";
    TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum["Get"] = "GET";
    TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum["Post"] = "POST";
    TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum["Patch"] = "PATCH";
    TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum["Put"] = "PUT";
    TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum["Delete"] = "DELETE";
})(TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum || (TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum = {}));
export var TrunkingV1TrunkPhoneNumberSmsMethodEnum;
(function (TrunkingV1TrunkPhoneNumberSmsMethodEnum) {
    TrunkingV1TrunkPhoneNumberSmsMethodEnum["Head"] = "HEAD";
    TrunkingV1TrunkPhoneNumberSmsMethodEnum["Get"] = "GET";
    TrunkingV1TrunkPhoneNumberSmsMethodEnum["Post"] = "POST";
    TrunkingV1TrunkPhoneNumberSmsMethodEnum["Patch"] = "PATCH";
    TrunkingV1TrunkPhoneNumberSmsMethodEnum["Put"] = "PUT";
    TrunkingV1TrunkPhoneNumberSmsMethodEnum["Delete"] = "DELETE";
})(TrunkingV1TrunkPhoneNumberSmsMethodEnum || (TrunkingV1TrunkPhoneNumberSmsMethodEnum = {}));
export var TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum;
(function (TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum) {
    TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum["Head"] = "HEAD";
    TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum["Get"] = "GET";
    TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum["Post"] = "POST";
    TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum["Patch"] = "PATCH";
    TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum["Put"] = "PUT";
    TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum["Delete"] = "DELETE";
})(TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum || (TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum = {}));
export var TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum;
(function (TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum) {
    TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum["Head"] = "HEAD";
    TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum["Get"] = "GET";
    TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum["Post"] = "POST";
    TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum["Patch"] = "PATCH";
    TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum["Put"] = "PUT";
    TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum || (TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum = {}));
export var TrunkingV1TrunkPhoneNumberVoiceMethodEnum;
(function (TrunkingV1TrunkPhoneNumberVoiceMethodEnum) {
    TrunkingV1TrunkPhoneNumberVoiceMethodEnum["Head"] = "HEAD";
    TrunkingV1TrunkPhoneNumberVoiceMethodEnum["Get"] = "GET";
    TrunkingV1TrunkPhoneNumberVoiceMethodEnum["Post"] = "POST";
    TrunkingV1TrunkPhoneNumberVoiceMethodEnum["Patch"] = "PATCH";
    TrunkingV1TrunkPhoneNumberVoiceMethodEnum["Put"] = "PUT";
    TrunkingV1TrunkPhoneNumberVoiceMethodEnum["Delete"] = "DELETE";
})(TrunkingV1TrunkPhoneNumberVoiceMethodEnum || (TrunkingV1TrunkPhoneNumberVoiceMethodEnum = {}));
var TrunkingV1TrunkPhoneNumber = /** @class */ (function (_super) {
    __extends(TrunkingV1TrunkPhoneNumber, _super);
    function TrunkingV1TrunkPhoneNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=address_requirements" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "addressRequirements", void 0);
    __decorate([
        Metadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=beta" }),
        __metadata("design:type", Boolean)
    ], TrunkingV1TrunkPhoneNumber.prototype, "beta", void 0);
    __decorate([
        Metadata({ data: "json, name=capabilities" }),
        __metadata("design:type", Map)
    ], TrunkingV1TrunkPhoneNumber.prototype, "capabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], TrunkingV1TrunkPhoneNumber.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], TrunkingV1TrunkPhoneNumber.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], TrunkingV1TrunkPhoneNumber.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_application_sid" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "smsApplicationSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_fallback_method" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_fallback_url" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_method" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sms_url" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=trunk_sid" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "trunkSid", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_application_sid" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "voiceApplicationSid", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_caller_id_lookup" }),
        __metadata("design:type", Boolean)
    ], TrunkingV1TrunkPhoneNumber.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], TrunkingV1TrunkPhoneNumber.prototype, "voiceUrl", void 0);
    return TrunkingV1TrunkPhoneNumber;
}(SpeakeasyBase));
export { TrunkingV1TrunkPhoneNumber };
