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
var GetAssetSettingsHeaders = /** @class */ (function (_super) {
    __extends(GetAssetSettingsHeaders, _super);
    function GetAssetSettingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], GetAssetSettingsHeaders.prototype, "xeroTenantId", void 0);
    return GetAssetSettingsHeaders;
}(SpeakeasyBase));
export { GetAssetSettingsHeaders };
var GetAssetSettingsSecurity = /** @class */ (function (_super) {
    __extends(GetAssetSettingsSecurity, _super);
    function GetAssetSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetAssetSettingsSecurity.prototype, "oAuth2", void 0);
    return GetAssetSettingsSecurity;
}(SpeakeasyBase));
export { GetAssetSettingsSecurity };
var GetAssetSettingsRequest = /** @class */ (function (_super) {
    __extends(GetAssetSettingsRequest, _super);
    function GetAssetSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssetSettingsHeaders)
    ], GetAssetSettingsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssetSettingsSecurity)
    ], GetAssetSettingsRequest.prototype, "security", void 0);
    return GetAssetSettingsRequest;
}(SpeakeasyBase));
export { GetAssetSettingsRequest };
var GetAssetSettingsResponse = /** @class */ (function (_super) {
    __extends(GetAssetSettingsResponse, _super);
    function GetAssetSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssetSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Setting)
    ], GetAssetSettingsResponse.prototype, "setting", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssetSettingsResponse.prototype, "statusCode", void 0);
    return GetAssetSettingsResponse;
}(SpeakeasyBase));
export { GetAssetSettingsResponse };
