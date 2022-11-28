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
var RotateAccountOrganizationExportTokenPathParams = /** @class */ (function (_super) {
    __extends(RotateAccountOrganizationExportTokenPathParams, _super);
    function RotateAccountOrganizationExportTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" }),
        __metadata("design:type", String)
    ], RotateAccountOrganizationExportTokenPathParams.prototype, "orgId", void 0);
    return RotateAccountOrganizationExportTokenPathParams;
}(SpeakeasyBase));
export { RotateAccountOrganizationExportTokenPathParams };
var RotateAccountOrganizationExportTokenSecurity = /** @class */ (function (_super) {
    __extends(RotateAccountOrganizationExportTokenSecurity, _super);
    function RotateAccountOrganizationExportTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], RotateAccountOrganizationExportTokenSecurity.prototype, "bearerAuth", void 0);
    return RotateAccountOrganizationExportTokenSecurity;
}(SpeakeasyBase));
export { RotateAccountOrganizationExportTokenSecurity };
var RotateAccountOrganizationExportTokenRequest = /** @class */ (function (_super) {
    __extends(RotateAccountOrganizationExportTokenRequest, _super);
    function RotateAccountOrganizationExportTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RotateAccountOrganizationExportTokenPathParams)
    ], RotateAccountOrganizationExportTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RotateAccountOrganizationExportTokenSecurity)
    ], RotateAccountOrganizationExportTokenRequest.prototype, "security", void 0);
    return RotateAccountOrganizationExportTokenRequest;
}(SpeakeasyBase));
export { RotateAccountOrganizationExportTokenRequest };
var RotateAccountOrganizationExportTokenResponse = /** @class */ (function (_super) {
    __extends(RotateAccountOrganizationExportTokenResponse, _super);
    function RotateAccountOrganizationExportTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RotateAccountOrganizationExportTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Organization)
    ], RotateAccountOrganizationExportTokenResponse.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RotateAccountOrganizationExportTokenResponse.prototype, "statusCode", void 0);
    return RotateAccountOrganizationExportTokenResponse;
}(SpeakeasyBase));
export { RotateAccountOrganizationExportTokenResponse };
