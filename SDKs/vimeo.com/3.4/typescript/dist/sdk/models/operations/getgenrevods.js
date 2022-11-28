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
var GetGenreVodsPathParams = /** @class */ (function (_super) {
    __extends(GetGenreVodsPathParams, _super);
    function GetGenreVodsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=genre_id" }),
        __metadata("design:type", String)
    ], GetGenreVodsPathParams.prototype, "genreId", void 0);
    return GetGenreVodsPathParams;
}(SpeakeasyBase));
export { GetGenreVodsPathParams };
export var GetGenreVodsDirectionEnum;
(function (GetGenreVodsDirectionEnum) {
    GetGenreVodsDirectionEnum["Asc"] = "asc";
    GetGenreVodsDirectionEnum["Desc"] = "desc";
})(GetGenreVodsDirectionEnum || (GetGenreVodsDirectionEnum = {}));
export var GetGenreVodsFilterEnum;
(function (GetGenreVodsFilterEnum) {
    GetGenreVodsFilterEnum["Country"] = "country";
    GetGenreVodsFilterEnum["MyRegion"] = "my_region";
})(GetGenreVodsFilterEnum || (GetGenreVodsFilterEnum = {}));
export var GetGenreVodsSortEnum;
(function (GetGenreVodsSortEnum) {
    GetGenreVodsSortEnum["Alphabetical"] = "alphabetical";
    GetGenreVodsSortEnum["Date"] = "date";
    GetGenreVodsSortEnum["Name"] = "name";
    GetGenreVodsSortEnum["PublishTime"] = "publish.time";
    GetGenreVodsSortEnum["Videos"] = "videos";
})(GetGenreVodsSortEnum || (GetGenreVodsSortEnum = {}));
var GetGenreVodsQueryParams = /** @class */ (function (_super) {
    __extends(GetGenreVodsQueryParams, _super);
    function GetGenreVodsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetGenreVodsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetGenreVodsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetGenreVodsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetGenreVodsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetGenreVodsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetGenreVodsQueryParams.prototype, "sort", void 0);
    return GetGenreVodsQueryParams;
}(SpeakeasyBase));
export { GetGenreVodsQueryParams };
var GetGenreVodsRequest = /** @class */ (function (_super) {
    __extends(GetGenreVodsRequest, _super);
    function GetGenreVodsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGenreVodsPathParams)
    ], GetGenreVodsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGenreVodsQueryParams)
    ], GetGenreVodsRequest.prototype, "queryParams", void 0);
    return GetGenreVodsRequest;
}(SpeakeasyBase));
export { GetGenreVodsRequest };
var GetGenreVodsResponse = /** @class */ (function (_super) {
    __extends(GetGenreVodsResponse, _super);
    function GetGenreVodsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGenreVodsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGenreVodsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OnDemandPage }),
        __metadata("design:type", Array)
    ], GetGenreVodsResponse.prototype, "onDemandPages", void 0);
    return GetGenreVodsResponse;
}(SpeakeasyBase));
export { GetGenreVodsResponse };
