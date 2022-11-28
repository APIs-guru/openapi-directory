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
var JobGetAllJobsLifetimeStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(JobGetAllJobsLifetimeStatisticsQueryParams, _super);
    function JobGetAllJobsLifetimeStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobGetAllJobsLifetimeStatisticsQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobGetAllJobsLifetimeStatisticsQueryParams.prototype, "timeout", void 0);
    return JobGetAllJobsLifetimeStatisticsQueryParams;
}(SpeakeasyBase));
export { JobGetAllJobsLifetimeStatisticsQueryParams };
var JobGetAllJobsLifetimeStatisticsHeaders = /** @class */ (function (_super) {
    __extends(JobGetAllJobsLifetimeStatisticsHeaders, _super);
    function JobGetAllJobsLifetimeStatisticsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobGetAllJobsLifetimeStatisticsHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobGetAllJobsLifetimeStatisticsHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobGetAllJobsLifetimeStatisticsHeaders.prototype, "returnClientRequestId", void 0);
    return JobGetAllJobsLifetimeStatisticsHeaders;
}(SpeakeasyBase));
export { JobGetAllJobsLifetimeStatisticsHeaders };
var JobGetAllJobsLifetimeStatisticsRequest = /** @class */ (function (_super) {
    __extends(JobGetAllJobsLifetimeStatisticsRequest, _super);
    function JobGetAllJobsLifetimeStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobGetAllJobsLifetimeStatisticsQueryParams)
    ], JobGetAllJobsLifetimeStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobGetAllJobsLifetimeStatisticsHeaders)
    ], JobGetAllJobsLifetimeStatisticsRequest.prototype, "headers", void 0);
    return JobGetAllJobsLifetimeStatisticsRequest;
}(SpeakeasyBase));
export { JobGetAllJobsLifetimeStatisticsRequest };
var JobGetAllJobsLifetimeStatisticsResponse = /** @class */ (function (_super) {
    __extends(JobGetAllJobsLifetimeStatisticsResponse, _super);
    function JobGetAllJobsLifetimeStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], JobGetAllJobsLifetimeStatisticsResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobGetAllJobsLifetimeStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], JobGetAllJobsLifetimeStatisticsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], JobGetAllJobsLifetimeStatisticsResponse.prototype, "jobStatistics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobGetAllJobsLifetimeStatisticsResponse.prototype, "statusCode", void 0);
    return JobGetAllJobsLifetimeStatisticsResponse;
}(SpeakeasyBase));
export { JobGetAllJobsLifetimeStatisticsResponse };
