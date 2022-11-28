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
var EditAlbumAlt1PathParams = /** @class */ (function (_super) {
    __extends(EditAlbumAlt1PathParams, _super);
    function EditAlbumAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" }),
        __metadata("design:type", Number)
    ], EditAlbumAlt1PathParams.prototype, "albumId", void 0);
    return EditAlbumAlt1PathParams;
}(SpeakeasyBase));
export { EditAlbumAlt1PathParams };
export var EditAlbumAlt1RequestBodyLayoutEnum;
(function (EditAlbumAlt1RequestBodyLayoutEnum) {
    EditAlbumAlt1RequestBodyLayoutEnum["Grid"] = "grid";
    EditAlbumAlt1RequestBodyLayoutEnum["Player"] = "player";
})(EditAlbumAlt1RequestBodyLayoutEnum || (EditAlbumAlt1RequestBodyLayoutEnum = {}));
export var EditAlbumAlt1RequestBodyPrivacyEnum;
(function (EditAlbumAlt1RequestBodyPrivacyEnum) {
    EditAlbumAlt1RequestBodyPrivacyEnum["Anybody"] = "anybody";
    EditAlbumAlt1RequestBodyPrivacyEnum["EmbedOnly"] = "embed_only";
    EditAlbumAlt1RequestBodyPrivacyEnum["Password"] = "password";
})(EditAlbumAlt1RequestBodyPrivacyEnum || (EditAlbumAlt1RequestBodyPrivacyEnum = {}));
export var EditAlbumAlt1RequestBodySortEnum;
(function (EditAlbumAlt1RequestBodySortEnum) {
    EditAlbumAlt1RequestBodySortEnum["AddedFirst"] = "added_first";
    EditAlbumAlt1RequestBodySortEnum["AddedLast"] = "added_last";
    EditAlbumAlt1RequestBodySortEnum["Alphabetical"] = "alphabetical";
    EditAlbumAlt1RequestBodySortEnum["Arranged"] = "arranged";
    EditAlbumAlt1RequestBodySortEnum["Comments"] = "comments";
    EditAlbumAlt1RequestBodySortEnum["Likes"] = "likes";
    EditAlbumAlt1RequestBodySortEnum["Newest"] = "newest";
    EditAlbumAlt1RequestBodySortEnum["Oldest"] = "oldest";
    EditAlbumAlt1RequestBodySortEnum["Plays"] = "plays";
})(EditAlbumAlt1RequestBodySortEnum || (EditAlbumAlt1RequestBodySortEnum = {}));
export var EditAlbumAlt1RequestBodyThemeEnum;
(function (EditAlbumAlt1RequestBodyThemeEnum) {
    EditAlbumAlt1RequestBodyThemeEnum["Dark"] = "dark";
    EditAlbumAlt1RequestBodyThemeEnum["Standard"] = "standard";
})(EditAlbumAlt1RequestBodyThemeEnum || (EditAlbumAlt1RequestBodyThemeEnum = {}));
var EditAlbumAlt1RequestBody = /** @class */ (function (_super) {
    __extends(EditAlbumAlt1RequestBody, _super);
    function EditAlbumAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand_color" }),
        __metadata("design:type", String)
    ], EditAlbumAlt1RequestBody.prototype, "brandColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EditAlbumAlt1RequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], EditAlbumAlt1RequestBody.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hide_nav" }),
        __metadata("design:type", Boolean)
    ], EditAlbumAlt1RequestBody.prototype, "hideNav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layout" }),
        __metadata("design:type", String)
    ], EditAlbumAlt1RequestBody.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EditAlbumAlt1RequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], EditAlbumAlt1RequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], EditAlbumAlt1RequestBody.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_mode" }),
        __metadata("design:type", Boolean)
    ], EditAlbumAlt1RequestBody.prototype, "reviewMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], EditAlbumAlt1RequestBody.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], EditAlbumAlt1RequestBody.prototype, "theme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EditAlbumAlt1RequestBody.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_custom_domain" }),
        __metadata("design:type", Boolean)
    ], EditAlbumAlt1RequestBody.prototype, "useCustomDomain", void 0);
    return EditAlbumAlt1RequestBody;
}(SpeakeasyBase));
export { EditAlbumAlt1RequestBody };
var EditAlbumAlt1Security = /** @class */ (function (_super) {
    __extends(EditAlbumAlt1Security, _super);
    function EditAlbumAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EditAlbumAlt1Security.prototype, "oauth2", void 0);
    return EditAlbumAlt1Security;
}(SpeakeasyBase));
export { EditAlbumAlt1Security };
var EditAlbumAlt1Request = /** @class */ (function (_super) {
    __extends(EditAlbumAlt1Request, _super);
    function EditAlbumAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditAlbumAlt1PathParams)
    ], EditAlbumAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.album+json" }),
        __metadata("design:type", EditAlbumAlt1RequestBody)
    ], EditAlbumAlt1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditAlbumAlt1Security)
    ], EditAlbumAlt1Request.prototype, "security", void 0);
    return EditAlbumAlt1Request;
}(SpeakeasyBase));
export { EditAlbumAlt1Request };
var EditAlbumAlt1Response = /** @class */ (function (_super) {
    __extends(EditAlbumAlt1Response, _super);
    function EditAlbumAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditAlbumAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditAlbumAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Album)
    ], EditAlbumAlt1Response.prototype, "album", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], EditAlbumAlt1Response.prototype, "legacyError", void 0);
    return EditAlbumAlt1Response;
}(SpeakeasyBase));
export { EditAlbumAlt1Response };
