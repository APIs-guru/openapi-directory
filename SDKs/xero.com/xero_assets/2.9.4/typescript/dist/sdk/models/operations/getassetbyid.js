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
var GetAssetByIdPathParams = /** @class */ (function (_super) {
    __extends(GetAssetByIdPathParams, _super);
    function GetAssetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetAssetByIdPathParams.prototype, "id", void 0);
    return GetAssetByIdPathParams;
}(SpeakeasyBase));
export { GetAssetByIdPathParams };
var GetAssetByIdHeaders = /** @class */ (function (_super) {
    __extends(GetAssetByIdHeaders, _super);
    function GetAssetByIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], GetAssetByIdHeaders.prototype, "xeroTenantId", void 0);
    return GetAssetByIdHeaders;
}(SpeakeasyBase));
export { GetAssetByIdHeaders };
var GetAssetByIdSecurity = /** @class */ (function (_super) {
    __extends(GetAssetByIdSecurity, _super);
    function GetAssetByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetAssetByIdSecurity.prototype, "oAuth2", void 0);
    return GetAssetByIdSecurity;
}(SpeakeasyBase));
export { GetAssetByIdSecurity };
var GetAssetByIdRequest = /** @class */ (function (_super) {
    __extends(GetAssetByIdRequest, _super);
    function GetAssetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssetByIdPathParams)
    ], GetAssetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssetByIdHeaders)
    ], GetAssetByIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssetByIdSecurity)
    ], GetAssetByIdRequest.prototype, "security", void 0);
    return GetAssetByIdRequest;
}(SpeakeasyBase));
export { GetAssetByIdRequest };
var GetAssetByIdResponse = /** @class */ (function (_super) {
    __extends(GetAssetByIdResponse, _super);
    function GetAssetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Asset)
    ], GetAssetByIdResponse.prototype, "asset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAssetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAssetByIdResponse.prototype, "statusCode", void 0);
    return GetAssetByIdResponse;
}(SpeakeasyBase));
export { GetAssetByIdResponse };
