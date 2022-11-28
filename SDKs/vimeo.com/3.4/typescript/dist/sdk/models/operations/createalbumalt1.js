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
export var CreateAlbumAlt1RequestBodyLayoutEnum;
(function (CreateAlbumAlt1RequestBodyLayoutEnum) {
    CreateAlbumAlt1RequestBodyLayoutEnum["Grid"] = "grid";
    CreateAlbumAlt1RequestBodyLayoutEnum["Player"] = "player";
})(CreateAlbumAlt1RequestBodyLayoutEnum || (CreateAlbumAlt1RequestBodyLayoutEnum = {}));
export var CreateAlbumAlt1RequestBodyPrivacyEnum;
(function (CreateAlbumAlt1RequestBodyPrivacyEnum) {
    CreateAlbumAlt1RequestBodyPrivacyEnum["Anybody"] = "anybody";
    CreateAlbumAlt1RequestBodyPrivacyEnum["EmbedOnly"] = "embed_only";
    CreateAlbumAlt1RequestBodyPrivacyEnum["Password"] = "password";
})(CreateAlbumAlt1RequestBodyPrivacyEnum || (CreateAlbumAlt1RequestBodyPrivacyEnum = {}));
export var CreateAlbumAlt1RequestBodySortEnum;
(function (CreateAlbumAlt1RequestBodySortEnum) {
    CreateAlbumAlt1RequestBodySortEnum["AddedFirst"] = "added_first";
    CreateAlbumAlt1RequestBodySortEnum["AddedLast"] = "added_last";
    CreateAlbumAlt1RequestBodySortEnum["Alphabetical"] = "alphabetical";
    CreateAlbumAlt1RequestBodySortEnum["Arranged"] = "arranged";
    CreateAlbumAlt1RequestBodySortEnum["Comments"] = "comments";
    CreateAlbumAlt1RequestBodySortEnum["Likes"] = "likes";
    CreateAlbumAlt1RequestBodySortEnum["Newest"] = "newest";
    CreateAlbumAlt1RequestBodySortEnum["Oldest"] = "oldest";
    CreateAlbumAlt1RequestBodySortEnum["Plays"] = "plays";
})(CreateAlbumAlt1RequestBodySortEnum || (CreateAlbumAlt1RequestBodySortEnum = {}));
export var CreateAlbumAlt1RequestBodyThemeEnum;
(function (CreateAlbumAlt1RequestBodyThemeEnum) {
    CreateAlbumAlt1RequestBodyThemeEnum["Dark"] = "dark";
    CreateAlbumAlt1RequestBodyThemeEnum["Standard"] = "standard";
})(CreateAlbumAlt1RequestBodyThemeEnum || (CreateAlbumAlt1RequestBodyThemeEnum = {}));
var CreateAlbumAlt1RequestBody = /** @class */ (function (_super) {
    __extends(CreateAlbumAlt1RequestBody, _super);
    function CreateAlbumAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand_color" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "brandColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hide_nav" }),
        __metadata("design:type", Boolean)
    ], CreateAlbumAlt1RequestBody.prototype, "hideNav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layout" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_mode" }),
        __metadata("design:type", Boolean)
    ], CreateAlbumAlt1RequestBody.prototype, "reviewMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "theme", void 0);
    return CreateAlbumAlt1RequestBody;
}(SpeakeasyBase));
export { CreateAlbumAlt1RequestBody };
var CreateAlbumAlt1Security = /** @class */ (function (_super) {
    __extends(CreateAlbumAlt1Security, _super);
    function CreateAlbumAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateAlbumAlt1Security.prototype, "oauth2", void 0);
    return CreateAlbumAlt1Security;
}(SpeakeasyBase));
export { CreateAlbumAlt1Security };
var CreateAlbumAlt1Request = /** @class */ (function (_super) {
    __extends(CreateAlbumAlt1Request, _super);
    function CreateAlbumAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.album+json" }),
        __metadata("design:type", CreateAlbumAlt1RequestBody)
    ], CreateAlbumAlt1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAlbumAlt1Security)
    ], CreateAlbumAlt1Request.prototype, "security", void 0);
    return CreateAlbumAlt1Request;
}(SpeakeasyBase));
export { CreateAlbumAlt1Request };
var CreateAlbumAlt1Response = /** @class */ (function (_super) {
    __extends(CreateAlbumAlt1Response, _super);
    function CreateAlbumAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAlbumAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAlbumAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Album)
    ], CreateAlbumAlt1Response.prototype, "album", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], CreateAlbumAlt1Response.prototype, "legacyError", void 0);
    return CreateAlbumAlt1Response;
}(SpeakeasyBase));
export { CreateAlbumAlt1Response };
