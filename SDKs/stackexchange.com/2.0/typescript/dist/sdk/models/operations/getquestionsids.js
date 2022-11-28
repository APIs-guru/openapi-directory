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
var GetQuestionsIdsPathParams = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsPathParams, _super);
    function GetQuestionsIdsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsPathParams.prototype, "ids", void 0);
    return GetQuestionsIdsPathParams;
}(SpeakeasyBase));
export { GetQuestionsIdsPathParams };
export var GetQuestionsIdsOrderEnum;
(function (GetQuestionsIdsOrderEnum) {
    GetQuestionsIdsOrderEnum["Desc"] = "desc";
    GetQuestionsIdsOrderEnum["Asc"] = "asc";
})(GetQuestionsIdsOrderEnum || (GetQuestionsIdsOrderEnum = {}));
export var GetQuestionsIdsSortEnum;
(function (GetQuestionsIdsSortEnum) {
    GetQuestionsIdsSortEnum["Activity"] = "activity";
    GetQuestionsIdsSortEnum["Creation"] = "creation";
    GetQuestionsIdsSortEnum["Votes"] = "votes";
})(GetQuestionsIdsSortEnum || (GetQuestionsIdsSortEnum = {}));
var GetQuestionsIdsQueryParams = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsQueryParams, _super);
    function GetQuestionsIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsQueryParams.prototype, "todate", void 0);
    return GetQuestionsIdsQueryParams;
}(SpeakeasyBase));
export { GetQuestionsIdsQueryParams };
var GetQuestionsIdsRequest = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsRequest, _super);
    function GetQuestionsIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuestionsIdsPathParams)
    ], GetQuestionsIdsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuestionsIdsQueryParams)
    ], GetQuestionsIdsRequest.prototype, "queryParams", void 0);
    return GetQuestionsIdsRequest;
}(SpeakeasyBase));
export { GetQuestionsIdsRequest };
var GetQuestionsIdsResponse = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsResponse, _super);
    function GetQuestionsIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetQuestionsIdsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQuestionsIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQuestionsIdsResponse.prototype, "statusCode", void 0);
    return GetQuestionsIdsResponse;
}(SpeakeasyBase));
export { GetQuestionsIdsResponse };
