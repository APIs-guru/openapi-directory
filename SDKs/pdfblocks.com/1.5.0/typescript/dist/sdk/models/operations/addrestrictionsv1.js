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
export var AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum;
(function (AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum) {
    AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum["Aes128"] = "AES-128";
    AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum["Aes256"] = "AES-256";
})(AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum || (AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum = {}));
var AddRestrictionsV1RequestBodyFile = /** @class */ (function (_super) {
    __extends(AddRestrictionsV1RequestBodyFile, _super);
    function AddRestrictionsV1RequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], AddRestrictionsV1RequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], AddRestrictionsV1RequestBodyFile.prototype, "file", void 0);
    return AddRestrictionsV1RequestBodyFile;
}(SpeakeasyBase));
export { AddRestrictionsV1RequestBodyFile };
var AddRestrictionsV1RequestBody = /** @class */ (function (_super) {
    __extends(AddRestrictionsV1RequestBody, _super);
    function AddRestrictionsV1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allow_accessibility" }),
        __metadata("design:type", Boolean)
    ], AddRestrictionsV1RequestBody.prototype, "allowAccessibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allow_assemble_document" }),
        __metadata("design:type", Boolean)
    ], AddRestrictionsV1RequestBody.prototype, "allowAssembleDocument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allow_change_content" }),
        __metadata("design:type", Boolean)
    ], AddRestrictionsV1RequestBody.prototype, "allowChangeContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allow_comment_and_fill_form" }),
        __metadata("design:type", Boolean)
    ], AddRestrictionsV1RequestBody.prototype, "allowCommentAndFillForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allow_copy_content" }),
        __metadata("design:type", Boolean)
    ], AddRestrictionsV1RequestBody.prototype, "allowCopyContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allow_fill_form" }),
        __metadata("design:type", Boolean)
    ], AddRestrictionsV1RequestBody.prototype, "allowFillForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allow_print" }),
        __metadata("design:type", Boolean)
    ], AddRestrictionsV1RequestBody.prototype, "allowPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allow_print_high_resolution" }),
        __metadata("design:type", Boolean)
    ], AddRestrictionsV1RequestBody.prototype, "allowPrintHighResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=encryption_algorithm" }),
        __metadata("design:type", String)
    ], AddRestrictionsV1RequestBody.prototype, "encryptionAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", AddRestrictionsV1RequestBodyFile)
    ], AddRestrictionsV1RequestBody.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=owner_password" }),
        __metadata("design:type", String)
    ], AddRestrictionsV1RequestBody.prototype, "ownerPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_password" }),
        __metadata("design:type", String)
    ], AddRestrictionsV1RequestBody.prototype, "userPassword", void 0);
    return AddRestrictionsV1RequestBody;
}(SpeakeasyBase));
export { AddRestrictionsV1RequestBody };
var AddRestrictionsV14XxApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(AddRestrictionsV14XxApplicationProblemPlusJson, _super);
    function AddRestrictionsV14XxApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], AddRestrictionsV14XxApplicationProblemPlusJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], AddRestrictionsV14XxApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AddRestrictionsV14XxApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddRestrictionsV14XxApplicationProblemPlusJson.prototype, "type", void 0);
    return AddRestrictionsV14XxApplicationProblemPlusJson;
}(SpeakeasyBase));
export { AddRestrictionsV14XxApplicationProblemPlusJson };
var AddRestrictionsV1Request = /** @class */ (function (_super) {
    __extends(AddRestrictionsV1Request, _super);
    function AddRestrictionsV1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddRestrictionsV1RequestBody)
    ], AddRestrictionsV1Request.prototype, "request", void 0);
    return AddRestrictionsV1Request;
}(SpeakeasyBase));
export { AddRestrictionsV1Request };
var AddRestrictionsV1Response = /** @class */ (function (_super) {
    __extends(AddRestrictionsV1Response, _super);
    function AddRestrictionsV1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddRestrictionsV1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddRestrictionsV1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AddRestrictionsV1Response.prototype, "addRestrictionsV1200ApplicationPdfBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddRestrictionsV14XxApplicationProblemPlusJson)
    ], AddRestrictionsV1Response.prototype, "addRestrictionsV14XxApplicationProblemPlusJsonObject", void 0);
    return AddRestrictionsV1Response;
}(SpeakeasyBase));
export { AddRestrictionsV1Response };
