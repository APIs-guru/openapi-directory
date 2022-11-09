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
var JobScheduleUpdatePathParams = /** @class */ (function (_super) {
    __extends(JobScheduleUpdatePathParams, _super);
    function JobScheduleUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=jobScheduleId" }),
        __metadata("design:type", String)
    ], JobScheduleUpdatePathParams.prototype, "jobScheduleId", void 0);
    return JobScheduleUpdatePathParams;
}(SpeakeasyBase));
export { JobScheduleUpdatePathParams };
var JobScheduleUpdateQueryParams = /** @class */ (function (_super) {
    __extends(JobScheduleUpdateQueryParams, _super);
    function JobScheduleUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobScheduleUpdateQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobScheduleUpdateQueryParams.prototype, "timeout", void 0);
    return JobScheduleUpdateQueryParams;
}(SpeakeasyBase));
export { JobScheduleUpdateQueryParams };
var JobScheduleUpdateHeaders = /** @class */ (function (_super) {
    __extends(JobScheduleUpdateHeaders, _super);
    function JobScheduleUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], JobScheduleUpdateHeaders.prototype, "ifMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], JobScheduleUpdateHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], JobScheduleUpdateHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], JobScheduleUpdateHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobScheduleUpdateHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobScheduleUpdateHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobScheduleUpdateHeaders.prototype, "returnClientRequestId", void 0);
    return JobScheduleUpdateHeaders;
}(SpeakeasyBase));
export { JobScheduleUpdateHeaders };
var JobScheduleUpdateRequest = /** @class */ (function (_super) {
    __extends(JobScheduleUpdateRequest, _super);
    function JobScheduleUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", JobScheduleUpdatePathParams)
    ], JobScheduleUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", JobScheduleUpdateQueryParams)
    ], JobScheduleUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", JobScheduleUpdateHeaders)
    ], JobScheduleUpdateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], JobScheduleUpdateRequest.prototype, "request", void 0);
    return JobScheduleUpdateRequest;
}(SpeakeasyBase));
export { JobScheduleUpdateRequest };
var JobScheduleUpdateResponse = /** @class */ (function (_super) {
    __extends(JobScheduleUpdateResponse, _super);
    function JobScheduleUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], JobScheduleUpdateResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], JobScheduleUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], JobScheduleUpdateResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], JobScheduleUpdateResponse.prototype, "statusCode", void 0);
    return JobScheduleUpdateResponse;
}(SpeakeasyBase));
export { JobScheduleUpdateResponse };
