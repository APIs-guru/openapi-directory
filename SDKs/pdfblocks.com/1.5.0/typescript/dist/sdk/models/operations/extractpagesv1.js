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
var ExtractPagesV1RequestBodyFile = /** @class */ (function (_super) {
    __extends(ExtractPagesV1RequestBodyFile, _super);
    function ExtractPagesV1RequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ExtractPagesV1RequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], ExtractPagesV1RequestBodyFile.prototype, "file", void 0);
    return ExtractPagesV1RequestBodyFile;
}(SpeakeasyBase));
export { ExtractPagesV1RequestBodyFile };
var ExtractPagesV1RequestBody = /** @class */ (function (_super) {
    __extends(ExtractPagesV1RequestBody, _super);
    function ExtractPagesV1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", ExtractPagesV1RequestBodyFile)
    ], ExtractPagesV1RequestBody.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=first_page" }),
        __metadata("design:type", Number)
    ], ExtractPagesV1RequestBody.prototype, "firstPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=last_page" }),
        __metadata("design:type", Number)
    ], ExtractPagesV1RequestBody.prototype, "lastPage", void 0);
    return ExtractPagesV1RequestBody;
}(SpeakeasyBase));
export { ExtractPagesV1RequestBody };
var ExtractPagesV14XxApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(ExtractPagesV14XxApplicationProblemPlusJson, _super);
    function ExtractPagesV14XxApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], ExtractPagesV14XxApplicationProblemPlusJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], ExtractPagesV14XxApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ExtractPagesV14XxApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ExtractPagesV14XxApplicationProblemPlusJson.prototype, "type", void 0);
    return ExtractPagesV14XxApplicationProblemPlusJson;
}(SpeakeasyBase));
export { ExtractPagesV14XxApplicationProblemPlusJson };
var ExtractPagesV1Request = /** @class */ (function (_super) {
    __extends(ExtractPagesV1Request, _super);
    function ExtractPagesV1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ExtractPagesV1RequestBody)
    ], ExtractPagesV1Request.prototype, "request", void 0);
    return ExtractPagesV1Request;
}(SpeakeasyBase));
export { ExtractPagesV1Request };
var ExtractPagesV1Response = /** @class */ (function (_super) {
    __extends(ExtractPagesV1Response, _super);
    function ExtractPagesV1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtractPagesV1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExtractPagesV1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ExtractPagesV1Response.prototype, "extractPagesV1200ApplicationPdfBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtractPagesV14XxApplicationProblemPlusJson)
    ], ExtractPagesV1Response.prototype, "extractPagesV14XxApplicationProblemPlusJsonObject", void 0);
    return ExtractPagesV1Response;
}(SpeakeasyBase));
export { ExtractPagesV1Response };
