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
var GetUsersIdsQuestionsUnansweredPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsQuestionsUnansweredPathParams, _super);
    function GetUsersIdsQuestionsUnansweredPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsUnansweredPathParams.prototype, "ids", void 0);
    return GetUsersIdsQuestionsUnansweredPathParams;
}(SpeakeasyBase));
export { GetUsersIdsQuestionsUnansweredPathParams };
export var GetUsersIdsQuestionsUnansweredOrderEnum;
(function (GetUsersIdsQuestionsUnansweredOrderEnum) {
    GetUsersIdsQuestionsUnansweredOrderEnum["Desc"] = "desc";
    GetUsersIdsQuestionsUnansweredOrderEnum["Asc"] = "asc";
})(GetUsersIdsQuestionsUnansweredOrderEnum || (GetUsersIdsQuestionsUnansweredOrderEnum = {}));
export var GetUsersIdsQuestionsUnansweredSortEnum;
(function (GetUsersIdsQuestionsUnansweredSortEnum) {
    GetUsersIdsQuestionsUnansweredSortEnum["Activity"] = "activity";
    GetUsersIdsQuestionsUnansweredSortEnum["Creation"] = "creation";
    GetUsersIdsQuestionsUnansweredSortEnum["Votes"] = "votes";
})(GetUsersIdsQuestionsUnansweredSortEnum || (GetUsersIdsQuestionsUnansweredSortEnum = {}));
var GetUsersIdsQuestionsUnansweredQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsQuestionsUnansweredQueryParams, _super);
    function GetUsersIdsQuestionsUnansweredQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsQuestionsUnansweredQueryParams.prototype, "todate", void 0);
    return GetUsersIdsQuestionsUnansweredQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsQuestionsUnansweredQueryParams };
var GetUsersIdsQuestionsUnansweredRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsQuestionsUnansweredRequest, _super);
    function GetUsersIdsQuestionsUnansweredRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsQuestionsUnansweredPathParams)
    ], GetUsersIdsQuestionsUnansweredRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsQuestionsUnansweredQueryParams)
    ], GetUsersIdsQuestionsUnansweredRequest.prototype, "queryParams", void 0);
    return GetUsersIdsQuestionsUnansweredRequest;
}(SpeakeasyBase));
export { GetUsersIdsQuestionsUnansweredRequest };
var GetUsersIdsQuestionsUnansweredResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsQuestionsUnansweredResponse, _super);
    function GetUsersIdsQuestionsUnansweredResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsQuestionsUnansweredResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsUnansweredResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsQuestionsUnansweredResponse.prototype, "statusCode", void 0);
    return GetUsersIdsQuestionsUnansweredResponse;
}(SpeakeasyBase));
export { GetUsersIdsQuestionsUnansweredResponse };
