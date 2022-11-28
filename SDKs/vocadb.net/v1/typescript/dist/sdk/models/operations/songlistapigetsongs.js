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
var SongListApiGetSongsPathParams = /** @class */ (function (_super) {
    __extends(SongListApiGetSongsPathParams, _super);
    function SongListApiGetSongsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listId" }),
        __metadata("design:type", Number)
    ], SongListApiGetSongsPathParams.prototype, "listId", void 0);
    return SongListApiGetSongsPathParams;
}(SpeakeasyBase));
export { SongListApiGetSongsPathParams };
export var SongListApiGetSongsFieldsEnum;
(function (SongListApiGetSongsFieldsEnum) {
    SongListApiGetSongsFieldsEnum["None"] = "None";
    SongListApiGetSongsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongListApiGetSongsFieldsEnum["Albums"] = "Albums";
    SongListApiGetSongsFieldsEnum["Artists"] = "Artists";
    SongListApiGetSongsFieldsEnum["Lyrics"] = "Lyrics";
    SongListApiGetSongsFieldsEnum["MainPicture"] = "MainPicture";
    SongListApiGetSongsFieldsEnum["Names"] = "Names";
    SongListApiGetSongsFieldsEnum["PVs"] = "PVs";
    SongListApiGetSongsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongListApiGetSongsFieldsEnum["Tags"] = "Tags";
    SongListApiGetSongsFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongListApiGetSongsFieldsEnum["WebLinks"] = "WebLinks";
})(SongListApiGetSongsFieldsEnum || (SongListApiGetSongsFieldsEnum = {}));
export var SongListApiGetSongsLangEnum;
(function (SongListApiGetSongsLangEnum) {
    SongListApiGetSongsLangEnum["Default"] = "Default";
    SongListApiGetSongsLangEnum["Japanese"] = "Japanese";
    SongListApiGetSongsLangEnum["Romaji"] = "Romaji";
    SongListApiGetSongsLangEnum["English"] = "English";
})(SongListApiGetSongsLangEnum || (SongListApiGetSongsLangEnum = {}));
export var SongListApiGetSongsNameMatchModeEnum;
(function (SongListApiGetSongsNameMatchModeEnum) {
    SongListApiGetSongsNameMatchModeEnum["Auto"] = "Auto";
    SongListApiGetSongsNameMatchModeEnum["Partial"] = "Partial";
    SongListApiGetSongsNameMatchModeEnum["StartsWith"] = "StartsWith";
    SongListApiGetSongsNameMatchModeEnum["Exact"] = "Exact";
    SongListApiGetSongsNameMatchModeEnum["Words"] = "Words";
})(SongListApiGetSongsNameMatchModeEnum || (SongListApiGetSongsNameMatchModeEnum = {}));
export var SongListApiGetSongsPvServicesEnum;
(function (SongListApiGetSongsPvServicesEnum) {
    SongListApiGetSongsPvServicesEnum["Nothing"] = "Nothing";
    SongListApiGetSongsPvServicesEnum["NicoNicoDouga"] = "NicoNicoDouga";
    SongListApiGetSongsPvServicesEnum["Youtube"] = "Youtube";
    SongListApiGetSongsPvServicesEnum["SoundCloud"] = "SoundCloud";
    SongListApiGetSongsPvServicesEnum["Vimeo"] = "Vimeo";
    SongListApiGetSongsPvServicesEnum["Piapro"] = "Piapro";
    SongListApiGetSongsPvServicesEnum["Bilibili"] = "Bilibili";
    SongListApiGetSongsPvServicesEnum["File"] = "File";
    SongListApiGetSongsPvServicesEnum["LocalFile"] = "LocalFile";
    SongListApiGetSongsPvServicesEnum["Creofuga"] = "Creofuga";
    SongListApiGetSongsPvServicesEnum["Bandcamp"] = "Bandcamp";
})(SongListApiGetSongsPvServicesEnum || (SongListApiGetSongsPvServicesEnum = {}));
export var SongListApiGetSongsSortEnum;
(function (SongListApiGetSongsSortEnum) {
    SongListApiGetSongsSortEnum["None"] = "None";
    SongListApiGetSongsSortEnum["Name"] = "Name";
    SongListApiGetSongsSortEnum["AdditionDate"] = "AdditionDate";
    SongListApiGetSongsSortEnum["PublishDate"] = "PublishDate";
    SongListApiGetSongsSortEnum["FavoritedTimes"] = "FavoritedTimes";
    SongListApiGetSongsSortEnum["RatingScore"] = "RatingScore";
    SongListApiGetSongsSortEnum["TagUsageCount"] = "TagUsageCount";
})(SongListApiGetSongsSortEnum || (SongListApiGetSongsSortEnum = {}));
var SongListApiGetSongsQueryParams = /** @class */ (function (_super) {
    __extends(SongListApiGetSongsQueryParams, _super);
    function SongListApiGetSongsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" }),
        __metadata("design:type", Array)
    ], SongListApiGetSongsQueryParams.prototype, "advancedFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" }),
        __metadata("design:type", Array)
    ], SongListApiGetSongsQueryParams.prototype, "artistId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" }),
        __metadata("design:type", Boolean)
    ], SongListApiGetSongsQueryParams.prototype, "childVoicebanks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], SongListApiGetSongsQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], SongListApiGetSongsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pvServices" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "pvServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=songTypes" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "songTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SongListApiGetSongsQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], SongListApiGetSongsQueryParams.prototype, "tagId", void 0);
    return SongListApiGetSongsQueryParams;
}(SpeakeasyBase));
export { SongListApiGetSongsQueryParams };
var SongListApiGetSongsRequest = /** @class */ (function (_super) {
    __extends(SongListApiGetSongsRequest, _super);
    function SongListApiGetSongsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongListApiGetSongsPathParams)
    ], SongListApiGetSongsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongListApiGetSongsQueryParams)
    ], SongListApiGetSongsRequest.prototype, "queryParams", void 0);
    return SongListApiGetSongsRequest;
}(SpeakeasyBase));
export { SongListApiGetSongsRequest };
var SongListApiGetSongsResponse = /** @class */ (function (_super) {
    __extends(SongListApiGetSongsResponse, _super);
    function SongListApiGetSongsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongListApiGetSongsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongListApiGetSongsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultSongInListForApiContract)
    ], SongListApiGetSongsResponse.prototype, "partialFindResultSongInListForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongListApiGetSongsResponse.prototype, "statusCode", void 0);
    return SongListApiGetSongsResponse;
}(SpeakeasyBase));
export { SongListApiGetSongsResponse };
