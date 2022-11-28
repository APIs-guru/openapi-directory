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
var GetUsersIdTagsTagsTopQuestionsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdTagsTagsTopQuestionsPathParams, _super);
    function GetUsersIdTagsTagsTopQuestionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetUsersIdTagsTagsTopQuestionsPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tags" }),
        __metadata("design:type", String)
    ], GetUsersIdTagsTagsTopQuestionsPathParams.prototype, "tags", void 0);
    return GetUsersIdTagsTagsTopQuestionsPathParams;
}(SpeakeasyBase));
export { GetUsersIdTagsTagsTopQuestionsPathParams };
export var GetUsersIdTagsTagsTopQuestionsOrderEnum;
(function (GetUsersIdTagsTagsTopQuestionsOrderEnum) {
    GetUsersIdTagsTagsTopQuestionsOrderEnum["Desc"] = "desc";
    GetUsersIdTagsTagsTopQuestionsOrderEnum["Asc"] = "asc";
})(GetUsersIdTagsTagsTopQuestionsOrderEnum || (GetUsersIdTagsTagsTopQuestionsOrderEnum = {}));
export var GetUsersIdTagsTagsTopQuestionsSortEnum;
(function (GetUsersIdTagsTagsTopQuestionsSortEnum) {
    GetUsersIdTagsTagsTopQuestionsSortEnum["Activity"] = "activity";
    GetUsersIdTagsTagsTopQuestionsSortEnum["Creation"] = "creation";
    GetUsersIdTagsTagsTopQuestionsSortEnum["Votes"] = "votes";
})(GetUsersIdTagsTagsTopQuestionsSortEnum || (GetUsersIdTagsTagsTopQuestionsSortEnum = {}));
var GetUsersIdTagsTagsTopQuestionsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdTagsTagsTopQuestionsQueryParams, _super);
    function GetUsersIdTagsTagsTopQuestionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdTagsTagsTopQuestionsQueryParams.prototype, "todate", void 0);
    return GetUsersIdTagsTagsTopQuestionsQueryParams;
}(SpeakeasyBase));
export { GetUsersIdTagsTagsTopQuestionsQueryParams };
var GetUsersIdTagsTagsTopQuestionsRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdTagsTagsTopQuestionsRequest, _super);
    function GetUsersIdTagsTagsTopQuestionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdTagsTagsTopQuestionsPathParams)
    ], GetUsersIdTagsTagsTopQuestionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdTagsTagsTopQuestionsQueryParams)
    ], GetUsersIdTagsTagsTopQuestionsRequest.prototype, "queryParams", void 0);
    return GetUsersIdTagsTagsTopQuestionsRequest;
}(SpeakeasyBase));
export { GetUsersIdTagsTagsTopQuestionsRequest };
var GetUsersIdTagsTagsTopQuestionsResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdTagsTagsTopQuestionsResponse, _super);
    function GetUsersIdTagsTagsTopQuestionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdTagsTagsTopQuestionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdTagsTagsTopQuestionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdTagsTagsTopQuestionsResponse.prototype, "statusCode", void 0);
    return GetUsersIdTagsTagsTopQuestionsResponse;
}(SpeakeasyBase));
export { GetUsersIdTagsTagsTopQuestionsResponse };
