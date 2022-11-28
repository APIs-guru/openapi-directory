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
var GetCategoryVideosPathParams = /** @class */ (function (_super) {
    __extends(GetCategoryVideosPathParams, _super);
    function GetCategoryVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" }),
        __metadata("design:type", String)
    ], GetCategoryVideosPathParams.prototype, "category", void 0);
    return GetCategoryVideosPathParams;
}(SpeakeasyBase));
export { GetCategoryVideosPathParams };
export var GetCategoryVideosDirectionEnum;
(function (GetCategoryVideosDirectionEnum) {
    GetCategoryVideosDirectionEnum["Asc"] = "asc";
    GetCategoryVideosDirectionEnum["Desc"] = "desc";
})(GetCategoryVideosDirectionEnum || (GetCategoryVideosDirectionEnum = {}));
export var GetCategoryVideosFilterEnum;
(function (GetCategoryVideosFilterEnum) {
    GetCategoryVideosFilterEnum["ConditionalFeatured"] = "conditional_featured";
    GetCategoryVideosFilterEnum["Embeddable"] = "embeddable";
})(GetCategoryVideosFilterEnum || (GetCategoryVideosFilterEnum = {}));
export var GetCategoryVideosSortEnum;
(function (GetCategoryVideosSortEnum) {
    GetCategoryVideosSortEnum["Alphabetical"] = "alphabetical";
    GetCategoryVideosSortEnum["Comments"] = "comments";
    GetCategoryVideosSortEnum["Date"] = "date";
    GetCategoryVideosSortEnum["Duration"] = "duration";
    GetCategoryVideosSortEnum["Featured"] = "featured";
    GetCategoryVideosSortEnum["Likes"] = "likes";
    GetCategoryVideosSortEnum["Plays"] = "plays";
    GetCategoryVideosSortEnum["Relevant"] = "relevant";
})(GetCategoryVideosSortEnum || (GetCategoryVideosSortEnum = {}));
var GetCategoryVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetCategoryVideosQueryParams, _super);
    function GetCategoryVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetCategoryVideosQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetCategoryVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetCategoryVideosQueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCategoryVideosQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCategoryVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetCategoryVideosQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCategoryVideosQueryParams.prototype, "sort", void 0);
    return GetCategoryVideosQueryParams;
}(SpeakeasyBase));
export { GetCategoryVideosQueryParams };
var GetCategoryVideosRequest = /** @class */ (function (_super) {
    __extends(GetCategoryVideosRequest, _super);
    function GetCategoryVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCategoryVideosPathParams)
    ], GetCategoryVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCategoryVideosQueryParams)
    ], GetCategoryVideosRequest.prototype, "queryParams", void 0);
    return GetCategoryVideosRequest;
}(SpeakeasyBase));
export { GetCategoryVideosRequest };
var GetCategoryVideosResponse = /** @class */ (function (_super) {
    __extends(GetCategoryVideosResponse, _super);
    function GetCategoryVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCategoryVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCategoryVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetCategoryVideosResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetCategoryVideosResponse.prototype, "videos", void 0);
    return GetCategoryVideosResponse;
}(SpeakeasyBase));
export { GetCategoryVideosResponse };
