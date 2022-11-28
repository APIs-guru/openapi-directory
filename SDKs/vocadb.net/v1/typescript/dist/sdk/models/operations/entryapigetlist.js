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
export var EntryApiGetListEntryTypesEnum;
(function (EntryApiGetListEntryTypesEnum) {
    EntryApiGetListEntryTypesEnum["Nothing"] = "Nothing";
    EntryApiGetListEntryTypesEnum["Album"] = "Album";
    EntryApiGetListEntryTypesEnum["Artist"] = "Artist";
    EntryApiGetListEntryTypesEnum["DiscussionTopic"] = "DiscussionTopic";
    EntryApiGetListEntryTypesEnum["Pv"] = "PV";
    EntryApiGetListEntryTypesEnum["ReleaseEvent"] = "ReleaseEvent";
    EntryApiGetListEntryTypesEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    EntryApiGetListEntryTypesEnum["Song"] = "Song";
    EntryApiGetListEntryTypesEnum["SongList"] = "SongList";
    EntryApiGetListEntryTypesEnum["Tag"] = "Tag";
    EntryApiGetListEntryTypesEnum["User"] = "User";
    EntryApiGetListEntryTypesEnum["Venue"] = "Venue";
})(EntryApiGetListEntryTypesEnum || (EntryApiGetListEntryTypesEnum = {}));
export var EntryApiGetListFieldsEnum;
(function (EntryApiGetListFieldsEnum) {
    EntryApiGetListFieldsEnum["None"] = "None";
    EntryApiGetListFieldsEnum["AdditionalNames"] = "AdditionalNames";
    EntryApiGetListFieldsEnum["Description"] = "Description";
    EntryApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    EntryApiGetListFieldsEnum["Names"] = "Names";
    EntryApiGetListFieldsEnum["PVs"] = "PVs";
    EntryApiGetListFieldsEnum["Tags"] = "Tags";
    EntryApiGetListFieldsEnum["WebLinks"] = "WebLinks";
})(EntryApiGetListFieldsEnum || (EntryApiGetListFieldsEnum = {}));
export var EntryApiGetListLangEnum;
(function (EntryApiGetListLangEnum) {
    EntryApiGetListLangEnum["Default"] = "Default";
    EntryApiGetListLangEnum["Japanese"] = "Japanese";
    EntryApiGetListLangEnum["Romaji"] = "Romaji";
    EntryApiGetListLangEnum["English"] = "English";
})(EntryApiGetListLangEnum || (EntryApiGetListLangEnum = {}));
export var EntryApiGetListNameMatchModeEnum;
(function (EntryApiGetListNameMatchModeEnum) {
    EntryApiGetListNameMatchModeEnum["Auto"] = "Auto";
    EntryApiGetListNameMatchModeEnum["Partial"] = "Partial";
    EntryApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    EntryApiGetListNameMatchModeEnum["Exact"] = "Exact";
    EntryApiGetListNameMatchModeEnum["Words"] = "Words";
})(EntryApiGetListNameMatchModeEnum || (EntryApiGetListNameMatchModeEnum = {}));
export var EntryApiGetListSortEnum;
(function (EntryApiGetListSortEnum) {
    EntryApiGetListSortEnum["None"] = "None";
    EntryApiGetListSortEnum["Name"] = "Name";
    EntryApiGetListSortEnum["AdditionDate"] = "AdditionDate";
    EntryApiGetListSortEnum["ActivityDate"] = "ActivityDate";
})(EntryApiGetListSortEnum || (EntryApiGetListSortEnum = {}));
export var EntryApiGetListStatusEnum;
(function (EntryApiGetListStatusEnum) {
    EntryApiGetListStatusEnum["Draft"] = "Draft";
    EntryApiGetListStatusEnum["Finished"] = "Finished";
    EntryApiGetListStatusEnum["Approved"] = "Approved";
    EntryApiGetListStatusEnum["Locked"] = "Locked";
})(EntryApiGetListStatusEnum || (EntryApiGetListStatusEnum = {}));
var EntryApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(EntryApiGetListQueryParams, _super);
    function EntryApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" }),
        __metadata("design:type", Boolean)
    ], EntryApiGetListQueryParams.prototype, "childTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryTypes" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "entryTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], EntryApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], EntryApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], EntryApiGetListQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], EntryApiGetListQueryParams.prototype, "tagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" }),
        __metadata("design:type", Array)
    ], EntryApiGetListQueryParams.prototype, "tagName", void 0);
    return EntryApiGetListQueryParams;
}(SpeakeasyBase));
export { EntryApiGetListQueryParams };
var EntryApiGetListRequest = /** @class */ (function (_super) {
    __extends(EntryApiGetListRequest, _super);
    function EntryApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EntryApiGetListQueryParams)
    ], EntryApiGetListRequest.prototype, "queryParams", void 0);
    return EntryApiGetListRequest;
}(SpeakeasyBase));
export { EntryApiGetListRequest };
var EntryApiGetListResponse = /** @class */ (function (_super) {
    __extends(EntryApiGetListResponse, _super);
    function EntryApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], EntryApiGetListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EntryApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultEntryForApiContract)
    ], EntryApiGetListResponse.prototype, "partialFindResultEntryForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EntryApiGetListResponse.prototype, "statusCode", void 0);
    return EntryApiGetListResponse;
}(SpeakeasyBase));
export { EntryApiGetListResponse };
