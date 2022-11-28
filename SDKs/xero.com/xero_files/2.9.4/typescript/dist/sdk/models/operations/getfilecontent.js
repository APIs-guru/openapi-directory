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
var GetFileContentPathParams = /** @class */ (function (_super) {
    __extends(GetFileContentPathParams, _super);
    function GetFileContentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileId" }),
        __metadata("design:type", String)
    ], GetFileContentPathParams.prototype, "fileId", void 0);
    return GetFileContentPathParams;
}(SpeakeasyBase));
export { GetFileContentPathParams };
var GetFileContentHeaders = /** @class */ (function (_super) {
    __extends(GetFileContentHeaders, _super);
    function GetFileContentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], GetFileContentHeaders.prototype, "xeroTenantId", void 0);
    return GetFileContentHeaders;
}(SpeakeasyBase));
export { GetFileContentHeaders };
var GetFileContentSecurity = /** @class */ (function (_super) {
    __extends(GetFileContentSecurity, _super);
    function GetFileContentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetFileContentSecurity.prototype, "oAuth2", void 0);
    return GetFileContentSecurity;
}(SpeakeasyBase));
export { GetFileContentSecurity };
var GetFileContentRequest = /** @class */ (function (_super) {
    __extends(GetFileContentRequest, _super);
    function GetFileContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFileContentPathParams)
    ], GetFileContentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFileContentHeaders)
    ], GetFileContentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFileContentSecurity)
    ], GetFileContentRequest.prototype, "security", void 0);
    return GetFileContentRequest;
}(SpeakeasyBase));
export { GetFileContentRequest };
var GetFileContentResponse = /** @class */ (function (_super) {
    __extends(GetFileContentResponse, _super);
    function GetFileContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFileContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFileContentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetFileContentResponse.prototype, "getFileContent200ApplicationOctetStreamBinaryString", void 0);
    return GetFileContentResponse;
}(SpeakeasyBase));
export { GetFileContentResponse };
