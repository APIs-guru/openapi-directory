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
export var CREATEVERIFICATION_SERVERS = [
    "https://verify.twilio.com",
];
var CreateVerificationPathParams = /** @class */ (function (_super) {
    __extends(CreateVerificationPathParams, _super);
    function CreateVerificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateVerificationPathParams.prototype, "serviceSid", void 0);
    return CreateVerificationPathParams;
}(SpeakeasyBase));
export { CreateVerificationPathParams };
var CreateVerificationCreateVerificationRequest = /** @class */ (function (_super) {
    __extends(CreateVerificationCreateVerificationRequest, _super);
    function CreateVerificationCreateVerificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Amount;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "form, name=AppHash;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "appHash", void 0);
    __decorate([
        Metadata({ data: "form, name=Channel;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "channel", void 0);
    __decorate([
        Metadata({ data: "form, name=ChannelConfiguration;" }),
        __metadata("design:type", Object)
    ], CreateVerificationCreateVerificationRequest.prototype, "channelConfiguration", void 0);
    __decorate([
        Metadata({ data: "form, name=CustomCode;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "customCode", void 0);
    __decorate([
        Metadata({ data: "form, name=CustomFriendlyName;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "customFriendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=CustomMessage;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "customMessage", void 0);
    __decorate([
        Metadata({ data: "form, name=Locale;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "locale", void 0);
    __decorate([
        Metadata({ data: "form, name=Payee;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "payee", void 0);
    __decorate([
        Metadata({ data: "form, name=RateLimits;" }),
        __metadata("design:type", Object)
    ], CreateVerificationCreateVerificationRequest.prototype, "rateLimits", void 0);
    __decorate([
        Metadata({ data: "form, name=SendDigits;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "sendDigits", void 0);
    __decorate([
        Metadata({ data: "form, name=TemplateCustomSubstitutions;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "templateCustomSubstitutions", void 0);
    __decorate([
        Metadata({ data: "form, name=TemplateSid;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "templateSid", void 0);
    __decorate([
        Metadata({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], CreateVerificationCreateVerificationRequest.prototype, "to", void 0);
    return CreateVerificationCreateVerificationRequest;
}(SpeakeasyBase));
export { CreateVerificationCreateVerificationRequest };
var CreateVerificationSecurity = /** @class */ (function (_super) {
    __extends(CreateVerificationSecurity, _super);
    function CreateVerificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateVerificationSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateVerificationSecurity;
}(SpeakeasyBase));
export { CreateVerificationSecurity };
var CreateVerificationRequest = /** @class */ (function (_super) {
    __extends(CreateVerificationRequest, _super);
    function CreateVerificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateVerificationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateVerificationPathParams)
    ], CreateVerificationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateVerificationCreateVerificationRequest)
    ], CreateVerificationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateVerificationSecurity)
    ], CreateVerificationRequest.prototype, "security", void 0);
    return CreateVerificationRequest;
}(SpeakeasyBase));
export { CreateVerificationRequest };
var CreateVerificationResponse = /** @class */ (function (_super) {
    __extends(CreateVerificationResponse, _super);
    function CreateVerificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateVerificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateVerificationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2ServiceVerification)
    ], CreateVerificationResponse.prototype, "verifyV2ServiceVerification", void 0);
    return CreateVerificationResponse;
}(SpeakeasyBase));
export { CreateVerificationResponse };
