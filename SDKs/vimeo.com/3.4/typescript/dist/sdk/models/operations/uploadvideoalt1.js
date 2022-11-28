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
var UploadVideoAlt1RequestBodyEmbedButtons = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyEmbedButtons, _super);
    function UploadVideoAlt1RequestBodyEmbedButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbedButtons.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullscreen" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbedButtons.prototype, "fullscreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hd" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbedButtons.prototype, "hd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbedButtons.prototype, "like", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaling" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbedButtons.prototype, "scaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=share" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbedButtons.prototype, "share", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbedButtons.prototype, "watchlater", void 0);
    return UploadVideoAlt1RequestBodyEmbedButtons;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyEmbedButtons };
var UploadVideoAlt1RequestBodyEmbedLogosCustom = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyEmbedLogosCustom, _super);
    function UploadVideoAlt1RequestBodyEmbedLogosCustom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbedLogosCustom.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyEmbedLogosCustom.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbedLogosCustom.prototype, "sticky", void 0);
    return UploadVideoAlt1RequestBodyEmbedLogosCustom;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyEmbedLogosCustom };
var UploadVideoAlt1RequestBodyEmbedLogos = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyEmbedLogos, _super);
    function UploadVideoAlt1RequestBodyEmbedLogos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyEmbedLogosCustom)
    ], UploadVideoAlt1RequestBodyEmbedLogos.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vimeo" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbedLogos.prototype, "vimeo", void 0);
    return UploadVideoAlt1RequestBodyEmbedLogos;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyEmbedLogos };
export var UploadVideoAlt1RequestBodyEmbedTitleNameEnum;
(function (UploadVideoAlt1RequestBodyEmbedTitleNameEnum) {
    UploadVideoAlt1RequestBodyEmbedTitleNameEnum["Hide"] = "hide";
    UploadVideoAlt1RequestBodyEmbedTitleNameEnum["Show"] = "show";
    UploadVideoAlt1RequestBodyEmbedTitleNameEnum["User"] = "user";
})(UploadVideoAlt1RequestBodyEmbedTitleNameEnum || (UploadVideoAlt1RequestBodyEmbedTitleNameEnum = {}));
export var UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum;
(function (UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum) {
    UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum["Hide"] = "hide";
    UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum["Show"] = "show";
    UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum["User"] = "user";
})(UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum || (UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum = {}));
export var UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum;
(function (UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum) {
    UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum["Hide"] = "hide";
    UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum["Show"] = "show";
    UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum["User"] = "user";
})(UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum || (UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum = {}));
var UploadVideoAlt1RequestBodyEmbedTitle = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyEmbedTitle, _super);
    function UploadVideoAlt1RequestBodyEmbedTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyEmbedTitle.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyEmbedTitle.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portrait" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyEmbedTitle.prototype, "portrait", void 0);
    return UploadVideoAlt1RequestBodyEmbedTitle;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyEmbedTitle };
var UploadVideoAlt1RequestBodyEmbed = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyEmbed, _super);
    function UploadVideoAlt1RequestBodyEmbed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buttons" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyEmbedButtons)
    ], UploadVideoAlt1RequestBodyEmbed.prototype, "buttons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyEmbed.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logos" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyEmbedLogos)
    ], UploadVideoAlt1RequestBodyEmbed.prototype, "logos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playbar" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbed.prototype, "playbar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyEmbedTitle)
    ], UploadVideoAlt1RequestBodyEmbed.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyEmbed.prototype, "volume", void 0);
    return UploadVideoAlt1RequestBodyEmbed;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyEmbed };
