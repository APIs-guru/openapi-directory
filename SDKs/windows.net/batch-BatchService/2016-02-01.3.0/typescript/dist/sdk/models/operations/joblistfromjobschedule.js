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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var JobListFromJobSchedulePathParams = /** @class */ (function (_super) {
    __extends(JobListFromJobSchedulePathParams, _super);
    function JobListFromJobSchedulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=jobScheduleId" }),
        __metadata("design:type", String)
    ], JobListFromJobSchedulePathParams.prototype, "jobScheduleId", void 0);
    return JobListFromJobSchedulePathParams;
}(SpeakeasyBase));
export { JobListFromJobSchedulePathParams };
var JobListFromJobScheduleQueryParams = /** @class */ (function (_super) {
    __extends(JobListFromJobScheduleQueryParams, _super);
    function JobListFromJobScheduleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$expand" }),
        __metadata("design:type", String)
    ], JobListFromJobScheduleQueryParams.prototype, "dollarExpand", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], JobListFromJobScheduleQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$select" }),
        __metadata("design:type", String)
    ], JobListFromJobScheduleQueryParams.prototype, "dollarSelect", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobListFromJobScheduleQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxresults" }),
        __metadata("design:type", Number)
    ], JobListFromJobScheduleQueryParams.prototype, "maxresults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobListFromJobScheduleQueryParams.prototype, "timeout", void 0);
    return JobListFromJobScheduleQueryParams;
}(SpeakeasyBase));
export { JobListFromJobScheduleQueryParams };
var JobListFromJobScheduleHeaders = /** @class */ (function (_super) {
    __extends(JobListFromJobScheduleHeaders, _super);
    function JobListFromJobScheduleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobListFromJobScheduleHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobListFromJobScheduleHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobListFromJobScheduleHeaders.prototype, "returnClientRequestId", void 0);
    return JobListFromJobScheduleHeaders;
}(SpeakeasyBase));
export { JobListFromJobScheduleHeaders };
var JobListFromJobScheduleRequest = /** @class */ (function (_super) {
    __extends(JobListFromJobScheduleRequest, _super);
    function JobListFromJobScheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", JobListFromJobSchedulePathParams)
    ], JobListFromJobScheduleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", JobListFromJobScheduleQueryParams)
    ], JobListFromJobScheduleRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", JobListFromJobScheduleHeaders)
    ], JobListFromJobScheduleRequest.prototype, "headers", void 0);
    return JobListFromJobScheduleRequest;
}(SpeakeasyBase));
export { JobListFromJobScheduleRequest };
var JobListFromJobScheduleResponse = /** @class */ (function (_super) {
    __extends(JobListFromJobScheduleResponse, _super);
    function JobListFromJobScheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], JobListFromJobScheduleResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], JobListFromJobScheduleResponse.prototype, "cloudJobListResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], JobListFromJobScheduleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], JobListFromJobScheduleResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], JobListFromJobScheduleResponse.prototype, "statusCode", void 0);
    return JobListFromJobScheduleResponse;
}(SpeakeasyBase));
export { JobListFromJobScheduleResponse };
