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
var EditVideoPathParams = /** @class */ (function (_super) {
    __extends(EditVideoPathParams, _super);
    function EditVideoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], EditVideoPathParams.prototype, "videoId", void 0);
    return EditVideoPathParams;
}(SpeakeasyBase));
export { EditVideoPathParams };
var EditVideoRequestBodyEmbedButtons = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodyEmbedButtons, _super);
    function EditVideoRequestBodyEmbedButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbedButtons.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullscreen" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbedButtons.prototype, "fullscreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hd" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbedButtons.prototype, "hd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbedButtons.prototype, "like", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaling" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbedButtons.prototype, "scaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=share" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbedButtons.prototype, "share", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbedButtons.prototype, "watchlater", void 0);
    return EditVideoRequestBodyEmbedButtons;
}(SpeakeasyBase));
export { EditVideoRequestBodyEmbedButtons };
var EditVideoRequestBodyEmbedLogosCustom = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodyEmbedLogosCustom, _super);
    function EditVideoRequestBodyEmbedLogosCustom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbedLogosCustom.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodyEmbedLogosCustom.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbedLogosCustom.prototype, "sticky", void 0);
    return EditVideoRequestBodyEmbedLogosCustom;
}(SpeakeasyBase));
export { EditVideoRequestBodyEmbedLogosCustom };
var EditVideoRequestBodyEmbedLogos = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodyEmbedLogos, _super);
    function EditVideoRequestBodyEmbedLogos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", EditVideoRequestBodyEmbedLogosCustom)
    ], EditVideoRequestBodyEmbedLogos.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vimeo" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbedLogos.prototype, "vimeo", void 0);
    return EditVideoRequestBodyEmbedLogos;
}(SpeakeasyBase));
export { EditVideoRequestBodyEmbedLogos };
export var EditVideoRequestBodyEmbedTitleNameEnum;
(function (EditVideoRequestBodyEmbedTitleNameEnum) {
    EditVideoRequestBodyEmbedTitleNameEnum["Hide"] = "hide";
    EditVideoRequestBodyEmbedTitleNameEnum["Show"] = "show";
    EditVideoRequestBodyEmbedTitleNameEnum["User"] = "user";
})(EditVideoRequestBodyEmbedTitleNameEnum || (EditVideoRequestBodyEmbedTitleNameEnum = {}));
export var EditVideoRequestBodyEmbedTitleOwnerEnum;
(function (EditVideoRequestBodyEmbedTitleOwnerEnum) {
    EditVideoRequestBodyEmbedTitleOwnerEnum["Hide"] = "hide";
    EditVideoRequestBodyEmbedTitleOwnerEnum["Show"] = "show";
    EditVideoRequestBodyEmbedTitleOwnerEnum["User"] = "user";
})(EditVideoRequestBodyEmbedTitleOwnerEnum || (EditVideoRequestBodyEmbedTitleOwnerEnum = {}));
export var EditVideoRequestBodyEmbedTitlePortraitEnum;
(function (EditVideoRequestBodyEmbedTitlePortraitEnum) {
    EditVideoRequestBodyEmbedTitlePortraitEnum["Hide"] = "hide";
    EditVideoRequestBodyEmbedTitlePortraitEnum["Show"] = "show";
    EditVideoRequestBodyEmbedTitlePortraitEnum["User"] = "user";
})(EditVideoRequestBodyEmbedTitlePortraitEnum || (EditVideoRequestBodyEmbedTitlePortraitEnum = {}));
var EditVideoRequestBodyEmbedTitle = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodyEmbedTitle, _super);
    function EditVideoRequestBodyEmbedTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodyEmbedTitle.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodyEmbedTitle.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portrait" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodyEmbedTitle.prototype, "portrait", void 0);
    return EditVideoRequestBodyEmbedTitle;
}(SpeakeasyBase));
export { EditVideoRequestBodyEmbedTitle };
var EditVideoRequestBodyEmbed = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodyEmbed, _super);
    function EditVideoRequestBodyEmbed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buttons" }),
        __metadata("design:type", EditVideoRequestBodyEmbedButtons)
    ], EditVideoRequestBodyEmbed.prototype, "buttons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodyEmbed.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logos" }),
        __metadata("design:type", EditVideoRequestBodyEmbedLogos)
    ], EditVideoRequestBodyEmbed.prototype, "logos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playbar" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbed.prototype, "playbar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", EditVideoRequestBodyEmbedTitle)
    ], EditVideoRequestBodyEmbed.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyEmbed.prototype, "volume", void 0);
    return EditVideoRequestBodyEmbed;
}(SpeakeasyBase));
export { EditVideoRequestBodyEmbed };
export var EditVideoRequestBodyLicenseEnum;
(function (EditVideoRequestBodyLicenseEnum) {
    EditVideoRequestBodyLicenseEnum["By"] = "by";
    EditVideoRequestBodyLicenseEnum["ByNc"] = "by-nc";
    EditVideoRequestBodyLicenseEnum["ByNcNd"] = "by-nc-nd";
    EditVideoRequestBodyLicenseEnum["ByNcSa"] = "by-nc-sa";
    EditVideoRequestBodyLicenseEnum["ByNd"] = "by-nd";
    EditVideoRequestBodyLicenseEnum["BySa"] = "by-sa";
    EditVideoRequestBodyLicenseEnum["Cc0"] = "cc0";
})(EditVideoRequestBodyLicenseEnum || (EditVideoRequestBodyLicenseEnum = {}));
export var EditVideoRequestBodyPrivacyCommentsEnum;
(function (EditVideoRequestBodyPrivacyCommentsEnum) {
    EditVideoRequestBodyPrivacyCommentsEnum["Anybody"] = "anybody";
    EditVideoRequestBodyPrivacyCommentsEnum["Contacts"] = "contacts";
    EditVideoRequestBodyPrivacyCommentsEnum["Nobody"] = "nobody";
})(EditVideoRequestBodyPrivacyCommentsEnum || (EditVideoRequestBodyPrivacyCommentsEnum = {}));
export var EditVideoRequestBodyPrivacyEmbedEnum;
(function (EditVideoRequestBodyPrivacyEmbedEnum) {
    EditVideoRequestBodyPrivacyEmbedEnum["Private"] = "private";
    EditVideoRequestBodyPrivacyEmbedEnum["Public"] = "public";
    EditVideoRequestBodyPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(EditVideoRequestBodyPrivacyEmbedEnum || (EditVideoRequestBodyPrivacyEmbedEnum = {}));
export var EditVideoRequestBodyPrivacyViewEnum;
(function (EditVideoRequestBodyPrivacyViewEnum) {
    EditVideoRequestBodyPrivacyViewEnum["Anybody"] = "anybody";
    EditVideoRequestBodyPrivacyViewEnum["Contacts"] = "contacts";
    EditVideoRequestBodyPrivacyViewEnum["Disable"] = "disable";
    EditVideoRequestBodyPrivacyViewEnum["Nobody"] = "nobody";
    EditVideoRequestBodyPrivacyViewEnum["Password"] = "password";
    EditVideoRequestBodyPrivacyViewEnum["Unlisted"] = "unlisted";
    EditVideoRequestBodyPrivacyViewEnum["Users"] = "users";
})(EditVideoRequestBodyPrivacyViewEnum || (EditVideoRequestBodyPrivacyViewEnum = {}));
var EditVideoRequestBodyPrivacy = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodyPrivacy, _super);
    function EditVideoRequestBodyPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodyPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodyPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodyPrivacy.prototype, "view", void 0);
    return EditVideoRequestBodyPrivacy;
}(SpeakeasyBase));
export { EditVideoRequestBodyPrivacy };
export var EditVideoRequestBodyRatingsMpaaReasonEnum;
(function (EditVideoRequestBodyRatingsMpaaReasonEnum) {
    EditVideoRequestBodyRatingsMpaaReasonEnum["At"] = "at";
    EditVideoRequestBodyRatingsMpaaReasonEnum["Bn"] = "bn";
    EditVideoRequestBodyRatingsMpaaReasonEnum["N"] = "n";
    EditVideoRequestBodyRatingsMpaaReasonEnum["Sl"] = "sl";
    EditVideoRequestBodyRatingsMpaaReasonEnum["Ss"] = "ss";
    EditVideoRequestBodyRatingsMpaaReasonEnum["V"] = "v";
})(EditVideoRequestBodyRatingsMpaaReasonEnum || (EditVideoRequestBodyRatingsMpaaReasonEnum = {}));
var EditVideoRequestBodyRatingsMpaa = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodyRatingsMpaa, _super);
    function EditVideoRequestBodyRatingsMpaa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodyRatingsMpaa.prototype, "reason", void 0);
    return EditVideoRequestBodyRatingsMpaa;
}(SpeakeasyBase));
export { EditVideoRequestBodyRatingsMpaa };
export var EditVideoRequestBodyRatingsTvReasonEnum;
(function (EditVideoRequestBodyRatingsTvReasonEnum) {
    EditVideoRequestBodyRatingsTvReasonEnum["D"] = "d";
    EditVideoRequestBodyRatingsTvReasonEnum["Fv"] = "fv";
    EditVideoRequestBodyRatingsTvReasonEnum["L"] = "l";
    EditVideoRequestBodyRatingsTvReasonEnum["Ss"] = "ss";
    EditVideoRequestBodyRatingsTvReasonEnum["V"] = "v";
})(EditVideoRequestBodyRatingsTvReasonEnum || (EditVideoRequestBodyRatingsTvReasonEnum = {}));
var EditVideoRequestBodyRatingsTv = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodyRatingsTv, _super);
    function EditVideoRequestBodyRatingsTv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodyRatingsTv.prototype, "reason", void 0);
    return EditVideoRequestBodyRatingsTv;
}(SpeakeasyBase));
export { EditVideoRequestBodyRatingsTv };
var EditVideoRequestBodyRatings = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodyRatings, _super);
    function EditVideoRequestBodyRatings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mpaa" }),
        __metadata("design:type", EditVideoRequestBodyRatingsMpaa)
    ], EditVideoRequestBodyRatings.prototype, "mpaa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tv" }),
        __metadata("design:type", EditVideoRequestBodyRatingsTv)
    ], EditVideoRequestBodyRatings.prototype, "tv", void 0);
    return EditVideoRequestBodyRatings;
}(SpeakeasyBase));
export { EditVideoRequestBodyRatings };
var EditVideoRequestBodyReviewPage = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodyReviewPage, _super);
    function EditVideoRequestBodyReviewPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], EditVideoRequestBodyReviewPage.prototype, "active", void 0);
    return EditVideoRequestBodyReviewPage;
}(SpeakeasyBase));
export { EditVideoRequestBodyReviewPage };
var EditVideoRequestBodySpatialDirectorTimeline = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodySpatialDirectorTimeline, _super);
    function EditVideoRequestBodySpatialDirectorTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pitch" }),
        __metadata("design:type", Number)
    ], EditVideoRequestBodySpatialDirectorTimeline.prototype, "pitch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roll" }),
        __metadata("design:type", Number)
    ], EditVideoRequestBodySpatialDirectorTimeline.prototype, "roll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_code" }),
        __metadata("design:type", Number)
    ], EditVideoRequestBodySpatialDirectorTimeline.prototype, "timeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yaw" }),
        __metadata("design:type", Number)
    ], EditVideoRequestBodySpatialDirectorTimeline.prototype, "yaw", void 0);
    return EditVideoRequestBodySpatialDirectorTimeline;
}(SpeakeasyBase));
export { EditVideoRequestBodySpatialDirectorTimeline };
export var EditVideoRequestBodySpatialProjectionEnum;
(function (EditVideoRequestBodySpatialProjectionEnum) {
    EditVideoRequestBodySpatialProjectionEnum["Cubical"] = "cubical";
    EditVideoRequestBodySpatialProjectionEnum["Cylindrical"] = "cylindrical";
    EditVideoRequestBodySpatialProjectionEnum["Dome"] = "dome";
    EditVideoRequestBodySpatialProjectionEnum["Equirectangular"] = "equirectangular";
    EditVideoRequestBodySpatialProjectionEnum["Pyramid"] = "pyramid";
})(EditVideoRequestBodySpatialProjectionEnum || (EditVideoRequestBodySpatialProjectionEnum = {}));
export var EditVideoRequestBodySpatialStereoFormatEnum;
(function (EditVideoRequestBodySpatialStereoFormatEnum) {
    EditVideoRequestBodySpatialStereoFormatEnum["LeftRight"] = "left-right";
    EditVideoRequestBodySpatialStereoFormatEnum["Mono"] = "mono";
    EditVideoRequestBodySpatialStereoFormatEnum["TopBottom"] = "top-bottom";
})(EditVideoRequestBodySpatialStereoFormatEnum || (EditVideoRequestBodySpatialStereoFormatEnum = {}));
var EditVideoRequestBodySpatial = /** @class */ (function (_super) {
    __extends(EditVideoRequestBodySpatial, _super);
    function EditVideoRequestBodySpatial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=director_timeline", elemType: EditVideoRequestBodySpatialDirectorTimeline }),
        __metadata("design:type", Array)
    ], EditVideoRequestBodySpatial.prototype, "directorTimeline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field_of_view" }),
        __metadata("design:type", Number)
    ], EditVideoRequestBodySpatial.prototype, "fieldOfView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projection" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodySpatial.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stereo_format" }),
        __metadata("design:type", String)
    ], EditVideoRequestBodySpatial.prototype, "stereoFormat", void 0);
    return EditVideoRequestBodySpatial;
}(SpeakeasyBase));
export { EditVideoRequestBodySpatial };
var EditVideoRequestBody = /** @class */ (function (_super) {
    __extends(EditVideoRequestBody, _super);
    function EditVideoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_rating" }),
        __metadata("design:type", Array)
    ], EditVideoRequestBody.prototype, "contentRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EditVideoRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", EditVideoRequestBodyEmbed)
    ], EditVideoRequestBody.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], EditVideoRequestBody.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], EditVideoRequestBody.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EditVideoRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], EditVideoRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", EditVideoRequestBodyPrivacy)
    ], EditVideoRequestBody.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratings" }),
        __metadata("design:type", EditVideoRequestBodyRatings)
    ], EditVideoRequestBody.prototype, "ratings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_page" }),
        __metadata("design:type", EditVideoRequestBodyReviewPage)
    ], EditVideoRequestBody.prototype, "reviewPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spatial" }),
        __metadata("design:type", EditVideoRequestBodySpatial)
    ], EditVideoRequestBody.prototype, "spatial", void 0);
    return EditVideoRequestBody;
}(SpeakeasyBase));
export { EditVideoRequestBody };
var EditVideoSecurity = /** @class */ (function (_super) {
    __extends(EditVideoSecurity, _super);
    function EditVideoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EditVideoSecurity.prototype, "oauth2", void 0);
    return EditVideoSecurity;
}(SpeakeasyBase));
export { EditVideoSecurity };
var EditVideoRequest = /** @class */ (function (_super) {
    __extends(EditVideoRequest, _super);
    function EditVideoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVideoPathParams)
    ], EditVideoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video+json" }),
        __metadata("design:type", EditVideoRequestBody)
    ], EditVideoRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVideoSecurity)
    ], EditVideoRequest.prototype, "security", void 0);
    return EditVideoRequest;
}(SpeakeasyBase));
export { EditVideoRequest };
var EditVideoResponse = /** @class */ (function (_super) {
    __extends(EditVideoResponse, _super);
    function EditVideoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditVideoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditVideoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], EditVideoResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Video)
    ], EditVideoResponse.prototype, "video", void 0);
    return EditVideoResponse;
}(SpeakeasyBase));
export { EditVideoResponse };
