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
export var CREATEINCOMINGPHONENUMBERLOCAL_SERVERS = [
    "https://api.twilio.com",
];
var CreateIncomingPhoneNumberLocalPathParams = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberLocalPathParams, _super);
    function CreateIncomingPhoneNumberLocalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalPathParams.prototype, "accountSid", void 0);
    return CreateIncomingPhoneNumberLocalPathParams;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberLocalPathParams };
export var CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum;
(function (CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum) {
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum || (CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum;
(function (CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum) {
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum || (CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum = {}));
export var CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum;
(function (CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum) {
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum || (CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum;
(function (CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum) {
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum || (CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum;
(function (CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum) {
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum || (CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum = {}));
var CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest, _super);
    function CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AddressSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "addressSid", void 0);
    __decorate([
        Metadata({ data: "form, name=ApiVersion;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "form, name=BundleSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "bundleSid", void 0);
    __decorate([
        Metadata({ data: "form, name=EmergencyAddressSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "emergencyAddressSid", void 0);
    __decorate([
        Metadata({ data: "form, name=EmergencyStatus;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "emergencyStatus", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=IdentitySid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "identitySid", void 0);
    __decorate([
        Metadata({ data: "form, name=PhoneNumber;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "smsApplicationSid", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=TrunkSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "trunkSid", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "voiceApplicationSid", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceCallerIdLookup;" }),
        __metadata("design:type", Boolean)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceReceiveMode;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "voiceReceiveMode", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest.prototype, "voiceUrl", void 0);
    return CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest };
var CreateIncomingPhoneNumberLocalSecurity = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberLocalSecurity, _super);
    function CreateIncomingPhoneNumberLocalSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateIncomingPhoneNumberLocalSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateIncomingPhoneNumberLocalSecurity;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberLocalSecurity };
var CreateIncomingPhoneNumberLocalRequest = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberLocalRequest, _super);
    function CreateIncomingPhoneNumberLocalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateIncomingPhoneNumberLocalPathParams)
    ], CreateIncomingPhoneNumberLocalRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest)
    ], CreateIncomingPhoneNumberLocalRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateIncomingPhoneNumberLocalSecurity)
    ], CreateIncomingPhoneNumberLocalRequest.prototype, "security", void 0);
    return CreateIncomingPhoneNumberLocalRequest;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberLocalRequest };
var CreateIncomingPhoneNumberLocalResponse = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberLocalResponse, _super);
    function CreateIncomingPhoneNumberLocalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberLocalResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateIncomingPhoneNumberLocalResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal)
    ], CreateIncomingPhoneNumberLocalResponse.prototype, "apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal", void 0);
    return CreateIncomingPhoneNumberLocalResponse;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberLocalResponse };
