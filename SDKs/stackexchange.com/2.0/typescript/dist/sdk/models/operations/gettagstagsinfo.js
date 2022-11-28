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
var GetTagsTagsInfoPathParams = /** @class */ (function (_super) {
    __extends(GetTagsTagsInfoPathParams, _super);
    function GetTagsTagsInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tags" }),
        __metadata("design:type", String)
    ], GetTagsTagsInfoPathParams.prototype, "tags", void 0);
    return GetTagsTagsInfoPathParams;
}(SpeakeasyBase));
export { GetTagsTagsInfoPathParams };
export var GetTagsTagsInfoOrderEnum;
(function (GetTagsTagsInfoOrderEnum) {
    GetTagsTagsInfoOrderEnum["Desc"] = "desc";
    GetTagsTagsInfoOrderEnum["Asc"] = "asc";
})(GetTagsTagsInfoOrderEnum || (GetTagsTagsInfoOrderEnum = {}));
export var GetTagsTagsInfoSortEnum;
(function (GetTagsTagsInfoSortEnum) {
    GetTagsTagsInfoSortEnum["Popular"] = "popular";
    GetTagsTagsInfoSortEnum["Activity"] = "activity";
    GetTagsTagsInfoSortEnum["Name"] = "name";
})(GetTagsTagsInfoSortEnum || (GetTagsTagsInfoSortEnum = {}));
var GetTagsTagsInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetTagsTagsInfoQueryParams, _super);
    function GetTagsTagsInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetTagsTagsInfoQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetTagsTagsInfoQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetTagsTagsInfoQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetTagsTagsInfoQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetTagsTagsInfoQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetTagsTagsInfoQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTagsTagsInfoQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetTagsTagsInfoQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetTagsTagsInfoQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetTagsTagsInfoQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetTagsTagsInfoQueryParams.prototype, "todate", void 0);
    return GetTagsTagsInfoQueryParams;
}(SpeakeasyBase));
export { GetTagsTagsInfoQueryParams };
var GetTagsTagsInfoRequest = /** @class */ (function (_super) {
    __extends(GetTagsTagsInfoRequest, _super);
    function GetTagsTagsInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsTagsInfoPathParams)
    ], GetTagsTagsInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsTagsInfoQueryParams)
    ], GetTagsTagsInfoRequest.prototype, "queryParams", void 0);
    return GetTagsTagsInfoRequest;
}(SpeakeasyBase));
export { GetTagsTagsInfoRequest };
var GetTagsTagsInfoResponse = /** @class */ (function (_super) {
    __extends(GetTagsTagsInfoResponse, _super);
    function GetTagsTagsInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTagsTagsInfoResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagsTagsInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagsTagsInfoResponse.prototype, "statusCode", void 0);
    return GetTagsTagsInfoResponse;
}(SpeakeasyBase));
export { GetTagsTagsInfoResponse };
