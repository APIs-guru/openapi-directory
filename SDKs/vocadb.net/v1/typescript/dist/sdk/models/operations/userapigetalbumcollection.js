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
var UserApiGetAlbumCollectionPathParams = /** @class */ (function (_super) {
    __extends(UserApiGetAlbumCollectionPathParams, _super);
    function UserApiGetAlbumCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserApiGetAlbumCollectionPathParams.prototype, "id", void 0);
    return UserApiGetAlbumCollectionPathParams;
}(SpeakeasyBase));
export { UserApiGetAlbumCollectionPathParams };
export var UserApiGetAlbumCollectionAlbumTypesEnum;
(function (UserApiGetAlbumCollectionAlbumTypesEnum) {
    UserApiGetAlbumCollectionAlbumTypesEnum["Unknown"] = "Unknown";
    UserApiGetAlbumCollectionAlbumTypesEnum["Album"] = "Album";
    UserApiGetAlbumCollectionAlbumTypesEnum["Single"] = "Single";
    UserApiGetAlbumCollectionAlbumTypesEnum["Ep"] = "EP";
    UserApiGetAlbumCollectionAlbumTypesEnum["SplitAlbum"] = "SplitAlbum";
    UserApiGetAlbumCollectionAlbumTypesEnum["Compilation"] = "Compilation";
    UserApiGetAlbumCollectionAlbumTypesEnum["Video"] = "Video";
    UserApiGetAlbumCollectionAlbumTypesEnum["Artbook"] = "Artbook";
    UserApiGetAlbumCollectionAlbumTypesEnum["Game"] = "Game";
    UserApiGetAlbumCollectionAlbumTypesEnum["Fanmade"] = "Fanmade";
    UserApiGetAlbumCollectionAlbumTypesEnum["Instrumental"] = "Instrumental";
    UserApiGetAlbumCollectionAlbumTypesEnum["Other"] = "Other";
})(UserApiGetAlbumCollectionAlbumTypesEnum || (UserApiGetAlbumCollectionAlbumTypesEnum = {}));
export var UserApiGetAlbumCollectionFieldsEnum;
(function (UserApiGetAlbumCollectionFieldsEnum) {
    UserApiGetAlbumCollectionFieldsEnum["None"] = "None";
    UserApiGetAlbumCollectionFieldsEnum["AdditionalNames"] = "AdditionalNames";
    UserApiGetAlbumCollectionFieldsEnum["Artists"] = "Artists";
    UserApiGetAlbumCollectionFieldsEnum["Description"] = "Description";
    UserApiGetAlbumCollectionFieldsEnum["Discs"] = "Discs";
    UserApiGetAlbumCollectionFieldsEnum["Identifiers"] = "Identifiers";
    UserApiGetAlbumCollectionFieldsEnum["MainPicture"] = "MainPicture";
    UserApiGetAlbumCollectionFieldsEnum["Names"] = "Names";
    UserApiGetAlbumCollectionFieldsEnum["PVs"] = "PVs";
    UserApiGetAlbumCollectionFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    UserApiGetAlbumCollectionFieldsEnum["Tags"] = "Tags";
    UserApiGetAlbumCollectionFieldsEnum["Tracks"] = "Tracks";
    UserApiGetAlbumCollectionFieldsEnum["WebLinks"] = "WebLinks";
})(UserApiGetAlbumCollectionFieldsEnum || (UserApiGetAlbumCollectionFieldsEnum = {}));
export var UserApiGetAlbumCollectionLangEnum;
(function (UserApiGetAlbumCollectionLangEnum) {
    UserApiGetAlbumCollectionLangEnum["Default"] = "Default";
    UserApiGetAlbumCollectionLangEnum["Japanese"] = "Japanese";
    UserApiGetAlbumCollectionLangEnum["Romaji"] = "Romaji";
    UserApiGetAlbumCollectionLangEnum["English"] = "English";
})(UserApiGetAlbumCollectionLangEnum || (UserApiGetAlbumCollectionLangEnum = {}));
export var UserApiGetAlbumCollectionNameMatchModeEnum;
(function (UserApiGetAlbumCollectionNameMatchModeEnum) {
    UserApiGetAlbumCollectionNameMatchModeEnum["Auto"] = "Auto";
    UserApiGetAlbumCollectionNameMatchModeEnum["Partial"] = "Partial";
    UserApiGetAlbumCollectionNameMatchModeEnum["StartsWith"] = "StartsWith";
    UserApiGetAlbumCollectionNameMatchModeEnum["Exact"] = "Exact";
    UserApiGetAlbumCollectionNameMatchModeEnum["Words"] = "Words";
})(UserApiGetAlbumCollectionNameMatchModeEnum || (UserApiGetAlbumCollectionNameMatchModeEnum = {}));
export var UserApiGetAlbumCollectionPurchaseStatusesEnum;
(function (UserApiGetAlbumCollectionPurchaseStatusesEnum) {
    UserApiGetAlbumCollectionPurchaseStatusesEnum["Nothing"] = "Nothing";
    UserApiGetAlbumCollectionPurchaseStatusesEnum["Wishlisted"] = "Wishlisted";
    UserApiGetAlbumCollectionPurchaseStatusesEnum["Ordered"] = "Ordered";
    UserApiGetAlbumCollectionPurchaseStatusesEnum["Owned"] = "Owned";
    UserApiGetAlbumCollectionPurchaseStatusesEnum["All"] = "All";
})(UserApiGetAlbumCollectionPurchaseStatusesEnum || (UserApiGetAlbumCollectionPurchaseStatusesEnum = {}));
export var UserApiGetAlbumCollectionSortEnum;
(function (UserApiGetAlbumCollectionSortEnum) {
    UserApiGetAlbumCollectionSortEnum["None"] = "None";
    UserApiGetAlbumCollectionSortEnum["Name"] = "Name";
    UserApiGetAlbumCollectionSortEnum["ReleaseDate"] = "ReleaseDate";
    UserApiGetAlbumCollectionSortEnum["ReleaseDateWithNulls"] = "ReleaseDateWithNulls";
    UserApiGetAlbumCollectionSortEnum["AdditionDate"] = "AdditionDate";
    UserApiGetAlbumCollectionSortEnum["RatingAverage"] = "RatingAverage";
    UserApiGetAlbumCollectionSortEnum["RatingTotal"] = "RatingTotal";
    UserApiGetAlbumCollectionSortEnum["NameThenReleaseDate"] = "NameThenReleaseDate";
    UserApiGetAlbumCollectionSortEnum["CollectionCount"] = "CollectionCount";
})(UserApiGetAlbumCollectionSortEnum || (UserApiGetAlbumCollectionSortEnum = {}));
var UserApiGetAlbumCollectionQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetAlbumCollectionQueryParams, _super);
    function UserApiGetAlbumCollectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" }),
        __metadata("design:type", Array)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "advancedFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albumTypes" }),
        __metadata("design:type", String)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "albumTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" }),
        __metadata("design:type", Number)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "artistId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=purchaseStatuses" }),
        __metadata("design:type", String)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "purchaseStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=releaseEventId" }),
        __metadata("design:type", Number)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "releaseEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Number)
    ], UserApiGetAlbumCollectionQueryParams.prototype, "tagId", void 0);
    return UserApiGetAlbumCollectionQueryParams;
}(SpeakeasyBase));
export { UserApiGetAlbumCollectionQueryParams };
var UserApiGetAlbumCollectionRequest = /** @class */ (function (_super) {
    __extends(UserApiGetAlbumCollectionRequest, _super);
    function UserApiGetAlbumCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetAlbumCollectionPathParams)
    ], UserApiGetAlbumCollectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetAlbumCollectionQueryParams)
    ], UserApiGetAlbumCollectionRequest.prototype, "queryParams", void 0);
    return UserApiGetAlbumCollectionRequest;
}(SpeakeasyBase));
export { UserApiGetAlbumCollectionRequest };
var UserApiGetAlbumCollectionResponse = /** @class */ (function (_super) {
    __extends(UserApiGetAlbumCollectionResponse, _super);
    function UserApiGetAlbumCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetAlbumCollectionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetAlbumCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultAlbumForUserForApiContract)
    ], UserApiGetAlbumCollectionResponse.prototype, "partialFindResultAlbumForUserForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiGetAlbumCollectionResponse.prototype, "statusCode", void 0);
    return UserApiGetAlbumCollectionResponse;
}(SpeakeasyBase));
export { UserApiGetAlbumCollectionResponse };
