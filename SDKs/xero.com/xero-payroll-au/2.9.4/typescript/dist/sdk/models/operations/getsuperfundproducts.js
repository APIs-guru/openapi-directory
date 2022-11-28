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
var GetSuperfundProductsQueryParams = /** @class */ (function (_super) {
    __extends(GetSuperfundProductsQueryParams, _super);
    function GetSuperfundProductsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ABN" }),
        __metadata("design:type", String)
    ], GetSuperfundProductsQueryParams.prototype, "abn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=USI" }),
        __metadata("design:type", String)
    ], GetSuperfundProductsQueryParams.prototype, "usi", void 0);
    return GetSuperfundProductsQueryParams;
}(SpeakeasyBase));
export { GetSuperfundProductsQueryParams };
var GetSuperfundProductsHeaders = /** @class */ (function (_super) {
    __extends(GetSuperfundProductsHeaders, _super);
    function GetSuperfundProductsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetSuperfundProductsHeaders.prototype, "xeroTenantId", void 0);
    return GetSuperfundProductsHeaders;
}(SpeakeasyBase));
export { GetSuperfundProductsHeaders };
var GetSuperfundProductsSecurity = /** @class */ (function (_super) {
    __extends(GetSuperfundProductsSecurity, _super);
    function GetSuperfundProductsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetSuperfundProductsSecurity.prototype, "oAuth2", void 0);
    return GetSuperfundProductsSecurity;
}(SpeakeasyBase));
export { GetSuperfundProductsSecurity };
var GetSuperfundProductsRequest = /** @class */ (function (_super) {
    __extends(GetSuperfundProductsRequest, _super);
    function GetSuperfundProductsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSuperfundProductsQueryParams)
    ], GetSuperfundProductsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSuperfundProductsHeaders)
    ], GetSuperfundProductsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSuperfundProductsSecurity)
    ], GetSuperfundProductsRequest.prototype, "security", void 0);
    return GetSuperfundProductsRequest;
}(SpeakeasyBase));
export { GetSuperfundProductsRequest };
var GetSuperfundProductsResponse = /** @class */ (function (_super) {
    __extends(GetSuperfundProductsResponse, _super);
    function GetSuperfundProductsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiException)
    ], GetSuperfundProductsResponse.prototype, "apiException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSuperfundProductsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSuperfundProductsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SuperFundProducts)
    ], GetSuperfundProductsResponse.prototype, "superFundProducts", void 0);
    return GetSuperfundProductsResponse;
}(SpeakeasyBase));
export { GetSuperfundProductsResponse };
