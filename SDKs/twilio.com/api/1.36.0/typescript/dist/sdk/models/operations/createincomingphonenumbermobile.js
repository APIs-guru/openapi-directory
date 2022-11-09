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
export var CREATEINCOMINGPHONENUMBERMOBILE_SERVERS = [
    "https://api.twilio.com",
];
var CreateIncomingPhoneNumberMobilePathParams = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberMobilePathParams, _super);
    function CreateIncomingPhoneNumberMobilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobilePathParams.prototype, "accountSid", void 0);
    return CreateIncomingPhoneNumberMobilePathParams;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberMobilePathParams };
export var CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum;
(function (CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum) {
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum || (CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum;
(function (CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum) {
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum || (CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum = {}));
export var CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum;
(function (CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum) {
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum || (CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum;
(function (CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum) {
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum || (CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum = {}));
export var CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum;
(function (CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum) {
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum["Head"] = "HEAD";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum["Get"] = "GET";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum["Post"] = "POST";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum["Patch"] = "PATCH";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum["Put"] = "PUT";
    CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum["Delete"] = "DELETE";
})(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum || (CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum = {}));
var CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest, _super);
    function CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AddressSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "addressSid", void 0);
    __decorate([
        Metadata({ data: "form, name=ApiVersion;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "form, name=BundleSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "bundleSid", void 0);
    __decorate([
        Metadata({ data: "form, name=EmergencyAddressSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "emergencyAddressSid", void 0);
    __decorate([
        Metadata({ data: "form, name=EmergencyStatus;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "emergencyStatus", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=IdentitySid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "identitySid", void 0);
    __decorate([
        Metadata({ data: "form, name=PhoneNumber;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "smsApplicationSid", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=TrunkSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "trunkSid", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "voiceApplicationSid", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceCallerIdLookup;" }),
        __metadata("design:type", Boolean)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceReceiveMode;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "voiceReceiveMode", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest.prototype, "voiceUrl", void 0);
    return CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest };
var CreateIncomingPhoneNumberMobileSecurity = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberMobileSecurity, _super);
    function CreateIncomingPhoneNumberMobileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateIncomingPhoneNumberMobileSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateIncomingPhoneNumberMobileSecurity;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberMobileSecurity };
var CreateIncomingPhoneNumberMobileRequest = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberMobileRequest, _super);
    function CreateIncomingPhoneNumberMobileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateIncomingPhoneNumberMobilePathParams)
    ], CreateIncomingPhoneNumberMobileRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest)
    ], CreateIncomingPhoneNumberMobileRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateIncomingPhoneNumberMobileSecurity)
    ], CreateIncomingPhoneNumberMobileRequest.prototype, "security", void 0);
    return CreateIncomingPhoneNumberMobileRequest;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberMobileRequest };
var CreateIncomingPhoneNumberMobileResponse = /** @class */ (function (_super) {
    __extends(CreateIncomingPhoneNumberMobileResponse, _super);
    function CreateIncomingPhoneNumberMobileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateIncomingPhoneNumberMobileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateIncomingPhoneNumberMobileResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile)
    ], CreateIncomingPhoneNumberMobileResponse.prototype, "apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile", void 0);
    return CreateIncomingPhoneNumberMobileResponse;
}(SpeakeasyBase));
export { CreateIncomingPhoneNumberMobileResponse };