export var UploadVideoAlt1RequestBodyLicenseEnum;
(function (UploadVideoAlt1RequestBodyLicenseEnum) {
    UploadVideoAlt1RequestBodyLicenseEnum["By"] = "by";
    UploadVideoAlt1RequestBodyLicenseEnum["ByNc"] = "by-nc";
    UploadVideoAlt1RequestBodyLicenseEnum["ByNcNd"] = "by-nc-nd";
    UploadVideoAlt1RequestBodyLicenseEnum["ByNcSa"] = "by-nc-sa";
    UploadVideoAlt1RequestBodyLicenseEnum["ByNd"] = "by-nd";
    UploadVideoAlt1RequestBodyLicenseEnum["BySa"] = "by-sa";
    UploadVideoAlt1RequestBodyLicenseEnum["Cc0"] = "cc0";
})(UploadVideoAlt1RequestBodyLicenseEnum || (UploadVideoAlt1RequestBodyLicenseEnum = {}));
export var UploadVideoAlt1RequestBodyPrivacyCommentsEnum;
(function (UploadVideoAlt1RequestBodyPrivacyCommentsEnum) {
    UploadVideoAlt1RequestBodyPrivacyCommentsEnum["Anybody"] = "anybody";
    UploadVideoAlt1RequestBodyPrivacyCommentsEnum["Contacts"] = "contacts";
    UploadVideoAlt1RequestBodyPrivacyCommentsEnum["Nobody"] = "nobody";
})(UploadVideoAlt1RequestBodyPrivacyCommentsEnum || (UploadVideoAlt1RequestBodyPrivacyCommentsEnum = {}));
export var UploadVideoAlt1RequestBodyPrivacyEmbedEnum;
(function (UploadVideoAlt1RequestBodyPrivacyEmbedEnum) {
    UploadVideoAlt1RequestBodyPrivacyEmbedEnum["Private"] = "private";
    UploadVideoAlt1RequestBodyPrivacyEmbedEnum["Public"] = "public";
    UploadVideoAlt1RequestBodyPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(UploadVideoAlt1RequestBodyPrivacyEmbedEnum || (UploadVideoAlt1RequestBodyPrivacyEmbedEnum = {}));
export var UploadVideoAlt1RequestBodyPrivacyViewEnum;
(function (UploadVideoAlt1RequestBodyPrivacyViewEnum) {
    UploadVideoAlt1RequestBodyPrivacyViewEnum["Anybody"] = "anybody";
    UploadVideoAlt1RequestBodyPrivacyViewEnum["Contacts"] = "contacts";
    UploadVideoAlt1RequestBodyPrivacyViewEnum["Disable"] = "disable";
    UploadVideoAlt1RequestBodyPrivacyViewEnum["Nobody"] = "nobody";
    UploadVideoAlt1RequestBodyPrivacyViewEnum["Password"] = "password";
    UploadVideoAlt1RequestBodyPrivacyViewEnum["Unlisted"] = "unlisted";
    UploadVideoAlt1RequestBodyPrivacyViewEnum["Users"] = "users";
})(UploadVideoAlt1RequestBodyPrivacyViewEnum || (UploadVideoAlt1RequestBodyPrivacyViewEnum = {}));
var UploadVideoAlt1RequestBodyPrivacy = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyPrivacy, _super);
    function UploadVideoAlt1RequestBodyPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyPrivacy.prototype, "view", void 0);
    return UploadVideoAlt1RequestBodyPrivacy;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyPrivacy };
export var UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum;
(function (UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum) {
    UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum["At"] = "at";
    UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum["Bn"] = "bn";
    UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum["N"] = "n";
    UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum["Sl"] = "sl";
    UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum["Ss"] = "ss";
    UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum["V"] = "v";
})(UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum || (UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum = {}));
var UploadVideoAlt1RequestBodyRatingsMpaa = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyRatingsMpaa, _super);
    function UploadVideoAlt1RequestBodyRatingsMpaa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyRatingsMpaa.prototype, "reason", void 0);
    return UploadVideoAlt1RequestBodyRatingsMpaa;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyRatingsMpaa };
