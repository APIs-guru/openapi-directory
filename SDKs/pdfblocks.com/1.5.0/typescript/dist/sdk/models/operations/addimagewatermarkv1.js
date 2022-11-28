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
var AddImageWatermarkV1RequestBodyFile = /** @class */ (function (_super) {
    __extends(AddImageWatermarkV1RequestBodyFile, _super);
    function AddImageWatermarkV1RequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], AddImageWatermarkV1RequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], AddImageWatermarkV1RequestBodyFile.prototype, "file", void 0);
    return AddImageWatermarkV1RequestBodyFile;
}(SpeakeasyBase));
export { AddImageWatermarkV1RequestBodyFile };
var AddImageWatermarkV1RequestBodyImage = /** @class */ (function (_super) {
    __extends(AddImageWatermarkV1RequestBodyImage, _super);
    function AddImageWatermarkV1RequestBodyImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], AddImageWatermarkV1RequestBodyImage.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=image" }),
        __metadata("design:type", String)
    ], AddImageWatermarkV1RequestBodyImage.prototype, "image", void 0);
    return AddImageWatermarkV1RequestBodyImage;
}(SpeakeasyBase));
export { AddImageWatermarkV1RequestBodyImage };
var AddImageWatermarkV1RequestBody = /** @class */ (function (_super) {
    __extends(AddImageWatermarkV1RequestBody, _super);
    function AddImageWatermarkV1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", AddImageWatermarkV1RequestBodyFile)
    ], AddImageWatermarkV1RequestBody.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", AddImageWatermarkV1RequestBodyImage)
    ], AddImageWatermarkV1RequestBody.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=margin" }),
        __metadata("design:type", Number)
    ], AddImageWatermarkV1RequestBody.prototype, "margin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=transparency" }),
        __metadata("design:type", Number)
    ], AddImageWatermarkV1RequestBody.prototype, "transparency", void 0);
    return AddImageWatermarkV1RequestBody;
}(SpeakeasyBase));
export { AddImageWatermarkV1RequestBody };
var AddImageWatermarkV14XxApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(AddImageWatermarkV14XxApplicationProblemPlusJson, _super);
    function AddImageWatermarkV14XxApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], AddImageWatermarkV14XxApplicationProblemPlusJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], AddImageWatermarkV14XxApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AddImageWatermarkV14XxApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddImageWatermarkV14XxApplicationProblemPlusJson.prototype, "type", void 0);
    return AddImageWatermarkV14XxApplicationProblemPlusJson;
}(SpeakeasyBase));
export { AddImageWatermarkV14XxApplicationProblemPlusJson };
var AddImageWatermarkV1Request = /** @class */ (function (_super) {
    __extends(AddImageWatermarkV1Request, _super);
    function AddImageWatermarkV1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddImageWatermarkV1RequestBody)
    ], AddImageWatermarkV1Request.prototype, "request", void 0);
    return AddImageWatermarkV1Request;
}(SpeakeasyBase));
export { AddImageWatermarkV1Request };
var AddImageWatermarkV1Response = /** @class */ (function (_super) {
    __extends(AddImageWatermarkV1Response, _super);
    function AddImageWatermarkV1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddImageWatermarkV1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddImageWatermarkV1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AddImageWatermarkV1Response.prototype, "addImageWatermarkV1200ApplicationPdfBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddImageWatermarkV14XxApplicationProblemPlusJson)
    ], AddImageWatermarkV1Response.prototype, "addImageWatermarkV14XxApplicationProblemPlusJsonObject", void 0);
    return AddImageWatermarkV1Response;
}(SpeakeasyBase));
export { AddImageWatermarkV1Response };
