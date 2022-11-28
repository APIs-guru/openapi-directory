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
export var TagApiGetTopTagsEntryTypeEnum;
(function (TagApiGetTopTagsEntryTypeEnum) {
    TagApiGetTopTagsEntryTypeEnum["Undefined"] = "Undefined";
    TagApiGetTopTagsEntryTypeEnum["Album"] = "Album";
    TagApiGetTopTagsEntryTypeEnum["Artist"] = "Artist";
    TagApiGetTopTagsEntryTypeEnum["DiscussionTopic"] = "DiscussionTopic";
    TagApiGetTopTagsEntryTypeEnum["Pv"] = "PV";
    TagApiGetTopTagsEntryTypeEnum["ReleaseEvent"] = "ReleaseEvent";
    TagApiGetTopTagsEntryTypeEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    TagApiGetTopTagsEntryTypeEnum["Song"] = "Song";
    TagApiGetTopTagsEntryTypeEnum["SongList"] = "SongList";
    TagApiGetTopTagsEntryTypeEnum["Tag"] = "Tag";
    TagApiGetTopTagsEntryTypeEnum["User"] = "User";
    TagApiGetTopTagsEntryTypeEnum["Venue"] = "Venue";
})(TagApiGetTopTagsEntryTypeEnum || (TagApiGetTopTagsEntryTypeEnum = {}));
export var TagApiGetTopTagsLangEnum;
(function (TagApiGetTopTagsLangEnum) {
    TagApiGetTopTagsLangEnum["Default"] = "Default";
    TagApiGetTopTagsLangEnum["Japanese"] = "Japanese";
    TagApiGetTopTagsLangEnum["Romaji"] = "Romaji";
    TagApiGetTopTagsLangEnum["English"] = "English";
})(TagApiGetTopTagsLangEnum || (TagApiGetTopTagsLangEnum = {}));
var TagApiGetTopTagsQueryParams = /** @class */ (function (_super) {
    __extends(TagApiGetTopTagsQueryParams, _super);
    function TagApiGetTopTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryName" }),
        __metadata("design:type", String)
    ], TagApiGetTopTagsQueryParams.prototype, "categoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryType" }),
        __metadata("design:type", String)
    ], TagApiGetTopTagsQueryParams.prototype, "entryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], TagApiGetTopTagsQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], TagApiGetTopTagsQueryParams.prototype, "maxResults", void 0);
    return TagApiGetTopTagsQueryParams;
}(SpeakeasyBase));
export { TagApiGetTopTagsQueryParams };
var TagApiGetTopTagsRequest = /** @class */ (function (_super) {
    __extends(TagApiGetTopTagsRequest, _super);
    function TagApiGetTopTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagApiGetTopTagsQueryParams)
    ], TagApiGetTopTagsRequest.prototype, "queryParams", void 0);
    return TagApiGetTopTagsRequest;
}(SpeakeasyBase));
export { TagApiGetTopTagsRequest };
var TagApiGetTopTagsResponse = /** @class */ (function (_super) {
    __extends(TagApiGetTopTagsResponse, _super);
    function TagApiGetTopTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TagApiGetTopTagsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagApiGetTopTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagApiGetTopTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TagBaseContract }),
        __metadata("design:type", Array)
    ], TagApiGetTopTagsResponse.prototype, "tagBaseContracts", void 0);
    return TagApiGetTopTagsResponse;
}(SpeakeasyBase));
export { TagApiGetTopTagsResponse };
