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
var SvgconvertFileToConvertFile = /** @class */ (function (_super) {
    __extends(SvgconvertFileToConvertFile, _super);
    function SvgconvertFileToConvertFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], SvgconvertFileToConvertFile.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], SvgconvertFileToConvertFile.prototype, "file", void 0);
    return SvgconvertFileToConvertFile;
}(SpeakeasyBase));
export { SvgconvertFileToConvertFile };
var SvgconvertFileToConvert = /** @class */ (function (_super) {
    __extends(SvgconvertFileToConvert, _super);
    function SvgconvertFileToConvert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", SvgconvertFileToConvertFile)
    ], SvgconvertFileToConvert.prototype, "file", void 0);
    return SvgconvertFileToConvert;
}(SpeakeasyBase));
export { SvgconvertFileToConvert };
var SvgconvertRequest = /** @class */ (function (_super) {
    __extends(SvgconvertRequest, _super);
    function SvgconvertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SvgconvertFileToConvert)
    ], SvgconvertRequest.prototype, "request", void 0);
    return SvgconvertRequest;
}(SpeakeasyBase));
export { SvgconvertRequest };
var SvgconvertFileUrl = /** @class */ (function (_super) {
    __extends(SvgconvertFileUrl, _super);
    function SvgconvertFileUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=blob_name" }),
        __metadata("design:type", String)
    ], SvgconvertFileUrl.prototype, "blobName", void 0);
    __decorate([
        Metadata({ data: "json, name=blob_url" }),
        __metadata("design:type", String)
    ], SvgconvertFileUrl.prototype, "blobUrl", void 0);
    return SvgconvertFileUrl;
}(SpeakeasyBase));
export { SvgconvertFileUrl };
var SvgconvertResponse = /** @class */ (function (_super) {
    __extends(SvgconvertResponse, _super);
    function SvgconvertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SvgconvertResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SvgconvertFileUrl)
    ], SvgconvertResponse.prototype, "fileUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SvgconvertResponse.prototype, "statusCode", void 0);
    return SvgconvertResponse;
}(SpeakeasyBase));
export { SvgconvertResponse };
