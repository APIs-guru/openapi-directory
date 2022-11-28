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
var GetMeTagsTagsTopQuestionsPathParams = /** @class */ (function (_super) {
    __extends(GetMeTagsTagsTopQuestionsPathParams, _super);
    function GetMeTagsTagsTopQuestionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tags" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopQuestionsPathParams.prototype, "tags", void 0);
    return GetMeTagsTagsTopQuestionsPathParams;
}(SpeakeasyBase));
export { GetMeTagsTagsTopQuestionsPathParams };
export var GetMeTagsTagsTopQuestionsOrderEnum;
(function (GetMeTagsTagsTopQuestionsOrderEnum) {
    GetMeTagsTagsTopQuestionsOrderEnum["Desc"] = "desc";
    GetMeTagsTagsTopQuestionsOrderEnum["Asc"] = "asc";
})(GetMeTagsTagsTopQuestionsOrderEnum || (GetMeTagsTagsTopQuestionsOrderEnum = {}));
export var GetMeTagsTagsTopQuestionsSortEnum;
(function (GetMeTagsTagsTopQuestionsSortEnum) {
    GetMeTagsTagsTopQuestionsSortEnum["Activity"] = "activity";
    GetMeTagsTagsTopQuestionsSortEnum["Creation"] = "creation";
    GetMeTagsTagsTopQuestionsSortEnum["Votes"] = "votes";
    GetMeTagsTagsTopQuestionsSortEnum["Hot"] = "hot";
    GetMeTagsTagsTopQuestionsSortEnum["Week"] = "week";
    GetMeTagsTagsTopQuestionsSortEnum["Month"] = "month";
    GetMeTagsTagsTopQuestionsSortEnum["Relevance"] = "relevance";
})(GetMeTagsTagsTopQuestionsSortEnum || (GetMeTagsTagsTopQuestionsSortEnum = {}));
var GetMeTagsTagsTopQuestionsQueryParams = /** @class */ (function (_super) {
    __extends(GetMeTagsTagsTopQuestionsQueryParams, _super);
    function GetMeTagsTagsTopQuestionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetMeTagsTagsTopQuestionsQueryParams.prototype, "todate", void 0);
    return GetMeTagsTagsTopQuestionsQueryParams;
}(SpeakeasyBase));
export { GetMeTagsTagsTopQuestionsQueryParams };
var GetMeTagsTagsTopQuestionsRequest = /** @class */ (function (_super) {
    __extends(GetMeTagsTagsTopQuestionsRequest, _super);
    function GetMeTagsTagsTopQuestionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMeTagsTagsTopQuestionsPathParams)
    ], GetMeTagsTagsTopQuestionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMeTagsTagsTopQuestionsQueryParams)
    ], GetMeTagsTagsTopQuestionsRequest.prototype, "queryParams", void 0);
    return GetMeTagsTagsTopQuestionsRequest;
}(SpeakeasyBase));
export { GetMeTagsTagsTopQuestionsRequest };
var GetMeTagsTagsTopQuestionsResponse = /** @class */ (function (_super) {
    __extends(GetMeTagsTagsTopQuestionsResponse, _super);
    function GetMeTagsTagsTopQuestionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMeTagsTagsTopQuestionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopQuestionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMeTagsTagsTopQuestionsResponse.prototype, "statusCode", void 0);
    return GetMeTagsTagsTopQuestionsResponse;
}(SpeakeasyBase));
export { GetMeTagsTagsTopQuestionsResponse };
