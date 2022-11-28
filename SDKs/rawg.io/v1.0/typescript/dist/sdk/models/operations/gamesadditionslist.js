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
var GamesAdditionsListPathParams = /** @class */ (function (_super) {
    __extends(GamesAdditionsListPathParams, _super);
    function GamesAdditionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=game_pk" }),
        __metadata("design:type", String)
    ], GamesAdditionsListPathParams.prototype, "gamePk", void 0);
    return GamesAdditionsListPathParams;
}(SpeakeasyBase));
export { GamesAdditionsListPathParams };
var GamesAdditionsListQueryParams = /** @class */ (function (_super) {
    __extends(GamesAdditionsListQueryParams, _super);
    function GamesAdditionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GamesAdditionsListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GamesAdditionsListQueryParams.prototype, "pageSize", void 0);
    return GamesAdditionsListQueryParams;
}(SpeakeasyBase));
export { GamesAdditionsListQueryParams };
var GamesAdditionsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(GamesAdditionsList200ApplicationJson, _super);
    function GamesAdditionsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GamesAdditionsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GamesAdditionsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GamesAdditionsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Game }),
        __metadata("design:type", Array)
    ], GamesAdditionsList200ApplicationJson.prototype, "results", void 0);
    return GamesAdditionsList200ApplicationJson;
}(SpeakeasyBase));
export { GamesAdditionsList200ApplicationJson };
var GamesAdditionsListRequest = /** @class */ (function (_super) {
    __extends(GamesAdditionsListRequest, _super);
    function GamesAdditionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAdditionsListPathParams)
    ], GamesAdditionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAdditionsListQueryParams)
    ], GamesAdditionsListRequest.prototype, "queryParams", void 0);
    return GamesAdditionsListRequest;
}(SpeakeasyBase));
export { GamesAdditionsListRequest };
var GamesAdditionsListResponse = /** @class */ (function (_super) {
    __extends(GamesAdditionsListResponse, _super);
    function GamesAdditionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesAdditionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesAdditionsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesAdditionsList200ApplicationJson)
    ], GamesAdditionsListResponse.prototype, "gamesAdditionsList200ApplicationJsonObject", void 0);
    return GamesAdditionsListResponse;
}(SpeakeasyBase));
export { GamesAdditionsListResponse };
