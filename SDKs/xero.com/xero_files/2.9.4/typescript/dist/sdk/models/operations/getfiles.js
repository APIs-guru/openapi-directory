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
export var GetFilesSortEnum;
(function (GetFilesSortEnum) {
    GetFilesSortEnum["Name"] = "Name";
    GetFilesSortEnum["Size"] = "Size";
    GetFilesSortEnum["CreatedDateUtc"] = "CreatedDateUTC";
})(GetFilesSortEnum || (GetFilesSortEnum = {}));
var GetFilesQueryParams = /** @class */ (function (_super) {
    __extends(GetFilesQueryParams, _super);
    function GetFilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFilesQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetFilesQueryParams.prototype, "pagesize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetFilesQueryParams.prototype, "sort", void 0);
    return GetFilesQueryParams;
}(SpeakeasyBase));
export { GetFilesQueryParams };
var GetFilesHeaders = /** @class */ (function (_super) {
    __extends(GetFilesHeaders, _super);
    function GetFilesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], GetFilesHeaders.prototype, "xeroTenantId", void 0);
    return GetFilesHeaders;
}(SpeakeasyBase));
export { GetFilesHeaders };
var GetFilesSecurity = /** @class */ (function (_super) {
    __extends(GetFilesSecurity, _super);
    function GetFilesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetFilesSecurity.prototype, "oAuth2", void 0);
    return GetFilesSecurity;
}(SpeakeasyBase));
export { GetFilesSecurity };
var GetFilesRequest = /** @class */ (function (_super) {
    __extends(GetFilesRequest, _super);
    function GetFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesQueryParams)
    ], GetFilesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesHeaders)
    ], GetFilesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesSecurity)
    ], GetFilesRequest.prototype, "security", void 0);
    return GetFilesRequest;
}(SpeakeasyBase));
export { GetFilesRequest };
var GetFilesResponse = /** @class */ (function (_super) {
    __extends(GetFilesResponse, _super);
    function GetFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFilesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Files)
    ], GetFilesResponse.prototype, "files", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFilesResponse.prototype, "statusCode", void 0);
    return GetFilesResponse;
}(SpeakeasyBase));
export { GetFilesResponse };
