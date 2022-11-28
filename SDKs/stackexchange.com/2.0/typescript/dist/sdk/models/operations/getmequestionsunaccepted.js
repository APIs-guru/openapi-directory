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
export var GetMeQuestionsUnacceptedOrderEnum;
(function (GetMeQuestionsUnacceptedOrderEnum) {
    GetMeQuestionsUnacceptedOrderEnum["Desc"] = "desc";
    GetMeQuestionsUnacceptedOrderEnum["Asc"] = "asc";
})(GetMeQuestionsUnacceptedOrderEnum || (GetMeQuestionsUnacceptedOrderEnum = {}));
export var GetMeQuestionsUnacceptedSortEnum;
(function (GetMeQuestionsUnacceptedSortEnum) {
    GetMeQuestionsUnacceptedSortEnum["Activity"] = "activity";
    GetMeQuestionsUnacceptedSortEnum["Creation"] = "creation";
    GetMeQuestionsUnacceptedSortEnum["Votes"] = "votes";
})(GetMeQuestionsUnacceptedSortEnum || (GetMeQuestionsUnacceptedSortEnum = {}));
var GetMeQuestionsUnacceptedQueryParams = /** @class */ (function (_super) {
    __extends(GetMeQuestionsUnacceptedQueryParams, _super);
    function GetMeQuestionsUnacceptedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetMeQuestionsUnacceptedQueryParams.prototype, "todate", void 0);
    return GetMeQuestionsUnacceptedQueryParams;
}(SpeakeasyBase));
export { GetMeQuestionsUnacceptedQueryParams };
var GetMeQuestionsUnacceptedRequest = /** @class */ (function (_super) {
    __extends(GetMeQuestionsUnacceptedRequest, _super);
    function GetMeQuestionsUnacceptedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMeQuestionsUnacceptedQueryParams)
    ], GetMeQuestionsUnacceptedRequest.prototype, "queryParams", void 0);
    return GetMeQuestionsUnacceptedRequest;
}(SpeakeasyBase));
export { GetMeQuestionsUnacceptedRequest };
var GetMeQuestionsUnacceptedResponse = /** @class */ (function (_super) {
    __extends(GetMeQuestionsUnacceptedResponse, _super);
    function GetMeQuestionsUnacceptedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMeQuestionsUnacceptedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMeQuestionsUnacceptedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMeQuestionsUnacceptedResponse.prototype, "statusCode", void 0);
    return GetMeQuestionsUnacceptedResponse;
}(SpeakeasyBase));
export { GetMeQuestionsUnacceptedResponse };