export var UploadVideoAlt1RequestBodyRatingsTvReasonEnum;
(function (UploadVideoAlt1RequestBodyRatingsTvReasonEnum) {
    UploadVideoAlt1RequestBodyRatingsTvReasonEnum["D"] = "d";
    UploadVideoAlt1RequestBodyRatingsTvReasonEnum["Fv"] = "fv";
    UploadVideoAlt1RequestBodyRatingsTvReasonEnum["L"] = "l";
    UploadVideoAlt1RequestBodyRatingsTvReasonEnum["Ss"] = "ss";
    UploadVideoAlt1RequestBodyRatingsTvReasonEnum["V"] = "v";
})(UploadVideoAlt1RequestBodyRatingsTvReasonEnum || (UploadVideoAlt1RequestBodyRatingsTvReasonEnum = {}));
var UploadVideoAlt1RequestBodyRatingsTv = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyRatingsTv, _super);
    function UploadVideoAlt1RequestBodyRatingsTv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyRatingsTv.prototype, "reason", void 0);
    return UploadVideoAlt1RequestBodyRatingsTv;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyRatingsTv };
var UploadVideoAlt1RequestBodyRatings = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyRatings, _super);
    function UploadVideoAlt1RequestBodyRatings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mpaa" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyRatingsMpaa)
    ], UploadVideoAlt1RequestBodyRatings.prototype, "mpaa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tv" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyRatingsTv)
    ], UploadVideoAlt1RequestBodyRatings.prototype, "tv", void 0);
    return UploadVideoAlt1RequestBodyRatings;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyRatings };
var UploadVideoAlt1RequestBodyReviewPage = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyReviewPage, _super);
    function UploadVideoAlt1RequestBodyReviewPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UploadVideoAlt1RequestBodyReviewPage.prototype, "active", void 0);
    return UploadVideoAlt1RequestBodyReviewPage;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyReviewPage };
var UploadVideoAlt1RequestBodySpatialDirectorTimeline = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodySpatialDirectorTimeline, _super);
    function UploadVideoAlt1RequestBodySpatialDirectorTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pitch" }),
        __metadata("design:type", Number)
    ], UploadVideoAlt1RequestBodySpatialDirectorTimeline.prototype, "pitch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roll" }),
        __metadata("design:type", Number)
    ], UploadVideoAlt1RequestBodySpatialDirectorTimeline.prototype, "roll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_code" }),
        __metadata("design:type", Number)
    ], UploadVideoAlt1RequestBodySpatialDirectorTimeline.prototype, "timeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yaw" }),
        __metadata("design:type", Number)
    ], UploadVideoAlt1RequestBodySpatialDirectorTimeline.prototype, "yaw", void 0);
    return UploadVideoAlt1RequestBodySpatialDirectorTimeline;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodySpatialDirectorTimeline };
export var UploadVideoAlt1RequestBodySpatialProjectionEnum;
(function (UploadVideoAlt1RequestBodySpatialProjectionEnum) {
    UploadVideoAlt1RequestBodySpatialProjectionEnum["Cubical"] = "cubical";
    UploadVideoAlt1RequestBodySpatialProjectionEnum["Cylindrical"] = "cylindrical";
    UploadVideoAlt1RequestBodySpatialProjectionEnum["Dome"] = "dome";
    UploadVideoAlt1RequestBodySpatialProjectionEnum["Equirectangular"] = "equirectangular";
    UploadVideoAlt1RequestBodySpatialProjectionEnum["Pyramid"] = "pyramid";
})(UploadVideoAlt1RequestBodySpatialProjectionEnum || (UploadVideoAlt1RequestBodySpatialProjectionEnum = {}));
export var UploadVideoAlt1RequestBodySpatialStereoFormatEnum;
(function (UploadVideoAlt1RequestBodySpatialStereoFormatEnum) {
    UploadVideoAlt1RequestBodySpatialStereoFormatEnum["LeftRight"] = "left-right";
    UploadVideoAlt1RequestBodySpatialStereoFormatEnum["Mono"] = "mono";
    UploadVideoAlt1RequestBodySpatialStereoFormatEnum["TopBottom"] = "top-bottom";
})(UploadVideoAlt1RequestBodySpatialStereoFormatEnum || (UploadVideoAlt1RequestBodySpatialStereoFormatEnum = {}));
var UploadVideoAlt1RequestBodySpatial = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodySpatial, _super);
    function UploadVideoAlt1RequestBodySpatial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=director_timeline", elemType: UploadVideoAlt1RequestBodySpatialDirectorTimeline }),
        __metadata("design:type", Array)
    ], UploadVideoAlt1RequestBodySpatial.prototype, "directorTimeline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field_of_view" }),
        __metadata("design:type", Number)
    ], UploadVideoAlt1RequestBodySpatial.prototype, "fieldOfView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projection" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodySpatial.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stereo_format" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodySpatial.prototype, "stereoFormat", void 0);
    return UploadVideoAlt1RequestBodySpatial;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodySpatial };
