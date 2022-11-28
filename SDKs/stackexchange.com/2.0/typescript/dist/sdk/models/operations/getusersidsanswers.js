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
var GetUsersIdsAnswersPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsAnswersPathParams, _super);
    function GetUsersIdsAnswersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsAnswersPathParams.prototype, "ids", void 0);
    return GetUsersIdsAnswersPathParams;
}(SpeakeasyBase));
export { GetUsersIdsAnswersPathParams };
export var GetUsersIdsAnswersOrderEnum;
(function (GetUsersIdsAnswersOrderEnum) {
    GetUsersIdsAnswersOrderEnum["Desc"] = "desc";
    GetUsersIdsAnswersOrderEnum["Asc"] = "asc";
})(GetUsersIdsAnswersOrderEnum || (GetUsersIdsAnswersOrderEnum = {}));
export var GetUsersIdsAnswersSortEnum;
(function (GetUsersIdsAnswersSortEnum) {
    GetUsersIdsAnswersSortEnum["Activity"] = "activity";
    GetUsersIdsAnswersSortEnum["Creation"] = "creation";
    GetUsersIdsAnswersSortEnum["Votes"] = "votes";
})(GetUsersIdsAnswersSortEnum || (GetUsersIdsAnswersSortEnum = {}));
var GetUsersIdsAnswersQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsAnswersQueryParams, _super);
    function GetUsersIdsAnswersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsAnswersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsAnswersQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsAnswersQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdsAnswersQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdsAnswersQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdsAnswersQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsAnswersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsAnswersQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsAnswersQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdsAnswersQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsAnswersQueryParams.prototype, "todate", void 0);
    return GetUsersIdsAnswersQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsAnswersQueryParams };
var GetUsersIdsAnswersRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsAnswersRequest, _super);
    function GetUsersIdsAnswersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsAnswersPathParams)
    ], GetUsersIdsAnswersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsAnswersQueryParams)
    ], GetUsersIdsAnswersRequest.prototype, "queryParams", void 0);
    return GetUsersIdsAnswersRequest;
}(SpeakeasyBase));
export { GetUsersIdsAnswersRequest };
var GetUsersIdsAnswersResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsAnswersResponse, _super);
    function GetUsersIdsAnswersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsAnswersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsAnswersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsAnswersResponse.prototype, "statusCode", void 0);
    return GetUsersIdsAnswersResponse;
}(SpeakeasyBase));
export { GetUsersIdsAnswersResponse };
