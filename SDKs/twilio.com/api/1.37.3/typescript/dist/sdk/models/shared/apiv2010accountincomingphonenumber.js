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
import { IncomingPhoneNumberEnumAddressRequirementEnum } from "./incomingphonenumberenumaddressrequirementenum";
import { IncomingPhoneNumberEnumEmergencyAddressStatusEnum } from "./incomingphonenumberenumemergencyaddressstatusenum";
import { IncomingPhoneNumberEnumEmergencyStatusEnum } from "./incomingphonenumberenumemergencystatusenum";
import { IncomingPhoneNumberEnumVoiceReceiveModeEnum } from "./incomingphonenumberenumvoicereceivemodeenum";
// ApiV2010AccountIncomingPhoneNumberCapabilities
/**
 * Indicate if a phone can receive calls or messages
**/
var ApiV2010AccountIncomingPhoneNumberCapabilities = /** @class */ (function (_super) {
    __extends(ApiV2010AccountIncomingPhoneNumberCapabilities, _super);
    function ApiV2010AccountIncomingPhoneNumberCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberCapabilities.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberCapabilities.prototype, "mms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberCapabilities.prototype, "sms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumberCapabilities.prototype, "voice", void 0);
    return ApiV2010AccountIncomingPhoneNumberCapabilities;
}(SpeakeasyBase));
export { ApiV2010AccountIncomingPhoneNumberCapabilities };
export var ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberSmsMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberSmsMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberSmsMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberSmsMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberSmsMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberSmsMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberSmsMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberSmsMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberSmsMethodEnum || (ApiV2010AccountIncomingPhoneNumberSmsMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum || (ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum = {}));
export var ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum;
(function (ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum) {
    ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum["Head"] = "HEAD";
    ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum["Get"] = "GET";
    ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum["Post"] = "POST";
    ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum["Put"] = "PUT";
    ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum || (ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum = {}));
var ApiV2010AccountIncomingPhoneNumber = /** @class */ (function (_super) {
    __extends(ApiV2010AccountIncomingPhoneNumber, _super);
    function ApiV2010AccountIncomingPhoneNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_requirements" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "addressRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "addressSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beta" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "beta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundle_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "bundleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", ApiV2010AccountIncomingPhoneNumberCapabilities)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emergency_address_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "emergencyAddressSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emergency_address_status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "emergencyAddressStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emergency_status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "emergencyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "identitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_application_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "smsApplicationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "smsFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "smsFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "smsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "smsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trunk_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "trunkSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_application_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "voiceApplicationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_caller_id_lookup" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "voiceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_receive_mode" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "voiceReceiveMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountIncomingPhoneNumber.prototype, "voiceUrl", void 0);
    return ApiV2010AccountIncomingPhoneNumber;
}(SpeakeasyBase));
export { ApiV2010AccountIncomingPhoneNumber };
