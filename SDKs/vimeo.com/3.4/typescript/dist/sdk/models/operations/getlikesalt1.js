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
export var GetLikesAlt1FilterEnum;
(function (GetLikesAlt1FilterEnum) {
    GetLikesAlt1FilterEnum["Embeddable"] = "embeddable";
})(GetLikesAlt1FilterEnum || (GetLikesAlt1FilterEnum = {}));
export var GetLikesAlt1SortEnum;
(function (GetLikesAlt1SortEnum) {
    GetLikesAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetLikesAlt1SortEnum["Comments"] = "comments";
    GetLikesAlt1SortEnum["Date"] = "date";
    GetLikesAlt1SortEnum["Duration"] = "duration";
    GetLikesAlt1SortEnum["Likes"] = "likes";
    GetLikesAlt1SortEnum["Plays"] = "plays";
})(GetLikesAlt1SortEnum || (GetLikesAlt1SortEnum = {}));
var GetLikesAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetLikesAlt1QueryParams, _super);
    function GetLikesAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetLikesAlt1QueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetLikesAlt1QueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetLikesAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetLikesAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetLikesAlt1QueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetLikesAlt1QueryParams.prototype, "sort", void 0);
    return GetLikesAlt1QueryParams;
}(SpeakeasyBase));
export { GetLikesAlt1QueryParams };
var GetLikesAlt1Request = /** @class */ (function (_super) {
    __extends(GetLikesAlt1Request, _super);
    function GetLikesAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLikesAlt1QueryParams)
    ], GetLikesAlt1Request.prototype, "queryParams", void 0);
    return GetLikesAlt1Request;
}(SpeakeasyBase));
export { GetLikesAlt1Request };
var GetLikesAlt1Response = /** @class */ (function (_super) {
    __extends(GetLikesAlt1Response, _super);
    function GetLikesAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLikesAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLikesAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetLikesAlt1Response.prototype, "videos", void 0);
    return GetLikesAlt1Response;
}(SpeakeasyBase));
export { GetLikesAlt1Response };
