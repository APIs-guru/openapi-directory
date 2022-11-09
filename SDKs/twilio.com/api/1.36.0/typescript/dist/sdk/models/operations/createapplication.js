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
export var CREATEAPPLICATION_SERVERS = [
    "https://api.twilio.com",
];
var CreateApplicationPathParams = /** @class */ (function (_super) {
    __extends(CreateApplicationPathParams, _super);
    function CreateApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateApplicationPathParams.prototype, "accountSid", void 0);
    return CreateApplicationPathParams;
}(SpeakeasyBase));
export { CreateApplicationPathParams };
export var CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum;
(function (CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum) {
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Get"] = "GET";
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Post"] = "POST";
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Put"] = "PUT";
    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum || (CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum = {}));
export var CreateApplicationCreateApplicationRequestSmsMethodEnum;
(function (CreateApplicationCreateApplicationRequestSmsMethodEnum) {
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Head"] = "HEAD";
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Get"] = "GET";
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Post"] = "POST";
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Patch"] = "PATCH";
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Put"] = "PUT";
    CreateApplicationCreateApplicationRequestSmsMethodEnum["Delete"] = "DELETE";
})(CreateApplicationCreateApplicationRequestSmsMethodEnum || (CreateApplicationCreateApplicationRequestSmsMethodEnum = {}));
export var CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum;
(function (CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum) {
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum || (CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum = {}));
export var CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum;
(function (CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum) {
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Get"] = "GET";
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Post"] = "POST";
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum || (CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum = {}));
export var CreateApplicationCreateApplicationRequestVoiceMethodEnum;
(function (CreateApplicationCreateApplicationRequestVoiceMethodEnum) {
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Head"] = "HEAD";
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Get"] = "GET";
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Post"] = "POST";
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Patch"] = "PATCH";
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Put"] = "PUT";
    CreateApplicationCreateApplicationRequestVoiceMethodEnum["Delete"] = "DELETE";
})(CreateApplicationCreateApplicationRequestVoiceMethodEnum || (CreateApplicationCreateApplicationRequestVoiceMethodEnum = {}));
var CreateApplicationCreateApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateApplicationCreateApplicationRequest, _super);
    function CreateApplicationCreateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ApiVersion;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=MessageStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "messageStatusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsStatusCallback;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "smsStatusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceCallerIdLookup;" }),
        __metadata("design:type", Boolean)
    ], CreateApplicationCreateApplicationRequest.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], CreateApplicationCreateApplicationRequest.prototype, "voiceUrl", void 0);
    return CreateApplicationCreateApplicationRequest;
}(SpeakeasyBase));
export { CreateApplicationCreateApplicationRequest };
var CreateApplicationSecurity = /** @class */ (function (_super) {
    __extends(CreateApplicationSecurity, _super);
    function CreateApplicationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateApplicationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateApplicationSecurity;
}(SpeakeasyBase));
export { CreateApplicationSecurity };
var CreateApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateApplicationRequest, _super);
    function CreateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateApplicationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateApplicationPathParams)
    ], CreateApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateApplicationCreateApplicationRequest)
    ], CreateApplicationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateApplicationSecurity)
    ], CreateApplicationRequest.prototype, "security", void 0);
    return CreateApplicationRequest;
}(SpeakeasyBase));
export { CreateApplicationRequest };
var CreateApplicationResponse = /** @class */ (function (_super) {
    __extends(CreateApplicationResponse, _super);
    function CreateApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountApplication)
    ], CreateApplicationResponse.prototype, "apiV2010AccountApplication", void 0);
    return CreateApplicationResponse;
}(SpeakeasyBase));
export { CreateApplicationResponse };
