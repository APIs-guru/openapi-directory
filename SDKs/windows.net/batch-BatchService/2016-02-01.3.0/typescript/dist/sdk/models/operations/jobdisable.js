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
var JobDisablePathParams = /** @class */ (function (_super) {
    __extends(JobDisablePathParams, _super);
    function JobDisablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], JobDisablePathParams.prototype, "jobId", void 0);
    return JobDisablePathParams;
}(SpeakeasyBase));
export { JobDisablePathParams };
var JobDisableQueryParams = /** @class */ (function (_super) {
    __extends(JobDisableQueryParams, _super);
    function JobDisableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobDisableQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobDisableQueryParams.prototype, "timeout", void 0);
    return JobDisableQueryParams;
}(SpeakeasyBase));
export { JobDisableQueryParams };
var JobDisableHeaders = /** @class */ (function (_super) {
    __extends(JobDisableHeaders, _super);
    function JobDisableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], JobDisableHeaders.prototype, "ifMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], JobDisableHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], JobDisableHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], JobDisableHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobDisableHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobDisableHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobDisableHeaders.prototype, "returnClientRequestId", void 0);
    return JobDisableHeaders;
}(SpeakeasyBase));
export { JobDisableHeaders };
var JobDisableRequest = /** @class */ (function (_super) {
    __extends(JobDisableRequest, _super);
    function JobDisableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", JobDisablePathParams)
    ], JobDisableRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", JobDisableQueryParams)
    ], JobDisableRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", JobDisableHeaders)
    ], JobDisableRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], JobDisableRequest.prototype, "request", void 0);
    return JobDisableRequest;
}(SpeakeasyBase));
export { JobDisableRequest };
var JobDisableResponse = /** @class */ (function (_super) {
    __extends(JobDisableResponse, _super);
    function JobDisableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], JobDisableResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], JobDisableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], JobDisableResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], JobDisableResponse.prototype, "statusCode", void 0);
    return JobDisableResponse;
}(SpeakeasyBase));
export { JobDisableResponse };
