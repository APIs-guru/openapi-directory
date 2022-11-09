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
var PostBenefitsDocumentUploadSecurity = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUploadSecurity, _super);
    function PostBenefitsDocumentUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], PostBenefitsDocumentUploadSecurity.prototype, "apikey", void 0);
    return PostBenefitsDocumentUploadSecurity;
}(SpeakeasyBase));
export { PostBenefitsDocumentUploadSecurity };
var PostBenefitsDocumentUploadRequest = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUploadRequest, _super);
    function PostBenefitsDocumentUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostBenefitsDocumentUploadSecurity)
    ], PostBenefitsDocumentUploadRequest.prototype, "security", void 0);
    return PostBenefitsDocumentUploadRequest;
}(SpeakeasyBase));
export { PostBenefitsDocumentUploadRequest };
var PostBenefitsDocumentUpload202ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload202ApplicationJson, _super);
    function PostBenefitsDocumentUpload202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], PostBenefitsDocumentUpload202ApplicationJson.prototype, "data", void 0);
    return PostBenefitsDocumentUpload202ApplicationJson;
}(SpeakeasyBase));
export { PostBenefitsDocumentUpload202ApplicationJson };
var PostBenefitsDocumentUpload401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload401ApplicationJson, _super);
    function PostBenefitsDocumentUpload401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload401ApplicationJson.prototype, "message", void 0);
    return PostBenefitsDocumentUpload401ApplicationJson;
}(SpeakeasyBase));
export { PostBenefitsDocumentUpload401ApplicationJson };
var PostBenefitsDocumentUpload403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload403ApplicationJson, _super);
    function PostBenefitsDocumentUpload403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload403ApplicationJson.prototype, "message", void 0);
    return PostBenefitsDocumentUpload403ApplicationJson;
}(SpeakeasyBase));
export { PostBenefitsDocumentUpload403ApplicationJson };
var PostBenefitsDocumentUpload422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload422ApplicationJson, _super);
    function PostBenefitsDocumentUpload422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], PostBenefitsDocumentUpload422ApplicationJson.prototype, "errors", void 0);
    return PostBenefitsDocumentUpload422ApplicationJson;
}(SpeakeasyBase));
export { PostBenefitsDocumentUpload422ApplicationJson };
var PostBenefitsDocumentUpload429ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload429ApplicationJson, _super);
    function PostBenefitsDocumentUpload429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload429ApplicationJson.prototype, "message", void 0);
    return PostBenefitsDocumentUpload429ApplicationJson;
}(SpeakeasyBase));
export { PostBenefitsDocumentUpload429ApplicationJson };
var PostBenefitsDocumentUpload500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUpload500ApplicationJson, _super);
    function PostBenefitsDocumentUpload500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload500ApplicationJson.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload500ApplicationJson.prototype, "detail", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload500ApplicationJson.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUpload500ApplicationJson.prototype, "title", void 0);
    return PostBenefitsDocumentUpload500ApplicationJson;
}(SpeakeasyBase));
export { PostBenefitsDocumentUpload500ApplicationJson };
var PostBenefitsDocumentUploadResponse = /** @class */ (function (_super) {
    __extends(PostBenefitsDocumentUploadResponse, _super);
    function PostBenefitsDocumentUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostBenefitsDocumentUploadResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostBenefitsDocumentUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostBenefitsDocumentUpload202ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload202ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostBenefitsDocumentUpload401ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostBenefitsDocumentUpload403ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload403ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostBenefitsDocumentUpload422ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload422ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostBenefitsDocumentUpload429ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload429ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostBenefitsDocumentUpload500ApplicationJson)
    ], PostBenefitsDocumentUploadResponse.prototype, "postBenefitsDocumentUpload500ApplicationJsonObject", void 0);
    return PostBenefitsDocumentUploadResponse;
}(SpeakeasyBase));
export { PostBenefitsDocumentUploadResponse };
