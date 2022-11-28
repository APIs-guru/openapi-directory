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
var CreateAlbumPathParams = /** @class */ (function (_super) {
    __extends(CreateAlbumPathParams, _super);
    function CreateAlbumPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], CreateAlbumPathParams.prototype, "userId", void 0);
    return CreateAlbumPathParams;
}(SpeakeasyBase));
export { CreateAlbumPathParams };
export var CreateAlbumRequestBodyLayoutEnum;
(function (CreateAlbumRequestBodyLayoutEnum) {
    CreateAlbumRequestBodyLayoutEnum["Grid"] = "grid";
    CreateAlbumRequestBodyLayoutEnum["Player"] = "player";
})(CreateAlbumRequestBodyLayoutEnum || (CreateAlbumRequestBodyLayoutEnum = {}));
export var CreateAlbumRequestBodyPrivacyEnum;
(function (CreateAlbumRequestBodyPrivacyEnum) {
    CreateAlbumRequestBodyPrivacyEnum["Anybody"] = "anybody";
    CreateAlbumRequestBodyPrivacyEnum["EmbedOnly"] = "embed_only";
    CreateAlbumRequestBodyPrivacyEnum["Password"] = "password";
})(CreateAlbumRequestBodyPrivacyEnum || (CreateAlbumRequestBodyPrivacyEnum = {}));
export var CreateAlbumRequestBodySortEnum;
(function (CreateAlbumRequestBodySortEnum) {
    CreateAlbumRequestBodySortEnum["AddedFirst"] = "added_first";
    CreateAlbumRequestBodySortEnum["AddedLast"] = "added_last";
    CreateAlbumRequestBodySortEnum["Alphabetical"] = "alphabetical";
    CreateAlbumRequestBodySortEnum["Arranged"] = "arranged";
    CreateAlbumRequestBodySortEnum["Comments"] = "comments";
    CreateAlbumRequestBodySortEnum["Likes"] = "likes";
    CreateAlbumRequestBodySortEnum["Newest"] = "newest";
    CreateAlbumRequestBodySortEnum["Oldest"] = "oldest";
    CreateAlbumRequestBodySortEnum["Plays"] = "plays";
})(CreateAlbumRequestBodySortEnum || (CreateAlbumRequestBodySortEnum = {}));
export var CreateAlbumRequestBodyThemeEnum;
(function (CreateAlbumRequestBodyThemeEnum) {
    CreateAlbumRequestBodyThemeEnum["Dark"] = "dark";
    CreateAlbumRequestBodyThemeEnum["Standard"] = "standard";
})(CreateAlbumRequestBodyThemeEnum || (CreateAlbumRequestBodyThemeEnum = {}));
var CreateAlbumRequestBody = /** @class */ (function (_super) {
    __extends(CreateAlbumRequestBody, _super);
    function CreateAlbumRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand_color" }),
        __metadata("design:type", String)
    ], CreateAlbumRequestBody.prototype, "brandColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateAlbumRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hide_nav" }),
        __metadata("design:type", Boolean)
    ], CreateAlbumRequestBody.prototype, "hideNav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layout" }),
        __metadata("design:type", String)
    ], CreateAlbumRequestBody.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateAlbumRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], CreateAlbumRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], CreateAlbumRequestBody.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_mode" }),
        __metadata("design:type", Boolean)
    ], CreateAlbumRequestBody.prototype, "reviewMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], CreateAlbumRequestBody.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], CreateAlbumRequestBody.prototype, "theme", void 0);
    return CreateAlbumRequestBody;
}(SpeakeasyBase));
export { CreateAlbumRequestBody };
var CreateAlbumSecurity = /** @class */ (function (_super) {
    __extends(CreateAlbumSecurity, _super);
    function CreateAlbumSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateAlbumSecurity.prototype, "oauth2", void 0);
    return CreateAlbumSecurity;
}(SpeakeasyBase));
export { CreateAlbumSecurity };
var CreateAlbumRequest = /** @class */ (function (_super) {
    __extends(CreateAlbumRequest, _super);
    function CreateAlbumRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAlbumPathParams)
    ], CreateAlbumRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.album+json" }),
        __metadata("design:type", CreateAlbumRequestBody)
    ], CreateAlbumRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAlbumSecurity)
    ], CreateAlbumRequest.prototype, "security", void 0);
    return CreateAlbumRequest;
}(SpeakeasyBase));
export { CreateAlbumRequest };
var CreateAlbumResponse = /** @class */ (function (_super) {
    __extends(CreateAlbumResponse, _super);
    function CreateAlbumResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAlbumResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAlbumResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Album)
    ], CreateAlbumResponse.prototype, "album", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], CreateAlbumResponse.prototype, "legacyError", void 0);
    return CreateAlbumResponse;
}(SpeakeasyBase));
export { CreateAlbumResponse };
