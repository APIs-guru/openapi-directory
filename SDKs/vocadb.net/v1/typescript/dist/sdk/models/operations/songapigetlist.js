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
export var SongApiGetListArtistParticipationStatusEnum;
(function (SongApiGetListArtistParticipationStatusEnum) {
    SongApiGetListArtistParticipationStatusEnum["Everything"] = "Everything";
    SongApiGetListArtistParticipationStatusEnum["OnlyMainAlbums"] = "OnlyMainAlbums";
    SongApiGetListArtistParticipationStatusEnum["OnlyCollaborations"] = "OnlyCollaborations";
})(SongApiGetListArtistParticipationStatusEnum || (SongApiGetListArtistParticipationStatusEnum = {}));
export var SongApiGetListFieldsEnum;
(function (SongApiGetListFieldsEnum) {
    SongApiGetListFieldsEnum["None"] = "None";
    SongApiGetListFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongApiGetListFieldsEnum["Albums"] = "Albums";
    SongApiGetListFieldsEnum["Artists"] = "Artists";
    SongApiGetListFieldsEnum["Lyrics"] = "Lyrics";
    SongApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetListFieldsEnum["Names"] = "Names";
    SongApiGetListFieldsEnum["PVs"] = "PVs";
    SongApiGetListFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongApiGetListFieldsEnum["Tags"] = "Tags";
    SongApiGetListFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongApiGetListFieldsEnum["WebLinks"] = "WebLinks";
})(SongApiGetListFieldsEnum || (SongApiGetListFieldsEnum = {}));
export var SongApiGetListLangEnum;
(function (SongApiGetListLangEnum) {
    SongApiGetListLangEnum["Default"] = "Default";
    SongApiGetListLangEnum["Japanese"] = "Japanese";
    SongApiGetListLangEnum["Romaji"] = "Romaji";
    SongApiGetListLangEnum["English"] = "English";
})(SongApiGetListLangEnum || (SongApiGetListLangEnum = {}));
export var SongApiGetListNameMatchModeEnum;
(function (SongApiGetListNameMatchModeEnum) {
    SongApiGetListNameMatchModeEnum["Auto"] = "Auto";
    SongApiGetListNameMatchModeEnum["Partial"] = "Partial";
    SongApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    SongApiGetListNameMatchModeEnum["Exact"] = "Exact";
    SongApiGetListNameMatchModeEnum["Words"] = "Words";
})(SongApiGetListNameMatchModeEnum || (SongApiGetListNameMatchModeEnum = {}));
export var SongApiGetListPvServicesEnum;
(function (SongApiGetListPvServicesEnum) {
    SongApiGetListPvServicesEnum["Nothing"] = "Nothing";
    SongApiGetListPvServicesEnum["NicoNicoDouga"] = "NicoNicoDouga";
    SongApiGetListPvServicesEnum["Youtube"] = "Youtube";
    SongApiGetListPvServicesEnum["SoundCloud"] = "SoundCloud";
    SongApiGetListPvServicesEnum["Vimeo"] = "Vimeo";
    SongApiGetListPvServicesEnum["Piapro"] = "Piapro";
    SongApiGetListPvServicesEnum["Bilibili"] = "Bilibili";
    SongApiGetListPvServicesEnum["File"] = "File";
    SongApiGetListPvServicesEnum["LocalFile"] = "LocalFile";
    SongApiGetListPvServicesEnum["Creofuga"] = "Creofuga";
    SongApiGetListPvServicesEnum["Bandcamp"] = "Bandcamp";
})(SongApiGetListPvServicesEnum || (SongApiGetListPvServicesEnum = {}));
export var SongApiGetListSortEnum;
(function (SongApiGetListSortEnum) {
    SongApiGetListSortEnum["None"] = "None";
    SongApiGetListSortEnum["Name"] = "Name";
    SongApiGetListSortEnum["AdditionDate"] = "AdditionDate";
    SongApiGetListSortEnum["PublishDate"] = "PublishDate";
    SongApiGetListSortEnum["FavoritedTimes"] = "FavoritedTimes";
    SongApiGetListSortEnum["RatingScore"] = "RatingScore";
    SongApiGetListSortEnum["TagUsageCount"] = "TagUsageCount";
})(SongApiGetListSortEnum || (SongApiGetListSortEnum = {}));
export var SongApiGetListStatusEnum;
(function (SongApiGetListStatusEnum) {
    SongApiGetListStatusEnum["Draft"] = "Draft";
    SongApiGetListStatusEnum["Finished"] = "Finished";
    SongApiGetListStatusEnum["Approved"] = "Approved";
    SongApiGetListStatusEnum["Locked"] = "Locked";
})(SongApiGetListStatusEnum || (SongApiGetListStatusEnum = {}));
var SongApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetListQueryParams, _super);
    function SongApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" }),
        __metadata("design:type", Array)
    ], SongApiGetListQueryParams.prototype, "advancedFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=afterDate" }),
        __metadata("design:type", Date)
    ], SongApiGetListQueryParams.prototype, "afterDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" }),
        __metadata("design:type", Array)
    ], SongApiGetListQueryParams.prototype, "artistId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistParticipationStatus" }),
        __metadata("design:type", String)
    ], SongApiGetListQueryParams.prototype, "artistParticipationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beforeDate" }),
        __metadata("design:type", Date)
    ], SongApiGetListQueryParams.prototype, "beforeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" }),
        __metadata("design:type", Boolean)
    ], SongApiGetListQueryParams.prototype, "childTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" }),
        __metadata("design:type", Boolean)
    ], SongApiGetListQueryParams.prototype, "childVoicebanks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], SongApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeMembers" }),
        __metadata("design:type", Boolean)
    ], SongApiGetListQueryParams.prototype, "includeMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], SongApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minScore" }),
        __metadata("design:type", Number)
    ], SongApiGetListQueryParams.prototype, "minScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], SongApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyWithPvs" }),
        __metadata("design:type", Boolean)
    ], SongApiGetListQueryParams.prototype, "onlyWithPvs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentSongId" }),
        __metadata("design:type", Number)
    ], SongApiGetListQueryParams.prototype, "parentSongId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" }),
        __metadata("design:type", Boolean)
    ], SongApiGetListQueryParams.prototype, "preferAccurateMatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pvServices" }),
        __metadata("design:type", String)
    ], SongApiGetListQueryParams.prototype, "pvServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SongApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=releaseEventId" }),
        __metadata("design:type", Number)
    ], SongApiGetListQueryParams.prototype, "releaseEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", Number)
    ], SongApiGetListQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=songTypes" }),
        __metadata("design:type", String)
    ], SongApiGetListQueryParams.prototype, "songTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SongApiGetListQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SongApiGetListQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], SongApiGetListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], SongApiGetListQueryParams.prototype, "tagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" }),
        __metadata("design:type", Array)
    ], SongApiGetListQueryParams.prototype, "tagName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unifyTypesAndTags" }),
        __metadata("design:type", Boolean)
    ], SongApiGetListQueryParams.prototype, "unifyTypesAndTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userCollectionId" }),
        __metadata("design:type", Number)
    ], SongApiGetListQueryParams.prototype, "userCollectionId", void 0);
    return SongApiGetListQueryParams;
}(SpeakeasyBase));
export { SongApiGetListQueryParams };
var SongApiGetListRequest = /** @class */ (function (_super) {
    __extends(SongApiGetListRequest, _super);
    function SongApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetListQueryParams)
    ], SongApiGetListRequest.prototype, "queryParams", void 0);
    return SongApiGetListRequest;
}(SpeakeasyBase));
export { SongApiGetListRequest };
var SongApiGetListResponse = /** @class */ (function (_super) {
    __extends(SongApiGetListResponse, _super);
    function SongApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultSongForApiContract)
    ], SongApiGetListResponse.prototype, "partialFindResultSongForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongApiGetListResponse.prototype, "statusCode", void 0);
    return SongApiGetListResponse;
}(SpeakeasyBase));
export { SongApiGetListResponse };
