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
var GetUsersIdsSuggestedEditsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsSuggestedEditsPathParams, _super);
    function GetUsersIdsSuggestedEditsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsSuggestedEditsPathParams.prototype, "ids", void 0);
    return GetUsersIdsSuggestedEditsPathParams;
}(SpeakeasyBase));
export { GetUsersIdsSuggestedEditsPathParams };
export var GetUsersIdsSuggestedEditsOrderEnum;
(function (GetUsersIdsSuggestedEditsOrderEnum) {
    GetUsersIdsSuggestedEditsOrderEnum["Desc"] = "desc";
    GetUsersIdsSuggestedEditsOrderEnum["Asc"] = "asc";
})(GetUsersIdsSuggestedEditsOrderEnum || (GetUsersIdsSuggestedEditsOrderEnum = {}));
export var GetUsersIdsSuggestedEditsSortEnum;
(function (GetUsersIdsSuggestedEditsSortEnum) {
    GetUsersIdsSuggestedEditsSortEnum["Creation"] = "creation";
    GetUsersIdsSuggestedEditsSortEnum["Approval"] = "approval";
    GetUsersIdsSuggestedEditsSortEnum["Rejection"] = "rejection";
})(GetUsersIdsSuggestedEditsSortEnum || (GetUsersIdsSuggestedEditsSortEnum = {}));
var GetUsersIdsSuggestedEditsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsSuggestedEditsQueryParams, _super);
    function GetUsersIdsSuggestedEditsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsSuggestedEditsQueryParams.prototype, "todate", void 0);
    return GetUsersIdsSuggestedEditsQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsSuggestedEditsQueryParams };
var GetUsersIdsSuggestedEditsRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsSuggestedEditsRequest, _super);
    function GetUsersIdsSuggestedEditsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsSuggestedEditsPathParams)
    ], GetUsersIdsSuggestedEditsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsSuggestedEditsQueryParams)
    ], GetUsersIdsSuggestedEditsRequest.prototype, "queryParams", void 0);
    return GetUsersIdsSuggestedEditsRequest;
}(SpeakeasyBase));
export { GetUsersIdsSuggestedEditsRequest };
var GetUsersIdsSuggestedEditsResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsSuggestedEditsResponse, _super);
    function GetUsersIdsSuggestedEditsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsSuggestedEditsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsSuggestedEditsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsSuggestedEditsResponse.prototype, "statusCode", void 0);
    return GetUsersIdsSuggestedEditsResponse;
}(SpeakeasyBase));
export { GetUsersIdsSuggestedEditsResponse };
