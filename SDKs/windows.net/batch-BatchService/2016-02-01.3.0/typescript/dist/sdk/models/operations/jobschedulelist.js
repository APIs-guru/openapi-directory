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
var JobScheduleListQueryParams = /** @class */ (function (_super) {
    __extends(JobScheduleListQueryParams, _super);
    function JobScheduleListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$expand" }),
        __metadata("design:type", String)
    ], JobScheduleListQueryParams.prototype, "dollarExpand", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], JobScheduleListQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$select" }),
        __metadata("design:type", String)
    ], JobScheduleListQueryParams.prototype, "dollarSelect", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobScheduleListQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxresults" }),
        __metadata("design:type", Number)
    ], JobScheduleListQueryParams.prototype, "maxresults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobScheduleListQueryParams.prototype, "timeout", void 0);
    return JobScheduleListQueryParams;
}(SpeakeasyBase));
export { JobScheduleListQueryParams };
var JobScheduleListHeaders = /** @class */ (function (_super) {
    __extends(JobScheduleListHeaders, _super);
    function JobScheduleListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobScheduleListHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobScheduleListHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobScheduleListHeaders.prototype, "returnClientRequestId", void 0);
    return JobScheduleListHeaders;
}(SpeakeasyBase));
export { JobScheduleListHeaders };
var JobScheduleListRequest = /** @class */ (function (_super) {
    __extends(JobScheduleListRequest, _super);
    function JobScheduleListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", JobScheduleListQueryParams)
    ], JobScheduleListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", JobScheduleListHeaders)
    ], JobScheduleListRequest.prototype, "headers", void 0);
    return JobScheduleListRequest;
}(SpeakeasyBase));
export { JobScheduleListRequest };
var JobScheduleListResponse = /** @class */ (function (_super) {
    __extends(JobScheduleListResponse, _super);
    function JobScheduleListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], JobScheduleListResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], JobScheduleListResponse.prototype, "cloudJobScheduleListResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], JobScheduleListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], JobScheduleListResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], JobScheduleListResponse.prototype, "statusCode", void 0);
    return JobScheduleListResponse;
}(SpeakeasyBase));
export { JobScheduleListResponse };
