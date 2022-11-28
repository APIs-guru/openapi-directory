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
export var GetWatchLaterQueueAlt1DirectionEnum;
(function (GetWatchLaterQueueAlt1DirectionEnum) {
    GetWatchLaterQueueAlt1DirectionEnum["Asc"] = "asc";
    GetWatchLaterQueueAlt1DirectionEnum["Desc"] = "desc";
})(GetWatchLaterQueueAlt1DirectionEnum || (GetWatchLaterQueueAlt1DirectionEnum = {}));
export var GetWatchLaterQueueAlt1FilterEnum;
(function (GetWatchLaterQueueAlt1FilterEnum) {
    GetWatchLaterQueueAlt1FilterEnum["Embeddable"] = "embeddable";
})(GetWatchLaterQueueAlt1FilterEnum || (GetWatchLaterQueueAlt1FilterEnum = {}));
export var GetWatchLaterQueueAlt1SortEnum;
(function (GetWatchLaterQueueAlt1SortEnum) {
    GetWatchLaterQueueAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetWatchLaterQueueAlt1SortEnum["Comments"] = "comments";
    GetWatchLaterQueueAlt1SortEnum["Date"] = "date";
    GetWatchLaterQueueAlt1SortEnum["Duration"] = "duration";
    GetWatchLaterQueueAlt1SortEnum["Likes"] = "likes";
    GetWatchLaterQueueAlt1SortEnum["Plays"] = "plays";
})(GetWatchLaterQueueAlt1SortEnum || (GetWatchLaterQueueAlt1SortEnum = {}));
var GetWatchLaterQueueAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetWatchLaterQueueAlt1QueryParams, _super);
    function GetWatchLaterQueueAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetWatchLaterQueueAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetWatchLaterQueueAlt1QueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetWatchLaterQueueAlt1QueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetWatchLaterQueueAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetWatchLaterQueueAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetWatchLaterQueueAlt1QueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetWatchLaterQueueAlt1QueryParams.prototype, "sort", void 0);
    return GetWatchLaterQueueAlt1QueryParams;
}(SpeakeasyBase));
export { GetWatchLaterQueueAlt1QueryParams };
var GetWatchLaterQueueAlt1Security = /** @class */ (function (_super) {
    __extends(GetWatchLaterQueueAlt1Security, _super);
    function GetWatchLaterQueueAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetWatchLaterQueueAlt1Security.prototype, "oauth2", void 0);
    return GetWatchLaterQueueAlt1Security;
}(SpeakeasyBase));
export { GetWatchLaterQueueAlt1Security };
var GetWatchLaterQueueAlt1Request = /** @class */ (function (_super) {
    __extends(GetWatchLaterQueueAlt1Request, _super);
    function GetWatchLaterQueueAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWatchLaterQueueAlt1QueryParams)
    ], GetWatchLaterQueueAlt1Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWatchLaterQueueAlt1Security)
    ], GetWatchLaterQueueAlt1Request.prototype, "security", void 0);
    return GetWatchLaterQueueAlt1Request;
}(SpeakeasyBase));
export { GetWatchLaterQueueAlt1Request };
var GetWatchLaterQueueAlt1Response = /** @class */ (function (_super) {
    __extends(GetWatchLaterQueueAlt1Response, _super);
    function GetWatchLaterQueueAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWatchLaterQueueAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWatchLaterQueueAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetWatchLaterQueueAlt1Response.prototype, "videos", void 0);
    return GetWatchLaterQueueAlt1Response;
}(SpeakeasyBase));
export { GetWatchLaterQueueAlt1Response };
