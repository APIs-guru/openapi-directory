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
var JobScheduleEnablePathParams = /** @class */ (function (_super) {
    __extends(JobScheduleEnablePathParams, _super);
    function JobScheduleEnablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=jobScheduleId" }),
        __metadata("design:type", String)
    ], JobScheduleEnablePathParams.prototype, "jobScheduleId", void 0);
    return JobScheduleEnablePathParams;
}(SpeakeasyBase));
export { JobScheduleEnablePathParams };
var JobScheduleEnableQueryParams = /** @class */ (function (_super) {
    __extends(JobScheduleEnableQueryParams, _super);
    function JobScheduleEnableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobScheduleEnableQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobScheduleEnableQueryParams.prototype, "timeout", void 0);
    return JobScheduleEnableQueryParams;
}(SpeakeasyBase));
export { JobScheduleEnableQueryParams };
var JobScheduleEnableHeaders = /** @class */ (function (_super) {
    __extends(JobScheduleEnableHeaders, _super);
    function JobScheduleEnableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], JobScheduleEnableHeaders.prototype, "ifMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], JobScheduleEnableHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], JobScheduleEnableHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], JobScheduleEnableHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobScheduleEnableHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobScheduleEnableHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobScheduleEnableHeaders.prototype, "returnClientRequestId", void 0);
    return JobScheduleEnableHeaders;
}(SpeakeasyBase));
export { JobScheduleEnableHeaders };
var JobScheduleEnableRequest = /** @class */ (function (_super) {
    __extends(JobScheduleEnableRequest, _super);
    function JobScheduleEnableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", JobScheduleEnablePathParams)
    ], JobScheduleEnableRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", JobScheduleEnableQueryParams)
    ], JobScheduleEnableRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", JobScheduleEnableHeaders)
    ], JobScheduleEnableRequest.prototype, "headers", void 0);
    return JobScheduleEnableRequest;
}(SpeakeasyBase));
export { JobScheduleEnableRequest };
var JobScheduleEnableResponse = /** @class */ (function (_super) {
    __extends(JobScheduleEnableResponse, _super);
    function JobScheduleEnableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], JobScheduleEnableResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], JobScheduleEnableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], JobScheduleEnableResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], JobScheduleEnableResponse.prototype, "statusCode", void 0);
    return JobScheduleEnableResponse;
}(SpeakeasyBase));
export { JobScheduleEnableResponse };
