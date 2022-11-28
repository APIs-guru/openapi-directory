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
var ListDistributedVirtualPortgroupsQueryParams = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualPortgroupsQueryParams, _super);
    function ListDistributedVirtualPortgroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ListDistributedVirtualPortgroupsQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" }),
        __metadata("design:type", Number)
    ], ListDistributedVirtualPortgroupsQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], ListDistributedVirtualPortgroupsQueryParams.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time" }),
        __metadata("design:type", Number)
    ], ListDistributedVirtualPortgroupsQueryParams.prototype, "startTime", void 0);
    return ListDistributedVirtualPortgroupsQueryParams;
}(SpeakeasyBase));
export { ListDistributedVirtualPortgroupsQueryParams };
var ListDistributedVirtualPortgroupsSecurity = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualPortgroupsSecurity, _super);
    function ListDistributedVirtualPortgroupsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], ListDistributedVirtualPortgroupsSecurity.prototype, "apiKeyAuth", void 0);
    return ListDistributedVirtualPortgroupsSecurity;
}(SpeakeasyBase));
export { ListDistributedVirtualPortgroupsSecurity };
var ListDistributedVirtualPortgroupsRequest = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualPortgroupsRequest, _super);
    function ListDistributedVirtualPortgroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDistributedVirtualPortgroupsQueryParams)
    ], ListDistributedVirtualPortgroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDistributedVirtualPortgroupsSecurity)
    ], ListDistributedVirtualPortgroupsRequest.prototype, "security", void 0);
    return ListDistributedVirtualPortgroupsRequest;
}(SpeakeasyBase));
export { ListDistributedVirtualPortgroupsRequest };
var ListDistributedVirtualPortgroupsResponse = /** @class */ (function (_super) {
    __extends(ListDistributedVirtualPortgroupsResponse, _super);
    function ListDistributedVirtualPortgroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], ListDistributedVirtualPortgroupsResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDistributedVirtualPortgroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PagedListResponseWithTime)
    ], ListDistributedVirtualPortgroupsResponse.prototype, "pagedListResponseWithTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDistributedVirtualPortgroupsResponse.prototype, "statusCode", void 0);
    return ListDistributedVirtualPortgroupsResponse;
}(SpeakeasyBase));
export { ListDistributedVirtualPortgroupsResponse };
