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
var GetVideosPathParams = /** @class */ (function (_super) {
    __extends(GetVideosPathParams, _super);
    function GetVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetVideosPathParams.prototype, "userId", void 0);
    return GetVideosPathParams;
}(SpeakeasyBase));
export { GetVideosPathParams };
export var GetVideosDirectionEnum;
(function (GetVideosDirectionEnum) {
    GetVideosDirectionEnum["Asc"] = "asc";
    GetVideosDirectionEnum["Desc"] = "desc";
})(GetVideosDirectionEnum || (GetVideosDirectionEnum = {}));
export var GetVideosFilterEnum;
(function (GetVideosFilterEnum) {
    GetVideosFilterEnum["AppOnly"] = "app_only";
    GetVideosFilterEnum["Embeddable"] = "embeddable";
    GetVideosFilterEnum["Featured"] = "featured";
    GetVideosFilterEnum["Playable"] = "playable";
})(GetVideosFilterEnum || (GetVideosFilterEnum = {}));
export var GetVideosSortEnum;
(function (GetVideosSortEnum) {
    GetVideosSortEnum["Alphabetical"] = "alphabetical";
    GetVideosSortEnum["Comments"] = "comments";
    GetVideosSortEnum["Date"] = "date";
    GetVideosSortEnum["Default"] = "default";
    GetVideosSortEnum["Duration"] = "duration";
    GetVideosSortEnum["LastUserActionEventDate"] = "last_user_action_event_date";
    GetVideosSortEnum["Likes"] = "likes";
    GetVideosSortEnum["ModifiedTime"] = "modified_time";
    GetVideosSortEnum["Plays"] = "plays";
})(GetVideosSortEnum || (GetVideosSortEnum = {}));
var GetVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetVideosQueryParams, _super);
    function GetVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containing_uri" }),
        __metadata("design:type", String)
    ], GetVideosQueryParams.prototype, "containingUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVideosQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetVideosQueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_playable" }),
        __metadata("design:type", Boolean)
    ], GetVideosQueryParams.prototype, "filterPlayable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVideosQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetVideosQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVideosQueryParams.prototype, "sort", void 0);
    return GetVideosQueryParams;
}(SpeakeasyBase));
export { GetVideosQueryParams };
var GetVideosRequest = /** @class */ (function (_super) {
    __extends(GetVideosRequest, _super);
    function GetVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosPathParams)
    ], GetVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosQueryParams)
    ], GetVideosRequest.prototype, "queryParams", void 0);
    return GetVideosRequest;
}(SpeakeasyBase));
export { GetVideosRequest };
var GetVideosResponse = /** @class */ (function (_super) {
    __extends(GetVideosResponse, _super);
    function GetVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetVideosResponse.prototype, "videos", void 0);
    return GetVideosResponse;
}(SpeakeasyBase));
export { GetVideosResponse };
