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
var DeleteFolderPathParams = /** @class */ (function (_super) {
    __extends(DeleteFolderPathParams, _super);
    function DeleteFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FolderId" }),
        __metadata("design:type", String)
    ], DeleteFolderPathParams.prototype, "folderId", void 0);
    return DeleteFolderPathParams;
}(SpeakeasyBase));
export { DeleteFolderPathParams };
var DeleteFolderHeaders = /** @class */ (function (_super) {
    __extends(DeleteFolderHeaders, _super);
    function DeleteFolderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], DeleteFolderHeaders.prototype, "xeroTenantId", void 0);
    return DeleteFolderHeaders;
}(SpeakeasyBase));
export { DeleteFolderHeaders };
var DeleteFolderSecurity = /** @class */ (function (_super) {
    __extends(DeleteFolderSecurity, _super);
    function DeleteFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteFolderSecurity.prototype, "oAuth2", void 0);
    return DeleteFolderSecurity;
}(SpeakeasyBase));
export { DeleteFolderSecurity };
var DeleteFolderRequest = /** @class */ (function (_super) {
    __extends(DeleteFolderRequest, _super);
    function DeleteFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFolderPathParams)
    ], DeleteFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFolderHeaders)
    ], DeleteFolderRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFolderSecurity)
    ], DeleteFolderRequest.prototype, "security", void 0);
    return DeleteFolderRequest;
}(SpeakeasyBase));
export { DeleteFolderRequest };
var DeleteFolderResponse = /** @class */ (function (_super) {
    __extends(DeleteFolderResponse, _super);
    function DeleteFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteFolderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteFolderResponse.prototype, "statusCode", void 0);
    return DeleteFolderResponse;
}(SpeakeasyBase));
export { DeleteFolderResponse };
