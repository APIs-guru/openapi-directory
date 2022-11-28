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
export var SearchVideosDirectionEnum;
(function (SearchVideosDirectionEnum) {
    SearchVideosDirectionEnum["Asc"] = "asc";
    SearchVideosDirectionEnum["Desc"] = "desc";
})(SearchVideosDirectionEnum || (SearchVideosDirectionEnum = {}));
export var SearchVideosFilterEnum;
(function (SearchVideosFilterEnum) {
    SearchVideosFilterEnum["Cc"] = "CC";
    SearchVideosFilterEnum["CcBy"] = "CC-BY";
    SearchVideosFilterEnum["CcByNc"] = "CC-BY-NC";
    SearchVideosFilterEnum["CcByNcNd"] = "CC-BY-NC-ND";
    SearchVideosFilterEnum["CcByNcSa"] = "CC-BY-NC-SA";
    SearchVideosFilterEnum["CcByNd"] = "CC-BY-ND";
    SearchVideosFilterEnum["CcBySa"] = "CC-BY-SA";
    SearchVideosFilterEnum["Cc0"] = "CC0";
    SearchVideosFilterEnum["Categories"] = "categories";
    SearchVideosFilterEnum["Duration"] = "duration";
    SearchVideosFilterEnum["InProgress"] = "in-progress";
    SearchVideosFilterEnum["MinimumLikes"] = "minimum_likes";
    SearchVideosFilterEnum["Trending"] = "trending";
    SearchVideosFilterEnum["UploadDate"] = "upload_date";
})(SearchVideosFilterEnum || (SearchVideosFilterEnum = {}));
export var SearchVideosSortEnum;
(function (SearchVideosSortEnum) {
    SearchVideosSortEnum["Alphabetical"] = "alphabetical";
    SearchVideosSortEnum["Comments"] = "comments";
    SearchVideosSortEnum["Date"] = "date";
    SearchVideosSortEnum["Duration"] = "duration";
    SearchVideosSortEnum["Likes"] = "likes";
    SearchVideosSortEnum["Plays"] = "plays";
    SearchVideosSortEnum["Relevant"] = "relevant";
})(SearchVideosSortEnum || (SearchVideosSortEnum = {}));
var SearchVideosQueryParams = /** @class */ (function (_super) {
    __extends(SearchVideosQueryParams, _super);
    function SearchVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=links" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" }),
        __metadata("design:type", String)
    ], SearchVideosQueryParams.prototype, "uris", void 0);
    return SearchVideosQueryParams;
}(SpeakeasyBase));
export { SearchVideosQueryParams };
var SearchVideosRequest = /** @class */ (function (_super) {
    __extends(SearchVideosRequest, _super);
    function SearchVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchVideosQueryParams)
    ], SearchVideosRequest.prototype, "queryParams", void 0);
    return SearchVideosRequest;
}(SpeakeasyBase));
export { SearchVideosRequest };
var SearchVideosResponse = /** @class */ (function (_super) {
    __extends(SearchVideosResponse, _super);
    function SearchVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], SearchVideosResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], SearchVideosResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], SearchVideosResponse.prototype, "videos", void 0);
    return SearchVideosResponse;
}(SpeakeasyBase));
export { SearchVideosResponse };
