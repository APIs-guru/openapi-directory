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
var GetUsersIdsMentionedPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsMentionedPathParams, _super);
    function GetUsersIdsMentionedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsMentionedPathParams.prototype, "ids", void 0);
    return GetUsersIdsMentionedPathParams;
}(SpeakeasyBase));
export { GetUsersIdsMentionedPathParams };
export var GetUsersIdsMentionedOrderEnum;
(function (GetUsersIdsMentionedOrderEnum) {
    GetUsersIdsMentionedOrderEnum["Desc"] = "desc";
    GetUsersIdsMentionedOrderEnum["Asc"] = "asc";
})(GetUsersIdsMentionedOrderEnum || (GetUsersIdsMentionedOrderEnum = {}));
export var GetUsersIdsMentionedSortEnum;
(function (GetUsersIdsMentionedSortEnum) {
    GetUsersIdsMentionedSortEnum["Creation"] = "creation";
    GetUsersIdsMentionedSortEnum["Votes"] = "votes";
})(GetUsersIdsMentionedSortEnum || (GetUsersIdsMentionedSortEnum = {}));
var GetUsersIdsMentionedQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsMentionedQueryParams, _super);
    function GetUsersIdsMentionedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsMentionedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsMentionedQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsMentionedQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdsMentionedQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdsMentionedQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdsMentionedQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsMentionedQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsMentionedQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsMentionedQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdsMentionedQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsMentionedQueryParams.prototype, "todate", void 0);
    return GetUsersIdsMentionedQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsMentionedQueryParams };
var GetUsersIdsMentionedRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsMentionedRequest, _super);
    function GetUsersIdsMentionedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsMentionedPathParams)
    ], GetUsersIdsMentionedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsMentionedQueryParams)
    ], GetUsersIdsMentionedRequest.prototype, "queryParams", void 0);
    return GetUsersIdsMentionedRequest;
}(SpeakeasyBase));
export { GetUsersIdsMentionedRequest };
var GetUsersIdsMentionedResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsMentionedResponse, _super);
    function GetUsersIdsMentionedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsMentionedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsMentionedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsMentionedResponse.prototype, "statusCode", void 0);
    return GetUsersIdsMentionedResponse;
}(SpeakeasyBase));
export { GetUsersIdsMentionedResponse };
