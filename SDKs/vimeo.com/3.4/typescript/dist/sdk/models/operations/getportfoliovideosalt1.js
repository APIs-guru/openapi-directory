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
var GetPortfolioVideosAlt1PathParams = /** @class */ (function (_super) {
    __extends(GetPortfolioVideosAlt1PathParams, _super);
    function GetPortfolioVideosAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_id" }),
        __metadata("design:type", Number)
    ], GetPortfolioVideosAlt1PathParams.prototype, "portfolioId", void 0);
    return GetPortfolioVideosAlt1PathParams;
}(SpeakeasyBase));
export { GetPortfolioVideosAlt1PathParams };
export var GetPortfolioVideosAlt1FilterEnum;
(function (GetPortfolioVideosAlt1FilterEnum) {
    GetPortfolioVideosAlt1FilterEnum["Embeddable"] = "embeddable";
})(GetPortfolioVideosAlt1FilterEnum || (GetPortfolioVideosAlt1FilterEnum = {}));
export var GetPortfolioVideosAlt1SortEnum;
(function (GetPortfolioVideosAlt1SortEnum) {
    GetPortfolioVideosAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetPortfolioVideosAlt1SortEnum["Comments"] = "comments";
    GetPortfolioVideosAlt1SortEnum["Date"] = "date";
    GetPortfolioVideosAlt1SortEnum["Default"] = "default";
    GetPortfolioVideosAlt1SortEnum["Likes"] = "likes";
    GetPortfolioVideosAlt1SortEnum["Manual"] = "manual";
    GetPortfolioVideosAlt1SortEnum["Plays"] = "plays";
})(GetPortfolioVideosAlt1SortEnum || (GetPortfolioVideosAlt1SortEnum = {}));
var GetPortfolioVideosAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetPortfolioVideosAlt1QueryParams, _super);
    function GetPortfolioVideosAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containing_uri" }),
        __metadata("design:type", String)
    ], GetPortfolioVideosAlt1QueryParams.prototype, "containingUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetPortfolioVideosAlt1QueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetPortfolioVideosAlt1QueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPortfolioVideosAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetPortfolioVideosAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPortfolioVideosAlt1QueryParams.prototype, "sort", void 0);
    return GetPortfolioVideosAlt1QueryParams;
}(SpeakeasyBase));
export { GetPortfolioVideosAlt1QueryParams };
var GetPortfolioVideosAlt1Request = /** @class */ (function (_super) {
    __extends(GetPortfolioVideosAlt1Request, _super);
    function GetPortfolioVideosAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfolioVideosAlt1PathParams)
    ], GetPortfolioVideosAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfolioVideosAlt1QueryParams)
    ], GetPortfolioVideosAlt1Request.prototype, "queryParams", void 0);
    return GetPortfolioVideosAlt1Request;
}(SpeakeasyBase));
export { GetPortfolioVideosAlt1Request };
var GetPortfolioVideosAlt1Response = /** @class */ (function (_super) {
    __extends(GetPortfolioVideosAlt1Response, _super);
    function GetPortfolioVideosAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPortfolioVideosAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPortfolioVideosAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetPortfolioVideosAlt1Response.prototype, "videos", void 0);
    return GetPortfolioVideosAlt1Response;
}(SpeakeasyBase));
export { GetPortfolioVideosAlt1Response };
