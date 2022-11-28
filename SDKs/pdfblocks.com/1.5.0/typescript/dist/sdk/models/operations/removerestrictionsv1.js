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
var RemoveRestrictionsV1RequestBodyFile = /** @class */ (function (_super) {
    __extends(RemoveRestrictionsV1RequestBodyFile, _super);
    function RemoveRestrictionsV1RequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], RemoveRestrictionsV1RequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], RemoveRestrictionsV1RequestBodyFile.prototype, "file", void 0);
    return RemoveRestrictionsV1RequestBodyFile;
}(SpeakeasyBase));
export { RemoveRestrictionsV1RequestBodyFile };
var RemoveRestrictionsV1RequestBody = /** @class */ (function (_super) {
    __extends(RemoveRestrictionsV1RequestBody, _super);
    function RemoveRestrictionsV1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", RemoveRestrictionsV1RequestBodyFile)
    ], RemoveRestrictionsV1RequestBody.prototype, "file", void 0);
    return RemoveRestrictionsV1RequestBody;
}(SpeakeasyBase));
export { RemoveRestrictionsV1RequestBody };
var RemoveRestrictionsV14XxApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(RemoveRestrictionsV14XxApplicationProblemPlusJson, _super);
    function RemoveRestrictionsV14XxApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], RemoveRestrictionsV14XxApplicationProblemPlusJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveRestrictionsV14XxApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RemoveRestrictionsV14XxApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RemoveRestrictionsV14XxApplicationProblemPlusJson.prototype, "type", void 0);
    return RemoveRestrictionsV14XxApplicationProblemPlusJson;
}(SpeakeasyBase));
export { RemoveRestrictionsV14XxApplicationProblemPlusJson };
var RemoveRestrictionsV1Request = /** @class */ (function (_super) {
    __extends(RemoveRestrictionsV1Request, _super);
    function RemoveRestrictionsV1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", RemoveRestrictionsV1RequestBody)
    ], RemoveRestrictionsV1Request.prototype, "request", void 0);
    return RemoveRestrictionsV1Request;
}(SpeakeasyBase));
export { RemoveRestrictionsV1Request };
var RemoveRestrictionsV1Response = /** @class */ (function (_super) {
    __extends(RemoveRestrictionsV1Response, _super);
    function RemoveRestrictionsV1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveRestrictionsV1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveRestrictionsV1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RemoveRestrictionsV1Response.prototype, "removeRestrictionsV1200ApplicationPdfBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveRestrictionsV14XxApplicationProblemPlusJson)
    ], RemoveRestrictionsV1Response.prototype, "removeRestrictionsV14XxApplicationProblemPlusJsonObject", void 0);
    return RemoveRestrictionsV1Response;
}(SpeakeasyBase));
export { RemoveRestrictionsV1Response };
