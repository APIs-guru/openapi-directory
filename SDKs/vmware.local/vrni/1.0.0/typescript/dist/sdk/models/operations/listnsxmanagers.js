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
var ListNsxManagersQueryParams = /** @class */ (function (_super) {
    __extends(ListNsxManagersQueryParams, _super);
    function ListNsxManagersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ListNsxManagersQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" }),
        __metadata("design:type", Number)
    ], ListNsxManagersQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], ListNsxManagersQueryParams.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time" }),
        __metadata("design:type", Number)
    ], ListNsxManagersQueryParams.prototype, "startTime", void 0);
    return ListNsxManagersQueryParams;
}(SpeakeasyBase));
export { ListNsxManagersQueryParams };
var ListNsxManagersSecurity = /** @class */ (function (_super) {
    __extends(ListNsxManagersSecurity, _super);
    function ListNsxManagersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], ListNsxManagersSecurity.prototype, "apiKeyAuth", void 0);
    return ListNsxManagersSecurity;
}(SpeakeasyBase));
export { ListNsxManagersSecurity };
var ListNsxManagersRequest = /** @class */ (function (_super) {
    __extends(ListNsxManagersRequest, _super);
    function ListNsxManagersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListNsxManagersQueryParams)
    ], ListNsxManagersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListNsxManagersSecurity)
    ], ListNsxManagersRequest.prototype, "security", void 0);
    return ListNsxManagersRequest;
}(SpeakeasyBase));
export { ListNsxManagersRequest };
var ListNsxManagersResponse = /** @class */ (function (_super) {
    __extends(ListNsxManagersResponse, _super);
    function ListNsxManagersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], ListNsxManagersResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListNsxManagersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PagedListResponseWithTime)
    ], ListNsxManagersResponse.prototype, "pagedListResponseWithTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListNsxManagersResponse.prototype, "statusCode", void 0);
    return ListNsxManagersResponse;
}(SpeakeasyBase));
export { ListNsxManagersResponse };
