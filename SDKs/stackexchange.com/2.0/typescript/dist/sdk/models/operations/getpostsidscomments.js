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
var GetPostsIdsCommentsPathParams = /** @class */ (function (_super) {
    __extends(GetPostsIdsCommentsPathParams, _super);
    function GetPostsIdsCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetPostsIdsCommentsPathParams.prototype, "ids", void 0);
    return GetPostsIdsCommentsPathParams;
}(SpeakeasyBase));
export { GetPostsIdsCommentsPathParams };
export var GetPostsIdsCommentsOrderEnum;
(function (GetPostsIdsCommentsOrderEnum) {
    GetPostsIdsCommentsOrderEnum["Desc"] = "desc";
    GetPostsIdsCommentsOrderEnum["Asc"] = "asc";
})(GetPostsIdsCommentsOrderEnum || (GetPostsIdsCommentsOrderEnum = {}));
export var GetPostsIdsCommentsSortEnum;
(function (GetPostsIdsCommentsSortEnum) {
    GetPostsIdsCommentsSortEnum["Creation"] = "creation";
    GetPostsIdsCommentsSortEnum["Votes"] = "votes";
})(GetPostsIdsCommentsSortEnum || (GetPostsIdsCommentsSortEnum = {}));
var GetPostsIdsCommentsQueryParams = /** @class */ (function (_super) {
    __extends(GetPostsIdsCommentsQueryParams, _super);
    function GetPostsIdsCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetPostsIdsCommentsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetPostsIdsCommentsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetPostsIdsCommentsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetPostsIdsCommentsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetPostsIdsCommentsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetPostsIdsCommentsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPostsIdsCommentsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetPostsIdsCommentsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetPostsIdsCommentsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPostsIdsCommentsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetPostsIdsCommentsQueryParams.prototype, "todate", void 0);
    return GetPostsIdsCommentsQueryParams;
}(SpeakeasyBase));
export { GetPostsIdsCommentsQueryParams };
var GetPostsIdsCommentsRequest = /** @class */ (function (_super) {
    __extends(GetPostsIdsCommentsRequest, _super);
    function GetPostsIdsCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsIdsCommentsPathParams)
    ], GetPostsIdsCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostsIdsCommentsQueryParams)
    ], GetPostsIdsCommentsRequest.prototype, "queryParams", void 0);
    return GetPostsIdsCommentsRequest;
}(SpeakeasyBase));
export { GetPostsIdsCommentsRequest };
var GetPostsIdsCommentsResponse = /** @class */ (function (_super) {
    __extends(GetPostsIdsCommentsResponse, _super);
    function GetPostsIdsCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPostsIdsCommentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPostsIdsCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPostsIdsCommentsResponse.prototype, "statusCode", void 0);
    return GetPostsIdsCommentsResponse;
}(SpeakeasyBase));
export { GetPostsIdsCommentsResponse };
