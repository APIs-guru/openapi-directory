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
var UpdateFolderPathParams = /** @class */ (function (_super) {
    __extends(UpdateFolderPathParams, _super);
    function UpdateFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FolderId" }),
        __metadata("design:type", String)
    ], UpdateFolderPathParams.prototype, "folderId", void 0);
    return UpdateFolderPathParams;
}(SpeakeasyBase));
export { UpdateFolderPathParams };
var UpdateFolderHeaders = /** @class */ (function (_super) {
    __extends(UpdateFolderHeaders, _super);
    function UpdateFolderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], UpdateFolderHeaders.prototype, "xeroTenantId", void 0);
    return UpdateFolderHeaders;
}(SpeakeasyBase));
export { UpdateFolderHeaders };
var UpdateFolderSecurity = /** @class */ (function (_super) {
    __extends(UpdateFolderSecurity, _super);
    function UpdateFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], UpdateFolderSecurity.prototype, "oAuth2", void 0);
    return UpdateFolderSecurity;
}(SpeakeasyBase));
export { UpdateFolderSecurity };
var UpdateFolderRequest = /** @class */ (function (_super) {
    __extends(UpdateFolderRequest, _super);
    function UpdateFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateFolderPathParams)
    ], UpdateFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateFolderHeaders)
    ], UpdateFolderRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdateFolderRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateFolderSecurity)
    ], UpdateFolderRequest.prototype, "security", void 0);
    return UpdateFolderRequest;
}(SpeakeasyBase));
export { UpdateFolderRequest };
var UpdateFolderResponse = /** @class */ (function (_super) {
    __extends(UpdateFolderResponse, _super);
    function UpdateFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateFolderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateFolderResponse.prototype, "folder", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateFolderResponse.prototype, "statusCode", void 0);
    return UpdateFolderResponse;
}(SpeakeasyBase));
export { UpdateFolderResponse };
