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
var FileGetFromTaskPathParams = /** @class */ (function (_super) {
    __extends(FileGetFromTaskPathParams, _super);
    function FileGetFromTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" }),
        __metadata("design:type", String)
    ], FileGetFromTaskPathParams.prototype, "fileName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], FileGetFromTaskPathParams.prototype, "jobId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], FileGetFromTaskPathParams.prototype, "taskId", void 0);
    return FileGetFromTaskPathParams;
}(SpeakeasyBase));
export { FileGetFromTaskPathParams };
var FileGetFromTaskQueryParams = /** @class */ (function (_super) {
    __extends(FileGetFromTaskQueryParams, _super);
    function FileGetFromTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], FileGetFromTaskQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], FileGetFromTaskQueryParams.prototype, "timeout", void 0);
    return FileGetFromTaskQueryParams;
}(SpeakeasyBase));
export { FileGetFromTaskQueryParams };
var FileGetFromTaskHeaders = /** @class */ (function (_super) {
    __extends(FileGetFromTaskHeaders, _super);
    function FileGetFromTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], FileGetFromTaskHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], FileGetFromTaskHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], FileGetFromTaskHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], FileGetFromTaskHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-range" }),
        __metadata("design:type", String)
    ], FileGetFromTaskHeaders.prototype, "ocpRange", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], FileGetFromTaskHeaders.prototype, "returnClientRequestId", void 0);
    return FileGetFromTaskHeaders;
}(SpeakeasyBase));
export { FileGetFromTaskHeaders };
var FileGetFromTaskRequest = /** @class */ (function (_super) {
    __extends(FileGetFromTaskRequest, _super);
    function FileGetFromTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FileGetFromTaskPathParams)
    ], FileGetFromTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileGetFromTaskQueryParams)
    ], FileGetFromTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileGetFromTaskHeaders)
    ], FileGetFromTaskRequest.prototype, "headers", void 0);
    return FileGetFromTaskRequest;
}(SpeakeasyBase));
export { FileGetFromTaskRequest };
var FileGetFromTaskResponse = /** @class */ (function (_super) {
    __extends(FileGetFromTaskResponse, _super);
    function FileGetFromTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FileGetFromTaskResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FileGetFromTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], FileGetFromTaskResponse.prototype, "fileGetFromTask200ApplicationJsonBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FileGetFromTaskResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FileGetFromTaskResponse.prototype, "statusCode", void 0);
    return FileGetFromTaskResponse;
}(SpeakeasyBase));
export { FileGetFromTaskResponse };