export var UploadVideoAlt1RequestBodyUploadApproachEnum;
(function (UploadVideoAlt1RequestBodyUploadApproachEnum) {
    UploadVideoAlt1RequestBodyUploadApproachEnum["Post"] = "post";
    UploadVideoAlt1RequestBodyUploadApproachEnum["Pull"] = "pull";
    UploadVideoAlt1RequestBodyUploadApproachEnum["Streaming"] = "streaming";
    UploadVideoAlt1RequestBodyUploadApproachEnum["Tus"] = "tus";
})(UploadVideoAlt1RequestBodyUploadApproachEnum || (UploadVideoAlt1RequestBodyUploadApproachEnum = {}));
var UploadVideoAlt1RequestBodyUpload = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBodyUpload, _super);
    function UploadVideoAlt1RequestBodyUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approach" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyUpload.prototype, "approach", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyUpload.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyUpload.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBodyUpload.prototype, "size", void 0);
    return UploadVideoAlt1RequestBodyUpload;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBodyUpload };
var UploadVideoAlt1RequestBody = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1RequestBody, _super);
    function UploadVideoAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_rating" }),
        __metadata("design:type", Array)
    ], UploadVideoAlt1RequestBody.prototype, "contentRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyEmbed)
    ], UploadVideoAlt1RequestBody.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBody.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBody.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UploadVideoAlt1RequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyPrivacy)
    ], UploadVideoAlt1RequestBody.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratings" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyRatings)
    ], UploadVideoAlt1RequestBody.prototype, "ratings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_page" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyReviewPage)
    ], UploadVideoAlt1RequestBody.prototype, "reviewPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spatial" }),
        __metadata("design:type", UploadVideoAlt1RequestBodySpatial)
    ], UploadVideoAlt1RequestBody.prototype, "spatial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload" }),
        __metadata("design:type", UploadVideoAlt1RequestBodyUpload)
    ], UploadVideoAlt1RequestBody.prototype, "upload", void 0);
    return UploadVideoAlt1RequestBody;
}(SpeakeasyBase));
export { UploadVideoAlt1RequestBody };
var UploadVideoAlt1Request = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1Request, _super);
    function UploadVideoAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video+json" }),
        __metadata("design:type", UploadVideoAlt1RequestBody)
    ], UploadVideoAlt1Request.prototype, "request", void 0);
    return UploadVideoAlt1Request;
}(SpeakeasyBase));
export { UploadVideoAlt1Request };
var UploadVideoAlt1Response = /** @class */ (function (_super) {
    __extends(UploadVideoAlt1Response, _super);
    function UploadVideoAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadVideoAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadVideoAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], UploadVideoAlt1Response.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Video)
    ], UploadVideoAlt1Response.prototype, "video", void 0);
    return UploadVideoAlt1Response;
}(SpeakeasyBase));
export { UploadVideoAlt1Response };
