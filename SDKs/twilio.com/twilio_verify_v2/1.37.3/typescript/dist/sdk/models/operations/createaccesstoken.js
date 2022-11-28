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
export var CreateAccessTokenServerList = [
    "https://verify.twilio.com",
];
var CreateAccessTokenPathParams = /** @class */ (function (_super) {
    __extends(CreateAccessTokenPathParams, _super);
    function CreateAccessTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateAccessTokenPathParams.prototype, "serviceSid", void 0);
    return CreateAccessTokenPathParams;
}(SpeakeasyBase));
export { CreateAccessTokenPathParams };
var CreateAccessTokenCreateAccessTokenRequest = /** @class */ (function (_super) {
    __extends(CreateAccessTokenCreateAccessTokenRequest, _super);
    function CreateAccessTokenCreateAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FactorFriendlyName;" }),
        __metadata("design:type", String)
    ], CreateAccessTokenCreateAccessTokenRequest.prototype, "factorFriendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FactorType;" }),
        __metadata("design:type", String)
    ], CreateAccessTokenCreateAccessTokenRequest.prototype, "factorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateAccessTokenCreateAccessTokenRequest.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], CreateAccessTokenCreateAccessTokenRequest.prototype, "ttl", void 0);
    return CreateAccessTokenCreateAccessTokenRequest;
}(SpeakeasyBase));
export { CreateAccessTokenCreateAccessTokenRequest };
var CreateAccessTokenSecurity = /** @class */ (function (_super) {
    __extends(CreateAccessTokenSecurity, _super);
    function CreateAccessTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateAccessTokenSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateAccessTokenSecurity;
}(SpeakeasyBase));
export { CreateAccessTokenSecurity };
var CreateAccessTokenRequest = /** @class */ (function (_super) {
    __extends(CreateAccessTokenRequest, _super);
    function CreateAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAccessTokenRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAccessTokenPathParams)
    ], CreateAccessTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateAccessTokenCreateAccessTokenRequest)
    ], CreateAccessTokenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAccessTokenSecurity)
    ], CreateAccessTokenRequest.prototype, "security", void 0);
    return CreateAccessTokenRequest;
}(SpeakeasyBase));
export { CreateAccessTokenRequest };
var CreateAccessTokenResponse = /** @class */ (function (_super) {
    __extends(CreateAccessTokenResponse, _super);
    function CreateAccessTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAccessTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAccessTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyV2ServiceAccessToken)
    ], CreateAccessTokenResponse.prototype, "verifyV2ServiceAccessToken", void 0);
    return CreateAccessTokenResponse;
}(SpeakeasyBase));
export { CreateAccessTokenResponse };
