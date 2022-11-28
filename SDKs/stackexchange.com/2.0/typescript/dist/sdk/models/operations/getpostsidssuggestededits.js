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
var GetPostsIdsSuggestedEditsPathParams = /** @class */ (function (_super) {
    __extends(GetPostsIdsSuggestedEditsPathParams, _super);
    function GetPostsIdsSuggestedEditsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetPostsIdsSuggestedEditsPathParams.prototype, "ids", void 0);
    return GetPostsIdsSuggestedEditsPathParams;
}(SpeakeasyBase));
export { GetPostsIdsSuggestedEditsPathParams };
export var GetPostsIdsSuggestedEditsOrderEnum;
(function (GetPostsIdsSuggestedEditsOrderEnum) {
    GetPostsIdsSuggestedEditsOrderEnum["Desc"] = "desc";
    GetPostsIdsSuggestedEditsOrderEnum["Asc"] = "asc";
})(GetPostsIdsSuggestedEditsOrderEnum || (GetPostsIdsSuggestedEditsOrderEnum = {}));
export var GetPostsIdsSuggestedEditsSortEnum;
(function (GetPostsIdsSuggestedEditsSortEnum) {
    GetPostsIdsSuggestedEditsSortEnum["Creation"] = "creation";
    GetPostsIdsSuggestedEditsSortEnum["Approval"] = "approval";
    GetPostsIdsSuggestedEditsSortEnum["Rejection"] = "rejection";
})(GetPostsIdsSuggestedEditsSortEnum || (GetPostsIdsSuggestedEditsSortEnum = {}));
var GetPostsIdsSuggestedEditsQueryParams = /** @class */ (function (_super) {
    __extends(GetPostsIdsSuggestedEditsQueryParams, _super);
    function GetPostsIdsSuggestedEditsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetPostsIdsSuggestedEditsQueryParams.prototype, "todate", void 0);
    return GetPostsIdsSuggestedEditsQueryParams;
}(SpeakeasyBase));
export { GetPostsIdsSuggestedEditsQueryParams };
var GetPostsIdsSuggestedEditsRequest = /** @class */ (function (_super) {
    __extends(GetPostsIdsSuggestedEditsRequest, _super);
    function GetPostsIdsSuggestedEditsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsIdsSuggestedEditsPathParams)
    ], GetPostsIdsSuggestedEditsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsIdsSuggestedEditsQueryParams)
    ], GetPostsIdsSuggestedEditsRequest.prototype, "queryParams", void 0);
    return GetPostsIdsSuggestedEditsRequest;
}(SpeakeasyBase));
export { GetPostsIdsSuggestedEditsRequest };
var GetPostsIdsSuggestedEditsResponse = /** @class */ (function (_super) {
    __extends(GetPostsIdsSuggestedEditsResponse, _super);
    function GetPostsIdsSuggestedEditsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPostsIdsSuggestedEditsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPostsIdsSuggestedEditsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPostsIdsSuggestedEditsResponse.prototype, "statusCode", void 0);
    return GetPostsIdsSuggestedEditsResponse;
}(SpeakeasyBase));
export { GetPostsIdsSuggestedEditsResponse };
