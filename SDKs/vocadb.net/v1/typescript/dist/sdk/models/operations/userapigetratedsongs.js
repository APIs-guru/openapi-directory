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
var UserApiGetRatedSongsPathParams = /** @class */ (function (_super) {
    __extends(UserApiGetRatedSongsPathParams, _super);
    function UserApiGetRatedSongsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserApiGetRatedSongsPathParams.prototype, "id", void 0);
    return UserApiGetRatedSongsPathParams;
}(SpeakeasyBase));
export { UserApiGetRatedSongsPathParams };
export var UserApiGetRatedSongsArtistGroupingEnum;
(function (UserApiGetRatedSongsArtistGroupingEnum) {
    UserApiGetRatedSongsArtistGroupingEnum["And"] = "And";
    UserApiGetRatedSongsArtistGroupingEnum["Or"] = "Or";
})(UserApiGetRatedSongsArtistGroupingEnum || (UserApiGetRatedSongsArtistGroupingEnum = {}));
export var UserApiGetRatedSongsFieldsEnum;
(function (UserApiGetRatedSongsFieldsEnum) {
    UserApiGetRatedSongsFieldsEnum["None"] = "None";
    UserApiGetRatedSongsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    UserApiGetRatedSongsFieldsEnum["Albums"] = "Albums";
    UserApiGetRatedSongsFieldsEnum["Artists"] = "Artists";
    UserApiGetRatedSongsFieldsEnum["Lyrics"] = "Lyrics";
    UserApiGetRatedSongsFieldsEnum["MainPicture"] = "MainPicture";
    UserApiGetRatedSongsFieldsEnum["Names"] = "Names";
    UserApiGetRatedSongsFieldsEnum["PVs"] = "PVs";
    UserApiGetRatedSongsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    UserApiGetRatedSongsFieldsEnum["Tags"] = "Tags";
    UserApiGetRatedSongsFieldsEnum["ThumbUrl"] = "ThumbUrl";
    UserApiGetRatedSongsFieldsEnum["WebLinks"] = "WebLinks";
})(UserApiGetRatedSongsFieldsEnum || (UserApiGetRatedSongsFieldsEnum = {}));
export var UserApiGetRatedSongsLangEnum;
(function (UserApiGetRatedSongsLangEnum) {
    UserApiGetRatedSongsLangEnum["Default"] = "Default";
    UserApiGetRatedSongsLangEnum["Japanese"] = "Japanese";
    UserApiGetRatedSongsLangEnum["Romaji"] = "Romaji";
    UserApiGetRatedSongsLangEnum["English"] = "English";
})(UserApiGetRatedSongsLangEnum || (UserApiGetRatedSongsLangEnum = {}));
export var UserApiGetRatedSongsNameMatchModeEnum;
(function (UserApiGetRatedSongsNameMatchModeEnum) {
    UserApiGetRatedSongsNameMatchModeEnum["Auto"] = "Auto";
    UserApiGetRatedSongsNameMatchModeEnum["Partial"] = "Partial";
    UserApiGetRatedSongsNameMatchModeEnum["StartsWith"] = "StartsWith";
    UserApiGetRatedSongsNameMatchModeEnum["Exact"] = "Exact";
    UserApiGetRatedSongsNameMatchModeEnum["Words"] = "Words";
})(UserApiGetRatedSongsNameMatchModeEnum || (UserApiGetRatedSongsNameMatchModeEnum = {}));
export var UserApiGetRatedSongsPvServicesEnum;
(function (UserApiGetRatedSongsPvServicesEnum) {
    UserApiGetRatedSongsPvServicesEnum["Nothing"] = "Nothing";
    UserApiGetRatedSongsPvServicesEnum["NicoNicoDouga"] = "NicoNicoDouga";
    UserApiGetRatedSongsPvServicesEnum["Youtube"] = "Youtube";
    UserApiGetRatedSongsPvServicesEnum["SoundCloud"] = "SoundCloud";
    UserApiGetRatedSongsPvServicesEnum["Vimeo"] = "Vimeo";
    UserApiGetRatedSongsPvServicesEnum["Piapro"] = "Piapro";
    UserApiGetRatedSongsPvServicesEnum["Bilibili"] = "Bilibili";
    UserApiGetRatedSongsPvServicesEnum["File"] = "File";
    UserApiGetRatedSongsPvServicesEnum["LocalFile"] = "LocalFile";
    UserApiGetRatedSongsPvServicesEnum["Creofuga"] = "Creofuga";
    UserApiGetRatedSongsPvServicesEnum["Bandcamp"] = "Bandcamp";
})(UserApiGetRatedSongsPvServicesEnum || (UserApiGetRatedSongsPvServicesEnum = {}));
export var UserApiGetRatedSongsRatingEnum;
(function (UserApiGetRatedSongsRatingEnum) {
    UserApiGetRatedSongsRatingEnum["Nothing"] = "Nothing";
    UserApiGetRatedSongsRatingEnum["Dislike"] = "Dislike";
    UserApiGetRatedSongsRatingEnum["Like"] = "Like";
    UserApiGetRatedSongsRatingEnum["Favorite"] = "Favorite";
})(UserApiGetRatedSongsRatingEnum || (UserApiGetRatedSongsRatingEnum = {}));
export var UserApiGetRatedSongsSortEnum;
(function (UserApiGetRatedSongsSortEnum) {
    UserApiGetRatedSongsSortEnum["None"] = "None";
    UserApiGetRatedSongsSortEnum["Name"] = "Name";
    UserApiGetRatedSongsSortEnum["AdditionDate"] = "AdditionDate";
    UserApiGetRatedSongsSortEnum["PublishDate"] = "PublishDate";
    UserApiGetRatedSongsSortEnum["FavoritedTimes"] = "FavoritedTimes";
    UserApiGetRatedSongsSortEnum["RatingScore"] = "RatingScore";
    UserApiGetRatedSongsSortEnum["RatingDate"] = "RatingDate";
})(UserApiGetRatedSongsSortEnum || (UserApiGetRatedSongsSortEnum = {}));
var UserApiGetRatedSongsQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetRatedSongsQueryParams, _super);
    function UserApiGetRatedSongsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" }),
        __metadata("design:type", Array)
    ], UserApiGetRatedSongsQueryParams.prototype, "advancedFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistGrouping" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "artistGrouping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" }),
        __metadata("design:type", Array)
    ], UserApiGetRatedSongsQueryParams.prototype, "artistId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" }),
        __metadata("design:type", Boolean)
    ], UserApiGetRatedSongsQueryParams.prototype, "childVoicebanks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], UserApiGetRatedSongsQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupByRating" }),
        __metadata("design:type", Boolean)
    ], UserApiGetRatedSongsQueryParams.prototype, "groupByRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], UserApiGetRatedSongsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pvServices" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "pvServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=songListId" }),
        __metadata("design:type", Number)
    ], UserApiGetRatedSongsQueryParams.prototype, "songListId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], UserApiGetRatedSongsQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], UserApiGetRatedSongsQueryParams.prototype, "tagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "tagName", void 0);
    return UserApiGetRatedSongsQueryParams;
}(SpeakeasyBase));
export { UserApiGetRatedSongsQueryParams };
var UserApiGetRatedSongsRequest = /** @class */ (function (_super) {
    __extends(UserApiGetRatedSongsRequest, _super);
    function UserApiGetRatedSongsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetRatedSongsPathParams)
    ], UserApiGetRatedSongsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetRatedSongsQueryParams)
    ], UserApiGetRatedSongsRequest.prototype, "queryParams", void 0);
    return UserApiGetRatedSongsRequest;
}(SpeakeasyBase));
export { UserApiGetRatedSongsRequest };
var UserApiGetRatedSongsResponse = /** @class */ (function (_super) {
    __extends(UserApiGetRatedSongsResponse, _super);
    function UserApiGetRatedSongsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetRatedSongsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultRatedSongForUserForApiContract)
    ], UserApiGetRatedSongsResponse.prototype, "partialFindResultRatedSongForUserForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiGetRatedSongsResponse.prototype, "statusCode", void 0);
    return UserApiGetRatedSongsResponse;
}(SpeakeasyBase));
export { UserApiGetRatedSongsResponse };
