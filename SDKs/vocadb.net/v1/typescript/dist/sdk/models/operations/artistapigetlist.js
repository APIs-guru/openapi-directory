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
export var ArtistApiGetListFieldsEnum;
(function (ArtistApiGetListFieldsEnum) {
    ArtistApiGetListFieldsEnum["None"] = "None";
    ArtistApiGetListFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ArtistApiGetListFieldsEnum["ArtistLinks"] = "ArtistLinks";
    ArtistApiGetListFieldsEnum["ArtistLinksReverse"] = "ArtistLinksReverse";
    ArtistApiGetListFieldsEnum["BaseVoicebank"] = "BaseVoicebank";
    ArtistApiGetListFieldsEnum["Description"] = "Description";
    ArtistApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    ArtistApiGetListFieldsEnum["Names"] = "Names";
    ArtistApiGetListFieldsEnum["Tags"] = "Tags";
    ArtistApiGetListFieldsEnum["WebLinks"] = "WebLinks";
})(ArtistApiGetListFieldsEnum || (ArtistApiGetListFieldsEnum = {}));
export var ArtistApiGetListLangEnum;
(function (ArtistApiGetListLangEnum) {
    ArtistApiGetListLangEnum["Default"] = "Default";
    ArtistApiGetListLangEnum["Japanese"] = "Japanese";
    ArtistApiGetListLangEnum["Romaji"] = "Romaji";
    ArtistApiGetListLangEnum["English"] = "English";
})(ArtistApiGetListLangEnum || (ArtistApiGetListLangEnum = {}));
export var ArtistApiGetListNameMatchModeEnum;
(function (ArtistApiGetListNameMatchModeEnum) {
    ArtistApiGetListNameMatchModeEnum["Auto"] = "Auto";
    ArtistApiGetListNameMatchModeEnum["Partial"] = "Partial";
    ArtistApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    ArtistApiGetListNameMatchModeEnum["Exact"] = "Exact";
    ArtistApiGetListNameMatchModeEnum["Words"] = "Words";
})(ArtistApiGetListNameMatchModeEnum || (ArtistApiGetListNameMatchModeEnum = {}));
export var ArtistApiGetListSortEnum;
(function (ArtistApiGetListSortEnum) {
    ArtistApiGetListSortEnum["None"] = "None";
    ArtistApiGetListSortEnum["Name"] = "Name";
    ArtistApiGetListSortEnum["AdditionDate"] = "AdditionDate";
    ArtistApiGetListSortEnum["AdditionDateAsc"] = "AdditionDateAsc";
    ArtistApiGetListSortEnum["ReleaseDate"] = "ReleaseDate";
    ArtistApiGetListSortEnum["SongCount"] = "SongCount";
    ArtistApiGetListSortEnum["SongRating"] = "SongRating";
    ArtistApiGetListSortEnum["FollowerCount"] = "FollowerCount";
})(ArtistApiGetListSortEnum || (ArtistApiGetListSortEnum = {}));
export var ArtistApiGetListStatusEnum;
(function (ArtistApiGetListStatusEnum) {
    ArtistApiGetListStatusEnum["Draft"] = "Draft";
    ArtistApiGetListStatusEnum["Finished"] = "Finished";
    ArtistApiGetListStatusEnum["Approved"] = "Approved";
    ArtistApiGetListStatusEnum["Locked"] = "Locked";
})(ArtistApiGetListStatusEnum || (ArtistApiGetListStatusEnum = {}));
var ArtistApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(ArtistApiGetListQueryParams, _super);
    function ArtistApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" }),
        __metadata("design:type", Array)
    ], ArtistApiGetListQueryParams.prototype, "advancedFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowBaseVoicebanks" }),
        __metadata("design:type", Boolean)
    ], ArtistApiGetListQueryParams.prototype, "allowBaseVoicebanks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistTypes" }),
        __metadata("design:type", String)
    ], ArtistApiGetListQueryParams.prototype, "artistTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" }),
        __metadata("design:type", Boolean)
    ], ArtistApiGetListQueryParams.prototype, "childTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtistApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=followedByUserId" }),
        __metadata("design:type", Number)
    ], ArtistApiGetListQueryParams.prototype, "followedByUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], ArtistApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ArtistApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ArtistApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], ArtistApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" }),
        __metadata("design:type", Boolean)
    ], ArtistApiGetListQueryParams.prototype, "preferAccurateMatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], ArtistApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ArtistApiGetListQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], ArtistApiGetListQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ArtistApiGetListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], ArtistApiGetListQueryParams.prototype, "tagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" }),
        __metadata("design:type", Array)
    ], ArtistApiGetListQueryParams.prototype, "tagName", void 0);
    return ArtistApiGetListQueryParams;
}(SpeakeasyBase));
export { ArtistApiGetListQueryParams };
var ArtistApiGetListRequest = /** @class */ (function (_super) {
    __extends(ArtistApiGetListRequest, _super);
    function ArtistApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtistApiGetListQueryParams)
    ], ArtistApiGetListRequest.prototype, "queryParams", void 0);
    return ArtistApiGetListRequest;
}(SpeakeasyBase));
export { ArtistApiGetListRequest };
var ArtistApiGetListResponse = /** @class */ (function (_super) {
    __extends(ArtistApiGetListResponse, _super);
    function ArtistApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ArtistApiGetListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArtistApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultArtistForApiContract)
    ], ArtistApiGetListResponse.prototype, "partialFindResultArtistForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArtistApiGetListResponse.prototype, "statusCode", void 0);
    return ArtistApiGetListResponse;
}(SpeakeasyBase));
export { ArtistApiGetListResponse };
