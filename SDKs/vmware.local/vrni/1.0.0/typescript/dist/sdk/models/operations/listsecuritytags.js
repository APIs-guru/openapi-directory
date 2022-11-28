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
import * as shared from "../shared";
var ListSecurityTagsQueryParams = /** @class */ (function (_super) {
    __extends(ListSecurityTagsQueryParams, _super);
    function ListSecurityTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ListSecurityTagsQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" }),
        __metadata("design:type", Number)
    ], ListSecurityTagsQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], ListSecurityTagsQueryParams.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time" }),
        __metadata("design:type", Number)
    ], ListSecurityTagsQueryParams.prototype, "startTime", void 0);
    return ListSecurityTagsQueryParams;
}(SpeakeasyBase));
export { ListSecurityTagsQueryParams };
var ListSecurityTagsSecurity = /** @class */ (function (_super) {
    __extends(ListSecurityTagsSecurity, _super);
    function ListSecurityTagsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], ListSecurityTagsSecurity.prototype, "apiKeyAuth", void 0);
    return ListSecurityTagsSecurity;
}(SpeakeasyBase));
export { ListSecurityTagsSecurity };
var ListSecurityTagsRequest = /** @class */ (function (_super) {
    __extends(ListSecurityTagsRequest, _super);
    function ListSecurityTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSecurityTagsQueryParams)
    ], ListSecurityTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSecurityTagsSecurity)
    ], ListSecurityTagsRequest.prototype, "security", void 0);
    return ListSecurityTagsRequest;
}(SpeakeasyBase));
export { ListSecurityTagsRequest };
var ListSecurityTagsResponse = /** @class */ (function (_super) {
    __extends(ListSecurityTagsResponse, _super);
    function ListSecurityTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], ListSecurityTagsResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSecurityTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PagedListResponseWithTime)
    ], ListSecurityTagsResponse.prototype, "pagedListResponseWithTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSecurityTagsResponse.prototype, "statusCode", void 0);
    return ListSecurityTagsResponse;
}(SpeakeasyBase));
export { ListSecurityTagsResponse };
