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
var GetQuestionsIdsLinkedPathParams = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsLinkedPathParams, _super);
    function GetQuestionsIdsLinkedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsLinkedPathParams.prototype, "ids", void 0);
    return GetQuestionsIdsLinkedPathParams;
}(SpeakeasyBase));
export { GetQuestionsIdsLinkedPathParams };
export var GetQuestionsIdsLinkedOrderEnum;
(function (GetQuestionsIdsLinkedOrderEnum) {
    GetQuestionsIdsLinkedOrderEnum["Desc"] = "desc";
    GetQuestionsIdsLinkedOrderEnum["Asc"] = "asc";
})(GetQuestionsIdsLinkedOrderEnum || (GetQuestionsIdsLinkedOrderEnum = {}));
export var GetQuestionsIdsLinkedSortEnum;
(function (GetQuestionsIdsLinkedSortEnum) {
    GetQuestionsIdsLinkedSortEnum["Activity"] = "activity";
    GetQuestionsIdsLinkedSortEnum["Creation"] = "creation";
    GetQuestionsIdsLinkedSortEnum["Votes"] = "votes";
    GetQuestionsIdsLinkedSortEnum["Rank"] = "rank";
})(GetQuestionsIdsLinkedSortEnum || (GetQuestionsIdsLinkedSortEnum = {}));
var GetQuestionsIdsLinkedQueryParams = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsLinkedQueryParams, _super);
    function GetQuestionsIdsLinkedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsLinkedQueryParams.prototype, "todate", void 0);
    return GetQuestionsIdsLinkedQueryParams;
}(SpeakeasyBase));
export { GetQuestionsIdsLinkedQueryParams };
var GetQuestionsIdsLinkedRequest = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsLinkedRequest, _super);
    function GetQuestionsIdsLinkedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuestionsIdsLinkedPathParams)
    ], GetQuestionsIdsLinkedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuestionsIdsLinkedQueryParams)
    ], GetQuestionsIdsLinkedRequest.prototype, "queryParams", void 0);
    return GetQuestionsIdsLinkedRequest;
}(SpeakeasyBase));
export { GetQuestionsIdsLinkedRequest };
var GetQuestionsIdsLinkedResponse = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsLinkedResponse, _super);
    function GetQuestionsIdsLinkedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetQuestionsIdsLinkedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQuestionsIdsLinkedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQuestionsIdsLinkedResponse.prototype, "statusCode", void 0);
    return GetQuestionsIdsLinkedResponse;
}(SpeakeasyBase));
export { GetQuestionsIdsLinkedResponse };
