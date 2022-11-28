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
var OAuthAuthorizeQueryParams = /** @class */ (function (_super) {
    __extends(OAuthAuthorizeQueryParams, _super);
    function OAuthAuthorizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_id" }),
        __metadata("design:type", String)
    ], OAuthAuthorizeQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_secret" }),
        __metadata("design:type", String)
    ], OAuthAuthorizeQueryParams.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" }),
        __metadata("design:type", String)
    ], OAuthAuthorizeQueryParams.prototype, "redirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], OAuthAuthorizeQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], OAuthAuthorizeQueryParams.prototype, "state", void 0);
    return OAuthAuthorizeQueryParams;
}(SpeakeasyBase));
export { OAuthAuthorizeQueryParams };
var OAuthAuthorizeRequest = /** @class */ (function (_super) {
    __extends(OAuthAuthorizeRequest, _super);
    function OAuthAuthorizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OAuthAuthorizeQueryParams)
    ], OAuthAuthorizeRequest.prototype, "queryParams", void 0);
    return OAuthAuthorizeRequest;
}(SpeakeasyBase));
export { OAuthAuthorizeRequest };
var OAuthAuthorizeResponse = /** @class */ (function (_super) {
    __extends(OAuthAuthorizeResponse, _super);
    function OAuthAuthorizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], OAuthAuthorizeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OAuthAuthorizeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OAuthAuthorizeResponse.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OAuthAuthorizeResponse.prototype, "statusCode", void 0);
    return OAuthAuthorizeResponse;
}(SpeakeasyBase));
export { OAuthAuthorizeResponse };
