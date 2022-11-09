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
export var CREATESIPDOMAIN_SERVERS = [
    "https://api.twilio.com",
];
var CreateSipDomainPathParams = /** @class */ (function (_super) {
    __extends(CreateSipDomainPathParams, _super);
    function CreateSipDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateSipDomainPathParams.prototype, "accountSid", void 0);
    return CreateSipDomainPathParams;
}(SpeakeasyBase));
export { CreateSipDomainPathParams };
export var CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum;
(function (CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum) {
    CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum["Get"] = "GET";
    CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum["Post"] = "POST";
    CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum || (CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum = {}));
export var CreateSipDomainCreateSipDomainRequestVoiceMethodEnum;
(function (CreateSipDomainCreateSipDomainRequestVoiceMethodEnum) {
    CreateSipDomainCreateSipDomainRequestVoiceMethodEnum["Head"] = "HEAD";
    CreateSipDomainCreateSipDomainRequestVoiceMethodEnum["Get"] = "GET";
    CreateSipDomainCreateSipDomainRequestVoiceMethodEnum["Post"] = "POST";
    CreateSipDomainCreateSipDomainRequestVoiceMethodEnum["Patch"] = "PATCH";
    CreateSipDomainCreateSipDomainRequestVoiceMethodEnum["Put"] = "PUT";
    CreateSipDomainCreateSipDomainRequestVoiceMethodEnum["Delete"] = "DELETE";
})(CreateSipDomainCreateSipDomainRequestVoiceMethodEnum || (CreateSipDomainCreateSipDomainRequestVoiceMethodEnum = {}));
export var CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum;
(function (CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum) {
    CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum["Get"] = "GET";
    CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum["Post"] = "POST";
    CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum["Put"] = "PUT";
    CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum || (CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum = {}));
var CreateSipDomainCreateSipDomainRequest = /** @class */ (function (_super) {
    __extends(CreateSipDomainCreateSipDomainRequest, _super);
    function CreateSipDomainCreateSipDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ByocTrunkSid;" }),
        __metadata("design:type", String)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "byocTrunkSid", void 0);
    __decorate([
        Metadata({ data: "form, name=DomainName;" }),
        __metadata("design:type", String)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "form, name=EmergencyCallerSid;" }),
        __metadata("design:type", String)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "emergencyCallerSid", void 0);
    __decorate([
        Metadata({ data: "form, name=EmergencyCallingEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "emergencyCallingEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Secure;" }),
        __metadata("design:type", Boolean)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "secure", void 0);
    __decorate([
        Metadata({ data: "form, name=SipRegistration;" }),
        __metadata("design:type", Boolean)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "sipRegistration", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "voiceStatusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceStatusCallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "voiceStatusCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], CreateSipDomainCreateSipDomainRequest.prototype, "voiceUrl", void 0);
    return CreateSipDomainCreateSipDomainRequest;
}(SpeakeasyBase));
export { CreateSipDomainCreateSipDomainRequest };
var CreateSipDomainSecurity = /** @class */ (function (_super) {
    __extends(CreateSipDomainSecurity, _super);
    function CreateSipDomainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSipDomainSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSipDomainSecurity;
}(SpeakeasyBase));
export { CreateSipDomainSecurity };
var CreateSipDomainRequest = /** @class */ (function (_super) {
    __extends(CreateSipDomainRequest, _super);
    function CreateSipDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSipDomainRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSipDomainPathParams)
    ], CreateSipDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSipDomainCreateSipDomainRequest)
    ], CreateSipDomainRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSipDomainSecurity)
    ], CreateSipDomainRequest.prototype, "security", void 0);
    return CreateSipDomainRequest;
}(SpeakeasyBase));
export { CreateSipDomainRequest };
var CreateSipDomainResponse = /** @class */ (function (_super) {
    __extends(CreateSipDomainResponse, _super);
    function CreateSipDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSipDomainResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSipDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipDomain)
    ], CreateSipDomainResponse.prototype, "apiV2010AccountSipSipDomain", void 0);
    return CreateSipDomainResponse;
}(SpeakeasyBase));
export { CreateSipDomainResponse };
