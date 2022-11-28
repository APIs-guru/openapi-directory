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
var PostChartImportRequestBodyFormData = /** @class */ (function (_super) {
    __extends(PostChartImportRequestBodyFormData, _super);
    function PostChartImportRequestBodyFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostChartImportRequestBodyFormData.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=formData" }),
        __metadata("design:type", String)
    ], PostChartImportRequestBodyFormData.prototype, "formData", void 0);
    return PostChartImportRequestBodyFormData;
}(SpeakeasyBase));
export { PostChartImportRequestBodyFormData };
var PostChartImportRequestBody = /** @class */ (function (_super) {
    __extends(PostChartImportRequestBody, _super);
    function PostChartImportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostChartImportRequestBodyFormData)
    ], PostChartImportRequestBody.prototype, "formData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=overwrite" }),
        __metadata("design:type", Boolean)
    ], PostChartImportRequestBody.prototype, "overwrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=passwords" }),
        __metadata("design:type", String)
    ], PostChartImportRequestBody.prototype, "passwords", void 0);
    return PostChartImportRequestBody;
}(SpeakeasyBase));
export { PostChartImportRequestBody };
var PostChartImportSecurity = /** @class */ (function (_super) {
    __extends(PostChartImportSecurity, _super);
    function PostChartImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostChartImportSecurity.prototype, "jwt", void 0);
    return PostChartImportSecurity;
}(SpeakeasyBase));
export { PostChartImportSecurity };
var PostChartImport200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChartImport200ApplicationJson, _super);
    function PostChartImport200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChartImport200ApplicationJson.prototype, "message", void 0);
    return PostChartImport200ApplicationJson;
}(SpeakeasyBase));
export { PostChartImport200ApplicationJson };
var PostChartImport400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChartImport400ApplicationJson, _super);
    function PostChartImport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChartImport400ApplicationJson.prototype, "message", void 0);
    return PostChartImport400ApplicationJson;
}(SpeakeasyBase));
export { PostChartImport400ApplicationJson };
var PostChartImport401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChartImport401ApplicationJson, _super);
    function PostChartImport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChartImport401ApplicationJson.prototype, "message", void 0);
    return PostChartImport401ApplicationJson;
}(SpeakeasyBase));
export { PostChartImport401ApplicationJson };
var PostChartImport422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChartImport422ApplicationJson, _super);
    function PostChartImport422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChartImport422ApplicationJson.prototype, "message", void 0);
    return PostChartImport422ApplicationJson;
}(SpeakeasyBase));
export { PostChartImport422ApplicationJson };
var PostChartImport500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostChartImport500ApplicationJson, _super);
    function PostChartImport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostChartImport500ApplicationJson.prototype, "message", void 0);
    return PostChartImport500ApplicationJson;
}(SpeakeasyBase));
export { PostChartImport500ApplicationJson };
var PostChartImportRequest = /** @class */ (function (_super) {
    __extends(PostChartImportRequest, _super);
    function PostChartImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostChartImportRequestBody)
    ], PostChartImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartImportSecurity)
    ], PostChartImportRequest.prototype, "security", void 0);
    return PostChartImportRequest;
}(SpeakeasyBase));
export { PostChartImportRequest };
var PostChartImportResponse = /** @class */ (function (_super) {
    __extends(PostChartImportResponse, _super);
    function PostChartImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostChartImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartImport200ApplicationJson)
    ], PostChartImportResponse.prototype, "postChartImport200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartImport400ApplicationJson)
    ], PostChartImportResponse.prototype, "postChartImport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartImport401ApplicationJson)
    ], PostChartImportResponse.prototype, "postChartImport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartImport422ApplicationJson)
    ], PostChartImportResponse.prototype, "postChartImport422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostChartImport500ApplicationJson)
    ], PostChartImportResponse.prototype, "postChartImport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostChartImportResponse.prototype, "statusCode", void 0);
    return PostChartImportResponse;
}(SpeakeasyBase));
export { PostChartImportResponse };
