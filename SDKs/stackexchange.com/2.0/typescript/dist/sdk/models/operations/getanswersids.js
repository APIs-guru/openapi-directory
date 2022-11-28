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
var GetAnswersIdsPathParams = /** @class */ (function (_super) {
    __extends(GetAnswersIdsPathParams, _super);
    function GetAnswersIdsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetAnswersIdsPathParams.prototype, "ids", void 0);
    return GetAnswersIdsPathParams;
}(SpeakeasyBase));
export { GetAnswersIdsPathParams };
export var GetAnswersIdsOrderEnum;
(function (GetAnswersIdsOrderEnum) {
    GetAnswersIdsOrderEnum["Desc"] = "desc";
    GetAnswersIdsOrderEnum["Asc"] = "asc";
})(GetAnswersIdsOrderEnum || (GetAnswersIdsOrderEnum = {}));
export var GetAnswersIdsSortEnum;
(function (GetAnswersIdsSortEnum) {
    GetAnswersIdsSortEnum["Activity"] = "activity";
    GetAnswersIdsSortEnum["Creation"] = "creation";
    GetAnswersIdsSortEnum["Votes"] = "votes";
})(GetAnswersIdsSortEnum || (GetAnswersIdsSortEnum = {}));
var GetAnswersIdsQueryParams = /** @class */ (function (_super) {
    __extends(GetAnswersIdsQueryParams, _super);
    function GetAnswersIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetAnswersIdsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetAnswersIdsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetAnswersIdsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetAnswersIdsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetAnswersIdsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetAnswersIdsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAnswersIdsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetAnswersIdsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetAnswersIdsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAnswersIdsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetAnswersIdsQueryParams.prototype, "todate", void 0);
    return GetAnswersIdsQueryParams;
}(SpeakeasyBase));
export { GetAnswersIdsQueryParams };
var GetAnswersIdsRequest = /** @class */ (function (_super) {
    __extends(GetAnswersIdsRequest, _super);
    function GetAnswersIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnswersIdsPathParams)
    ], GetAnswersIdsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnswersIdsQueryParams)
    ], GetAnswersIdsRequest.prototype, "queryParams", void 0);
    return GetAnswersIdsRequest;
}(SpeakeasyBase));
export { GetAnswersIdsRequest };
var GetAnswersIdsResponse = /** @class */ (function (_super) {
    __extends(GetAnswersIdsResponse, _super);
    function GetAnswersIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAnswersIdsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnswersIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnswersIdsResponse.prototype, "statusCode", void 0);
    return GetAnswersIdsResponse;
}(SpeakeasyBase));
export { GetAnswersIdsResponse };
