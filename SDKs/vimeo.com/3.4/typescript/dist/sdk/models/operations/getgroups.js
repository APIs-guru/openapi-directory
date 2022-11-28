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
export var GetGroupsDirectionEnum;
(function (GetGroupsDirectionEnum) {
    GetGroupsDirectionEnum["Asc"] = "asc";
    GetGroupsDirectionEnum["Desc"] = "desc";
})(GetGroupsDirectionEnum || (GetGroupsDirectionEnum = {}));
export var GetGroupsFilterEnum;
(function (GetGroupsFilterEnum) {
    GetGroupsFilterEnum["Featured"] = "featured";
})(GetGroupsFilterEnum || (GetGroupsFilterEnum = {}));
export var GetGroupsSortEnum;
(function (GetGroupsSortEnum) {
    GetGroupsSortEnum["Alphabetical"] = "alphabetical";
    GetGroupsSortEnum["Date"] = "date";
    GetGroupsSortEnum["Followers"] = "followers";
    GetGroupsSortEnum["Relevant"] = "relevant";
    GetGroupsSortEnum["Videos"] = "videos";
})(GetGroupsSortEnum || (GetGroupsSortEnum = {}));
var GetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetGroupsQueryParams, _super);
    function GetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetGroupsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetGroupsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetGroupsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetGroupsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetGroupsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetGroupsQueryParams.prototype, "sort", void 0);
    return GetGroupsQueryParams;
}(SpeakeasyBase));
export { GetGroupsQueryParams };
var GetGroupsRequest = /** @class */ (function (_super) {
    __extends(GetGroupsRequest, _super);
    function GetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupsQueryParams)
    ], GetGroupsRequest.prototype, "queryParams", void 0);
    return GetGroupsRequest;
}(SpeakeasyBase));
export { GetGroupsRequest };
var GetGroupsResponse = /** @class */ (function (_super) {
    __extends(GetGroupsResponse, _super);
    function GetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Group }),
        __metadata("design:type", Array)
    ], GetGroupsResponse.prototype, "groups", void 0);
    return GetGroupsResponse;
}(SpeakeasyBase));
export { GetGroupsResponse };
