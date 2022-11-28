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
export var ExchangeAuthCodeRequestBodyGrantTypeEnum;
(function (ExchangeAuthCodeRequestBodyGrantTypeEnum) {
    ExchangeAuthCodeRequestBodyGrantTypeEnum["AuthorizationCode"] = "authorization_code";
})(ExchangeAuthCodeRequestBodyGrantTypeEnum || (ExchangeAuthCodeRequestBodyGrantTypeEnum = {}));
var ExchangeAuthCodeRequestBody = /** @class */ (function (_super) {
    __extends(ExchangeAuthCodeRequestBody, _super);
    function ExchangeAuthCodeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ExchangeAuthCodeRequestBody.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grant_type" }),
        __metadata("design:type", String)
    ], ExchangeAuthCodeRequestBody.prototype, "grantType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_uri" }),
        __metadata("design:type", String)
    ], ExchangeAuthCodeRequestBody.prototype, "redirectUri", void 0);
    return ExchangeAuthCodeRequestBody;
}(SpeakeasyBase));
export { ExchangeAuthCodeRequestBody };
var ExchangeAuthCodeRequest = /** @class */ (function (_super) {
    __extends(ExchangeAuthCodeRequest, _super);
    function ExchangeAuthCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.auth+json" }),
        __metadata("design:type", ExchangeAuthCodeRequestBody)
    ], ExchangeAuthCodeRequest.prototype, "request", void 0);
    return ExchangeAuthCodeRequest;
}(SpeakeasyBase));
export { ExchangeAuthCodeRequest };
var ExchangeAuthCodeResponse = /** @class */ (function (_super) {
    __extends(ExchangeAuthCodeResponse, _super);
    function ExchangeAuthCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExchangeAuthCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExchangeAuthCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Auth)
    ], ExchangeAuthCodeResponse.prototype, "auth", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthError)
    ], ExchangeAuthCodeResponse.prototype, "authError", void 0);
    return ExchangeAuthCodeResponse;
}(SpeakeasyBase));
export { ExchangeAuthCodeResponse };
