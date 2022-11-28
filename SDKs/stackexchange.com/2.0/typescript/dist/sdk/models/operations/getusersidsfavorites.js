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
var GetUsersIdsFavoritesPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsFavoritesPathParams, _super);
    function GetUsersIdsFavoritesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsFavoritesPathParams.prototype, "ids", void 0);
    return GetUsersIdsFavoritesPathParams;
}(SpeakeasyBase));
export { GetUsersIdsFavoritesPathParams };
export var GetUsersIdsFavoritesOrderEnum;
(function (GetUsersIdsFavoritesOrderEnum) {
    GetUsersIdsFavoritesOrderEnum["Desc"] = "desc";
    GetUsersIdsFavoritesOrderEnum["Asc"] = "asc";
})(GetUsersIdsFavoritesOrderEnum || (GetUsersIdsFavoritesOrderEnum = {}));
export var GetUsersIdsFavoritesSortEnum;
(function (GetUsersIdsFavoritesSortEnum) {
    GetUsersIdsFavoritesSortEnum["Activity"] = "activity";
    GetUsersIdsFavoritesSortEnum["Creation"] = "creation";
    GetUsersIdsFavoritesSortEnum["Votes"] = "votes";
    GetUsersIdsFavoritesSortEnum["Added"] = "added";
})(GetUsersIdsFavoritesSortEnum || (GetUsersIdsFavoritesSortEnum = {}));
var GetUsersIdsFavoritesQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsFavoritesQueryParams, _super);
    function GetUsersIdsFavoritesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsFavoritesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsFavoritesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsFavoritesQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdsFavoritesQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdsFavoritesQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdsFavoritesQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsFavoritesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsFavoritesQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsFavoritesQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdsFavoritesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsFavoritesQueryParams.prototype, "todate", void 0);
    return GetUsersIdsFavoritesQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsFavoritesQueryParams };
var GetUsersIdsFavoritesRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsFavoritesRequest, _super);
    function GetUsersIdsFavoritesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsFavoritesPathParams)
    ], GetUsersIdsFavoritesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsFavoritesQueryParams)
    ], GetUsersIdsFavoritesRequest.prototype, "queryParams", void 0);
    return GetUsersIdsFavoritesRequest;
}(SpeakeasyBase));
export { GetUsersIdsFavoritesRequest };
var GetUsersIdsFavoritesResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsFavoritesResponse, _super);
    function GetUsersIdsFavoritesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsFavoritesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsFavoritesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsFavoritesResponse.prototype, "statusCode", void 0);
    return GetUsersIdsFavoritesResponse;
}(SpeakeasyBase));
export { GetUsersIdsFavoritesResponse };
