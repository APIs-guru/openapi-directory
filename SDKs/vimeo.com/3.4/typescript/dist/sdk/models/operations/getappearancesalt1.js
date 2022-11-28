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
export var GetAppearancesAlt1DirectionEnum;
(function (GetAppearancesAlt1DirectionEnum) {
    GetAppearancesAlt1DirectionEnum["Asc"] = "asc";
    GetAppearancesAlt1DirectionEnum["Desc"] = "desc";
})(GetAppearancesAlt1DirectionEnum || (GetAppearancesAlt1DirectionEnum = {}));
export var GetAppearancesAlt1FilterEnum;
(function (GetAppearancesAlt1FilterEnum) {
    GetAppearancesAlt1FilterEnum["Embeddable"] = "embeddable";
})(GetAppearancesAlt1FilterEnum || (GetAppearancesAlt1FilterEnum = {}));
export var GetAppearancesAlt1SortEnum;
(function (GetAppearancesAlt1SortEnum) {
    GetAppearancesAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetAppearancesAlt1SortEnum["Comments"] = "comments";
    GetAppearancesAlt1SortEnum["Date"] = "date";
    GetAppearancesAlt1SortEnum["Duration"] = "duration";
    GetAppearancesAlt1SortEnum["Likes"] = "likes";
    GetAppearancesAlt1SortEnum["Plays"] = "plays";
})(GetAppearancesAlt1SortEnum || (GetAppearancesAlt1SortEnum = {}));
var GetAppearancesAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetAppearancesAlt1QueryParams, _super);
    function GetAppearancesAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetAppearancesAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetAppearancesAlt1QueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetAppearancesAlt1QueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAppearancesAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetAppearancesAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetAppearancesAlt1QueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAppearancesAlt1QueryParams.prototype, "sort", void 0);
    return GetAppearancesAlt1QueryParams;
}(SpeakeasyBase));
export { GetAppearancesAlt1QueryParams };
var GetAppearancesAlt1Request = /** @class */ (function (_super) {
    __extends(GetAppearancesAlt1Request, _super);
    function GetAppearancesAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAppearancesAlt1QueryParams)
    ], GetAppearancesAlt1Request.prototype, "queryParams", void 0);
    return GetAppearancesAlt1Request;
}(SpeakeasyBase));
export { GetAppearancesAlt1Request };
var GetAppearancesAlt1Response = /** @class */ (function (_super) {
    __extends(GetAppearancesAlt1Response, _super);
    function GetAppearancesAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAppearancesAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAppearancesAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetAppearancesAlt1Response.prototype, "videos", void 0);
    return GetAppearancesAlt1Response;
}(SpeakeasyBase));
export { GetAppearancesAlt1Response };
