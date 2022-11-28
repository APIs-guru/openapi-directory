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
var GetUsersIdTopQuestionTagsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdTopQuestionTagsPathParams, _super);
    function GetUsersIdTopQuestionTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetUsersIdTopQuestionTagsPathParams.prototype, "id", void 0);
    return GetUsersIdTopQuestionTagsPathParams;
}(SpeakeasyBase));
export { GetUsersIdTopQuestionTagsPathParams };
var GetUsersIdTopQuestionTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdTopQuestionTagsQueryParams, _super);
    function GetUsersIdTopQuestionTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdTopQuestionTagsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdTopQuestionTagsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdTopQuestionTagsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdTopQuestionTagsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdTopQuestionTagsQueryParams.prototype, "site", void 0);
    return GetUsersIdTopQuestionTagsQueryParams;
}(SpeakeasyBase));
export { GetUsersIdTopQuestionTagsQueryParams };
var GetUsersIdTopQuestionTagsRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdTopQuestionTagsRequest, _super);
    function GetUsersIdTopQuestionTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdTopQuestionTagsPathParams)
    ], GetUsersIdTopQuestionTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdTopQuestionTagsQueryParams)
    ], GetUsersIdTopQuestionTagsRequest.prototype, "queryParams", void 0);
    return GetUsersIdTopQuestionTagsRequest;
}(SpeakeasyBase));
export { GetUsersIdTopQuestionTagsRequest };
var GetUsersIdTopQuestionTagsResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdTopQuestionTagsResponse, _super);
    function GetUsersIdTopQuestionTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdTopQuestionTagsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdTopQuestionTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdTopQuestionTagsResponse.prototype, "statusCode", void 0);
    return GetUsersIdTopQuestionTagsResponse;
}(SpeakeasyBase));
export { GetUsersIdTopQuestionTagsResponse };
