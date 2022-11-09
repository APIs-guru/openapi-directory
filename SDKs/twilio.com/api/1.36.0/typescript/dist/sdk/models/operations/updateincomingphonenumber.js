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
import * as shared from "../shared";
export var UPDATEINCOMINGPHONENUMBER_SERVERS = [
    "https://api.twilio.com",
];
var UpdateIncomingPhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(UpdateIncomingPhoneNumberPathParams, _super);
    function UpdateIncomingPhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberPathParams.prototype, "sid", void 0);
    return UpdateIncomingPhoneNumberPathParams;
}(SpeakeasyBase));
export { UpdateIncomingPhoneNumberPathParams };
export var UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum;
(function (UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum) {
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Get"] = "GET";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Post"] = "POST";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Put"] = "PUT";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum || (UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum = {}));
export var UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum;
(function (UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum) {
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum["Head"] = "HEAD";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum["Get"] = "GET";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum["Post"] = "POST";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum["Patch"] = "PATCH";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum["Put"] = "PUT";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum["Delete"] = "DELETE";
})(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum || (UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum = {}));
export var UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum;
(function (UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum) {
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Get"] = "GET";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Post"] = "POST";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum || (UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum = {}));
export var UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;
(function (UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum) {
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Get"] = "GET";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Post"] = "POST";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum || (UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = {}));
export var UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum;
(function (UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum) {
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum["Head"] = "HEAD";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum["Get"] = "GET";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum["Post"] = "POST";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum["Patch"] = "PATCH";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum["Put"] = "PUT";
    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum["Delete"] = "DELETE";
})(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum || (UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum = {}));
var UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest, _super);
    function UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AccountSid;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "form, name=AddressSid;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "addressSid", void 0);
    __decorate([
        Metadata({ data: "form, name=ApiVersion;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "form, name=BundleSid;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "bundleSid", void 0);
    __decorate([
        Metadata({ data: "form, name=EmergencyAddressSid;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "emergencyAddressSid", void 0);
    __decorate([
        Metadata({ data: "form, name=EmergencyStatus;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "emergencyStatus", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=IdentitySid;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "identitySid", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsApplicationSid;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "smsApplicationSid", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=TrunkSid;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "trunkSid", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceApplicationSid;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "voiceApplicationSid", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceCallerIdLookup;" }),
        __metadata("design:type", Boolean)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceReceiveMode;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "voiceReceiveMode", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest.prototype, "voiceUrl", void 0);
    return UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest;
}(SpeakeasyBase));
export { UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest };
var UpdateIncomingPhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(UpdateIncomingPhoneNumberSecurity, _super);
    function UpdateIncomingPhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateIncomingPhoneNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateIncomingPhoneNumberSecurity;
}(SpeakeasyBase));
export { UpdateIncomingPhoneNumberSecurity };
var UpdateIncomingPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(UpdateIncomingPhoneNumberRequest, _super);
    function UpdateIncomingPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateIncomingPhoneNumberPathParams)
    ], UpdateIncomingPhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest)
    ], UpdateIncomingPhoneNumberRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateIncomingPhoneNumberSecurity)
    ], UpdateIncomingPhoneNumberRequest.prototype, "security", void 0);
    return UpdateIncomingPhoneNumberRequest;
}(SpeakeasyBase));
export { UpdateIncomingPhoneNumberRequest };
var UpdateIncomingPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(UpdateIncomingPhoneNumberResponse, _super);
    function UpdateIncomingPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateIncomingPhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateIncomingPhoneNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountIncomingPhoneNumber)
    ], UpdateIncomingPhoneNumberResponse.prototype, "apiV2010AccountIncomingPhoneNumber", void 0);
    return UpdateIncomingPhoneNumberResponse;
}(SpeakeasyBase));
export { UpdateIncomingPhoneNumberResponse };
