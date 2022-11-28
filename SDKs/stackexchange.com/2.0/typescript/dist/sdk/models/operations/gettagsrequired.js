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
export var GetTagsRequiredOrderEnum;
(function (GetTagsRequiredOrderEnum) {
    GetTagsRequiredOrderEnum["Desc"] = "desc";
    GetTagsRequiredOrderEnum["Asc"] = "asc";
})(GetTagsRequiredOrderEnum || (GetTagsRequiredOrderEnum = {}));
export var GetTagsRequiredSortEnum;
(function (GetTagsRequiredSortEnum) {
    GetTagsRequiredSortEnum["Popular"] = "popular";
    GetTagsRequiredSortEnum["Activity"] = "activity";
    GetTagsRequiredSortEnum["Name"] = "name";
})(GetTagsRequiredSortEnum || (GetTagsRequiredSortEnum = {}));
var GetTagsRequiredQueryParams = /** @class */ (function (_super) {
    __extends(GetTagsRequiredQueryParams, _super);
    function GetTagsRequiredQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetTagsRequiredQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetTagsRequiredQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetTagsRequiredQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inname" }),
        __metadata("design:type", String)
    ], GetTagsRequiredQueryParams.prototype, "inname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetTagsRequiredQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetTagsRequiredQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetTagsRequiredQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTagsRequiredQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetTagsRequiredQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetTagsRequiredQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetTagsRequiredQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetTagsRequiredQueryParams.prototype, "todate", void 0);
    return GetTagsRequiredQueryParams;
}(SpeakeasyBase));
export { GetTagsRequiredQueryParams };
var GetTagsRequiredRequest = /** @class */ (function (_super) {
    __extends(GetTagsRequiredRequest, _super);
    function GetTagsRequiredRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsRequiredQueryParams)
    ], GetTagsRequiredRequest.prototype, "queryParams", void 0);
    return GetTagsRequiredRequest;
}(SpeakeasyBase));
export { GetTagsRequiredRequest };
var GetTagsRequiredResponse = /** @class */ (function (_super) {
    __extends(GetTagsRequiredResponse, _super);
    function GetTagsRequiredResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTagsRequiredResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagsRequiredResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagsRequiredResponse.prototype, "statusCode", void 0);
    return GetTagsRequiredResponse;
}(SpeakeasyBase));
export { GetTagsRequiredResponse };
