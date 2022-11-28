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
var GetUsersIdsCommentsToidPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsCommentsToidPathParams, _super);
    function GetUsersIdsCommentsToidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsToidPathParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=toid" }),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsToidPathParams.prototype, "toid", void 0);
    return GetUsersIdsCommentsToidPathParams;
}(SpeakeasyBase));
export { GetUsersIdsCommentsToidPathParams };
export var GetUsersIdsCommentsToidOrderEnum;
(function (GetUsersIdsCommentsToidOrderEnum) {
    GetUsersIdsCommentsToidOrderEnum["Desc"] = "desc";
    GetUsersIdsCommentsToidOrderEnum["Asc"] = "asc";
})(GetUsersIdsCommentsToidOrderEnum || (GetUsersIdsCommentsToidOrderEnum = {}));
export var GetUsersIdsCommentsToidSortEnum;
(function (GetUsersIdsCommentsToidSortEnum) {
    GetUsersIdsCommentsToidSortEnum["Creation"] = "creation";
    GetUsersIdsCommentsToidSortEnum["Votes"] = "votes";
})(GetUsersIdsCommentsToidSortEnum || (GetUsersIdsCommentsToidSortEnum = {}));
var GetUsersIdsCommentsToidQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsCommentsToidQueryParams, _super);
    function GetUsersIdsCommentsToidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsToidQueryParams.prototype, "todate", void 0);
    return GetUsersIdsCommentsToidQueryParams;
}(SpeakeasyBase));
export { GetUsersIdsCommentsToidQueryParams };
var GetUsersIdsCommentsToidRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsCommentsToidRequest, _super);
    function GetUsersIdsCommentsToidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsCommentsToidPathParams)
    ], GetUsersIdsCommentsToidRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdsCommentsToidQueryParams)
    ], GetUsersIdsCommentsToidRequest.prototype, "queryParams", void 0);
    return GetUsersIdsCommentsToidRequest;
}(SpeakeasyBase));
export { GetUsersIdsCommentsToidRequest };
var GetUsersIdsCommentsToidResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsCommentsToidResponse, _super);
    function GetUsersIdsCommentsToidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsCommentsToidResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsToidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsToidResponse.prototype, "statusCode", void 0);
    return GetUsersIdsCommentsToidResponse;
}(SpeakeasyBase));
export { GetUsersIdsCommentsToidResponse };
