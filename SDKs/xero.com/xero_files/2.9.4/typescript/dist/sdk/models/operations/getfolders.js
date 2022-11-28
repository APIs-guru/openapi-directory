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
export var GetFoldersSortEnum;
(function (GetFoldersSortEnum) {
    GetFoldersSortEnum["Name"] = "Name";
    GetFoldersSortEnum["Size"] = "Size";
    GetFoldersSortEnum["CreatedDateUtc"] = "CreatedDateUTC";
})(GetFoldersSortEnum || (GetFoldersSortEnum = {}));
var GetFoldersQueryParams = /** @class */ (function (_super) {
    __extends(GetFoldersQueryParams, _super);
    function GetFoldersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetFoldersQueryParams.prototype, "sort", void 0);
    return GetFoldersQueryParams;
}(SpeakeasyBase));
export { GetFoldersQueryParams };
var GetFoldersHeaders = /** @class */ (function (_super) {
    __extends(GetFoldersHeaders, _super);
    function GetFoldersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], GetFoldersHeaders.prototype, "xeroTenantId", void 0);
    return GetFoldersHeaders;
}(SpeakeasyBase));
export { GetFoldersHeaders };
var GetFoldersSecurity = /** @class */ (function (_super) {
    __extends(GetFoldersSecurity, _super);
    function GetFoldersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetFoldersSecurity.prototype, "oAuth2", void 0);
    return GetFoldersSecurity;
}(SpeakeasyBase));
export { GetFoldersSecurity };
var GetFoldersRequest = /** @class */ (function (_super) {
    __extends(GetFoldersRequest, _super);
    function GetFoldersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFoldersQueryParams)
    ], GetFoldersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFoldersHeaders)
    ], GetFoldersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFoldersSecurity)
    ], GetFoldersRequest.prototype, "security", void 0);
    return GetFoldersRequest;
}(SpeakeasyBase));
export { GetFoldersRequest };
var GetFoldersResponse = /** @class */ (function (_super) {
    __extends(GetFoldersResponse, _super);
    function GetFoldersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFoldersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetFoldersResponse.prototype, "folders", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFoldersResponse.prototype, "statusCode", void 0);
    return GetFoldersResponse;
}(SpeakeasyBase));
export { GetFoldersResponse };
