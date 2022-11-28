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
var JobScheduleDisablePathParams = /** @class */ (function (_super) {
    __extends(JobScheduleDisablePathParams, _super);
    function JobScheduleDisablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobScheduleId" }),
        __metadata("design:type", String)
    ], JobScheduleDisablePathParams.prototype, "jobScheduleId", void 0);
    return JobScheduleDisablePathParams;
}(SpeakeasyBase));
export { JobScheduleDisablePathParams };
var JobScheduleDisableQueryParams = /** @class */ (function (_super) {
    __extends(JobScheduleDisableQueryParams, _super);
    function JobScheduleDisableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobScheduleDisableQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobScheduleDisableQueryParams.prototype, "timeout", void 0);
    return JobScheduleDisableQueryParams;
}(SpeakeasyBase));
export { JobScheduleDisableQueryParams };
var JobScheduleDisableHeaders = /** @class */ (function (_super) {
    __extends(JobScheduleDisableHeaders, _super);
    function JobScheduleDisableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], JobScheduleDisableHeaders.prototype, "ifMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], JobScheduleDisableHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], JobScheduleDisableHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], JobScheduleDisableHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobScheduleDisableHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobScheduleDisableHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobScheduleDisableHeaders.prototype, "returnClientRequestId", void 0);
    return JobScheduleDisableHeaders;
}(SpeakeasyBase));
export { JobScheduleDisableHeaders };
var JobScheduleDisableRequest = /** @class */ (function (_super) {
    __extends(JobScheduleDisableRequest, _super);
    function JobScheduleDisableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobScheduleDisablePathParams)
    ], JobScheduleDisableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobScheduleDisableQueryParams)
    ], JobScheduleDisableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobScheduleDisableHeaders)
    ], JobScheduleDisableRequest.prototype, "headers", void 0);
    return JobScheduleDisableRequest;
}(SpeakeasyBase));
export { JobScheduleDisableRequest };
var JobScheduleDisableResponse = /** @class */ (function (_super) {
    __extends(JobScheduleDisableResponse, _super);
    function JobScheduleDisableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], JobScheduleDisableResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobScheduleDisableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], JobScheduleDisableResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobScheduleDisableResponse.prototype, "statusCode", void 0);
    return JobScheduleDisableResponse;
}(SpeakeasyBase));
export { JobScheduleDisableResponse };
