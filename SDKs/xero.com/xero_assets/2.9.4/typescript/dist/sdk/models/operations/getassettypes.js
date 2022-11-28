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
var GetAssetTypesHeaders = /** @class */ (function (_super) {
    __extends(GetAssetTypesHeaders, _super);
    function GetAssetTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], GetAssetTypesHeaders.prototype, "xeroTenantId", void 0);
    return GetAssetTypesHeaders;
}(SpeakeasyBase));
export { GetAssetTypesHeaders };
var GetAssetTypesSecurity = /** @class */ (function (_super) {
    __extends(GetAssetTypesSecurity, _super);
    function GetAssetTypesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetAssetTypesSecurity.prototype, "oAuth2", void 0);
    return GetAssetTypesSecurity;
}(SpeakeasyBase));
export { GetAssetTypesSecurity };
var GetAssetTypesRequest = /** @class */ (function (_super) {
    __extends(GetAssetTypesRequest, _super);
    function GetAssetTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssetTypesHeaders)
    ], GetAssetTypesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssetTypesSecurity)
    ], GetAssetTypesRequest.prototype, "security", void 0);
    return GetAssetTypesRequest;
}(SpeakeasyBase));
export { GetAssetTypesRequest };
var GetAssetTypesResponse = /** @class */ (function (_super) {
    __extends(GetAssetTypesResponse, _super);
    function GetAssetTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AssetType }),
        __metadata("design:type", Array)
    ], GetAssetTypesResponse.prototype, "assetTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAssetTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAssetTypesResponse.prototype, "statusCode", void 0);
    return GetAssetTypesResponse;
}(SpeakeasyBase));
export { GetAssetTypesResponse };
