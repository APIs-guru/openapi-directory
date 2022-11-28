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
export var ReleaseEventApiGetListCategoryEnum;
(function (ReleaseEventApiGetListCategoryEnum) {
    ReleaseEventApiGetListCategoryEnum["Unspecified"] = "Unspecified";
    ReleaseEventApiGetListCategoryEnum["AlbumRelease"] = "AlbumRelease";
    ReleaseEventApiGetListCategoryEnum["Anniversary"] = "Anniversary";
    ReleaseEventApiGetListCategoryEnum["Club"] = "Club";
    ReleaseEventApiGetListCategoryEnum["Concert"] = "Concert";
    ReleaseEventApiGetListCategoryEnum["Contest"] = "Contest";
    ReleaseEventApiGetListCategoryEnum["Convention"] = "Convention";
    ReleaseEventApiGetListCategoryEnum["Other"] = "Other";
})(ReleaseEventApiGetListCategoryEnum || (ReleaseEventApiGetListCategoryEnum = {}));
export var ReleaseEventApiGetListFieldsEnum;
(function (ReleaseEventApiGetListFieldsEnum) {
    ReleaseEventApiGetListFieldsEnum["None"] = "None";
    ReleaseEventApiGetListFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ReleaseEventApiGetListFieldsEnum["Artists"] = "Artists";
    ReleaseEventApiGetListFieldsEnum["Description"] = "Description";
    ReleaseEventApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    ReleaseEventApiGetListFieldsEnum["Names"] = "Names";
    ReleaseEventApiGetListFieldsEnum["Series"] = "Series";
    ReleaseEventApiGetListFieldsEnum["SongList"] = "SongList";
    ReleaseEventApiGetListFieldsEnum["Tags"] = "Tags";
    ReleaseEventApiGetListFieldsEnum["Venue"] = "Venue";
    ReleaseEventApiGetListFieldsEnum["WebLinks"] = "WebLinks";
})(ReleaseEventApiGetListFieldsEnum || (ReleaseEventApiGetListFieldsEnum = {}));
export var ReleaseEventApiGetListLangEnum;
(function (ReleaseEventApiGetListLangEnum) {
    ReleaseEventApiGetListLangEnum["Default"] = "Default";
    ReleaseEventApiGetListLangEnum["Japanese"] = "Japanese";
    ReleaseEventApiGetListLangEnum["Romaji"] = "Romaji";
    ReleaseEventApiGetListLangEnum["English"] = "English";
})(ReleaseEventApiGetListLangEnum || (ReleaseEventApiGetListLangEnum = {}));
export var ReleaseEventApiGetListNameMatchModeEnum;
(function (ReleaseEventApiGetListNameMatchModeEnum) {
    ReleaseEventApiGetListNameMatchModeEnum["Auto"] = "Auto";
    ReleaseEventApiGetListNameMatchModeEnum["Partial"] = "Partial";
    ReleaseEventApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    ReleaseEventApiGetListNameMatchModeEnum["Exact"] = "Exact";
    ReleaseEventApiGetListNameMatchModeEnum["Words"] = "Words";
})(ReleaseEventApiGetListNameMatchModeEnum || (ReleaseEventApiGetListNameMatchModeEnum = {}));
export var ReleaseEventApiGetListSortEnum;
(function (ReleaseEventApiGetListSortEnum) {
    ReleaseEventApiGetListSortEnum["None"] = "None";
    ReleaseEventApiGetListSortEnum["Name"] = "Name";
    ReleaseEventApiGetListSortEnum["Date"] = "Date";
    ReleaseEventApiGetListSortEnum["AdditionDate"] = "AdditionDate";
    ReleaseEventApiGetListSortEnum["SeriesName"] = "SeriesName";
    ReleaseEventApiGetListSortEnum["VenueName"] = "VenueName";
})(ReleaseEventApiGetListSortEnum || (ReleaseEventApiGetListSortEnum = {}));
export var ReleaseEventApiGetListStatusEnum;
(function (ReleaseEventApiGetListStatusEnum) {
    ReleaseEventApiGetListStatusEnum["Draft"] = "Draft";
    ReleaseEventApiGetListStatusEnum["Finished"] = "Finished";
    ReleaseEventApiGetListStatusEnum["Approved"] = "Approved";
    ReleaseEventApiGetListStatusEnum["Locked"] = "Locked";
})(ReleaseEventApiGetListStatusEnum || (ReleaseEventApiGetListStatusEnum = {}));
var ReleaseEventApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetListQueryParams, _super);
    function ReleaseEventApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=afterDate" }),
        __metadata("design:type", Date)
    ], ReleaseEventApiGetListQueryParams.prototype, "afterDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" }),
        __metadata("design:type", Array)
    ], ReleaseEventApiGetListQueryParams.prototype, "artistId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beforeDate" }),
        __metadata("design:type", Date)
    ], ReleaseEventApiGetListQueryParams.prototype, "beforeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventApiGetListQueryParams.prototype, "childTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventApiGetListQueryParams.prototype, "childVoicebanks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeMembers" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventApiGetListQueryParams.prototype, "includeMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesId" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetListQueryParams.prototype, "seriesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetListQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], ReleaseEventApiGetListQueryParams.prototype, "tagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userCollectionId" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetListQueryParams.prototype, "userCollectionId", void 0);
    return ReleaseEventApiGetListQueryParams;
}(SpeakeasyBase));
export { ReleaseEventApiGetListQueryParams };
var ReleaseEventApiGetListRequest = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetListRequest, _super);
    function ReleaseEventApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleaseEventApiGetListQueryParams)
    ], ReleaseEventApiGetListRequest.prototype, "queryParams", void 0);
    return ReleaseEventApiGetListRequest;
}(SpeakeasyBase));
export { ReleaseEventApiGetListRequest };
var ReleaseEventApiGetListResponse = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetListResponse, _super);
    function ReleaseEventApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReleaseEventApiGetListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultReleaseEventForApiContract)
    ], ReleaseEventApiGetListResponse.prototype, "partialFindResultReleaseEventForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetListResponse.prototype, "statusCode", void 0);
    return ReleaseEventApiGetListResponse;
}(SpeakeasyBase));
export { ReleaseEventApiGetListResponse };
