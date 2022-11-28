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
var GetStatementPathParams = /** @class */ (function (_super) {
    __extends(GetStatementPathParams, _super);
    function GetStatementPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=statementID" }),
        __metadata("design:type", String)
    ], GetStatementPathParams.prototype, "statementId", void 0);
    return GetStatementPathParams;
}(SpeakeasyBase));
export { GetStatementPathParams };
var GetStatementQueryParams = /** @class */ (function (_super) {
    __extends(GetStatementQueryParams, _super);
    function GetStatementQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=statementId" }),
        __metadata("design:type", String)
    ], GetStatementQueryParams.prototype, "statementId", void 0);
    return GetStatementQueryParams;
}(SpeakeasyBase));
export { GetStatementQueryParams };
var GetStatementHeaders = /** @class */ (function (_super) {
    __extends(GetStatementHeaders, _super);
    function GetStatementHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetStatementHeaders.prototype, "xeroTenantId", void 0);
    return GetStatementHeaders;
}(SpeakeasyBase));
export { GetStatementHeaders };
var GetStatementSecurity = /** @class */ (function (_super) {
    __extends(GetStatementSecurity, _super);
    function GetStatementSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetStatementSecurity.prototype, "oAuth2", void 0);
    return GetStatementSecurity;
}(SpeakeasyBase));
export { GetStatementSecurity };
var GetStatementRequest = /** @class */ (function (_super) {
    __extends(GetStatementRequest, _super);
    function GetStatementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStatementPathParams)
    ], GetStatementRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStatementQueryParams)
    ], GetStatementRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStatementHeaders)
    ], GetStatementRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStatementSecurity)
    ], GetStatementRequest.prototype, "security", void 0);
    return GetStatementRequest;
}(SpeakeasyBase));
export { GetStatementRequest };
var GetStatementResponse = /** @class */ (function (_super) {
    __extends(GetStatementResponse, _super);
    function GetStatementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStatementResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Statement)
    ], GetStatementResponse.prototype, "statement", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStatementResponse.prototype, "statusCode", void 0);
    return GetStatementResponse;
}(SpeakeasyBase));
export { GetStatementResponse };
