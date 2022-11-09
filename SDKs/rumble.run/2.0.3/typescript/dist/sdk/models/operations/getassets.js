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
var GetAssetsQueryParams = /** @class */ (function (_super) {
    __extends(GetAssetsQueryParams, _super);
    function GetAssetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetAssetsQueryParams.prototype, "search", void 0);
    return GetAssetsQueryParams;
}(SpeakeasyBase));
export { GetAssetsQueryParams };
var GetAssetsSecurity = /** @class */ (function (_super) {
    __extends(GetAssetsSecurity, _super);
    function GetAssetsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAssetsSecurity.prototype, "bearerAuth", void 0);
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
        Metadata({ elemType: shared.Asset }),
        __metadata("design:type", Array)
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
