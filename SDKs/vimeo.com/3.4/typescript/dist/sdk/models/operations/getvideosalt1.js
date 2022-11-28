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
export var GetVideosAlt1DirectionEnum;
(function (GetVideosAlt1DirectionEnum) {
    GetVideosAlt1DirectionEnum["Asc"] = "asc";
    GetVideosAlt1DirectionEnum["Desc"] = "desc";
})(GetVideosAlt1DirectionEnum || (GetVideosAlt1DirectionEnum = {}));
export var GetVideosAlt1FilterEnum;
(function (GetVideosAlt1FilterEnum) {
    GetVideosAlt1FilterEnum["AppOnly"] = "app_only";
    GetVideosAlt1FilterEnum["Embeddable"] = "embeddable";
    GetVideosAlt1FilterEnum["Featured"] = "featured";
    GetVideosAlt1FilterEnum["Playable"] = "playable";
})(GetVideosAlt1FilterEnum || (GetVideosAlt1FilterEnum = {}));
export var GetVideosAlt1SortEnum;
(function (GetVideosAlt1SortEnum) {
    GetVideosAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetVideosAlt1SortEnum["Comments"] = "comments";
    GetVideosAlt1SortEnum["Date"] = "date";
    GetVideosAlt1SortEnum["Default"] = "default";
    GetVideosAlt1SortEnum["Duration"] = "duration";
    GetVideosAlt1SortEnum["LastUserActionEventDate"] = "last_user_action_event_date";
    GetVideosAlt1SortEnum["Likes"] = "likes";
    GetVideosAlt1SortEnum["ModifiedTime"] = "modified_time";
    GetVideosAlt1SortEnum["Plays"] = "plays";
})(GetVideosAlt1SortEnum || (GetVideosAlt1SortEnum = {}));
var GetVideosAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetVideosAlt1QueryParams, _super);
    function GetVideosAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containing_uri" }),
        __metadata("design:type", String)
    ], GetVideosAlt1QueryParams.prototype, "containingUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVideosAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVideosAlt1QueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetVideosAlt1QueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_playable" }),
        __metadata("design:type", Boolean)
    ], GetVideosAlt1QueryParams.prototype, "filterPlayable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVideosAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVideosAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetVideosAlt1QueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVideosAlt1QueryParams.prototype, "sort", void 0);
    return GetVideosAlt1QueryParams;
}(SpeakeasyBase));
export { GetVideosAlt1QueryParams };
var GetVideosAlt1Request = /** @class */ (function (_super) {
    __extends(GetVideosAlt1Request, _super);
    function GetVideosAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosAlt1QueryParams)
    ], GetVideosAlt1Request.prototype, "queryParams", void 0);
    return GetVideosAlt1Request;
}(SpeakeasyBase));
export { GetVideosAlt1Request };
var GetVideosAlt1Response = /** @class */ (function (_super) {
    __extends(GetVideosAlt1Response, _super);
    function GetVideosAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideosAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideosAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetVideosAlt1Response.prototype, "videos", void 0);
    return GetVideosAlt1Response;
}(SpeakeasyBase));
export { GetVideosAlt1Response };
