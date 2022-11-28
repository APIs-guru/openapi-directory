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
var JobDeletePathParams = /** @class */ (function (_super) {
    __extends(JobDeletePathParams, _super);
    function JobDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], JobDeletePathParams.prototype, "jobId", void 0);
    return JobDeletePathParams;
}(SpeakeasyBase));
export { JobDeletePathParams };
var JobDeleteQueryParams = /** @class */ (function (_super) {
    __extends(JobDeleteQueryParams, _super);
    function JobDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobDeleteQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobDeleteQueryParams.prototype, "timeout", void 0);
    return JobDeleteQueryParams;
}(SpeakeasyBase));
export { JobDeleteQueryParams };
var JobDeleteHeaders = /** @class */ (function (_super) {
    __extends(JobDeleteHeaders, _super);
    function JobDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], JobDeleteHeaders.prototype, "ifMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], JobDeleteHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], JobDeleteHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], JobDeleteHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobDeleteHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobDeleteHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobDeleteHeaders.prototype, "returnClientRequestId", void 0);
    return JobDeleteHeaders;
}(SpeakeasyBase));
export { JobDeleteHeaders };
var JobDeleteRequest = /** @class */ (function (_super) {
    __extends(JobDeleteRequest, _super);
    function JobDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobDeletePathParams)
    ], JobDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobDeleteQueryParams)
    ], JobDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobDeleteHeaders)
    ], JobDeleteRequest.prototype, "headers", void 0);
    return JobDeleteRequest;
}(SpeakeasyBase));
export { JobDeleteRequest };
var JobDeleteResponse = /** @class */ (function (_super) {
    __extends(JobDeleteResponse, _super);
    function JobDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], JobDeleteResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], JobDeleteResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobDeleteResponse.prototype, "statusCode", void 0);
    return JobDeleteResponse;
}(SpeakeasyBase));
export { JobDeleteResponse };
