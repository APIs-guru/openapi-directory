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
var GetMeTagsTagsTopAnswersPathParams = /** @class */ (function (_super) {
    __extends(GetMeTagsTagsTopAnswersPathParams, _super);
    function GetMeTagsTagsTopAnswersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tags" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopAnswersPathParams.prototype, "tags", void 0);
    return GetMeTagsTagsTopAnswersPathParams;
}(SpeakeasyBase));
export { GetMeTagsTagsTopAnswersPathParams };
export var GetMeTagsTagsTopAnswersOrderEnum;
(function (GetMeTagsTagsTopAnswersOrderEnum) {
    GetMeTagsTagsTopAnswersOrderEnum["Desc"] = "desc";
    GetMeTagsTagsTopAnswersOrderEnum["Asc"] = "asc";
})(GetMeTagsTagsTopAnswersOrderEnum || (GetMeTagsTagsTopAnswersOrderEnum = {}));
export var GetMeTagsTagsTopAnswersSortEnum;
(function (GetMeTagsTagsTopAnswersSortEnum) {
    GetMeTagsTagsTopAnswersSortEnum["Activity"] = "activity";
    GetMeTagsTagsTopAnswersSortEnum["Creation"] = "creation";
    GetMeTagsTagsTopAnswersSortEnum["Votes"] = "votes";
})(GetMeTagsTagsTopAnswersSortEnum || (GetMeTagsTagsTopAnswersSortEnum = {}));
var GetMeTagsTagsTopAnswersQueryParams = /** @class */ (function (_super) {
    __extends(GetMeTagsTagsTopAnswersQueryParams, _super);
    function GetMeTagsTagsTopAnswersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetMeTagsTagsTopAnswersQueryParams.prototype, "todate", void 0);
    return GetMeTagsTagsTopAnswersQueryParams;
}(SpeakeasyBase));
export { GetMeTagsTagsTopAnswersQueryParams };
var GetMeTagsTagsTopAnswersRequest = /** @class */ (function (_super) {
    __extends(GetMeTagsTagsTopAnswersRequest, _super);
    function GetMeTagsTagsTopAnswersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMeTagsTagsTopAnswersPathParams)
    ], GetMeTagsTagsTopAnswersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMeTagsTagsTopAnswersQueryParams)
    ], GetMeTagsTagsTopAnswersRequest.prototype, "queryParams", void 0);
    return GetMeTagsTagsTopAnswersRequest;
}(SpeakeasyBase));
export { GetMeTagsTagsTopAnswersRequest };
var GetMeTagsTagsTopAnswersResponse = /** @class */ (function (_super) {
    __extends(GetMeTagsTagsTopAnswersResponse, _super);
    function GetMeTagsTagsTopAnswersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMeTagsTagsTopAnswersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMeTagsTagsTopAnswersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMeTagsTagsTopAnswersResponse.prototype, "statusCode", void 0);
    return GetMeTagsTagsTopAnswersResponse;
}(SpeakeasyBase));
export { GetMeTagsTagsTopAnswersResponse };
