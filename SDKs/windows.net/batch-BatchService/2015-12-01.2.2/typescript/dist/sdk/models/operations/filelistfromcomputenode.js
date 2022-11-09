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
var FileListFromComputeNodePathParams = /** @class */ (function (_super) {
    __extends(FileListFromComputeNodePathParams, _super);
    function FileListFromComputeNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], FileListFromComputeNodePathParams.prototype, "nodeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], FileListFromComputeNodePathParams.prototype, "poolId", void 0);
    return FileListFromComputeNodePathParams;
}(SpeakeasyBase));
export { FileListFromComputeNodePathParams };
var FileListFromComputeNodeQueryParams = /** @class */ (function (_super) {
    __extends(FileListFromComputeNodeQueryParams, _super);
    function FileListFromComputeNodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], FileListFromComputeNodeQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], FileListFromComputeNodeQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxresults" }),
        __metadata("design:type", Number)
    ], FileListFromComputeNodeQueryParams.prototype, "maxresults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=recursive" }),
        __metadata("design:type", Boolean)
    ], FileListFromComputeNodeQueryParams.prototype, "recursive", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], FileListFromComputeNodeQueryParams.prototype, "timeout", void 0);
    return FileListFromComputeNodeQueryParams;
}(SpeakeasyBase));
export { FileListFromComputeNodeQueryParams };
var FileListFromComputeNodeHeaders = /** @class */ (function (_super) {
    __extends(FileListFromComputeNodeHeaders, _super);
    function FileListFromComputeNodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], FileListFromComputeNodeHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], FileListFromComputeNodeHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], FileListFromComputeNodeHeaders.prototype, "returnClientRequestId", void 0);
    return FileListFromComputeNodeHeaders;
}(SpeakeasyBase));
export { FileListFromComputeNodeHeaders };
var FileListFromComputeNodeRequest = /** @class */ (function (_super) {
    __extends(FileListFromComputeNodeRequest, _super);
    function FileListFromComputeNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FileListFromComputeNodePathParams)
    ], FileListFromComputeNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileListFromComputeNodeQueryParams)
    ], FileListFromComputeNodeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileListFromComputeNodeHeaders)
    ], FileListFromComputeNodeRequest.prototype, "headers", void 0);
    return FileListFromComputeNodeRequest;
}(SpeakeasyBase));
export { FileListFromComputeNodeRequest };
var FileListFromComputeNodeResponse = /** @class */ (function (_super) {
    __extends(FileListFromComputeNodeResponse, _super);
    function FileListFromComputeNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FileListFromComputeNodeResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FileListFromComputeNodeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FileListFromComputeNodeResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FileListFromComputeNodeResponse.prototype, "nodeFileListResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FileListFromComputeNodeResponse.prototype, "statusCode", void 0);
    return FileListFromComputeNodeResponse;
}(SpeakeasyBase));
export { FileListFromComputeNodeResponse };
