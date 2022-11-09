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
export var CREATEINCOMINGPHONENUMBER_SERVERS = [
    "https://api.twilio.com",
];
var CreateIncomingPhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberPathParams, _super);
    function CreateIncomingPhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberPathParams.prototype, "accountSid", void 0);
    return CreateIncomingPhoneNumberPathParams;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberPathParams };
export var CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum;
(function (CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum) {
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum || (CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum;
(function (CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum) {
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum || (CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum = {}));
export var CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum;
(function (CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum) {
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum || (CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;
(function (CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum) {
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum || (CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum;
(function (CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum) {
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum || (CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum = {}));
var CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest, _super);
    function CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AddressSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "addressSid", void 0);
    __decorate([
        Metadata({ data: "form, name=ApiVersion;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "form, name=AreaCode;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "areaCode", void 0);
    __decorate([
        Metadata({ data: "form, name=BundleSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "bundleSid", void 0);
    __decorate([
        Metadata({ data: "form, name=EmergencyAddressSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "emergencyAddressSid", void 0);
    __decorate([
        Metadata({ data: "form, name=EmergencyStatus;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "emergencyStatus", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=IdentitySid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "identitySid", void 0);
    __decorate([
        Metadata({ data: "form, name=PhoneNumber;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "smsApplicationSid", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=TrunkSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "trunkSid", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "voiceApplicationSid", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceCallerIdLookup;" }),
        __metadata("design:type", Boolean)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceReceiveMode;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "voiceReceiveMode", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest.prototype, "voiceUrl", void 0);
    return CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest };
var CreateIncomingPhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberSecurity, _super);
    function CreateIncomingPhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateIncomingPhoneNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateIncomingPhoneNumberSecurity;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberSecurity };
var CreateIncomingPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberRequest, _super);
    function CreateIncomingPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateIncomingPhoneNumberPathParams)
    ], CreateIncomingPhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest)
    ], CreateIncomingPhoneNumberRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateIncomingPhoneNumberSecurity)
    ], CreateIncomingPhoneNumberRequest.prototype, "security", void 0);
    return CreateIncomingPhoneNumberRequest;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberRequest };
var CreateIncomingPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberResponse, _super);
    function CreateIncomingPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateIncomingPhoneNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountIncomingPhoneNumber)
    ], CreateIncomingPhoneNumberResponse.prototype, "apiV2010AccountIncomingPhoneNumber", void 0);
    return CreateIncomingPhoneNumberResponse;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberResponse };
