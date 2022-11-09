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
export var CREATEVERIFICATIONCHECK_SERVERS = [
    "https://verify.twilio.com",
];
var CreateVerificationCheckPathParams = /** @class */ (function (_super) {
    __extends(CreateVerificationCheckPathParams, _super);
    function CreateVerificationCheckPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateVerificationCheckPathParams.prototype, "serviceSid", void 0);
    return CreateVerificationCheckPathParams;
}(SpeakeasyBase));
export { CreateVerificationCheckPathParams };
var CreateVerificationCheckCreateVerificationCheckRequest = /** @class */ (function (_super) {
    __extends(CreateVerificationCheckCreateVerificationCheckRequest, _super);
    function CreateVerificationCheckCreateVerificationCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Amount;" }),
        __metadata("design:type", String)
    ], CreateVerificationCheckCreateVerificationCheckRequest.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "form, name=Code;" }),
        __metadata("design:type", String)
    ], CreateVerificationCheckCreateVerificationCheckRequest.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "form, name=Payee;" }),
        __metadata("design:type", String)
    ], CreateVerificationCheckCreateVerificationCheckRequest.prototype, "payee", void 0);
    __decorate([
        Metadata({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], CreateVerificationCheckCreateVerificationCheckRequest.prototype, "to", void 0);
    __decorate([
        Metadata({ data: "form, name=VerificationSid;" }),
        __metadata("design:type", String)
    ], CreateVerificationCheckCreateVerificationCheckRequest.prototype, "verificationSid", void 0);
    return CreateVerificationCheckCreateVerificationCheckRequest;
}(SpeakeasyBase));
export { CreateVerificationCheckCreateVerificationCheckRequest };
var CreateVerificationCheckSecurity = /** @class */ (function (_super) {
    __extends(CreateVerificationCheckSecurity, _super);
    function CreateVerificationCheckSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateVerificationCheckSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateVerificationCheckSecurity;
}(SpeakeasyBase));
export { CreateVerificationCheckSecurity };
var CreateVerificationCheckRequest = /** @class */ (function (_super) {
    __extends(CreateVerificationCheckRequest, _super);
    function CreateVerificationCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateVerificationCheckRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateVerificationCheckPathParams)
    ], CreateVerificationCheckRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateVerificationCheckCreateVerificationCheckRequest)
    ], CreateVerificationCheckRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateVerificationCheckSecurity)
    ], CreateVerificationCheckRequest.prototype, "security", void 0);
    return CreateVerificationCheckRequest;
}(SpeakeasyBase));
export { CreateVerificationCheckRequest };
var CreateVerificationCheckResponse = /** @class */ (function (_super) {
    __extends(CreateVerificationCheckResponse, _super);
    function CreateVerificationCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateVerificationCheckResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateVerificationCheckResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2ServiceVerificationCheck)
    ], CreateVerificationCheckResponse.prototype, "verifyV2ServiceVerificationCheck", void 0);
    return CreateVerificationCheckResponse;
}(SpeakeasyBase));
export { CreateVerificationCheckResponse };
