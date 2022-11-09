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
var FileDeleteFromComputeNodePathParams = /** @class */ (function (_super) {
    __extends(FileDeleteFromComputeNodePathParams, _super);
    function FileDeleteFromComputeNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" }),
        __metadata("design:type", String)
    ], FileDeleteFromComputeNodePathParams.prototype, "fileName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], FileDeleteFromComputeNodePathParams.prototype, "nodeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], FileDeleteFromComputeNodePathParams.prototype, "poolId", void 0);
    return FileDeleteFromComputeNodePathParams;
}(SpeakeasyBase));
export { FileDeleteFromComputeNodePathParams };
var FileDeleteFromComputeNodeQueryParams = /** @class */ (function (_super) {
    __extends(FileDeleteFromComputeNodeQueryParams, _super);
    function FileDeleteFromComputeNodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], FileDeleteFromComputeNodeQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=recursive" }),
        __metadata("design:type", Boolean)
    ], FileDeleteFromComputeNodeQueryParams.prototype, "recursive", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], FileDeleteFromComputeNodeQueryParams.prototype, "timeout", void 0);
    return FileDeleteFromComputeNodeQueryParams;
}(SpeakeasyBase));
export { FileDeleteFromComputeNodeQueryParams };
var FileDeleteFromComputeNodeHeaders = /** @class */ (function (_super) {
    __extends(FileDeleteFromComputeNodeHeaders, _super);
    function FileDeleteFromComputeNodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], FileDeleteFromComputeNodeHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], FileDeleteFromComputeNodeHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], FileDeleteFromComputeNodeHeaders.prototype, "returnClientRequestId", void 0);
    return FileDeleteFromComputeNodeHeaders;
}(SpeakeasyBase));
export { FileDeleteFromComputeNodeHeaders };
var FileDeleteFromComputeNodeRequest = /** @class */ (function (_super) {
    __extends(FileDeleteFromComputeNodeRequest, _super);
    function FileDeleteFromComputeNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FileDeleteFromComputeNodePathParams)
    ], FileDeleteFromComputeNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileDeleteFromComputeNodeQueryParams)
    ], FileDeleteFromComputeNodeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileDeleteFromComputeNodeHeaders)
    ], FileDeleteFromComputeNodeRequest.prototype, "headers", void 0);
    return FileDeleteFromComputeNodeRequest;
}(SpeakeasyBase));
export { FileDeleteFromComputeNodeRequest };
var FileDeleteFromComputeNodeResponse = /** @class */ (function (_super) {
    __extends(FileDeleteFromComputeNodeResponse, _super);
    function FileDeleteFromComputeNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FileDeleteFromComputeNodeResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FileDeleteFromComputeNodeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FileDeleteFromComputeNodeResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FileDeleteFromComputeNodeResponse.prototype, "statusCode", void 0);
    return FileDeleteFromComputeNodeResponse;
}(SpeakeasyBase));
export { FileDeleteFromComputeNodeResponse };
