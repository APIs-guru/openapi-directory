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
export var UPDATEAPPLICATION_SERVERS = [
    "https://api.twilio.com",
];
var UpdateApplicationPathParams = /** @class */ (function (_super) {
    __extends(UpdateApplicationPathParams, _super);
    function UpdateApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateApplicationPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateApplicationPathParams.prototype, "sid", void 0);
    return UpdateApplicationPathParams;
}(SpeakeasyBase));
export { UpdateApplicationPathParams };
export var UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum;
(function (UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum) {
    UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum["Head"] = "HEAD";
    UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum["Get"] = "GET";
    UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum["Post"] = "POST";
    UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum["Patch"] = "PATCH";
    UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum["Put"] = "PUT";
    UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum || (UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum = {}));
export var UpdateApplicationUpdateApplicationRequestSmsMethodEnum;
(function (UpdateApplicationUpdateApplicationRequestSmsMethodEnum) {
    UpdateApplicationUpdateApplicationRequestSmsMethodEnum["Head"] = "HEAD";
    UpdateApplicationUpdateApplicationRequestSmsMethodEnum["Get"] = "GET";
    UpdateApplicationUpdateApplicationRequestSmsMethodEnum["Post"] = "POST";
    UpdateApplicationUpdateApplicationRequestSmsMethodEnum["Patch"] = "PATCH";
    UpdateApplicationUpdateApplicationRequestSmsMethodEnum["Put"] = "PUT";
    UpdateApplicationUpdateApplicationRequestSmsMethodEnum["Delete"] = "DELETE";
})(UpdateApplicationUpdateApplicationRequestSmsMethodEnum || (UpdateApplicationUpdateApplicationRequestSmsMethodEnum = {}));
export var UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum;
(function (UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum) {
    UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum["Get"] = "GET";
    UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum["Post"] = "POST";
    UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum || (UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum = {}));
export var UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum;
(function (UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum) {
    UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum["Get"] = "GET";
    UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum["Post"] = "POST";
    UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum || (UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum = {}));
export var UpdateApplicationUpdateApplicationRequestVoiceMethodEnum;
(function (UpdateApplicationUpdateApplicationRequestVoiceMethodEnum) {
    UpdateApplicationUpdateApplicationRequestVoiceMethodEnum["Head"] = "HEAD";
    UpdateApplicationUpdateApplicationRequestVoiceMethodEnum["Get"] = "GET";
    UpdateApplicationUpdateApplicationRequestVoiceMethodEnum["Post"] = "POST";
    UpdateApplicationUpdateApplicationRequestVoiceMethodEnum["Patch"] = "PATCH";
    UpdateApplicationUpdateApplicationRequestVoiceMethodEnum["Put"] = "PUT";
    UpdateApplicationUpdateApplicationRequestVoiceMethodEnum["Delete"] = "DELETE";
})(UpdateApplicationUpdateApplicationRequestVoiceMethodEnum || (UpdateApplicationUpdateApplicationRequestVoiceMethodEnum = {}));
var UpdateApplicationUpdateApplicationRequest = /** @class */ (function (_super) {
    __extends(UpdateApplicationUpdateApplicationRequest, _super);
    function UpdateApplicationUpdateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ApiVersion;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=MessageStatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "messageStatusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "smsFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "smsFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsMethod;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "smsMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsStatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "smsStatusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=SmsUrl;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "smsUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceCallerIdLookup;" }),
        __metadata("design:type", Boolean)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], UpdateApplicationUpdateApplicationRequest.prototype, "voiceUrl", void 0);
    return UpdateApplicationUpdateApplicationRequest;
}(SpeakeasyBase));
export { UpdateApplicationUpdateApplicationRequest };
var UpdateApplicationSecurity = /** @class */ (function (_super) {
    __extends(UpdateApplicationSecurity, _super);
    function UpdateApplicationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateApplicationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateApplicationSecurity;
}(SpeakeasyBase));
export { UpdateApplicationSecurity };
var UpdateApplicationRequest = /** @class */ (function (_super) {
    __extends(UpdateApplicationRequest, _super);
    function UpdateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateApplicationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateApplicationPathParams)
    ], UpdateApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateApplicationUpdateApplicationRequest)
    ], UpdateApplicationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateApplicationSecurity)
    ], UpdateApplicationRequest.prototype, "security", void 0);
    return UpdateApplicationRequest;
}(SpeakeasyBase));
export { UpdateApplicationRequest };
var UpdateApplicationResponse = /** @class */ (function (_super) {
    __extends(UpdateApplicationResponse, _super);
    function UpdateApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountApplication)
    ], UpdateApplicationResponse.prototype, "apiV2010AccountApplication", void 0);
    return UpdateApplicationResponse;
}(SpeakeasyBase));
export { UpdateApplicationResponse };
