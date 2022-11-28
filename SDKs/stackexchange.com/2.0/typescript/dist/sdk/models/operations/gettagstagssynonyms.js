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
var GetTagsTagsSynonymsPathParams = /** @class */ (function (_super) {
    __extends(GetTagsTagsSynonymsPathParams, _super);
    function GetTagsTagsSynonymsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tags" }),
        __metadata("design:type", String)
    ], GetTagsTagsSynonymsPathParams.prototype, "tags", void 0);
    return GetTagsTagsSynonymsPathParams;
}(SpeakeasyBase));
export { GetTagsTagsSynonymsPathParams };
export var GetTagsTagsSynonymsOrderEnum;
(function (GetTagsTagsSynonymsOrderEnum) {
    GetTagsTagsSynonymsOrderEnum["Desc"] = "desc";
    GetTagsTagsSynonymsOrderEnum["Asc"] = "asc";
})(GetTagsTagsSynonymsOrderEnum || (GetTagsTagsSynonymsOrderEnum = {}));
export var GetTagsTagsSynonymsSortEnum;
(function (GetTagsTagsSynonymsSortEnum) {
    GetTagsTagsSynonymsSortEnum["Creation"] = "creation";
    GetTagsTagsSynonymsSortEnum["Applied"] = "applied";
    GetTagsTagsSynonymsSortEnum["Activity"] = "activity";
})(GetTagsTagsSynonymsSortEnum || (GetTagsTagsSynonymsSortEnum = {}));
var GetTagsTagsSynonymsQueryParams = /** @class */ (function (_super) {
    __extends(GetTagsTagsSynonymsQueryParams, _super);
    function GetTagsTagsSynonymsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetTagsTagsSynonymsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetTagsTagsSynonymsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetTagsTagsSynonymsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetTagsTagsSynonymsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetTagsTagsSynonymsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetTagsTagsSynonymsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTagsTagsSynonymsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetTagsTagsSynonymsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetTagsTagsSynonymsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetTagsTagsSynonymsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetTagsTagsSynonymsQueryParams.prototype, "todate", void 0);
    return GetTagsTagsSynonymsQueryParams;
}(SpeakeasyBase));
export { GetTagsTagsSynonymsQueryParams };
var GetTagsTagsSynonymsRequest = /** @class */ (function (_super) {
    __extends(GetTagsTagsSynonymsRequest, _super);
    function GetTagsTagsSynonymsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsTagsSynonymsPathParams)
    ], GetTagsTagsSynonymsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsTagsSynonymsQueryParams)
    ], GetTagsTagsSynonymsRequest.prototype, "queryParams", void 0);
    return GetTagsTagsSynonymsRequest;
}(SpeakeasyBase));
export { GetTagsTagsSynonymsRequest };
var GetTagsTagsSynonymsResponse = /** @class */ (function (_super) {
    __extends(GetTagsTagsSynonymsResponse, _super);
    function GetTagsTagsSynonymsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTagsTagsSynonymsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagsTagsSynonymsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagsTagsSynonymsResponse.prototype, "statusCode", void 0);
    return GetTagsTagsSynonymsResponse;
}(SpeakeasyBase));
export { GetTagsTagsSynonymsResponse };
