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
var TaskUpdatePathParams = /** @class */ (function (_super) {
    __extends(TaskUpdatePathParams, _super);
    function TaskUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], TaskUpdatePathParams.prototype, "jobId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], TaskUpdatePathParams.prototype, "taskId", void 0);
    return TaskUpdatePathParams;
}(SpeakeasyBase));
export { TaskUpdatePathParams };
var TaskUpdateQueryParams = /** @class */ (function (_super) {
    __extends(TaskUpdateQueryParams, _super);
    function TaskUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], TaskUpdateQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], TaskUpdateQueryParams.prototype, "timeout", void 0);
    return TaskUpdateQueryParams;
}(SpeakeasyBase));
export { TaskUpdateQueryParams };
var TaskUpdateHeaders = /** @class */ (function (_super) {
    __extends(TaskUpdateHeaders, _super);
    function TaskUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], TaskUpdateHeaders.prototype, "ifMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], TaskUpdateHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], TaskUpdateHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], TaskUpdateHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], TaskUpdateHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], TaskUpdateHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], TaskUpdateHeaders.prototype, "returnClientRequestId", void 0);
    return TaskUpdateHeaders;
}(SpeakeasyBase));
export { TaskUpdateHeaders };
var TaskUpdateRequest = /** @class */ (function (_super) {
    __extends(TaskUpdateRequest, _super);
    function TaskUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TaskUpdatePathParams)
    ], TaskUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TaskUpdateQueryParams)
    ], TaskUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TaskUpdateHeaders)
    ], TaskUpdateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], TaskUpdateRequest.prototype, "request", void 0);
    return TaskUpdateRequest;
}(SpeakeasyBase));
export { TaskUpdateRequest };
var TaskUpdateResponse = /** @class */ (function (_super) {
    __extends(TaskUpdateResponse, _super);
    function TaskUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TaskUpdateResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TaskUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], TaskUpdateResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TaskUpdateResponse.prototype, "statusCode", void 0);
    return TaskUpdateResponse;
}(SpeakeasyBase));
export { TaskUpdateResponse };
