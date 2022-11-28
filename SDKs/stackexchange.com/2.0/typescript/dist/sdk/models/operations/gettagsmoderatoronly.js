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
export var GetTagsModeratorOnlyOrderEnum;
(function (GetTagsModeratorOnlyOrderEnum) {
    GetTagsModeratorOnlyOrderEnum["Desc"] = "desc";
    GetTagsModeratorOnlyOrderEnum["Asc"] = "asc";
})(GetTagsModeratorOnlyOrderEnum || (GetTagsModeratorOnlyOrderEnum = {}));
export var GetTagsModeratorOnlySortEnum;
(function (GetTagsModeratorOnlySortEnum) {
    GetTagsModeratorOnlySortEnum["Popular"] = "popular";
    GetTagsModeratorOnlySortEnum["Activity"] = "activity";
    GetTagsModeratorOnlySortEnum["Name"] = "name";
})(GetTagsModeratorOnlySortEnum || (GetTagsModeratorOnlySortEnum = {}));
var GetTagsModeratorOnlyQueryParams = /** @class */ (function (_super) {
    __extends(GetTagsModeratorOnlyQueryParams, _super);
    function GetTagsModeratorOnlyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetTagsModeratorOnlyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetTagsModeratorOnlyQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetTagsModeratorOnlyQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inname" }),
        __metadata("design:type", String)
    ], GetTagsModeratorOnlyQueryParams.prototype, "inname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetTagsModeratorOnlyQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetTagsModeratorOnlyQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetTagsModeratorOnlyQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTagsModeratorOnlyQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetTagsModeratorOnlyQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetTagsModeratorOnlyQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetTagsModeratorOnlyQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetTagsModeratorOnlyQueryParams.prototype, "todate", void 0);
    return GetTagsModeratorOnlyQueryParams;
}(SpeakeasyBase));
export { GetTagsModeratorOnlyQueryParams };
var GetTagsModeratorOnlyRequest = /** @class */ (function (_super) {
    __extends(GetTagsModeratorOnlyRequest, _super);
    function GetTagsModeratorOnlyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsModeratorOnlyQueryParams)
    ], GetTagsModeratorOnlyRequest.prototype, "queryParams", void 0);
    return GetTagsModeratorOnlyRequest;
}(SpeakeasyBase));
export { GetTagsModeratorOnlyRequest };
var GetTagsModeratorOnlyResponse = /** @class */ (function (_super) {
    __extends(GetTagsModeratorOnlyResponse, _super);
    function GetTagsModeratorOnlyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTagsModeratorOnlyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagsModeratorOnlyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagsModeratorOnlyResponse.prototype, "statusCode", void 0);
    return GetTagsModeratorOnlyResponse;
}(SpeakeasyBase));
export { GetTagsModeratorOnlyResponse };
