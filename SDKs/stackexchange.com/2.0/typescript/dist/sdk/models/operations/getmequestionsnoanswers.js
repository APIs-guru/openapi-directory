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
export var GetMeQuestionsNoAnswersOrderEnum;
(function (GetMeQuestionsNoAnswersOrderEnum) {
    GetMeQuestionsNoAnswersOrderEnum["Desc"] = "desc";
    GetMeQuestionsNoAnswersOrderEnum["Asc"] = "asc";
})(GetMeQuestionsNoAnswersOrderEnum || (GetMeQuestionsNoAnswersOrderEnum = {}));
export var GetMeQuestionsNoAnswersSortEnum;
(function (GetMeQuestionsNoAnswersSortEnum) {
    GetMeQuestionsNoAnswersSortEnum["Activity"] = "activity";
    GetMeQuestionsNoAnswersSortEnum["Creation"] = "creation";
    GetMeQuestionsNoAnswersSortEnum["Votes"] = "votes";
})(GetMeQuestionsNoAnswersSortEnum || (GetMeQuestionsNoAnswersSortEnum = {}));
var GetMeQuestionsNoAnswersQueryParams = /** @class */ (function (_super) {
    __extends(GetMeQuestionsNoAnswersQueryParams, _super);
    function GetMeQuestionsNoAnswersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetMeQuestionsNoAnswersQueryParams.prototype, "todate", void 0);
    return GetMeQuestionsNoAnswersQueryParams;
}(SpeakeasyBase));
export { GetMeQuestionsNoAnswersQueryParams };
var GetMeQuestionsNoAnswersRequest = /** @class */ (function (_super) {
    __extends(GetMeQuestionsNoAnswersRequest, _super);
    function GetMeQuestionsNoAnswersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMeQuestionsNoAnswersQueryParams)
    ], GetMeQuestionsNoAnswersRequest.prototype, "queryParams", void 0);
    return GetMeQuestionsNoAnswersRequest;
}(SpeakeasyBase));
export { GetMeQuestionsNoAnswersRequest };
var GetMeQuestionsNoAnswersResponse = /** @class */ (function (_super) {
    __extends(GetMeQuestionsNoAnswersResponse, _super);
    function GetMeQuestionsNoAnswersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMeQuestionsNoAnswersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMeQuestionsNoAnswersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMeQuestionsNoAnswersResponse.prototype, "statusCode", void 0);
    return GetMeQuestionsNoAnswersResponse;
}(SpeakeasyBase));
export { GetMeQuestionsNoAnswersResponse };
