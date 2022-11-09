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
export var GetAssetsOrderByEnum;
(function (GetAssetsOrderByEnum) {
    GetAssetsOrderByEnum["AssetType"] = "AssetType";
    GetAssetsOrderByEnum["AssetName"] = "AssetName";
    GetAssetsOrderByEnum["AssetNumber"] = "AssetNumber";
    GetAssetsOrderByEnum["PurchaseDate"] = "PurchaseDate";
    GetAssetsOrderByEnum["PurchasePrice"] = "PurchasePrice";
    GetAssetsOrderByEnum["DisposalDate"] = "DisposalDate";
    GetAssetsOrderByEnum["DisposalPrice"] = "DisposalPrice";
})(GetAssetsOrderByEnum || (GetAssetsOrderByEnum = {}));
export var GetAssetsSortDirectionEnum;
(function (GetAssetsSortDirectionEnum) {
    GetAssetsSortDirectionEnum["Asc"] = "asc";
    GetAssetsSortDirectionEnum["Desc"] = "desc";
})(GetAssetsSortDirectionEnum || (GetAssetsSortDirectionEnum = {}));
var GetAssetsQueryParams = /** @class */ (function (_super) {
    __extends(GetAssetsQueryParams, _super);
    function GetAssetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filterBy" }),
        __metadata("design:type", String)
    ], GetAssetsQueryParams.prototype, "filterBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GetAssetsQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAssetsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetAssetsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sortDirection" }),
        __metadata("design:type", String)
    ], GetAssetsQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetAssetsQueryParams.prototype, "status", void 0);
    return GetAssetsQueryParams;
}(SpeakeasyBase));
export { GetAssetsQueryParams };
var GetAssetsHeaders = /** @class */ (function (_super) {
    __extends(GetAssetsHeaders, _super);
    function GetAssetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], GetAssetsHeaders.prototype, "xeroTenantId", void 0);
    return GetAssetsHeaders;
}(SpeakeasyBase));
export { GetAssetsHeaders };
var GetAssetsSecurity = /** @class */ (function (_super) {
    __extends(GetAssetsSecurity, _super);
    function GetAssetsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetAssetsSecurity.prototype, "oAuth2", void 0);
    return GetAssetsSecurity;
}(SpeakeasyBase));
export { GetAssetsSecurity };
var GetAssetsRequest = /** @class */ (function (_super) {
    __extends(GetAssetsRequest, _super);
    function GetAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssetsQueryParams)
    ], GetAssetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssetsHeaders)
    ], GetAssetsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssetsSecurity)
    ], GetAssetsRequest.prototype, "security", void 0);
    return GetAssetsRequest;
}(SpeakeasyBase));
export { GetAssetsRequest };
var GetAssetsResponse = /** @class */ (function (_super) {
    __extends(GetAssetsResponse, _super);
    function GetAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Assets)
    ], GetAssetsResponse.prototype, "assets", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssetsResponse.prototype, "statusCode", void 0);
    return GetAssetsResponse;
}(SpeakeasyBase));
export { GetAssetsResponse };
