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
export var SongListApiGetFeaturedListsFeaturedCategoryEnum;
(function (SongListApiGetFeaturedListsFeaturedCategoryEnum) {
    SongListApiGetFeaturedListsFeaturedCategoryEnum["Nothing"] = "Nothing";
    SongListApiGetFeaturedListsFeaturedCategoryEnum["Concerts"] = "Concerts";
    SongListApiGetFeaturedListsFeaturedCategoryEnum["VocaloidRanking"] = "VocaloidRanking";
    SongListApiGetFeaturedListsFeaturedCategoryEnum["Pools"] = "Pools";
    SongListApiGetFeaturedListsFeaturedCategoryEnum["Other"] = "Other";
})(SongListApiGetFeaturedListsFeaturedCategoryEnum || (SongListApiGetFeaturedListsFeaturedCategoryEnum = {}));
export var SongListApiGetFeaturedListsFieldsEnum;
(function (SongListApiGetFeaturedListsFieldsEnum) {
    SongListApiGetFeaturedListsFieldsEnum["None"] = "None";
    SongListApiGetFeaturedListsFieldsEnum["Description"] = "Description";
    SongListApiGetFeaturedListsFieldsEnum["Events"] = "Events";
    SongListApiGetFeaturedListsFieldsEnum["MainPicture"] = "MainPicture";
    SongListApiGetFeaturedListsFieldsEnum["Tags"] = "Tags";
})(SongListApiGetFeaturedListsFieldsEnum || (SongListApiGetFeaturedListsFieldsEnum = {}));
export var SongListApiGetFeaturedListsLangEnum;
(function (SongListApiGetFeaturedListsLangEnum) {
    SongListApiGetFeaturedListsLangEnum["Default"] = "Default";
    SongListApiGetFeaturedListsLangEnum["Japanese"] = "Japanese";
    SongListApiGetFeaturedListsLangEnum["Romaji"] = "Romaji";
    SongListApiGetFeaturedListsLangEnum["English"] = "English";
})(SongListApiGetFeaturedListsLangEnum || (SongListApiGetFeaturedListsLangEnum = {}));
export var SongListApiGetFeaturedListsNameMatchModeEnum;
(function (SongListApiGetFeaturedListsNameMatchModeEnum) {
    SongListApiGetFeaturedListsNameMatchModeEnum["Auto"] = "Auto";
    SongListApiGetFeaturedListsNameMatchModeEnum["Partial"] = "Partial";
    SongListApiGetFeaturedListsNameMatchModeEnum["StartsWith"] = "StartsWith";
    SongListApiGetFeaturedListsNameMatchModeEnum["Exact"] = "Exact";
    SongListApiGetFeaturedListsNameMatchModeEnum["Words"] = "Words";
})(SongListApiGetFeaturedListsNameMatchModeEnum || (SongListApiGetFeaturedListsNameMatchModeEnum = {}));
export var SongListApiGetFeaturedListsSortEnum;
(function (SongListApiGetFeaturedListsSortEnum) {
    SongListApiGetFeaturedListsSortEnum["None"] = "None";
    SongListApiGetFeaturedListsSortEnum["Name"] = "Name";
    SongListApiGetFeaturedListsSortEnum["Date"] = "Date";
    SongListApiGetFeaturedListsSortEnum["CreateDate"] = "CreateDate";
})(SongListApiGetFeaturedListsSortEnum || (SongListApiGetFeaturedListsSortEnum = {}));
var SongListApiGetFeaturedListsQueryParams = /** @class */ (function (_super) {
    __extends(SongListApiGetFeaturedListsQueryParams, _super);
    function SongListApiGetFeaturedListsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" }),
        __metadata("design:type", Boolean)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "childTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featuredCategory" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "featuredCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "tagId", void 0);
    return SongListApiGetFeaturedListsQueryParams;
}(SpeakeasyBase));
export { SongListApiGetFeaturedListsQueryParams };
var SongListApiGetFeaturedListsRequest = /** @class */ (function (_super) {
    __extends(SongListApiGetFeaturedListsRequest, _super);
    function SongListApiGetFeaturedListsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongListApiGetFeaturedListsQueryParams)
    ], SongListApiGetFeaturedListsRequest.prototype, "queryParams", void 0);
    return SongListApiGetFeaturedListsRequest;
}(SpeakeasyBase));
export { SongListApiGetFeaturedListsRequest };
var SongListApiGetFeaturedListsResponse = /** @class */ (function (_super) {
    __extends(SongListApiGetFeaturedListsResponse, _super);
    function SongListApiGetFeaturedListsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongListApiGetFeaturedListsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultSongListForApiContract)
    ], SongListApiGetFeaturedListsResponse.prototype, "partialFindResultSongListForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongListApiGetFeaturedListsResponse.prototype, "statusCode", void 0);
    return SongListApiGetFeaturedListsResponse;
}(SpeakeasyBase));
export { SongListApiGetFeaturedListsResponse };
