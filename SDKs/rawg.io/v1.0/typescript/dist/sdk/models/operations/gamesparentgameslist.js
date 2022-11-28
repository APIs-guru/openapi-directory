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
var GamesParentGamesListPathParams = /** @class */ (function (_super) {
    __extends(GamesParentGamesListPathParams, _super);
    function GamesParentGamesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=game_pk" }),
        __metadata("design:type", String)
    ], GamesParentGamesListPathParams.prototype, "gamePk", void 0);
    return GamesParentGamesListPathParams;
}(SpeakeasyBase));
export { GamesParentGamesListPathParams };
var GamesParentGamesListQueryParams = /** @class */ (function (_super) {
    __extends(GamesParentGamesListQueryParams, _super);
    function GamesParentGamesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GamesParentGamesListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GamesParentGamesListQueryParams.prototype, "pageSize", void 0);
    return GamesParentGamesListQueryParams;
}(SpeakeasyBase));
export { GamesParentGamesListQueryParams };
var GamesParentGamesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(GamesParentGamesList200ApplicationJson, _super);
    function GamesParentGamesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GamesParentGamesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GamesParentGamesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GamesParentGamesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Game }),
        __metadata("design:type", Array)
    ], GamesParentGamesList200ApplicationJson.prototype, "results", void 0);
    return GamesParentGamesList200ApplicationJson;
}(SpeakeasyBase));
export { GamesParentGamesList200ApplicationJson };
var GamesParentGamesListRequest = /** @class */ (function (_super) {
    __extends(GamesParentGamesListRequest, _super);
    function GamesParentGamesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesParentGamesListPathParams)
    ], GamesParentGamesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesParentGamesListQueryParams)
    ], GamesParentGamesListRequest.prototype, "queryParams", void 0);
    return GamesParentGamesListRequest;
}(SpeakeasyBase));
export { GamesParentGamesListRequest };
var GamesParentGamesListResponse = /** @class */ (function (_super) {
    __extends(GamesParentGamesListResponse, _super);
    function GamesParentGamesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesParentGamesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesParentGamesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesParentGamesList200ApplicationJson)
    ], GamesParentGamesListResponse.prototype, "gamesParentGamesList200ApplicationJsonObject", void 0);
    return GamesParentGamesListResponse;
}(SpeakeasyBase));
export { GamesParentGamesListResponse };
