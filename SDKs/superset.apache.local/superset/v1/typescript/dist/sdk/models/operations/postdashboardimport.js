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
var PostDashboardImportRequestBodyFormData = /** @class */ (function (_super) {
    __extends(PostDashboardImportRequestBodyFormData, _super);
    function PostDashboardImportRequestBodyFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostDashboardImportRequestBodyFormData.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=formData" }),
        __metadata("design:type", String)
    ], PostDashboardImportRequestBodyFormData.prototype, "formData", void 0);
    return PostDashboardImportRequestBodyFormData;
}(SpeakeasyBase));
export { PostDashboardImportRequestBodyFormData };
var PostDashboardImportRequestBody = /** @class */ (function (_super) {
    __extends(PostDashboardImportRequestBody, _super);
    function PostDashboardImportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostDashboardImportRequestBodyFormData)
    ], PostDashboardImportRequestBody.prototype, "formData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=overwrite" }),
        __metadata("design:type", Boolean)
    ], PostDashboardImportRequestBody.prototype, "overwrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=passwords" }),
        __metadata("design:type", String)
    ], PostDashboardImportRequestBody.prototype, "passwords", void 0);
    return PostDashboardImportRequestBody;
}(SpeakeasyBase));
export { PostDashboardImportRequestBody };
var PostDashboardImportSecurity = /** @class */ (function (_super) {
    __extends(PostDashboardImportSecurity, _super);
    function PostDashboardImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostDashboardImportSecurity.prototype, "jwt", void 0);
    return PostDashboardImportSecurity;
}(SpeakeasyBase));
export { PostDashboardImportSecurity };
var PostDashboardImport200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDashboardImport200ApplicationJson, _super);
    function PostDashboardImport200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDashboardImport200ApplicationJson.prototype, "message", void 0);
    return PostDashboardImport200ApplicationJson;
}(SpeakeasyBase));
export { PostDashboardImport200ApplicationJson };
var PostDashboardImport400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDashboardImport400ApplicationJson, _super);
    function PostDashboardImport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDashboardImport400ApplicationJson.prototype, "message", void 0);
    return PostDashboardImport400ApplicationJson;
}(SpeakeasyBase));
export { PostDashboardImport400ApplicationJson };
var PostDashboardImport401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDashboardImport401ApplicationJson, _super);
    function PostDashboardImport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDashboardImport401ApplicationJson.prototype, "message", void 0);
    return PostDashboardImport401ApplicationJson;
}(SpeakeasyBase));
export { PostDashboardImport401ApplicationJson };
var PostDashboardImport422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDashboardImport422ApplicationJson, _super);
    function PostDashboardImport422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDashboardImport422ApplicationJson.prototype, "message", void 0);
    return PostDashboardImport422ApplicationJson;
}(SpeakeasyBase));
export { PostDashboardImport422ApplicationJson };
var PostDashboardImport500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDashboardImport500ApplicationJson, _super);
    function PostDashboardImport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDashboardImport500ApplicationJson.prototype, "message", void 0);
    return PostDashboardImport500ApplicationJson;
}(SpeakeasyBase));
export { PostDashboardImport500ApplicationJson };
var PostDashboardImportRequest = /** @class */ (function (_super) {
    __extends(PostDashboardImportRequest, _super);
    function PostDashboardImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostDashboardImportRequestBody)
    ], PostDashboardImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboardImportSecurity)
    ], PostDashboardImportRequest.prototype, "security", void 0);
    return PostDashboardImportRequest;
}(SpeakeasyBase));
export { PostDashboardImportRequest };
var PostDashboardImportResponse = /** @class */ (function (_super) {
    __extends(PostDashboardImportResponse, _super);
    function PostDashboardImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDashboardImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboardImport200ApplicationJson)
    ], PostDashboardImportResponse.prototype, "postDashboardImport200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboardImport400ApplicationJson)
    ], PostDashboardImportResponse.prototype, "postDashboardImport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboardImport401ApplicationJson)
    ], PostDashboardImportResponse.prototype, "postDashboardImport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboardImport422ApplicationJson)
    ], PostDashboardImportResponse.prototype, "postDashboardImport422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboardImport500ApplicationJson)
    ], PostDashboardImportResponse.prototype, "postDashboardImport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDashboardImportResponse.prototype, "statusCode", void 0);
    return PostDashboardImportResponse;
}(SpeakeasyBase));
export { PostDashboardImportResponse };
