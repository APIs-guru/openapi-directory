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
var JobListPreparationAndReleaseTaskStatusPathParams = /** @class */ (function (_super) {
    __extends(JobListPreparationAndReleaseTaskStatusPathParams, _super);
    function JobListPreparationAndReleaseTaskStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], JobListPreparationAndReleaseTaskStatusPathParams.prototype, "jobId", void 0);
    return JobListPreparationAndReleaseTaskStatusPathParams;
}(SpeakeasyBase));
export { JobListPreparationAndReleaseTaskStatusPathParams };
var JobListPreparationAndReleaseTaskStatusQueryParams = /** @class */ (function (_super) {
    __extends(JobListPreparationAndReleaseTaskStatusQueryParams, _super);
    function JobListPreparationAndReleaseTaskStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], JobListPreparationAndReleaseTaskStatusQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$select" }),
        __metadata("design:type", String)
    ], JobListPreparationAndReleaseTaskStatusQueryParams.prototype, "dollarSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobListPreparationAndReleaseTaskStatusQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxresults" }),
        __metadata("design:type", Number)
    ], JobListPreparationAndReleaseTaskStatusQueryParams.prototype, "maxresults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobListPreparationAndReleaseTaskStatusQueryParams.prototype, "timeout", void 0);
    return JobListPreparationAndReleaseTaskStatusQueryParams;
}(SpeakeasyBase));
export { JobListPreparationAndReleaseTaskStatusQueryParams };
var JobListPreparationAndReleaseTaskStatusHeaders = /** @class */ (function (_super) {
    __extends(JobListPreparationAndReleaseTaskStatusHeaders, _super);
    function JobListPreparationAndReleaseTaskStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobListPreparationAndReleaseTaskStatusHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobListPreparationAndReleaseTaskStatusHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobListPreparationAndReleaseTaskStatusHeaders.prototype, "returnClientRequestId", void 0);
    return JobListPreparationAndReleaseTaskStatusHeaders;
}(SpeakeasyBase));
export { JobListPreparationAndReleaseTaskStatusHeaders };
var JobListPreparationAndReleaseTaskStatusRequest = /** @class */ (function (_super) {
    __extends(JobListPreparationAndReleaseTaskStatusRequest, _super);
    function JobListPreparationAndReleaseTaskStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobListPreparationAndReleaseTaskStatusPathParams)
    ], JobListPreparationAndReleaseTaskStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobListPreparationAndReleaseTaskStatusQueryParams)
    ], JobListPreparationAndReleaseTaskStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobListPreparationAndReleaseTaskStatusHeaders)
    ], JobListPreparationAndReleaseTaskStatusRequest.prototype, "headers", void 0);
    return JobListPreparationAndReleaseTaskStatusRequest;
}(SpeakeasyBase));
export { JobListPreparationAndReleaseTaskStatusRequest };
var JobListPreparationAndReleaseTaskStatusResponse = /** @class */ (function (_super) {
    __extends(JobListPreparationAndReleaseTaskStatusResponse, _super);
    function JobListPreparationAndReleaseTaskStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], JobListPreparationAndReleaseTaskStatusResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], JobListPreparationAndReleaseTaskStatusResponse.prototype, "cloudJobListPreparationAndReleaseTaskStatusResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobListPreparationAndReleaseTaskStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], JobListPreparationAndReleaseTaskStatusResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobListPreparationAndReleaseTaskStatusResponse.prototype, "statusCode", void 0);
    return JobListPreparationAndReleaseTaskStatusResponse;
}(SpeakeasyBase));
export { JobListPreparationAndReleaseTaskStatusResponse };
