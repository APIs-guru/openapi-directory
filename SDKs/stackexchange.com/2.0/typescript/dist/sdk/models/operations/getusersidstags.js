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
var GetUsersIdsTagsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsTagsPathParams, _super);
    function GetUsersIdsTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsTagsPathParams.prototype, "ids", void 0);
    return GetUsersIdsTagsPathParams;
}(SpeakeasyBase));
export { GetUsersIdsTagsPathParams };
export var GetUsersIdsTagsOrderEnum;
(function (GetUsersIdsTagsOrderEnum) {
    GetUsersIdsTagsOrderEnum["Desc"] = "desc";
    GetUsersIdsTagsOrderEnum["Asc"] = "asc";
})(GetUsersIdsTagsOrderEnum || (GetUsersIdsTagsOrderEnum = {}));
export var GetUsersIdsTagsSortEnum;
(function (GetUsersIdsTagsSortEnum) {
    GetUsersIdsTagsSortEnum["Popular"] = "popular";
    GetUsersIdsTagsSortEnum["Activity"] = "activity";
    GetUsersIdsTagsSortEnum["Name"] = "name";
})(GetUsersIdsTagsSortEnum || (GetUsersIdsTagsSortEnum = {}));
var GetUsersIdsTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsTagsQueryParams, _super);
    function GetUsersIdsTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsTagsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsTagsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsTagsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdsTagsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdsTagsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdsTagsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsTagsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsTagsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsTagsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdsTagsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsTagsQueryParams.prototype, "todate", void 0);
    return GetUsersIdsTagsQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsTagsQueryParams };
var GetUsersIdsTagsRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsTagsRequest, _super);
    function GetUsersIdsTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsTagsPathParams)
    ], GetUsersIdsTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsTagsQueryParams)
    ], GetUsersIdsTagsRequest.prototype, "queryParams", void 0);
    return GetUsersIdsTagsRequest;
}(SpeakeasyBase));
export { GetUsersIdsTagsRequest };
var GetUsersIdsTagsResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsTagsResponse, _super);
    function GetUsersIdsTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsTagsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsTagsResponse.prototype, "statusCode", void 0);
    return GetUsersIdsTagsResponse;
}(SpeakeasyBase));
export { GetUsersIdsTagsResponse };
