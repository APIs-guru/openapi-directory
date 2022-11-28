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
var PostDatabaseImportRequestBodyFormData = /** @class */ (function (_super) {
    __extends(PostDatabaseImportRequestBodyFormData, _super);
    function PostDatabaseImportRequestBodyFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostDatabaseImportRequestBodyFormData.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=formData" }),
        __metadata("design:type", String)
    ], PostDatabaseImportRequestBodyFormData.prototype, "formData", void 0);
    return PostDatabaseImportRequestBodyFormData;
}(SpeakeasyBase));
export { PostDatabaseImportRequestBodyFormData };
var PostDatabaseImportRequestBody = /** @class */ (function (_super) {
    __extends(PostDatabaseImportRequestBody, _super);
    function PostDatabaseImportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostDatabaseImportRequestBodyFormData)
    ], PostDatabaseImportRequestBody.prototype, "formData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=overwrite" }),
        __metadata("design:type", Boolean)
    ], PostDatabaseImportRequestBody.prototype, "overwrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=passwords" }),
        __metadata("design:type", String)
    ], PostDatabaseImportRequestBody.prototype, "passwords", void 0);
    return PostDatabaseImportRequestBody;
}(SpeakeasyBase));
export { PostDatabaseImportRequestBody };
var PostDatabaseImportSecurity = /** @class */ (function (_super) {
    __extends(PostDatabaseImportSecurity, _super);
    function PostDatabaseImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostDatabaseImportSecurity.prototype, "jwt", void 0);
    return PostDatabaseImportSecurity;
}(SpeakeasyBase));
export { PostDatabaseImportSecurity };
var PostDatabaseImport200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseImport200ApplicationJson, _super);
    function PostDatabaseImport200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseImport200ApplicationJson.prototype, "message", void 0);
    return PostDatabaseImport200ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseImport200ApplicationJson };
var PostDatabaseImport400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseImport400ApplicationJson, _super);
    function PostDatabaseImport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseImport400ApplicationJson.prototype, "message", void 0);
    return PostDatabaseImport400ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseImport400ApplicationJson };
var PostDatabaseImport401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseImport401ApplicationJson, _super);
    function PostDatabaseImport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseImport401ApplicationJson.prototype, "message", void 0);
    return PostDatabaseImport401ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseImport401ApplicationJson };
var PostDatabaseImport422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseImport422ApplicationJson, _super);
    function PostDatabaseImport422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseImport422ApplicationJson.prototype, "message", void 0);
    return PostDatabaseImport422ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseImport422ApplicationJson };
var PostDatabaseImport500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseImport500ApplicationJson, _super);
    function PostDatabaseImport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseImport500ApplicationJson.prototype, "message", void 0);
    return PostDatabaseImport500ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseImport500ApplicationJson };
var PostDatabaseImportRequest = /** @class */ (function (_super) {
    __extends(PostDatabaseImportRequest, _super);
    function PostDatabaseImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostDatabaseImportRequestBody)
    ], PostDatabaseImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseImportSecurity)
    ], PostDatabaseImportRequest.prototype, "security", void 0);
    return PostDatabaseImportRequest;
}(SpeakeasyBase));
export { PostDatabaseImportRequest };
var PostDatabaseImportResponse = /** @class */ (function (_super) {
    __extends(PostDatabaseImportResponse, _super);
    function PostDatabaseImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDatabaseImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseImport200ApplicationJson)
    ], PostDatabaseImportResponse.prototype, "postDatabaseImport200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseImport400ApplicationJson)
    ], PostDatabaseImportResponse.prototype, "postDatabaseImport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseImport401ApplicationJson)
    ], PostDatabaseImportResponse.prototype, "postDatabaseImport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseImport422ApplicationJson)
    ], PostDatabaseImportResponse.prototype, "postDatabaseImport422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseImport500ApplicationJson)
    ], PostDatabaseImportResponse.prototype, "postDatabaseImport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDatabaseImportResponse.prototype, "statusCode", void 0);
    return PostDatabaseImportResponse;
}(SpeakeasyBase));
export { PostDatabaseImportResponse };
