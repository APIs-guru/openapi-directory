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
var PostDatasetImportRequestBodyFormData = /** @class */ (function (_super) {
    __extends(PostDatasetImportRequestBodyFormData, _super);
    function PostDatasetImportRequestBodyFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostDatasetImportRequestBodyFormData.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=formData" }),
        __metadata("design:type", String)
    ], PostDatasetImportRequestBodyFormData.prototype, "formData", void 0);
    return PostDatasetImportRequestBodyFormData;
}(SpeakeasyBase));
export { PostDatasetImportRequestBodyFormData };
var PostDatasetImportRequestBody = /** @class */ (function (_super) {
    __extends(PostDatasetImportRequestBody, _super);
    function PostDatasetImportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostDatasetImportRequestBodyFormData)
    ], PostDatasetImportRequestBody.prototype, "formData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=overwrite" }),
        __metadata("design:type", Boolean)
    ], PostDatasetImportRequestBody.prototype, "overwrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=passwords" }),
        __metadata("design:type", String)
    ], PostDatasetImportRequestBody.prototype, "passwords", void 0);
    return PostDatasetImportRequestBody;
}(SpeakeasyBase));
export { PostDatasetImportRequestBody };
var PostDatasetImportSecurity = /** @class */ (function (_super) {
    __extends(PostDatasetImportSecurity, _super);
    function PostDatasetImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostDatasetImportSecurity.prototype, "jwt", void 0);
    return PostDatasetImportSecurity;
}(SpeakeasyBase));
export { PostDatasetImportSecurity };
var PostDatasetImport200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatasetImport200ApplicationJson, _super);
    function PostDatasetImport200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatasetImport200ApplicationJson.prototype, "message", void 0);
    return PostDatasetImport200ApplicationJson;
}(SpeakeasyBase));
export { PostDatasetImport200ApplicationJson };
var PostDatasetImport400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatasetImport400ApplicationJson, _super);
    function PostDatasetImport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatasetImport400ApplicationJson.prototype, "message", void 0);
    return PostDatasetImport400ApplicationJson;
}(SpeakeasyBase));
export { PostDatasetImport400ApplicationJson };
var PostDatasetImport401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatasetImport401ApplicationJson, _super);
    function PostDatasetImport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatasetImport401ApplicationJson.prototype, "message", void 0);
    return PostDatasetImport401ApplicationJson;
}(SpeakeasyBase));
export { PostDatasetImport401ApplicationJson };
var PostDatasetImport422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatasetImport422ApplicationJson, _super);
    function PostDatasetImport422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatasetImport422ApplicationJson.prototype, "message", void 0);
    return PostDatasetImport422ApplicationJson;
}(SpeakeasyBase));
export { PostDatasetImport422ApplicationJson };
var PostDatasetImport500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatasetImport500ApplicationJson, _super);
    function PostDatasetImport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatasetImport500ApplicationJson.prototype, "message", void 0);
    return PostDatasetImport500ApplicationJson;
}(SpeakeasyBase));
export { PostDatasetImport500ApplicationJson };
var PostDatasetImportRequest = /** @class */ (function (_super) {
    __extends(PostDatasetImportRequest, _super);
    function PostDatasetImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostDatasetImportRequestBody)
    ], PostDatasetImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatasetImportSecurity)
    ], PostDatasetImportRequest.prototype, "security", void 0);
    return PostDatasetImportRequest;
}(SpeakeasyBase));
export { PostDatasetImportRequest };
var PostDatasetImportResponse = /** @class */ (function (_super) {
    __extends(PostDatasetImportResponse, _super);
    function PostDatasetImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDatasetImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatasetImport200ApplicationJson)
    ], PostDatasetImportResponse.prototype, "postDatasetImport200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatasetImport400ApplicationJson)
    ], PostDatasetImportResponse.prototype, "postDatasetImport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatasetImport401ApplicationJson)
    ], PostDatasetImportResponse.prototype, "postDatasetImport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatasetImport422ApplicationJson)
    ], PostDatasetImportResponse.prototype, "postDatasetImport422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatasetImport500ApplicationJson)
    ], PostDatasetImportResponse.prototype, "postDatasetImport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDatasetImportResponse.prototype, "statusCode", void 0);
    return PostDatasetImportResponse;
}(SpeakeasyBase));
export { PostDatasetImportResponse };
