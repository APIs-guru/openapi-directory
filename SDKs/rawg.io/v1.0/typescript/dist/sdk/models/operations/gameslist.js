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
var GamesListQueryParams = /** @class */ (function (_super) {
    __extends(GamesListQueryParams, _super);
    function GamesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creators" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "creators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dates" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "dates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developers" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "developers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_additions" }),
        __metadata("design:type", Boolean)
    ], GamesListQueryParams.prototype, "excludeAdditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_collection" }),
        __metadata("design:type", Number)
    ], GamesListQueryParams.prototype, "excludeCollection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_game_series" }),
        __metadata("design:type", Boolean)
    ], GamesListQueryParams.prototype, "excludeGameSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_parents" }),
        __metadata("design:type", Boolean)
    ], GamesListQueryParams.prototype, "excludeParents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_stores" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "excludeStores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genres" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "genres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metacritic" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "metacritic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "ordering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GamesListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GamesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_platforms" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "parentPlatforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platforms" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "platforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platforms_count" }),
        __metadata("design:type", Number)
    ], GamesListQueryParams.prototype, "platformsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publishers" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "publishers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_exact" }),
        __metadata("design:type", Boolean)
    ], GamesListQueryParams.prototype, "searchExact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_precise" }),
        __metadata("design:type", Boolean)
    ], GamesListQueryParams.prototype, "searchPrecise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stores" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "stores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated" }),
        __metadata("design:type", String)
    ], GamesListQueryParams.prototype, "updated", void 0);
    return GamesListQueryParams;
}(SpeakeasyBase));
export { GamesListQueryParams };
var GamesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(GamesList200ApplicationJson, _super);
    function GamesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GamesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GamesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GamesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Game }),
        __metadata("design:type", Array)
    ], GamesList200ApplicationJson.prototype, "results", void 0);
    return GamesList200ApplicationJson;
}(SpeakeasyBase));
export { GamesList200ApplicationJson };
var GamesListRequest = /** @class */ (function (_super) {
    __extends(GamesListRequest, _super);
    function GamesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesListQueryParams)
    ], GamesListRequest.prototype, "queryParams", void 0);
    return GamesListRequest;
}(SpeakeasyBase));
export { GamesListRequest };
var GamesListResponse = /** @class */ (function (_super) {
    __extends(GamesListResponse, _super);
    function GamesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesList200ApplicationJson)
    ], GamesListResponse.prototype, "gamesList200ApplicationJsonObject", void 0);
    return GamesListResponse;
}(SpeakeasyBase));
export { GamesListResponse };
