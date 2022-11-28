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
export var EntryTypesApiGetMappedTagEntryTypeEnum;
(function (EntryTypesApiGetMappedTagEntryTypeEnum) {
    EntryTypesApiGetMappedTagEntryTypeEnum["Undefined"] = "Undefined";
    EntryTypesApiGetMappedTagEntryTypeEnum["Album"] = "Album";
    EntryTypesApiGetMappedTagEntryTypeEnum["Artist"] = "Artist";
    EntryTypesApiGetMappedTagEntryTypeEnum["DiscussionTopic"] = "DiscussionTopic";
    EntryTypesApiGetMappedTagEntryTypeEnum["Pv"] = "PV";
    EntryTypesApiGetMappedTagEntryTypeEnum["ReleaseEvent"] = "ReleaseEvent";
    EntryTypesApiGetMappedTagEntryTypeEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    EntryTypesApiGetMappedTagEntryTypeEnum["Song"] = "Song";
    EntryTypesApiGetMappedTagEntryTypeEnum["SongList"] = "SongList";
    EntryTypesApiGetMappedTagEntryTypeEnum["Tag"] = "Tag";
    EntryTypesApiGetMappedTagEntryTypeEnum["User"] = "User";
    EntryTypesApiGetMappedTagEntryTypeEnum["Venue"] = "Venue";
})(EntryTypesApiGetMappedTagEntryTypeEnum || (EntryTypesApiGetMappedTagEntryTypeEnum = {}));
var EntryTypesApiGetMappedTagPathParams = /** @class */ (function (_super) {
    __extends(EntryTypesApiGetMappedTagPathParams, _super);
    function EntryTypesApiGetMappedTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entryType" }),
        __metadata("design:type", String)
    ], EntryTypesApiGetMappedTagPathParams.prototype, "entryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subType" }),
        __metadata("design:type", String)
    ], EntryTypesApiGetMappedTagPathParams.prototype, "subType", void 0);
    return EntryTypesApiGetMappedTagPathParams;
}(SpeakeasyBase));
export { EntryTypesApiGetMappedTagPathParams };
export var EntryTypesApiGetMappedTagFieldsEnum;
(function (EntryTypesApiGetMappedTagFieldsEnum) {
    EntryTypesApiGetMappedTagFieldsEnum["None"] = "None";
    EntryTypesApiGetMappedTagFieldsEnum["AdditionalNames"] = "AdditionalNames";
    EntryTypesApiGetMappedTagFieldsEnum["AliasedTo"] = "AliasedTo";
    EntryTypesApiGetMappedTagFieldsEnum["Description"] = "Description";
    EntryTypesApiGetMappedTagFieldsEnum["MainPicture"] = "MainPicture";
    EntryTypesApiGetMappedTagFieldsEnum["Names"] = "Names";
    EntryTypesApiGetMappedTagFieldsEnum["Parent"] = "Parent";
    EntryTypesApiGetMappedTagFieldsEnum["RelatedTags"] = "RelatedTags";
    EntryTypesApiGetMappedTagFieldsEnum["TranslatedDescription"] = "TranslatedDescription";
    EntryTypesApiGetMappedTagFieldsEnum["WebLinks"] = "WebLinks";
})(EntryTypesApiGetMappedTagFieldsEnum || (EntryTypesApiGetMappedTagFieldsEnum = {}));
var EntryTypesApiGetMappedTagQueryParams = /** @class */ (function (_super) {
    __extends(EntryTypesApiGetMappedTagQueryParams, _super);
    function EntryTypesApiGetMappedTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EntryTypesApiGetMappedTagQueryParams.prototype, "fields", void 0);
    return EntryTypesApiGetMappedTagQueryParams;
}(SpeakeasyBase));
export { EntryTypesApiGetMappedTagQueryParams };
var EntryTypesApiGetMappedTagRequest = /** @class */ (function (_super) {
    __extends(EntryTypesApiGetMappedTagRequest, _super);
    function EntryTypesApiGetMappedTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EntryTypesApiGetMappedTagPathParams)
    ], EntryTypesApiGetMappedTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EntryTypesApiGetMappedTagQueryParams)
    ], EntryTypesApiGetMappedTagRequest.prototype, "queryParams", void 0);
    return EntryTypesApiGetMappedTagRequest;
}(SpeakeasyBase));
export { EntryTypesApiGetMappedTagRequest };
var EntryTypesApiGetMappedTagResponse = /** @class */ (function (_super) {
    __extends(EntryTypesApiGetMappedTagResponse, _super);
    function EntryTypesApiGetMappedTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], EntryTypesApiGetMappedTagResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EntryTypesApiGetMappedTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EntryTypesApiGetMappedTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TagForApiContract)
    ], EntryTypesApiGetMappedTagResponse.prototype, "tagForApiContract", void 0);
    return EntryTypesApiGetMappedTagResponse;
}(SpeakeasyBase));
export { EntryTypesApiGetMappedTagResponse };
