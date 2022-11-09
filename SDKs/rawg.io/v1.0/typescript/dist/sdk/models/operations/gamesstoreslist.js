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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GamesStoresListPathParams = /** @class */ (function (_super) {
    __extends(GamesStoresListPathParams, _super);
    function GamesStoresListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=game_pk" }),
        __metadata("design:type", String)
    ], GamesStoresListPathParams.prototype, "gamePk", void 0);
    return GamesStoresListPathParams;
}(SpeakeasyBase));
export { GamesStoresListPathParams };
var GamesStoresListQueryParams = /** @class */ (function (_super) {
    __extends(GamesStoresListQueryParams, _super);
    function GamesStoresListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ordering" }),
        __metadata("design:type", String)
    ], GamesStoresListQueryParams.prototype, "ordering", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GamesStoresListQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GamesStoresListQueryParams.prototype, "pageSize", void 0);
    return GamesStoresListQueryParams;
}(SpeakeasyBase));
export { GamesStoresListQueryParams };
var GamesStoresListRequest = /** @class */ (function (_super) {
    __extends(GamesStoresListRequest, _super);
    function GamesStoresListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GamesStoresListPathParams)
    ], GamesStoresListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GamesStoresListQueryParams)
    ], GamesStoresListRequest.prototype, "queryParams", void 0);
    return GamesStoresListRequest;
}(SpeakeasyBase));
export { GamesStoresListRequest };
var GamesStoresList200ApplicationJson = /** @class */ (function (_super) {
    __extends(GamesStoresList200ApplicationJson, _super);
    function GamesStoresList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GamesStoresList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GamesStoresList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        Metadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GamesStoresList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.GameStoreFull }),
        __metadata("design:type", Array)
    ], GamesStoresList200ApplicationJson.prototype, "results", void 0);
    return GamesStoresList200ApplicationJson;
}(SpeakeasyBase));
export { GamesStoresList200ApplicationJson };
var GamesStoresListResponse = /** @class */ (function (_super) {
    __extends(GamesStoresListResponse, _super);
    function GamesStoresListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GamesStoresListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GamesStoresListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GamesStoresList200ApplicationJson)
    ], GamesStoresListResponse.prototype, "gamesStoresList200ApplicationJsonObject", void 0);
    return GamesStoresListResponse;
}(SpeakeasyBase));
export { GamesStoresListResponse };
