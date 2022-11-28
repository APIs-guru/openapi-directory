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
var PostSavedQueryImportRequestBodyFormData = /** @class */ (function (_super) {
    __extends(PostSavedQueryImportRequestBodyFormData, _super);
    function PostSavedQueryImportRequestBodyFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostSavedQueryImportRequestBodyFormData.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=formData" }),
        __metadata("design:type", String)
    ], PostSavedQueryImportRequestBodyFormData.prototype, "formData", void 0);
    return PostSavedQueryImportRequestBodyFormData;
}(SpeakeasyBase));
export { PostSavedQueryImportRequestBodyFormData };
var PostSavedQueryImportRequestBody = /** @class */ (function (_super) {
    __extends(PostSavedQueryImportRequestBody, _super);
    function PostSavedQueryImportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostSavedQueryImportRequestBodyFormData)
    ], PostSavedQueryImportRequestBody.prototype, "formData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=overwrite" }),
        __metadata("design:type", Boolean)
    ], PostSavedQueryImportRequestBody.prototype, "overwrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=passwords" }),
        __metadata("design:type", String)
    ], PostSavedQueryImportRequestBody.prototype, "passwords", void 0);
    return PostSavedQueryImportRequestBody;
}(SpeakeasyBase));
export { PostSavedQueryImportRequestBody };
var PostSavedQueryImportSecurity = /** @class */ (function (_super) {
    __extends(PostSavedQueryImportSecurity, _super);
    function PostSavedQueryImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostSavedQueryImportSecurity.prototype, "jwt", void 0);
    return PostSavedQueryImportSecurity;
}(SpeakeasyBase));
export { PostSavedQueryImportSecurity };
var PostSavedQueryImport200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSavedQueryImport200ApplicationJson, _super);
    function PostSavedQueryImport200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSavedQueryImport200ApplicationJson.prototype, "message", void 0);
    return PostSavedQueryImport200ApplicationJson;
}(SpeakeasyBase));
export { PostSavedQueryImport200ApplicationJson };
var PostSavedQueryImport400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSavedQueryImport400ApplicationJson, _super);
    function PostSavedQueryImport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSavedQueryImport400ApplicationJson.prototype, "message", void 0);
    return PostSavedQueryImport400ApplicationJson;
}(SpeakeasyBase));
export { PostSavedQueryImport400ApplicationJson };
var PostSavedQueryImport401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSavedQueryImport401ApplicationJson, _super);
    function PostSavedQueryImport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSavedQueryImport401ApplicationJson.prototype, "message", void 0);
    return PostSavedQueryImport401ApplicationJson;
}(SpeakeasyBase));
export { PostSavedQueryImport401ApplicationJson };
var PostSavedQueryImport422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSavedQueryImport422ApplicationJson, _super);
    function PostSavedQueryImport422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSavedQueryImport422ApplicationJson.prototype, "message", void 0);
    return PostSavedQueryImport422ApplicationJson;
}(SpeakeasyBase));
export { PostSavedQueryImport422ApplicationJson };
var PostSavedQueryImport500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSavedQueryImport500ApplicationJson, _super);
    function PostSavedQueryImport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSavedQueryImport500ApplicationJson.prototype, "message", void 0);
    return PostSavedQueryImport500ApplicationJson;
}(SpeakeasyBase));
export { PostSavedQueryImport500ApplicationJson };
var PostSavedQueryImportRequest = /** @class */ (function (_super) {
    __extends(PostSavedQueryImportRequest, _super);
    function PostSavedQueryImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostSavedQueryImportRequestBody)
    ], PostSavedQueryImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQueryImportSecurity)
    ], PostSavedQueryImportRequest.prototype, "security", void 0);
    return PostSavedQueryImportRequest;
}(SpeakeasyBase));
export { PostSavedQueryImportRequest };
var PostSavedQueryImportResponse = /** @class */ (function (_super) {
    __extends(PostSavedQueryImportResponse, _super);
    function PostSavedQueryImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSavedQueryImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQueryImport200ApplicationJson)
    ], PostSavedQueryImportResponse.prototype, "postSavedQueryImport200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQueryImport400ApplicationJson)
    ], PostSavedQueryImportResponse.prototype, "postSavedQueryImport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQueryImport401ApplicationJson)
    ], PostSavedQueryImportResponse.prototype, "postSavedQueryImport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQueryImport422ApplicationJson)
    ], PostSavedQueryImportResponse.prototype, "postSavedQueryImport422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSavedQueryImport500ApplicationJson)
    ], PostSavedQueryImportResponse.prototype, "postSavedQueryImport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSavedQueryImportResponse.prototype, "statusCode", void 0);
    return PostSavedQueryImportResponse;
}(SpeakeasyBase));
export { PostSavedQueryImportResponse };
