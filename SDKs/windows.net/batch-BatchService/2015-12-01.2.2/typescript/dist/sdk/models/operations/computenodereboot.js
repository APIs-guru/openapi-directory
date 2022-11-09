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
var ComputeNodeRebootPathParams = /** @class */ (function (_super) {
    __extends(ComputeNodeRebootPathParams, _super);
    function ComputeNodeRebootPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ComputeNodeRebootPathParams.prototype, "nodeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], ComputeNodeRebootPathParams.prototype, "poolId", void 0);
    return ComputeNodeRebootPathParams;
}(SpeakeasyBase));
export { ComputeNodeRebootPathParams };
var ComputeNodeRebootQueryParams = /** @class */ (function (_super) {
    __extends(ComputeNodeRebootQueryParams, _super);
    function ComputeNodeRebootQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ComputeNodeRebootQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], ComputeNodeRebootQueryParams.prototype, "timeout", void 0);
    return ComputeNodeRebootQueryParams;
}(SpeakeasyBase));
export { ComputeNodeRebootQueryParams };
var ComputeNodeRebootHeaders = /** @class */ (function (_super) {
    __extends(ComputeNodeRebootHeaders, _super);
    function ComputeNodeRebootHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], ComputeNodeRebootHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], ComputeNodeRebootHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], ComputeNodeRebootHeaders.prototype, "returnClientRequestId", void 0);
    return ComputeNodeRebootHeaders;
}(SpeakeasyBase));
export { ComputeNodeRebootHeaders };
var ComputeNodeRebootRequest = /** @class */ (function (_super) {
    __extends(ComputeNodeRebootRequest, _super);
    function ComputeNodeRebootRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeRebootPathParams)
    ], ComputeNodeRebootRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeRebootQueryParams)
    ], ComputeNodeRebootRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeRebootHeaders)
    ], ComputeNodeRebootRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ComputeNodeRebootRequest.prototype, "request", void 0);
    return ComputeNodeRebootRequest;
}(SpeakeasyBase));
export { ComputeNodeRebootRequest };
var ComputeNodeRebootResponse = /** @class */ (function (_super) {
    __extends(ComputeNodeRebootResponse, _super);
    function ComputeNodeRebootResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ComputeNodeRebootResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComputeNodeRebootResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ComputeNodeRebootResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComputeNodeRebootResponse.prototype, "statusCode", void 0);
    return ComputeNodeRebootResponse;
}(SpeakeasyBase));
export { ComputeNodeRebootResponse };
