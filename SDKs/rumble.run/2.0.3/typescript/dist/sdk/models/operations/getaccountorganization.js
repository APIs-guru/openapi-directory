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
var GetAccountOrganizationPathParams = /** @class */ (function (_super) {
    __extends(GetAccountOrganizationPathParams, _super);
    function GetAccountOrganizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=org_id" }),
        __metadata("design:type", String)
    ], GetAccountOrganizationPathParams.prototype, "orgId", void 0);
    return GetAccountOrganizationPathParams;
}(SpeakeasyBase));
export { GetAccountOrganizationPathParams };
var GetAccountOrganizationSecurity = /** @class */ (function (_super) {
    __extends(GetAccountOrganizationSecurity, _super);
    function GetAccountOrganizationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAccountOrganizationSecurity.prototype, "bearerAuth", void 0);
    return GetAccountOrganizationSecurity;
}(SpeakeasyBase));
export { GetAccountOrganizationSecurity };
var GetAccountOrganizationRequest = /** @class */ (function (_super) {
    __extends(GetAccountOrganizationRequest, _super);
    function GetAccountOrganizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAccountOrganizationPathParams)
    ], GetAccountOrganizationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAccountOrganizationSecurity)
    ], GetAccountOrganizationRequest.prototype, "security", void 0);
    return GetAccountOrganizationRequest;
}(SpeakeasyBase));
export { GetAccountOrganizationRequest };
var GetAccountOrganizationResponse = /** @class */ (function (_super) {
    __extends(GetAccountOrganizationResponse, _super);
    function GetAccountOrganizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAccountOrganizationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAccountOrganizationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAccountOrganizationResponse.prototype, "statusCode", void 0);
    return GetAccountOrganizationResponse;
}(SpeakeasyBase));
export { GetAccountOrganizationResponse };
