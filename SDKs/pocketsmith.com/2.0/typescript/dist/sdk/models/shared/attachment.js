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
var AttachmentContentTypeMeta = /** @class */ (function (_super) {
    __extends(AttachmentContentTypeMeta, _super);
    function AttachmentContentTypeMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AttachmentContentTypeMeta.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], AttachmentContentTypeMeta.prototype, "extension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AttachmentContentTypeMeta.prototype, "title", void 0);
    return AttachmentContentTypeMeta;
}(SpeakeasyBase));
export { AttachmentContentTypeMeta };
var AttachmentVariants = /** @class */ (function (_super) {
    __extends(AttachmentVariants, _super);
    function AttachmentVariants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=large_url" }),
        __metadata("design:type", String)
    ], AttachmentVariants.prototype, "largeUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumb_url" }),
        __metadata("design:type", String)
    ], AttachmentVariants.prototype, "thumbUrl", void 0);
    return AttachmentVariants;
}(SpeakeasyBase));
export { AttachmentVariants };
var Attachment = /** @class */ (function (_super) {
    __extends(Attachment, _super);
    function Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type_meta" }),
        __metadata("design:type", AttachmentContentTypeMeta)
    ], Attachment.prototype, "contentTypeMeta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_name" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Attachment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_url" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "originalUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variants" }),
        __metadata("design:type", AttachmentVariants)
    ], Attachment.prototype, "variants", void 0);
    return Attachment;
}(SpeakeasyBase));
export { Attachment };
