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
var GetBenefitsDocumentUploadDownloadPathParams = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownloadPathParams, _super);
    function GetBenefitsDocumentUploadDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownloadPathParams.prototype, "id", void 0);
    return GetBenefitsDocumentUploadDownloadPathParams;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadDownloadPathParams };
var GetBenefitsDocumentUploadDownloadSecurity = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownloadSecurity, _super);
    function GetBenefitsDocumentUploadDownloadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], GetBenefitsDocumentUploadDownloadSecurity.prototype, "apikey", void 0);
    return GetBenefitsDocumentUploadDownloadSecurity;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadDownloadSecurity };
var GetBenefitsDocumentUploadDownload401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownload401ApplicationJson, _super);
    function GetBenefitsDocumentUploadDownload401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload401ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadDownload401ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadDownload401ApplicationJson };
var GetBenefitsDocumentUploadDownload403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownload403ApplicationJson, _super);
    function GetBenefitsDocumentUploadDownload403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload403ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadDownload403ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadDownload403ApplicationJson };
var GetBenefitsDocumentUploadDownload404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownload404ApplicationJson, _super);
    function GetBenefitsDocumentUploadDownload404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload404ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload404ApplicationJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload404ApplicationJson.prototype, "title", void 0);
    return GetBenefitsDocumentUploadDownload404ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadDownload404ApplicationJson };
var GetBenefitsDocumentUploadDownload429ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownload429ApplicationJson, _super);
    function GetBenefitsDocumentUploadDownload429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload429ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadDownload429ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadDownload429ApplicationJson };
var GetBenefitsDocumentUploadDownload500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownload500ApplicationJson, _super);
    function GetBenefitsDocumentUploadDownload500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload500ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload500ApplicationJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownload500ApplicationJson.prototype, "title", void 0);
    return GetBenefitsDocumentUploadDownload500ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadDownload500ApplicationJson };
var GetBenefitsDocumentUploadDownloadRequest = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownloadRequest, _super);
    function GetBenefitsDocumentUploadDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadDownloadPathParams)
    ], GetBenefitsDocumentUploadDownloadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadDownloadSecurity)
    ], GetBenefitsDocumentUploadDownloadRequest.prototype, "security", void 0);
    return GetBenefitsDocumentUploadDownloadRequest;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadDownloadRequest };
var GetBenefitsDocumentUploadDownloadResponse = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadDownloadResponse, _super);
    function GetBenefitsDocumentUploadDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload200ApplicationZipBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadDownload401ApplicationJson)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadDownload403ApplicationJson)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadDownload404ApplicationJson)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadDownload429ApplicationJson)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload429ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadDownload500ApplicationJson)
    ], GetBenefitsDocumentUploadDownloadResponse.prototype, "getBenefitsDocumentUploadDownload500ApplicationJsonObject", void 0);
    return GetBenefitsDocumentUploadDownloadResponse;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadDownloadResponse };
