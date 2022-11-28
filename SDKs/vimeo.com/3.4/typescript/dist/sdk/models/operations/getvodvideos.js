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
var GetVodVideosPathParams = /** @class */ (function (_super) {
    __extends(GetVodVideosPathParams, _super);
    function GetVodVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], GetVodVideosPathParams.prototype, "ondemandId", void 0);
    return GetVodVideosPathParams;
}(SpeakeasyBase));
export { GetVodVideosPathParams };
export var GetVodVideosDirectionEnum;
(function (GetVodVideosDirectionEnum) {
    GetVodVideosDirectionEnum["Asc"] = "asc";
    GetVodVideosDirectionEnum["Desc"] = "desc";
})(GetVodVideosDirectionEnum || (GetVodVideosDirectionEnum = {}));
export var GetVodVideosFilterEnum;
(function (GetVodVideosFilterEnum) {
    GetVodVideosFilterEnum["All"] = "all";
    GetVodVideosFilterEnum["Buy"] = "buy";
    GetVodVideosFilterEnum["ExpiringSoon"] = "expiring_soon";
    GetVodVideosFilterEnum["Extra"] = "extra";
    GetVodVideosFilterEnum["Main"] = "main";
    GetVodVideosFilterEnum["MainViewable"] = "main.viewable";
    GetVodVideosFilterEnum["Rent"] = "rent";
    GetVodVideosFilterEnum["Trailer"] = "trailer";
    GetVodVideosFilterEnum["Unwatched"] = "unwatched";
    GetVodVideosFilterEnum["Viewable"] = "viewable";
    GetVodVideosFilterEnum["Watched"] = "watched";
})(GetVodVideosFilterEnum || (GetVodVideosFilterEnum = {}));
export var GetVodVideosSortEnum;
(function (GetVodVideosSortEnum) {
    GetVodVideosSortEnum["Date"] = "date";
    GetVodVideosSortEnum["Default"] = "default";
    GetVodVideosSortEnum["Episode"] = "episode";
    GetVodVideosSortEnum["Manual"] = "manual";
    GetVodVideosSortEnum["Name"] = "name";
    GetVodVideosSortEnum["PurchaseTime"] = "purchase_time";
    GetVodVideosSortEnum["ReleaseDate"] = "release_date";
})(GetVodVideosSortEnum || (GetVodVideosSortEnum = {}));
var GetVodVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetVodVideosQueryParams, _super);
    function GetVodVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVodVideosQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVodVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVodVideosQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVodVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVodVideosQueryParams.prototype, "sort", void 0);
    return GetVodVideosQueryParams;
}(SpeakeasyBase));
export { GetVodVideosQueryParams };
var GetVodVideosRequest = /** @class */ (function (_super) {
    __extends(GetVodVideosRequest, _super);
    function GetVodVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodVideosPathParams)
    ], GetVodVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodVideosQueryParams)
    ], GetVodVideosRequest.prototype, "queryParams", void 0);
    return GetVodVideosRequest;
}(SpeakeasyBase));
export { GetVodVideosRequest };
var GetVodVideosResponse = /** @class */ (function (_super) {
    __extends(GetVodVideosResponse, _super);
    function GetVodVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVodVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVodVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetVodVideosResponse.prototype, "videos", void 0);
    return GetVodVideosResponse;
}(SpeakeasyBase));
export { GetVodVideosResponse };
