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
var GetFilePathParams = /** @class */ (function (_super) {
    __extends(GetFilePathParams, _super);
    function GetFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FileId" }),
        __metadata("design:type", String)
    ], GetFilePathParams.prototype, "fileId", void 0);
    return GetFilePathParams;
}(SpeakeasyBase));
export { GetFilePathParams };
var GetFileHeaders = /** @class */ (function (_super) {
    __extends(GetFileHeaders, _super);
    function GetFileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], GetFileHeaders.prototype, "xeroTenantId", void 0);
    return GetFileHeaders;
}(SpeakeasyBase));
export { GetFileHeaders };
var GetFileSecurity = /** @class */ (function (_super) {
    __extends(GetFileSecurity, _super);
    function GetFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetFileSecurity.prototype, "oAuth2", void 0);
    return GetFileSecurity;
}(SpeakeasyBase));
export { GetFileSecurity };
var GetFileRequest = /** @class */ (function (_super) {
    __extends(GetFileRequest, _super);
    function GetFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilePathParams)
    ], GetFileRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFileHeaders)
    ], GetFileRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFileSecurity)
    ], GetFileRequest.prototype, "security", void 0);
    return GetFileRequest;
}(SpeakeasyBase));
export { GetFileRequest };
var GetFileResponse = /** @class */ (function (_super) {
    __extends(GetFileResponse, _super);
    function GetFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FileObject)
    ], GetFileResponse.prototype, "fileObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFileResponse.prototype, "statusCode", void 0);
    return GetFileResponse;
}(SpeakeasyBase));
export { GetFileResponse };
