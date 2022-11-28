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
export var GetSimilarOrderEnum;
(function (GetSimilarOrderEnum) {
    GetSimilarOrderEnum["Desc"] = "desc";
    GetSimilarOrderEnum["Asc"] = "asc";
})(GetSimilarOrderEnum || (GetSimilarOrderEnum = {}));
export var GetSimilarSortEnum;
(function (GetSimilarSortEnum) {
    GetSimilarSortEnum["Activity"] = "activity";
    GetSimilarSortEnum["Creation"] = "creation";
    GetSimilarSortEnum["Votes"] = "votes";
    GetSimilarSortEnum["Relevance"] = "relevance";
})(GetSimilarSortEnum || (GetSimilarSortEnum = {}));
var GetSimilarQueryParams = /** @class */ (function (_super) {
    __extends(GetSimilarQueryParams, _super);
    function GetSimilarQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetSimilarQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nottagged" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "nottagged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSimilarQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetSimilarQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagged" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "tagged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" }),
        __metadata("design:type", String)
    ], GetSimilarQueryParams.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetSimilarQueryParams.prototype, "todate", void 0);
    return GetSimilarQueryParams;
}(SpeakeasyBase));
export { GetSimilarQueryParams };
var GetSimilarRequest = /** @class */ (function (_super) {
    __extends(GetSimilarRequest, _super);
    function GetSimilarRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarQueryParams)
    ], GetSimilarRequest.prototype, "queryParams", void 0);
    return GetSimilarRequest;
}(SpeakeasyBase));
export { GetSimilarRequest };
var GetSimilarResponse = /** @class */ (function (_super) {
    __extends(GetSimilarResponse, _super);
    function GetSimilarResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSimilarResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSimilarResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSimilarResponse.prototype, "statusCode", void 0);
    return GetSimilarResponse;
}(SpeakeasyBase));
export { GetSimilarResponse };
