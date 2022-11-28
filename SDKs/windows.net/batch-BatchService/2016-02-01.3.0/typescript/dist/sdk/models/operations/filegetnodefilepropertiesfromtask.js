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
var FileGetNodeFilePropertiesFromTaskPathParams = /** @class */ (function (_super) {
    __extends(FileGetNodeFilePropertiesFromTaskPathParams, _super);
    function FileGetNodeFilePropertiesFromTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileName" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromTaskPathParams.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromTaskPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromTaskPathParams.prototype, "taskId", void 0);
    return FileGetNodeFilePropertiesFromTaskPathParams;
}(SpeakeasyBase));
export { FileGetNodeFilePropertiesFromTaskPathParams };
var FileGetNodeFilePropertiesFromTaskQueryParams = /** @class */ (function (_super) {
    __extends(FileGetNodeFilePropertiesFromTaskQueryParams, _super);
    function FileGetNodeFilePropertiesFromTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromTaskQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], FileGetNodeFilePropertiesFromTaskQueryParams.prototype, "timeout", void 0);
    return FileGetNodeFilePropertiesFromTaskQueryParams;
}(SpeakeasyBase));
export { FileGetNodeFilePropertiesFromTaskQueryParams };
var FileGetNodeFilePropertiesFromTaskHeaders = /** @class */ (function (_super) {
    __extends(FileGetNodeFilePropertiesFromTaskHeaders, _super);
    function FileGetNodeFilePropertiesFromTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromTaskHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromTaskHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromTaskHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromTaskHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], FileGetNodeFilePropertiesFromTaskHeaders.prototype, "returnClientRequestId", void 0);
    return FileGetNodeFilePropertiesFromTaskHeaders;
}(SpeakeasyBase));
export { FileGetNodeFilePropertiesFromTaskHeaders };
var FileGetNodeFilePropertiesFromTaskRequest = /** @class */ (function (_super) {
    __extends(FileGetNodeFilePropertiesFromTaskRequest, _super);
    function FileGetNodeFilePropertiesFromTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileGetNodeFilePropertiesFromTaskPathParams)
    ], FileGetNodeFilePropertiesFromTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileGetNodeFilePropertiesFromTaskQueryParams)
    ], FileGetNodeFilePropertiesFromTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileGetNodeFilePropertiesFromTaskHeaders)
    ], FileGetNodeFilePropertiesFromTaskRequest.prototype, "headers", void 0);
    return FileGetNodeFilePropertiesFromTaskRequest;
}(SpeakeasyBase));
export { FileGetNodeFilePropertiesFromTaskRequest };
var FileGetNodeFilePropertiesFromTaskResponse = /** @class */ (function (_super) {
    __extends(FileGetNodeFilePropertiesFromTaskResponse, _super);
    function FileGetNodeFilePropertiesFromTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FileGetNodeFilePropertiesFromTaskResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FileGetNodeFilePropertiesFromTaskResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FileGetNodeFilePropertiesFromTaskResponse.prototype, "statusCode", void 0);
    return FileGetNodeFilePropertiesFromTaskResponse;
}(SpeakeasyBase));
export { FileGetNodeFilePropertiesFromTaskResponse };
