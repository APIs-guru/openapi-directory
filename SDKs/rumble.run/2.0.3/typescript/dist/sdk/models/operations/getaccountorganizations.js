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
var GetAccountOrganizationsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountOrganizationsQueryParams, _super);
    function GetAccountOrganizationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetAccountOrganizationsQueryParams.prototype, "search", void 0);
    return GetAccountOrganizationsQueryParams;
}(SpeakeasyBase));
export { GetAccountOrganizationsQueryParams };
var GetAccountOrganizationsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountOrganizationsSecurity, _super);
    function GetAccountOrganizationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAccountOrganizationsSecurity.prototype, "bearerAuth", void 0);
    return GetAccountOrganizationsSecurity;
}(SpeakeasyBase));
export { GetAccountOrganizationsSecurity };
var GetAccountOrganizationsRequest = /** @class */ (function (_super) {
    __extends(GetAccountOrganizationsRequest, _super);
    function GetAccountOrganizationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAccountOrganizationsQueryParams)
    ], GetAccountOrganizationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAccountOrganizationsSecurity)
    ], GetAccountOrganizationsRequest.prototype, "security", void 0);
    return GetAccountOrganizationsRequest;
}(SpeakeasyBase));
export { GetAccountOrganizationsRequest };
var GetAccountOrganizationsResponse = /** @class */ (function (_super) {
    __extends(GetAccountOrganizationsResponse, _super);
    function GetAccountOrganizationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAccountOrganizationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.Organization }),
        __metadata("design:type", Array)
    ], GetAccountOrganizationsResponse.prototype, "organizations", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAccountOrganizationsResponse.prototype, "statusCode", void 0);
    return GetAccountOrganizationsResponse;
}(SpeakeasyBase));
export { GetAccountOrganizationsResponse };
