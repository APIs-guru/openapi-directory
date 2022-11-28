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
var EditAlbumPathParams = /** @class */ (function (_super) {
    __extends(EditAlbumPathParams, _super);
    function EditAlbumPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" }),
        __metadata("design:type", Number)
    ], EditAlbumPathParams.prototype, "albumId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], EditAlbumPathParams.prototype, "userId", void 0);
    return EditAlbumPathParams;
}(SpeakeasyBase));
export { EditAlbumPathParams };
export var EditAlbumRequestBodyLayoutEnum;
(function (EditAlbumRequestBodyLayoutEnum) {
    EditAlbumRequestBodyLayoutEnum["Grid"] = "grid";
    EditAlbumRequestBodyLayoutEnum["Player"] = "player";
})(EditAlbumRequestBodyLayoutEnum || (EditAlbumRequestBodyLayoutEnum = {}));
export var EditAlbumRequestBodyPrivacyEnum;
(function (EditAlbumRequestBodyPrivacyEnum) {
    EditAlbumRequestBodyPrivacyEnum["Anybody"] = "anybody";
    EditAlbumRequestBodyPrivacyEnum["EmbedOnly"] = "embed_only";
    EditAlbumRequestBodyPrivacyEnum["Password"] = "password";
})(EditAlbumRequestBodyPrivacyEnum || (EditAlbumRequestBodyPrivacyEnum = {}));
export var EditAlbumRequestBodySortEnum;
(function (EditAlbumRequestBodySortEnum) {
    EditAlbumRequestBodySortEnum["AddedFirst"] = "added_first";
    EditAlbumRequestBodySortEnum["AddedLast"] = "added_last";
    EditAlbumRequestBodySortEnum["Alphabetical"] = "alphabetical";
    EditAlbumRequestBodySortEnum["Arranged"] = "arranged";
    EditAlbumRequestBodySortEnum["Comments"] = "comments";
    EditAlbumRequestBodySortEnum["Likes"] = "likes";
    EditAlbumRequestBodySortEnum["Newest"] = "newest";
    EditAlbumRequestBodySortEnum["Oldest"] = "oldest";
    EditAlbumRequestBodySortEnum["Plays"] = "plays";
})(EditAlbumRequestBodySortEnum || (EditAlbumRequestBodySortEnum = {}));
export var EditAlbumRequestBodyThemeEnum;
(function (EditAlbumRequestBodyThemeEnum) {
    EditAlbumRequestBodyThemeEnum["Dark"] = "dark";
    EditAlbumRequestBodyThemeEnum["Standard"] = "standard";
})(EditAlbumRequestBodyThemeEnum || (EditAlbumRequestBodyThemeEnum = {}));
var EditAlbumRequestBody = /** @class */ (function (_super) {
    __extends(EditAlbumRequestBody, _super);
    function EditAlbumRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand_color" }),
        __metadata("design:type", String)
    ], EditAlbumRequestBody.prototype, "brandColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EditAlbumRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], EditAlbumRequestBody.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hide_nav" }),
        __metadata("design:type", Boolean)
    ], EditAlbumRequestBody.prototype, "hideNav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layout" }),
        __metadata("design:type", String)
    ], EditAlbumRequestBody.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EditAlbumRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], EditAlbumRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], EditAlbumRequestBody.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_mode" }),
        __metadata("design:type", Boolean)
    ], EditAlbumRequestBody.prototype, "reviewMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], EditAlbumRequestBody.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], EditAlbumRequestBody.prototype, "theme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EditAlbumRequestBody.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_custom_domain" }),
        __metadata("design:type", Boolean)
    ], EditAlbumRequestBody.prototype, "useCustomDomain", void 0);
    return EditAlbumRequestBody;
}(SpeakeasyBase));
export { EditAlbumRequestBody };
var EditAlbumSecurity = /** @class */ (function (_super) {
    __extends(EditAlbumSecurity, _super);
    function EditAlbumSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EditAlbumSecurity.prototype, "oauth2", void 0);
    return EditAlbumSecurity;
}(SpeakeasyBase));
export { EditAlbumSecurity };
var EditAlbumRequest = /** @class */ (function (_super) {
    __extends(EditAlbumRequest, _super);
    function EditAlbumRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditAlbumPathParams)
    ], EditAlbumRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.album+json" }),
        __metadata("design:type", EditAlbumRequestBody)
    ], EditAlbumRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditAlbumSecurity)
    ], EditAlbumRequest.prototype, "security", void 0);
    return EditAlbumRequest;
}(SpeakeasyBase));
export { EditAlbumRequest };
var EditAlbumResponse = /** @class */ (function (_super) {
    __extends(EditAlbumResponse, _super);
    function EditAlbumResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditAlbumResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditAlbumResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Album)
    ], EditAlbumResponse.prototype, "album", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], EditAlbumResponse.prototype, "legacyError", void 0);
    return EditAlbumResponse;
}(SpeakeasyBase));
export { EditAlbumResponse };
