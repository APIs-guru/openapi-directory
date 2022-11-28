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
var FileDeleteFromTaskPathParams = /** @class */ (function (_super) {
    __extends(FileDeleteFromTaskPathParams, _super);
    function FileDeleteFromTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileName" }),
        __metadata("design:type", String)
    ], FileDeleteFromTaskPathParams.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], FileDeleteFromTaskPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], FileDeleteFromTaskPathParams.prototype, "taskId", void 0);
    return FileDeleteFromTaskPathParams;
}(SpeakeasyBase));
export { FileDeleteFromTaskPathParams };
var FileDeleteFromTaskQueryParams = /** @class */ (function (_super) {
    __extends(FileDeleteFromTaskQueryParams, _super);
    function FileDeleteFromTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], FileDeleteFromTaskQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" }),
        __metadata("design:type", Boolean)
    ], FileDeleteFromTaskQueryParams.prototype, "recursive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], FileDeleteFromTaskQueryParams.prototype, "timeout", void 0);
    return FileDeleteFromTaskQueryParams;
}(SpeakeasyBase));
export { FileDeleteFromTaskQueryParams };
var FileDeleteFromTaskHeaders = /** @class */ (function (_super) {
    __extends(FileDeleteFromTaskHeaders, _super);
    function FileDeleteFromTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], FileDeleteFromTaskHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], FileDeleteFromTaskHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], FileDeleteFromTaskHeaders.prototype, "returnClientRequestId", void 0);
    return FileDeleteFromTaskHeaders;
}(SpeakeasyBase));
export { FileDeleteFromTaskHeaders };
var FileDeleteFromTaskRequest = /** @class */ (function (_super) {
    __extends(FileDeleteFromTaskRequest, _super);
    function FileDeleteFromTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileDeleteFromTaskPathParams)
    ], FileDeleteFromTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileDeleteFromTaskQueryParams)
    ], FileDeleteFromTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileDeleteFromTaskHeaders)
    ], FileDeleteFromTaskRequest.prototype, "headers", void 0);
    return FileDeleteFromTaskRequest;
}(SpeakeasyBase));
export { FileDeleteFromTaskRequest };
var FileDeleteFromTaskResponse = /** @class */ (function (_super) {
    __extends(FileDeleteFromTaskResponse, _super);
    function FileDeleteFromTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FileDeleteFromTaskResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FileDeleteFromTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FileDeleteFromTaskResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FileDeleteFromTaskResponse.prototype, "statusCode", void 0);
    return FileDeleteFromTaskResponse;
}(SpeakeasyBase));
export { FileDeleteFromTaskResponse };
