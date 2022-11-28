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
var GetQuestionsIdsRelatedPathParams = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsRelatedPathParams, _super);
    function GetQuestionsIdsRelatedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsRelatedPathParams.prototype, "ids", void 0);
    return GetQuestionsIdsRelatedPathParams;
}(SpeakeasyBase));
export { GetQuestionsIdsRelatedPathParams };
export var GetQuestionsIdsRelatedOrderEnum;
(function (GetQuestionsIdsRelatedOrderEnum) {
    GetQuestionsIdsRelatedOrderEnum["Desc"] = "desc";
    GetQuestionsIdsRelatedOrderEnum["Asc"] = "asc";
})(GetQuestionsIdsRelatedOrderEnum || (GetQuestionsIdsRelatedOrderEnum = {}));
export var GetQuestionsIdsRelatedSortEnum;
(function (GetQuestionsIdsRelatedSortEnum) {
    GetQuestionsIdsRelatedSortEnum["Activity"] = "activity";
    GetQuestionsIdsRelatedSortEnum["Creation"] = "creation";
    GetQuestionsIdsRelatedSortEnum["Votes"] = "votes";
    GetQuestionsIdsRelatedSortEnum["Rank"] = "rank";
})(GetQuestionsIdsRelatedSortEnum || (GetQuestionsIdsRelatedSortEnum = {}));
var GetQuestionsIdsRelatedQueryParams = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsRelatedQueryParams, _super);
    function GetQuestionsIdsRelatedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsRelatedQueryParams.prototype, "todate", void 0);
    return GetQuestionsIdsRelatedQueryParams;
}(SpeakeasyBase));
export { GetQuestionsIdsRelatedQueryParams };
var GetQuestionsIdsRelatedRequest = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsRelatedRequest, _super);
    function GetQuestionsIdsRelatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuestionsIdsRelatedPathParams)
    ], GetQuestionsIdsRelatedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuestionsIdsRelatedQueryParams)
    ], GetQuestionsIdsRelatedRequest.prototype, "queryParams", void 0);
    return GetQuestionsIdsRelatedRequest;
}(SpeakeasyBase));
export { GetQuestionsIdsRelatedRequest };
var GetQuestionsIdsRelatedResponse = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsRelatedResponse, _super);
    function GetQuestionsIdsRelatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetQuestionsIdsRelatedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQuestionsIdsRelatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQuestionsIdsRelatedResponse.prototype, "statusCode", void 0);
    return GetQuestionsIdsRelatedResponse;
}(SpeakeasyBase));
export { GetQuestionsIdsRelatedResponse };
