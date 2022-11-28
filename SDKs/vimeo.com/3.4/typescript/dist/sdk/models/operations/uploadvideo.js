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
var UploadVideoPathParams = /** @class */ (function (_super) {
    __extends(UploadVideoPathParams, _super);
    function UploadVideoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], UploadVideoPathParams.prototype, "userId", void 0);
    return UploadVideoPathParams;
}(SpeakeasyBase));
export { UploadVideoPathParams };
var UploadVideoRequestBodyEmbedButtons = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyEmbedButtons, _super);
    function UploadVideoRequestBodyEmbedButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbedButtons.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullscreen" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbedButtons.prototype, "fullscreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hd" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbedButtons.prototype, "hd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbedButtons.prototype, "like", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaling" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbedButtons.prototype, "scaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=share" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbedButtons.prototype, "share", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbedButtons.prototype, "watchlater", void 0);
    return UploadVideoRequestBodyEmbedButtons;
}(SpeakeasyBase));
export { UploadVideoRequestBodyEmbedButtons };
var UploadVideoRequestBodyEmbedLogosCustom = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyEmbedLogosCustom, _super);
    function UploadVideoRequestBodyEmbedLogosCustom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbedLogosCustom.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyEmbedLogosCustom.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbedLogosCustom.prototype, "sticky", void 0);
    return UploadVideoRequestBodyEmbedLogosCustom;
}(SpeakeasyBase));
export { UploadVideoRequestBodyEmbedLogosCustom };
var UploadVideoRequestBodyEmbedLogos = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyEmbedLogos, _super);
    function UploadVideoRequestBodyEmbedLogos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", UploadVideoRequestBodyEmbedLogosCustom)
    ], UploadVideoRequestBodyEmbedLogos.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vimeo" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbedLogos.prototype, "vimeo", void 0);
    return UploadVideoRequestBodyEmbedLogos;
}(SpeakeasyBase));
export { UploadVideoRequestBodyEmbedLogos };
export var UploadVideoRequestBodyEmbedTitleNameEnum;
(function (UploadVideoRequestBodyEmbedTitleNameEnum) {
    UploadVideoRequestBodyEmbedTitleNameEnum["Hide"] = "hide";
    UploadVideoRequestBodyEmbedTitleNameEnum["Show"] = "show";
    UploadVideoRequestBodyEmbedTitleNameEnum["User"] = "user";
})(UploadVideoRequestBodyEmbedTitleNameEnum || (UploadVideoRequestBodyEmbedTitleNameEnum = {}));
export var UploadVideoRequestBodyEmbedTitleOwnerEnum;
(function (UploadVideoRequestBodyEmbedTitleOwnerEnum) {
    UploadVideoRequestBodyEmbedTitleOwnerEnum["Hide"] = "hide";
    UploadVideoRequestBodyEmbedTitleOwnerEnum["Show"] = "show";
    UploadVideoRequestBodyEmbedTitleOwnerEnum["User"] = "user";
})(UploadVideoRequestBodyEmbedTitleOwnerEnum || (UploadVideoRequestBodyEmbedTitleOwnerEnum = {}));
export var UploadVideoRequestBodyEmbedTitlePortraitEnum;
(function (UploadVideoRequestBodyEmbedTitlePortraitEnum) {
    UploadVideoRequestBodyEmbedTitlePortraitEnum["Hide"] = "hide";
    UploadVideoRequestBodyEmbedTitlePortraitEnum["Show"] = "show";
    UploadVideoRequestBodyEmbedTitlePortraitEnum["User"] = "user";
})(UploadVideoRequestBodyEmbedTitlePortraitEnum || (UploadVideoRequestBodyEmbedTitlePortraitEnum = {}));
var UploadVideoRequestBodyEmbedTitle = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyEmbedTitle, _super);
    function UploadVideoRequestBodyEmbedTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyEmbedTitle.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyEmbedTitle.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portrait" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyEmbedTitle.prototype, "portrait", void 0);
    return UploadVideoRequestBodyEmbedTitle;
}(SpeakeasyBase));
export { UploadVideoRequestBodyEmbedTitle };
var UploadVideoRequestBodyEmbed = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyEmbed, _super);
    function UploadVideoRequestBodyEmbed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buttons" }),
        __metadata("design:type", UploadVideoRequestBodyEmbedButtons)
    ], UploadVideoRequestBodyEmbed.prototype, "buttons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyEmbed.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logos" }),
        __metadata("design:type", UploadVideoRequestBodyEmbedLogos)
    ], UploadVideoRequestBodyEmbed.prototype, "logos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playbar" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbed.prototype, "playbar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", UploadVideoRequestBodyEmbedTitle)
    ], UploadVideoRequestBodyEmbed.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyEmbed.prototype, "volume", void 0);
    return UploadVideoRequestBodyEmbed;
}(SpeakeasyBase));
export { UploadVideoRequestBodyEmbed };
export var UploadVideoRequestBodyLicenseEnum;
(function (UploadVideoRequestBodyLicenseEnum) {
    UploadVideoRequestBodyLicenseEnum["By"] = "by";
    UploadVideoRequestBodyLicenseEnum["ByNc"] = "by-nc";
    UploadVideoRequestBodyLicenseEnum["ByNcNd"] = "by-nc-nd";
    UploadVideoRequestBodyLicenseEnum["ByNcSa"] = "by-nc-sa";
    UploadVideoRequestBodyLicenseEnum["ByNd"] = "by-nd";
    UploadVideoRequestBodyLicenseEnum["BySa"] = "by-sa";
    UploadVideoRequestBodyLicenseEnum["Cc0"] = "cc0";
})(UploadVideoRequestBodyLicenseEnum || (UploadVideoRequestBodyLicenseEnum = {}));
export var UploadVideoRequestBodyPrivacyCommentsEnum;
(function (UploadVideoRequestBodyPrivacyCommentsEnum) {
    UploadVideoRequestBodyPrivacyCommentsEnum["Anybody"] = "anybody";
    UploadVideoRequestBodyPrivacyCommentsEnum["Contacts"] = "contacts";
    UploadVideoRequestBodyPrivacyCommentsEnum["Nobody"] = "nobody";
})(UploadVideoRequestBodyPrivacyCommentsEnum || (UploadVideoRequestBodyPrivacyCommentsEnum = {}));
export var UploadVideoRequestBodyPrivacyEmbedEnum;
(function (UploadVideoRequestBodyPrivacyEmbedEnum) {
    UploadVideoRequestBodyPrivacyEmbedEnum["Private"] = "private";
    UploadVideoRequestBodyPrivacyEmbedEnum["Public"] = "public";
    UploadVideoRequestBodyPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(UploadVideoRequestBodyPrivacyEmbedEnum || (UploadVideoRequestBodyPrivacyEmbedEnum = {}));
export var UploadVideoRequestBodyPrivacyViewEnum;
(function (UploadVideoRequestBodyPrivacyViewEnum) {
    UploadVideoRequestBodyPrivacyViewEnum["Anybody"] = "anybody";
    UploadVideoRequestBodyPrivacyViewEnum["Contacts"] = "contacts";
    UploadVideoRequestBodyPrivacyViewEnum["Disable"] = "disable";
    UploadVideoRequestBodyPrivacyViewEnum["Nobody"] = "nobody";
    UploadVideoRequestBodyPrivacyViewEnum["Password"] = "password";
    UploadVideoRequestBodyPrivacyViewEnum["Unlisted"] = "unlisted";
    UploadVideoRequestBodyPrivacyViewEnum["Users"] = "users";
})(UploadVideoRequestBodyPrivacyViewEnum || (UploadVideoRequestBodyPrivacyViewEnum = {}));
var UploadVideoRequestBodyPrivacy = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyPrivacy, _super);
    function UploadVideoRequestBodyPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyPrivacy.prototype, "view", void 0);
    return UploadVideoRequestBodyPrivacy;
}(SpeakeasyBase));
export { UploadVideoRequestBodyPrivacy };
export var UploadVideoRequestBodyRatingsMpaaReasonEnum;
(function (UploadVideoRequestBodyRatingsMpaaReasonEnum) {
    UploadVideoRequestBodyRatingsMpaaReasonEnum["At"] = "at";
    UploadVideoRequestBodyRatingsMpaaReasonEnum["Bn"] = "bn";
    UploadVideoRequestBodyRatingsMpaaReasonEnum["N"] = "n";
    UploadVideoRequestBodyRatingsMpaaReasonEnum["Sl"] = "sl";
    UploadVideoRequestBodyRatingsMpaaReasonEnum["Ss"] = "ss";
    UploadVideoRequestBodyRatingsMpaaReasonEnum["V"] = "v";
})(UploadVideoRequestBodyRatingsMpaaReasonEnum || (UploadVideoRequestBodyRatingsMpaaReasonEnum = {}));
var UploadVideoRequestBodyRatingsMpaa = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyRatingsMpaa, _super);
    function UploadVideoRequestBodyRatingsMpaa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyRatingsMpaa.prototype, "reason", void 0);
    return UploadVideoRequestBodyRatingsMpaa;
}(SpeakeasyBase));
export { UploadVideoRequestBodyRatingsMpaa };
export var UploadVideoRequestBodyRatingsTvReasonEnum;
(function (UploadVideoRequestBodyRatingsTvReasonEnum) {
    UploadVideoRequestBodyRatingsTvReasonEnum["D"] = "d";
    UploadVideoRequestBodyRatingsTvReasonEnum["Fv"] = "fv";
    UploadVideoRequestBodyRatingsTvReasonEnum["L"] = "l";
    UploadVideoRequestBodyRatingsTvReasonEnum["Ss"] = "ss";
    UploadVideoRequestBodyRatingsTvReasonEnum["V"] = "v";
})(UploadVideoRequestBodyRatingsTvReasonEnum || (UploadVideoRequestBodyRatingsTvReasonEnum = {}));
var UploadVideoRequestBodyRatingsTv = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyRatingsTv, _super);
    function UploadVideoRequestBodyRatingsTv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyRatingsTv.prototype, "reason", void 0);
    return UploadVideoRequestBodyRatingsTv;
}(SpeakeasyBase));
export { UploadVideoRequestBodyRatingsTv };
var UploadVideoRequestBodyRatings = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyRatings, _super);
    function UploadVideoRequestBodyRatings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mpaa" }),
        __metadata("design:type", UploadVideoRequestBodyRatingsMpaa)
    ], UploadVideoRequestBodyRatings.prototype, "mpaa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tv" }),
        __metadata("design:type", UploadVideoRequestBodyRatingsTv)
    ], UploadVideoRequestBodyRatings.prototype, "tv", void 0);
    return UploadVideoRequestBodyRatings;
}(SpeakeasyBase));
export { UploadVideoRequestBodyRatings };
var UploadVideoRequestBodyReviewPage = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyReviewPage, _super);
    function UploadVideoRequestBodyReviewPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UploadVideoRequestBodyReviewPage.prototype, "active", void 0);
    return UploadVideoRequestBodyReviewPage;
}(SpeakeasyBase));
export { UploadVideoRequestBodyReviewPage };
var UploadVideoRequestBodySpatialDirectorTimeline = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodySpatialDirectorTimeline, _super);
    function UploadVideoRequestBodySpatialDirectorTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pitch" }),
        __metadata("design:type", Number)
    ], UploadVideoRequestBodySpatialDirectorTimeline.prototype, "pitch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roll" }),
        __metadata("design:type", Number)
    ], UploadVideoRequestBodySpatialDirectorTimeline.prototype, "roll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_code" }),
        __metadata("design:type", Number)
    ], UploadVideoRequestBodySpatialDirectorTimeline.prototype, "timeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yaw" }),
        __metadata("design:type", Number)
    ], UploadVideoRequestBodySpatialDirectorTimeline.prototype, "yaw", void 0);
    return UploadVideoRequestBodySpatialDirectorTimeline;
}(SpeakeasyBase));
export { UploadVideoRequestBodySpatialDirectorTimeline };
export var UploadVideoRequestBodySpatialProjectionEnum;
(function (UploadVideoRequestBodySpatialProjectionEnum) {
    UploadVideoRequestBodySpatialProjectionEnum["Cubical"] = "cubical";
    UploadVideoRequestBodySpatialProjectionEnum["Cylindrical"] = "cylindrical";
    UploadVideoRequestBodySpatialProjectionEnum["Dome"] = "dome";
    UploadVideoRequestBodySpatialProjectionEnum["Equirectangular"] = "equirectangular";
    UploadVideoRequestBodySpatialProjectionEnum["Pyramid"] = "pyramid";
})(UploadVideoRequestBodySpatialProjectionEnum || (UploadVideoRequestBodySpatialProjectionEnum = {}));
export var UploadVideoRequestBodySpatialStereoFormatEnum;
(function (UploadVideoRequestBodySpatialStereoFormatEnum) {
    UploadVideoRequestBodySpatialStereoFormatEnum["LeftRight"] = "left-right";
    UploadVideoRequestBodySpatialStereoFormatEnum["Mono"] = "mono";
    UploadVideoRequestBodySpatialStereoFormatEnum["TopBottom"] = "top-bottom";
})(UploadVideoRequestBodySpatialStereoFormatEnum || (UploadVideoRequestBodySpatialStereoFormatEnum = {}));
var UploadVideoRequestBodySpatial = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodySpatial, _super);
    function UploadVideoRequestBodySpatial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=director_timeline", elemType: UploadVideoRequestBodySpatialDirectorTimeline }),
        __metadata("design:type", Array)
    ], UploadVideoRequestBodySpatial.prototype, "directorTimeline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field_of_view" }),
        __metadata("design:type", Number)
    ], UploadVideoRequestBodySpatial.prototype, "fieldOfView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projection" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodySpatial.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stereo_format" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodySpatial.prototype, "stereoFormat", void 0);
    return UploadVideoRequestBodySpatial;
}(SpeakeasyBase));
export { UploadVideoRequestBodySpatial };
export var UploadVideoRequestBodyUploadApproachEnum;
(function (UploadVideoRequestBodyUploadApproachEnum) {
    UploadVideoRequestBodyUploadApproachEnum["Post"] = "post";
    UploadVideoRequestBodyUploadApproachEnum["Pull"] = "pull";
    UploadVideoRequestBodyUploadApproachEnum["Streaming"] = "streaming";
    UploadVideoRequestBodyUploadApproachEnum["Tus"] = "tus";
})(UploadVideoRequestBodyUploadApproachEnum || (UploadVideoRequestBodyUploadApproachEnum = {}));
var UploadVideoRequestBodyUpload = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBodyUpload, _super);
    function UploadVideoRequestBodyUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approach" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyUpload.prototype, "approach", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyUpload.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyUpload.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBodyUpload.prototype, "size", void 0);
    return UploadVideoRequestBodyUpload;
}(SpeakeasyBase));
export { UploadVideoRequestBodyUpload };
var UploadVideoRequestBody = /** @class */ (function (_super) {
    __extends(UploadVideoRequestBody, _super);
    function UploadVideoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_rating" }),
        __metadata("design:type", Array)
    ], UploadVideoRequestBody.prototype, "contentRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", UploadVideoRequestBodyEmbed)
    ], UploadVideoRequestBody.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBody.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBody.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UploadVideoRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", UploadVideoRequestBodyPrivacy)
    ], UploadVideoRequestBody.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratings" }),
        __metadata("design:type", UploadVideoRequestBodyRatings)
    ], UploadVideoRequestBody.prototype, "ratings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_page" }),
        __metadata("design:type", UploadVideoRequestBodyReviewPage)
    ], UploadVideoRequestBody.prototype, "reviewPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spatial" }),
        __metadata("design:type", UploadVideoRequestBodySpatial)
    ], UploadVideoRequestBody.prototype, "spatial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload" }),
        __metadata("design:type", UploadVideoRequestBodyUpload)
    ], UploadVideoRequestBody.prototype, "upload", void 0);
    return UploadVideoRequestBody;
}(SpeakeasyBase));
export { UploadVideoRequestBody };
var UploadVideoRequest = /** @class */ (function (_super) {
    __extends(UploadVideoRequest, _super);
    function UploadVideoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadVideoPathParams)
    ], UploadVideoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video+json" }),
        __metadata("design:type", UploadVideoRequestBody)
    ], UploadVideoRequest.prototype, "request", void 0);
    return UploadVideoRequest;
}(SpeakeasyBase));
export { UploadVideoRequest };
var UploadVideoResponse = /** @class */ (function (_super) {
    __extends(UploadVideoResponse, _super);
    function UploadVideoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadVideoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadVideoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], UploadVideoResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Video)
    ], UploadVideoResponse.prototype, "video", void 0);
    return UploadVideoResponse;
}(SpeakeasyBase));
export { UploadVideoResponse };
