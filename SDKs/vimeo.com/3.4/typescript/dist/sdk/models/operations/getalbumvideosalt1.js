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
var GetAlbumVideosAlt1PathParams = /** @class */ (function (_super) {
    __extends(GetAlbumVideosAlt1PathParams, _super);
    function GetAlbumVideosAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" }),
        __metadata("design:type", Number)
    ], GetAlbumVideosAlt1PathParams.prototype, "albumId", void 0);
    return GetAlbumVideosAlt1PathParams;
}(SpeakeasyBase));
export { GetAlbumVideosAlt1PathParams };
export var GetAlbumVideosAlt1DirectionEnum;
(function (GetAlbumVideosAlt1DirectionEnum) {
    GetAlbumVideosAlt1DirectionEnum["Asc"] = "asc";
    GetAlbumVideosAlt1DirectionEnum["Desc"] = "desc";
})(GetAlbumVideosAlt1DirectionEnum || (GetAlbumVideosAlt1DirectionEnum = {}));
export var GetAlbumVideosAlt1FilterEnum;
(function (GetAlbumVideosAlt1FilterEnum) {
    GetAlbumVideosAlt1FilterEnum["Embeddable"] = "embeddable";
})(GetAlbumVideosAlt1FilterEnum || (GetAlbumVideosAlt1FilterEnum = {}));
export var GetAlbumVideosAlt1SortEnum;
(function (GetAlbumVideosAlt1SortEnum) {
    GetAlbumVideosAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetAlbumVideosAlt1SortEnum["Comments"] = "comments";
    GetAlbumVideosAlt1SortEnum["Date"] = "date";
    GetAlbumVideosAlt1SortEnum["Default"] = "default";
    GetAlbumVideosAlt1SortEnum["Duration"] = "duration";
    GetAlbumVideosAlt1SortEnum["Likes"] = "likes";
    GetAlbumVideosAlt1SortEnum["Manual"] = "manual";
    GetAlbumVideosAlt1SortEnum["ModifiedTime"] = "modified_time";
    GetAlbumVideosAlt1SortEnum["Plays"] = "plays";
})(GetAlbumVideosAlt1SortEnum || (GetAlbumVideosAlt1SortEnum = {}));
var GetAlbumVideosAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetAlbumVideosAlt1QueryParams, _super);
    function GetAlbumVideosAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containing_uri" }),
        __metadata("design:type", String)
    ], GetAlbumVideosAlt1QueryParams.prototype, "containingUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetAlbumVideosAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetAlbumVideosAlt1QueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetAlbumVideosAlt1QueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAlbumVideosAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" }),
        __metadata("design:type", String)
    ], GetAlbumVideosAlt1QueryParams.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetAlbumVideosAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetAlbumVideosAlt1QueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAlbumVideosAlt1QueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weak_search" }),
        __metadata("design:type", Boolean)
    ], GetAlbumVideosAlt1QueryParams.prototype, "weakSearch", void 0);
    return GetAlbumVideosAlt1QueryParams;
}(SpeakeasyBase));
export { GetAlbumVideosAlt1QueryParams };
var GetAlbumVideosAlt1Request = /** @class */ (function (_super) {
    __extends(GetAlbumVideosAlt1Request, _super);
    function GetAlbumVideosAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumVideosAlt1PathParams)
    ], GetAlbumVideosAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumVideosAlt1QueryParams)
    ], GetAlbumVideosAlt1Request.prototype, "queryParams", void 0);
    return GetAlbumVideosAlt1Request;
}(SpeakeasyBase));
export { GetAlbumVideosAlt1Request };
var GetAlbumVideosAlt1Response = /** @class */ (function (_super) {
    __extends(GetAlbumVideosAlt1Response, _super);
    function GetAlbumVideosAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAlbumVideosAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAlbumVideosAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetAlbumVideosAlt1Response.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetAlbumVideosAlt1Response.prototype, "videos", void 0);
    return GetAlbumVideosAlt1Response;
}(SpeakeasyBase));
export { GetAlbumVideosAlt1Response };
