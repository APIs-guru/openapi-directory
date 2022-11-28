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
var GetUsersIdsQuestionsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsQuestionsPathParams, _super);
    function GetUsersIdsQuestionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsPathParams.prototype, "ids", void 0);
    return GetUsersIdsQuestionsPathParams;
}(SpeakeasyBase));
export { GetUsersIdsQuestionsPathParams };
export var GetUsersIdsQuestionsOrderEnum;
(function (GetUsersIdsQuestionsOrderEnum) {
    GetUsersIdsQuestionsOrderEnum["Desc"] = "desc";
    GetUsersIdsQuestionsOrderEnum["Asc"] = "asc";
})(GetUsersIdsQuestionsOrderEnum || (GetUsersIdsQuestionsOrderEnum = {}));
export var GetUsersIdsQuestionsSortEnum;
(function (GetUsersIdsQuestionsSortEnum) {
    GetUsersIdsQuestionsSortEnum["Activity"] = "activity";
    GetUsersIdsQuestionsSortEnum["Creation"] = "creation";
    GetUsersIdsQuestionsSortEnum["Votes"] = "votes";
})(GetUsersIdsQuestionsSortEnum || (GetUsersIdsQuestionsSortEnum = {}));
var GetUsersIdsQuestionsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsQuestionsQueryParams, _super);
    function GetUsersIdsQuestionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsQuestionsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsQuestionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsQuestionsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsQuestionsQueryParams.prototype, "todate", void 0);
    return GetUsersIdsQuestionsQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsQuestionsQueryParams };
var GetUsersIdsQuestionsRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsQuestionsRequest, _super);
    function GetUsersIdsQuestionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsQuestionsPathParams)
    ], GetUsersIdsQuestionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsQuestionsQueryParams)
    ], GetUsersIdsQuestionsRequest.prototype, "queryParams", void 0);
    return GetUsersIdsQuestionsRequest;
}(SpeakeasyBase));
export { GetUsersIdsQuestionsRequest };
var GetUsersIdsQuestionsResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsQuestionsResponse, _super);
    function GetUsersIdsQuestionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsQuestionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsQuestionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsQuestionsResponse.prototype, "statusCode", void 0);
    return GetUsersIdsQuestionsResponse;
}(SpeakeasyBase));
export { GetUsersIdsQuestionsResponse };
