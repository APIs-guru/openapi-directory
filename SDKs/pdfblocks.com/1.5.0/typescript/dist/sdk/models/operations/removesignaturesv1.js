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
var RemoveSignaturesV1RequestBodyFile = /** @class */ (function (_super) {
    __extends(RemoveSignaturesV1RequestBodyFile, _super);
    function RemoveSignaturesV1RequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], RemoveSignaturesV1RequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], RemoveSignaturesV1RequestBodyFile.prototype, "file", void 0);
    return RemoveSignaturesV1RequestBodyFile;
}(SpeakeasyBase));
export { RemoveSignaturesV1RequestBodyFile };
var RemoveSignaturesV1RequestBody = /** @class */ (function (_super) {
    __extends(RemoveSignaturesV1RequestBody, _super);
    function RemoveSignaturesV1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", RemoveSignaturesV1RequestBodyFile)
    ], RemoveSignaturesV1RequestBody.prototype, "file", void 0);
    return RemoveSignaturesV1RequestBody;
}(SpeakeasyBase));
export { RemoveSignaturesV1RequestBody };
var RemoveSignaturesV14XxApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(RemoveSignaturesV14XxApplicationProblemPlusJson, _super);
    function RemoveSignaturesV14XxApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], RemoveSignaturesV14XxApplicationProblemPlusJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveSignaturesV14XxApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RemoveSignaturesV14XxApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RemoveSignaturesV14XxApplicationProblemPlusJson.prototype, "type", void 0);
    return RemoveSignaturesV14XxApplicationProblemPlusJson;
}(SpeakeasyBase));
export { RemoveSignaturesV14XxApplicationProblemPlusJson };
var RemoveSignaturesV1Request = /** @class */ (function (_super) {
    __extends(RemoveSignaturesV1Request, _super);
    function RemoveSignaturesV1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", RemoveSignaturesV1RequestBody)
    ], RemoveSignaturesV1Request.prototype, "request", void 0);
    return RemoveSignaturesV1Request;
}(SpeakeasyBase));
export { RemoveSignaturesV1Request };
var RemoveSignaturesV1Response = /** @class */ (function (_super) {
    __extends(RemoveSignaturesV1Response, _super);
    function RemoveSignaturesV1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveSignaturesV1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveSignaturesV1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RemoveSignaturesV1Response.prototype, "removeSignaturesV1200ApplicationPdfBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveSignaturesV14XxApplicationProblemPlusJson)
    ], RemoveSignaturesV1Response.prototype, "removeSignaturesV14XxApplicationProblemPlusJsonObject", void 0);
    return RemoveSignaturesV1Response;
}(SpeakeasyBase));
export { RemoveSignaturesV1Response };
