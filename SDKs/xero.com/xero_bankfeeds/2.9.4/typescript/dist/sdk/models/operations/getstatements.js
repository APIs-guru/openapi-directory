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
var GetStatementsQueryParams = /** @class */ (function (_super) {
    __extends(GetStatementsQueryParams, _super);
    function GetStatementsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetStatementsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetStatementsQueryParams.prototype, "pageSize", void 0);
    return GetStatementsQueryParams;
}(SpeakeasyBase));
export { GetStatementsQueryParams };
var GetStatementsHeaders = /** @class */ (function (_super) {
    __extends(GetStatementsHeaders, _super);
    function GetStatementsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Xero-Application-Id" }),
        __metadata("design:type", String)
    ], GetStatementsHeaders.prototype, "xeroApplicationId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetStatementsHeaders.prototype, "xeroTenantId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Xero-User-Id" }),
        __metadata("design:type", String)
    ], GetStatementsHeaders.prototype, "xeroUserId", void 0);
    return GetStatementsHeaders;
}(SpeakeasyBase));
export { GetStatementsHeaders };
var GetStatementsSecurity = /** @class */ (function (_super) {
    __extends(GetStatementsSecurity, _super);
    function GetStatementsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetStatementsSecurity.prototype, "oAuth2", void 0);
    return GetStatementsSecurity;
}(SpeakeasyBase));
export { GetStatementsSecurity };
var GetStatementsRequest = /** @class */ (function (_super) {
    __extends(GetStatementsRequest, _super);
    function GetStatementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStatementsQueryParams)
    ], GetStatementsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStatementsHeaders)
    ], GetStatementsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStatementsSecurity)
    ], GetStatementsRequest.prototype, "security", void 0);
    return GetStatementsRequest;
}(SpeakeasyBase));
export { GetStatementsRequest };
var GetStatementsResponse = /** @class */ (function (_super) {
    __extends(GetStatementsResponse, _super);
    function GetStatementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStatementsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Statements)
    ], GetStatementsResponse.prototype, "statements", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStatementsResponse.prototype, "statusCode", void 0);
    return GetStatementsResponse;
}(SpeakeasyBase));
export { GetStatementsResponse };
