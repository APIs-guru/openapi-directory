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
var GetVodSeasonVideosPathParams = /** @class */ (function (_super) {
    __extends(GetVodSeasonVideosPathParams, _super);
    function GetVodSeasonVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], GetVodSeasonVideosPathParams.prototype, "ondemandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season_id" }),
        __metadata("design:type", Number)
    ], GetVodSeasonVideosPathParams.prototype, "seasonId", void 0);
    return GetVodSeasonVideosPathParams;
}(SpeakeasyBase));
export { GetVodSeasonVideosPathParams };
export var GetVodSeasonVideosFilterEnum;
(function (GetVodSeasonVideosFilterEnum) {
    GetVodSeasonVideosFilterEnum["Viewable"] = "viewable";
})(GetVodSeasonVideosFilterEnum || (GetVodSeasonVideosFilterEnum = {}));
export var GetVodSeasonVideosSortEnum;
(function (GetVodSeasonVideosSortEnum) {
    GetVodSeasonVideosSortEnum["Date"] = "date";
    GetVodSeasonVideosSortEnum["Default"] = "default";
    GetVodSeasonVideosSortEnum["Manual"] = "manual";
    GetVodSeasonVideosSortEnum["Name"] = "name";
    GetVodSeasonVideosSortEnum["PurchaseTime"] = "purchase_time";
    GetVodSeasonVideosSortEnum["ReleaseDate"] = "release_date";
})(GetVodSeasonVideosSortEnum || (GetVodSeasonVideosSortEnum = {}));
var GetVodSeasonVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetVodSeasonVideosQueryParams, _super);
    function GetVodSeasonVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVodSeasonVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVodSeasonVideosQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVodSeasonVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVodSeasonVideosQueryParams.prototype, "sort", void 0);
    return GetVodSeasonVideosQueryParams;
}(SpeakeasyBase));
export { GetVodSeasonVideosQueryParams };
var GetVodSeasonVideosRequest = /** @class */ (function (_super) {
    __extends(GetVodSeasonVideosRequest, _super);
    function GetVodSeasonVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodSeasonVideosPathParams)
    ], GetVodSeasonVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodSeasonVideosQueryParams)
    ], GetVodSeasonVideosRequest.prototype, "queryParams", void 0);
    return GetVodSeasonVideosRequest;
}(SpeakeasyBase));
export { GetVodSeasonVideosRequest };
var GetVodSeasonVideosResponse = /** @class */ (function (_super) {
    __extends(GetVodSeasonVideosResponse, _super);
    function GetVodSeasonVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVodSeasonVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVodSeasonVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetVodSeasonVideosResponse.prototype, "videos", void 0);
    return GetVodSeasonVideosResponse;
}(SpeakeasyBase));
export { GetVodSeasonVideosResponse };
