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
var GetMeCommentsToIdPathParams = /** @class */ (function (_super) {
    __extends(GetMeCommentsToIdPathParams, _super);
    function GetMeCommentsToIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=toId" }),
        __metadata("design:type", Number)
    ], GetMeCommentsToIdPathParams.prototype, "toId", void 0);
    return GetMeCommentsToIdPathParams;
}(SpeakeasyBase));
export { GetMeCommentsToIdPathParams };
export var GetMeCommentsToIdOrderEnum;
(function (GetMeCommentsToIdOrderEnum) {
    GetMeCommentsToIdOrderEnum["Desc"] = "desc";
    GetMeCommentsToIdOrderEnum["Asc"] = "asc";
})(GetMeCommentsToIdOrderEnum || (GetMeCommentsToIdOrderEnum = {}));
export var GetMeCommentsToIdSortEnum;
(function (GetMeCommentsToIdSortEnum) {
    GetMeCommentsToIdSortEnum["Creation"] = "creation";
    GetMeCommentsToIdSortEnum["Votes"] = "votes";
})(GetMeCommentsToIdSortEnum || (GetMeCommentsToIdSortEnum = {}));
var GetMeCommentsToIdQueryParams = /** @class */ (function (_super) {
    __extends(GetMeCommentsToIdQueryParams, _super);
    function GetMeCommentsToIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetMeCommentsToIdQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetMeCommentsToIdQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetMeCommentsToIdQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetMeCommentsToIdQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetMeCommentsToIdQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetMeCommentsToIdQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetMeCommentsToIdQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetMeCommentsToIdQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetMeCommentsToIdQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetMeCommentsToIdQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetMeCommentsToIdQueryParams.prototype, "todate", void 0);
    return GetMeCommentsToIdQueryParams;
}(SpeakeasyBase));
export { GetMeCommentsToIdQueryParams };
var GetMeCommentsToIdRequest = /** @class */ (function (_super) {
    __extends(GetMeCommentsToIdRequest, _super);
    function GetMeCommentsToIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMeCommentsToIdPathParams)
    ], GetMeCommentsToIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMeCommentsToIdQueryParams)
    ], GetMeCommentsToIdRequest.prototype, "queryParams", void 0);
    return GetMeCommentsToIdRequest;
}(SpeakeasyBase));
export { GetMeCommentsToIdRequest };
var GetMeCommentsToIdResponse = /** @class */ (function (_super) {
    __extends(GetMeCommentsToIdResponse, _super);
    function GetMeCommentsToIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMeCommentsToIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMeCommentsToIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMeCommentsToIdResponse.prototype, "statusCode", void 0);
    return GetMeCommentsToIdResponse;
}(SpeakeasyBase));
export { GetMeCommentsToIdResponse };
