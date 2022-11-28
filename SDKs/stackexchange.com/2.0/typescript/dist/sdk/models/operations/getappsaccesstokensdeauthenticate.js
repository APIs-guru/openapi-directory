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
var GetAppsAccessTokensDeAuthenticatePathParams = /** @class */ (function (_super) {
    __extends(GetAppsAccessTokensDeAuthenticatePathParams, _super);
    function GetAppsAccessTokensDeAuthenticatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessTokens" }),
        __metadata("design:type", String)
    ], GetAppsAccessTokensDeAuthenticatePathParams.prototype, "accessTokens", void 0);
    return GetAppsAccessTokensDeAuthenticatePathParams;
}(SpeakeasyBase));
export { GetAppsAccessTokensDeAuthenticatePathParams };
var GetAppsAccessTokensDeAuthenticateQueryParams = /** @class */ (function (_super) {
    __extends(GetAppsAccessTokensDeAuthenticateQueryParams, _super);
    function GetAppsAccessTokensDeAuthenticateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetAppsAccessTokensDeAuthenticateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetAppsAccessTokensDeAuthenticateQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAppsAccessTokensDeAuthenticateQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetAppsAccessTokensDeAuthenticateQueryParams.prototype, "pagesize", void 0);
    return GetAppsAccessTokensDeAuthenticateQueryParams;
}(SpeakeasyBase));
export { GetAppsAccessTokensDeAuthenticateQueryParams };
var GetAppsAccessTokensDeAuthenticateRequest = /** @class */ (function (_super) {
    __extends(GetAppsAccessTokensDeAuthenticateRequest, _super);
    function GetAppsAccessTokensDeAuthenticateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAppsAccessTokensDeAuthenticatePathParams)
    ], GetAppsAccessTokensDeAuthenticateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAppsAccessTokensDeAuthenticateQueryParams)
    ], GetAppsAccessTokensDeAuthenticateRequest.prototype, "queryParams", void 0);
    return GetAppsAccessTokensDeAuthenticateRequest;
}(SpeakeasyBase));
export { GetAppsAccessTokensDeAuthenticateRequest };
var GetAppsAccessTokensDeAuthenticateResponse = /** @class */ (function (_super) {
    __extends(GetAppsAccessTokensDeAuthenticateResponse, _super);
    function GetAppsAccessTokensDeAuthenticateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAppsAccessTokensDeAuthenticateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAppsAccessTokensDeAuthenticateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAppsAccessTokensDeAuthenticateResponse.prototype, "statusCode", void 0);
    return GetAppsAccessTokensDeAuthenticateResponse;
}(SpeakeasyBase));
export { GetAppsAccessTokensDeAuthenticateResponse };
