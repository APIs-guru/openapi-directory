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
var GetQuestionsIdsCommentsPathParams = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsCommentsPathParams, _super);
    function GetQuestionsIdsCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsPathParams.prototype, "ids", void 0);
    return GetQuestionsIdsCommentsPathParams;
}(SpeakeasyBase));
export { GetQuestionsIdsCommentsPathParams };
export var GetQuestionsIdsCommentsOrderEnum;
(function (GetQuestionsIdsCommentsOrderEnum) {
    GetQuestionsIdsCommentsOrderEnum["Desc"] = "desc";
    GetQuestionsIdsCommentsOrderEnum["Asc"] = "asc";
})(GetQuestionsIdsCommentsOrderEnum || (GetQuestionsIdsCommentsOrderEnum = {}));
export var GetQuestionsIdsCommentsSortEnum;
(function (GetQuestionsIdsCommentsSortEnum) {
    GetQuestionsIdsCommentsSortEnum["Creation"] = "creation";
    GetQuestionsIdsCommentsSortEnum["Votes"] = "votes";
})(GetQuestionsIdsCommentsSortEnum || (GetQuestionsIdsCommentsSortEnum = {}));
var GetQuestionsIdsCommentsQueryParams = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsCommentsQueryParams, _super);
    function GetQuestionsIdsCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsCommentsQueryParams.prototype, "todate", void 0);
    return GetQuestionsIdsCommentsQueryParams;
}(SpeakeasyBase));
export { GetQuestionsIdsCommentsQueryParams };
var GetQuestionsIdsCommentsRequest = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsCommentsRequest, _super);
    function GetQuestionsIdsCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuestionsIdsCommentsPathParams)
    ], GetQuestionsIdsCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuestionsIdsCommentsQueryParams)
    ], GetQuestionsIdsCommentsRequest.prototype, "queryParams", void 0);
    return GetQuestionsIdsCommentsRequest;
}(SpeakeasyBase));
export { GetQuestionsIdsCommentsRequest };
var GetQuestionsIdsCommentsResponse = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsCommentsResponse, _super);
    function GetQuestionsIdsCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetQuestionsIdsCommentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQuestionsIdsCommentsResponse.prototype, "statusCode", void 0);
    return GetQuestionsIdsCommentsResponse;
}(SpeakeasyBase));
export { GetQuestionsIdsCommentsResponse };
