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
export var UPDATESERVICE_SERVERS = [
    "https://verify.twilio.com",
];
var UpdateServicePathParams = /** @class */ (function (_super) {
    __extends(UpdateServicePathParams, _super);
    function UpdateServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateServicePathParams.prototype, "sid", void 0);
    return UpdateServicePathParams;
}(SpeakeasyBase));
export { UpdateServicePathParams };
var UpdateServiceUpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceUpdateServiceRequest, _super);
    function UpdateServiceUpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CodeLength;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "codeLength", void 0);
    __decorate([
        Metadata({ data: "form, name=CustomCodeEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "customCodeEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=DefaultTemplateSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "defaultTemplateSid", void 0);
    __decorate([
        Metadata({ data: "form, name=DoNotShareWarningEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "doNotShareWarningEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=DtmfInputRequired;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "dtmfInputRequired", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=LookupEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "lookupEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=Psd2Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "psd2Enabled", void 0);
    __decorate([
        Metadata({ data: "form, name=Push.ApnCredentialSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "pushApnCredentialSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Push.FcmCredentialSid;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "pushFcmCredentialSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Push.IncludeDate;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "pushIncludeDate", void 0);
    __decorate([
        Metadata({ data: "form, name=SkipSmsToLandlines;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "skipSmsToLandlines", void 0);
    __decorate([
        Metadata({ data: "form, name=Totp.CodeLength;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "totpCodeLength", void 0);
    __decorate([
        Metadata({ data: "form, name=Totp.Issuer;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "totpIssuer", void 0);
    __decorate([
        Metadata({ data: "form, name=Totp.Skew;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "totpSkew", void 0);
    __decorate([
        Metadata({ data: "form, name=Totp.TimeStep;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "totpTimeStep", void 0);
    __decorate([
        Metadata({ data: "form, name=TtsName;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "ttsName", void 0);
    return UpdateServiceUpdateServiceRequest;
}(SpeakeasyBase));
export { UpdateServiceUpdateServiceRequest };
var UpdateServiceSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceSecurity, _super);
    function UpdateServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceSecurity;
}(SpeakeasyBase));
export { UpdateServiceSecurity };
var UpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceRequest, _super);
    function UpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServicePathParams)
    ], UpdateServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceUpdateServiceRequest)
    ], UpdateServiceRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceSecurity)
    ], UpdateServiceRequest.prototype, "security", void 0);
    return UpdateServiceRequest;
}(SpeakeasyBase));
export { UpdateServiceRequest };
var UpdateServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceResponse, _super);
    function UpdateServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2Service)
    ], UpdateServiceResponse.prototype, "verifyV2Service", void 0);
    return UpdateServiceResponse;
}(SpeakeasyBase));
export { UpdateServiceResponse };
