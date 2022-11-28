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
export var AddPasswordV1RequestBodyEncryptionAlgorithmEnum;
(function (AddPasswordV1RequestBodyEncryptionAlgorithmEnum) {
    AddPasswordV1RequestBodyEncryptionAlgorithmEnum["Aes128"] = "AES-128";
    AddPasswordV1RequestBodyEncryptionAlgorithmEnum["Aes256"] = "AES-256";
})(AddPasswordV1RequestBodyEncryptionAlgorithmEnum || (AddPasswordV1RequestBodyEncryptionAlgorithmEnum = {}));
var AddPasswordV1RequestBodyFile = /** @class */ (function (_super) {
    __extends(AddPasswordV1RequestBodyFile, _super);
    function AddPasswordV1RequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], AddPasswordV1RequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], AddPasswordV1RequestBodyFile.prototype, "file", void 0);
    return AddPasswordV1RequestBodyFile;
}(SpeakeasyBase));
export { AddPasswordV1RequestBodyFile };
var AddPasswordV1RequestBody = /** @class */ (function (_super) {
    __extends(AddPasswordV1RequestBody, _super);
    function AddPasswordV1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=encryption_algorithm" }),
        __metadata("design:type", String)
    ], AddPasswordV1RequestBody.prototype, "encryptionAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", AddPasswordV1RequestBodyFile)
    ], AddPasswordV1RequestBody.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], AddPasswordV1RequestBody.prototype, "password", void 0);
    return AddPasswordV1RequestBody;
}(SpeakeasyBase));
export { AddPasswordV1RequestBody };
var AddPasswordV14XxApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(AddPasswordV14XxApplicationProblemPlusJson, _super);
    function AddPasswordV14XxApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], AddPasswordV14XxApplicationProblemPlusJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], AddPasswordV14XxApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AddPasswordV14XxApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddPasswordV14XxApplicationProblemPlusJson.prototype, "type", void 0);
    return AddPasswordV14XxApplicationProblemPlusJson;
}(SpeakeasyBase));
export { AddPasswordV14XxApplicationProblemPlusJson };
var AddPasswordV1Request = /** @class */ (function (_super) {
    __extends(AddPasswordV1Request, _super);
    function AddPasswordV1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddPasswordV1RequestBody)
    ], AddPasswordV1Request.prototype, "request", void 0);
    return AddPasswordV1Request;
}(SpeakeasyBase));
export { AddPasswordV1Request };
var AddPasswordV1Response = /** @class */ (function (_super) {
    __extends(AddPasswordV1Response, _super);
    function AddPasswordV1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddPasswordV1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddPasswordV1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AddPasswordV1Response.prototype, "addPasswordV1200ApplicationPdfBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddPasswordV14XxApplicationProblemPlusJson)
    ], AddPasswordV1Response.prototype, "addPasswordV14XxApplicationProblemPlusJsonObject", void 0);
    return AddPasswordV1Response;
}(SpeakeasyBase));
export { AddPasswordV1Response };
