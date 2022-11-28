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
import * as shared from "../shared";
export var UpdateSipDomainServerList = [
    "https://api.twilio.com",
];
var UpdateSipDomainPathParams = /** @class */ (function (_super) {
    __extends(UpdateSipDomainPathParams, _super);
    function UpdateSipDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateSipDomainPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSipDomainPathParams.prototype, "sid", void 0);
    return UpdateSipDomainPathParams;
}(SpeakeasyBase));
export { UpdateSipDomainPathParams };
export var UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum;
(function (UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum) {
    UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum["Head"] = "HEAD";
    UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum["Get"] = "GET";
    UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum["Post"] = "POST";
    UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum["Patch"] = "PATCH";
    UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum["Put"] = "PUT";
    UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum || (UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum = {}));
export var UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum;
(function (UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum) {
    UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum["Head"] = "HEAD";
    UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum["Get"] = "GET";
    UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum["Post"] = "POST";
    UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum["Patch"] = "PATCH";
    UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum["Put"] = "PUT";
    UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum["Delete"] = "DELETE";
})(UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum || (UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum = {}));
export var UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum;
(function (UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum) {
    UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum["Get"] = "GET";
    UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum["Post"] = "POST";
    UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum || (UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum = {}));
var UpdateSipDomainUpdateSipDomainRequest = /** @class */ (function (_super) {
    __extends(UpdateSipDomainUpdateSipDomainRequest, _super);
    function UpdateSipDomainUpdateSipDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ByocTrunkSid;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "byocTrunkSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DomainName;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EmergencyCallerSid;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "emergencyCallerSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EmergencyCallingEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "emergencyCallingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Secure;" }),
        __metadata("design:type", Boolean)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "secure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SipRegistration;" }),
        __metadata("design:type", Boolean)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "sipRegistration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceMethod;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "voiceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceStatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "voiceStatusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceStatusCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "voiceStatusCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceUrl;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "voiceUrl", void 0);
    return UpdateSipDomainUpdateSipDomainRequest;
}(SpeakeasyBase));
export { UpdateSipDomainUpdateSipDomainRequest };
var UpdateSipDomainSecurity = /** @class */ (function (_super) {
    __extends(UpdateSipDomainSecurity, _super);
    function UpdateSipDomainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSipDomainSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSipDomainSecurity;
}(SpeakeasyBase));
export { UpdateSipDomainSecurity };
var UpdateSipDomainRequest = /** @class */ (function (_super) {
    __extends(UpdateSipDomainRequest, _super);
    function UpdateSipDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSipDomainRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSipDomainPathParams)
    ], UpdateSipDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSipDomainUpdateSipDomainRequest)
    ], UpdateSipDomainRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSipDomainSecurity)
    ], UpdateSipDomainRequest.prototype, "security", void 0);
    return UpdateSipDomainRequest;
}(SpeakeasyBase));
export { UpdateSipDomainRequest };
var UpdateSipDomainResponse = /** @class */ (function (_super) {
    __extends(UpdateSipDomainResponse, _super);
    function UpdateSipDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSipDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSipDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipDomain)
    ], UpdateSipDomainResponse.prototype, "apiV2010AccountSipSipDomain", void 0);
    return UpdateSipDomainResponse;
}(SpeakeasyBase));
export { UpdateSipDomainResponse };
