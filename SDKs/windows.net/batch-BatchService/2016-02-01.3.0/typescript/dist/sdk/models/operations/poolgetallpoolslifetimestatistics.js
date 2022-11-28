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
var PoolGetAllPoolsLifetimeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(PoolGetAllPoolsLifetimeStatisticsQueryParams, _super);
    function PoolGetAllPoolsLifetimeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolGetAllPoolsLifetimeStatisticsQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolGetAllPoolsLifetimeStatisticsQueryParams.prototype, "timeout", void 0);
    return PoolGetAllPoolsLifetimeStatisticsQueryParams;
}(SpeakeasyBase));
export { PoolGetAllPoolsLifetimeStatisticsQueryParams };
var PoolGetAllPoolsLifetimeStatisticsHeaders = /** @class */ (function (_super) {
    __extends(PoolGetAllPoolsLifetimeStatisticsHeaders, _super);
    function PoolGetAllPoolsLifetimeStatisticsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolGetAllPoolsLifetimeStatisticsHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolGetAllPoolsLifetimeStatisticsHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolGetAllPoolsLifetimeStatisticsHeaders.prototype, "returnClientRequestId", void 0);
    return PoolGetAllPoolsLifetimeStatisticsHeaders;
}(SpeakeasyBase));
export { PoolGetAllPoolsLifetimeStatisticsHeaders };
var PoolGetAllPoolsLifetimeStatisticsRequest = /** @class */ (function (_super) {
    __extends(PoolGetAllPoolsLifetimeStatisticsRequest, _super);
    function PoolGetAllPoolsLifetimeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PoolGetAllPoolsLifetimeStatisticsQueryParams)
    ], PoolGetAllPoolsLifetimeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PoolGetAllPoolsLifetimeStatisticsHeaders)
    ], PoolGetAllPoolsLifetimeStatisticsRequest.prototype, "headers", void 0);
    return PoolGetAllPoolsLifetimeStatisticsRequest;
}(SpeakeasyBase));
export { PoolGetAllPoolsLifetimeStatisticsRequest };
var PoolGetAllPoolsLifetimeStatisticsResponse = /** @class */ (function (_super) {
    __extends(PoolGetAllPoolsLifetimeStatisticsResponse, _super);
    function PoolGetAllPoolsLifetimeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PoolGetAllPoolsLifetimeStatisticsResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PoolGetAllPoolsLifetimeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PoolGetAllPoolsLifetimeStatisticsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PoolGetAllPoolsLifetimeStatisticsResponse.prototype, "poolStatistics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PoolGetAllPoolsLifetimeStatisticsResponse.prototype, "statusCode", void 0);
    return PoolGetAllPoolsLifetimeStatisticsResponse;
}(SpeakeasyBase));
export { PoolGetAllPoolsLifetimeStatisticsResponse };
