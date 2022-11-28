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
import { DependentPhoneNumberEnumAddressRequirementEnum } from "./dependentphonenumberenumaddressrequirementenum";
import { DependentPhoneNumberEnumEmergencyStatusEnum } from "./dependentphonenumberenumemergencystatusenum";
export var ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum;
(function (ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum) {
    ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum || (ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum = {}));
export var ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum;
(function (ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum) {
    ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum["Head"] = "HEAD";
    ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum["Get"] = "GET";
    ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum["Post"] = "POST";
    ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum["Put"] = "PUT";
    ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum || (ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum = {}));
export var ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum;
(function (ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum) {
    ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum || (ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum = {}));
export var ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum;
(function (ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum) {
    ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum || (ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum = {}));
export var ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum;
(function (ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum) {
    ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum["Head"] = "HEAD";
    ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum["Get"] = "GET";
    ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum["Post"] = "POST";
    ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum["Put"] = "PUT";
    ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum || (ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum = {}));
var ApiV2010AccountAddressDependentPhoneNumber = /** @class */ (function (_super) {
    __extends(ApiV2010AccountAddressDependentPhoneNumber, _super);
    function ApiV2010AccountAddressDependentPhoneNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_requirements" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "addressRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", Object)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emergency_address_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "emergencyAddressSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emergency_status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "emergencyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_application_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "smsApplicationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "smsFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "smsFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "smsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "smsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trunk_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "trunkSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_application_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "voiceApplicationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_caller_id_lookup" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "voiceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountAddressDependentPhoneNumber.prototype, "voiceUrl", void 0);
    return ApiV2010AccountAddressDependentPhoneNumber;
}(SpeakeasyBase));
export { ApiV2010AccountAddressDependentPhoneNumber };
