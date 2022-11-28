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
var GetPayItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetPayItemsQueryParams, _super);
    function GetPayItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetPayItemsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPayItemsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" }),
        __metadata("design:type", String)
    ], GetPayItemsQueryParams.prototype, "where", void 0);
    return GetPayItemsQueryParams;
}(SpeakeasyBase));
export { GetPayItemsQueryParams };
var GetPayItemsHeaders = /** @class */ (function (_super) {
    __extends(GetPayItemsHeaders, _super);
    function GetPayItemsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetPayItemsHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetPayItemsHeaders.prototype, "xeroTenantId", void 0);
    return GetPayItemsHeaders;
}(SpeakeasyBase));
export { GetPayItemsHeaders };
var GetPayItemsSecurity = /** @class */ (function (_super) {
    __extends(GetPayItemsSecurity, _super);
    function GetPayItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetPayItemsSecurity.prototype, "oAuth2", void 0);
    return GetPayItemsSecurity;
}(SpeakeasyBase));
export { GetPayItemsSecurity };
var GetPayItemsRequest = /** @class */ (function (_super) {
    __extends(GetPayItemsRequest, _super);
    function GetPayItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayItemsQueryParams)
    ], GetPayItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayItemsHeaders)
    ], GetPayItemsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayItemsSecurity)
    ], GetPayItemsRequest.prototype, "security", void 0);
    return GetPayItemsRequest;
}(SpeakeasyBase));
export { GetPayItemsRequest };
var GetPayItemsResponse = /** @class */ (function (_super) {
    __extends(GetPayItemsResponse, _super);
    function GetPayItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiException)
    ], GetPayItemsResponse.prototype, "apiException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayItems)
    ], GetPayItemsResponse.prototype, "payItems", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayItemsResponse.prototype, "statusCode", void 0);
    return GetPayItemsResponse;
}(SpeakeasyBase));
export { GetPayItemsResponse };
