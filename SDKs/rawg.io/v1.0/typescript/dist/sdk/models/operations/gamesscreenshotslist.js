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
var GamesScreenshotsListPathParams = /** @class */ (function (_super) {
    __extends(GamesScreenshotsListPathParams, _super);
    function GamesScreenshotsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=game_pk" }),
        __metadata("design:type", String)
    ], GamesScreenshotsListPathParams.prototype, "gamePk", void 0);
    return GamesScreenshotsListPathParams;
}(SpeakeasyBase));
export { GamesScreenshotsListPathParams };
var GamesScreenshotsListQueryParams = /** @class */ (function (_super) {
    __extends(GamesScreenshotsListQueryParams, _super);
    function GamesScreenshotsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], GamesScreenshotsListQueryParams.prototype, "ordering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GamesScreenshotsListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GamesScreenshotsListQueryParams.prototype, "pageSize", void 0);
    return GamesScreenshotsListQueryParams;
}(SpeakeasyBase));
export { GamesScreenshotsListQueryParams };
var GamesScreenshotsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(GamesScreenshotsList200ApplicationJson, _super);
    function GamesScreenshotsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GamesScreenshotsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GamesScreenshotsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GamesScreenshotsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ScreenShot }),
        __metadata("design:type", Array)
    ], GamesScreenshotsList200ApplicationJson.prototype, "results", void 0);
    return GamesScreenshotsList200ApplicationJson;
}(SpeakeasyBase));
export { GamesScreenshotsList200ApplicationJson };
var GamesScreenshotsListRequest = /** @class */ (function (_super) {
    __extends(GamesScreenshotsListRequest, _super);
    function GamesScreenshotsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScreenshotsListPathParams)
    ], GamesScreenshotsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScreenshotsListQueryParams)
    ], GamesScreenshotsListRequest.prototype, "queryParams", void 0);
    return GamesScreenshotsListRequest;
}(SpeakeasyBase));
export { GamesScreenshotsListRequest };
var GamesScreenshotsListResponse = /** @class */ (function (_super) {
    __extends(GamesScreenshotsListResponse, _super);
    function GamesScreenshotsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesScreenshotsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesScreenshotsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScreenshotsList200ApplicationJson)
    ], GamesScreenshotsListResponse.prototype, "gamesScreenshotsList200ApplicationJsonObject", void 0);
    return GamesScreenshotsListResponse;
}(SpeakeasyBase));
export { GamesScreenshotsListResponse };
