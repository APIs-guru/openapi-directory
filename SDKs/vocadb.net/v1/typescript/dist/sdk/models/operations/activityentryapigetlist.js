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
export var ActivityEntryApiGetListEditEventEnum;
(function (ActivityEntryApiGetListEditEventEnum) {
    ActivityEntryApiGetListEditEventEnum["Created"] = "Created";
    ActivityEntryApiGetListEditEventEnum["Updated"] = "Updated";
    ActivityEntryApiGetListEditEventEnum["Deleted"] = "Deleted";
    ActivityEntryApiGetListEditEventEnum["Restored"] = "Restored";
})(ActivityEntryApiGetListEditEventEnum || (ActivityEntryApiGetListEditEventEnum = {}));
export var ActivityEntryApiGetListEntryFieldsEnum;
(function (ActivityEntryApiGetListEntryFieldsEnum) {
    ActivityEntryApiGetListEntryFieldsEnum["None"] = "None";
    ActivityEntryApiGetListEntryFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ActivityEntryApiGetListEntryFieldsEnum["Description"] = "Description";
    ActivityEntryApiGetListEntryFieldsEnum["MainPicture"] = "MainPicture";
    ActivityEntryApiGetListEntryFieldsEnum["Names"] = "Names";
    ActivityEntryApiGetListEntryFieldsEnum["PVs"] = "PVs";
    ActivityEntryApiGetListEntryFieldsEnum["Tags"] = "Tags";
    ActivityEntryApiGetListEntryFieldsEnum["WebLinks"] = "WebLinks";
})(ActivityEntryApiGetListEntryFieldsEnum || (ActivityEntryApiGetListEntryFieldsEnum = {}));
export var ActivityEntryApiGetListEntryTypeEnum;
(function (ActivityEntryApiGetListEntryTypeEnum) {
    ActivityEntryApiGetListEntryTypeEnum["Undefined"] = "Undefined";
    ActivityEntryApiGetListEntryTypeEnum["Album"] = "Album";
    ActivityEntryApiGetListEntryTypeEnum["Artist"] = "Artist";
    ActivityEntryApiGetListEntryTypeEnum["DiscussionTopic"] = "DiscussionTopic";
    ActivityEntryApiGetListEntryTypeEnum["Pv"] = "PV";
    ActivityEntryApiGetListEntryTypeEnum["ReleaseEvent"] = "ReleaseEvent";
    ActivityEntryApiGetListEntryTypeEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    ActivityEntryApiGetListEntryTypeEnum["Song"] = "Song";
    ActivityEntryApiGetListEntryTypeEnum["SongList"] = "SongList";
    ActivityEntryApiGetListEntryTypeEnum["Tag"] = "Tag";
    ActivityEntryApiGetListEntryTypeEnum["User"] = "User";
    ActivityEntryApiGetListEntryTypeEnum["Venue"] = "Venue";
})(ActivityEntryApiGetListEntryTypeEnum || (ActivityEntryApiGetListEntryTypeEnum = {}));
export var ActivityEntryApiGetListFieldsEnum;
(function (ActivityEntryApiGetListFieldsEnum) {
    ActivityEntryApiGetListFieldsEnum["None"] = "None";
    ActivityEntryApiGetListFieldsEnum["ArchivedVersion"] = "ArchivedVersion";
    ActivityEntryApiGetListFieldsEnum["Entry"] = "Entry";
})(ActivityEntryApiGetListFieldsEnum || (ActivityEntryApiGetListFieldsEnum = {}));
export var ActivityEntryApiGetListLangEnum;
(function (ActivityEntryApiGetListLangEnum) {
    ActivityEntryApiGetListLangEnum["Default"] = "Default";
    ActivityEntryApiGetListLangEnum["Japanese"] = "Japanese";
    ActivityEntryApiGetListLangEnum["Romaji"] = "Romaji";
    ActivityEntryApiGetListLangEnum["English"] = "English";
})(ActivityEntryApiGetListLangEnum || (ActivityEntryApiGetListLangEnum = {}));
export var ActivityEntryApiGetListSortRuleEnum;
(function (ActivityEntryApiGetListSortRuleEnum) {
    ActivityEntryApiGetListSortRuleEnum["CreateDateDescending"] = "CreateDateDescending";
    ActivityEntryApiGetListSortRuleEnum["CreateDate"] = "CreateDate";
})(ActivityEntryApiGetListSortRuleEnum || (ActivityEntryApiGetListSortRuleEnum = {}));
var ActivityEntryApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(ActivityEntryApiGetListQueryParams, _super);
    function ActivityEntryApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", Date)
    ], ActivityEntryApiGetListQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=editEvent" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "editEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryFields" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "entryFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryType" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "entryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], ActivityEntryApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ActivityEntryApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", Date)
    ], ActivityEntryApiGetListQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortRule" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "sortRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", Number)
    ], ActivityEntryApiGetListQueryParams.prototype, "userId", void 0);
    return ActivityEntryApiGetListQueryParams;
}(SpeakeasyBase));
export { ActivityEntryApiGetListQueryParams };
var ActivityEntryApiGetListRequest = /** @class */ (function (_super) {
    __extends(ActivityEntryApiGetListRequest, _super);
    function ActivityEntryApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityEntryApiGetListQueryParams)
    ], ActivityEntryApiGetListRequest.prototype, "queryParams", void 0);
    return ActivityEntryApiGetListRequest;
}(SpeakeasyBase));
export { ActivityEntryApiGetListRequest };
var ActivityEntryApiGetListResponse = /** @class */ (function (_super) {
    __extends(ActivityEntryApiGetListResponse, _super);
    function ActivityEntryApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ActivityEntryApiGetListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultActivityEntryForApiContract)
    ], ActivityEntryApiGetListResponse.prototype, "partialFindResultActivityEntryForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivityEntryApiGetListResponse.prototype, "statusCode", void 0);
    return ActivityEntryApiGetListResponse;
}(SpeakeasyBase));
export { ActivityEntryApiGetListResponse };
