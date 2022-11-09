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
var ComputeNodeDisableSchedulingPathParams = /** @class */ (function (_super) {
    __extends(ComputeNodeDisableSchedulingPathParams, _super);
    function ComputeNodeDisableSchedulingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ComputeNodeDisableSchedulingPathParams.prototype, "nodeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], ComputeNodeDisableSchedulingPathParams.prototype, "poolId", void 0);
    return ComputeNodeDisableSchedulingPathParams;
}(SpeakeasyBase));
export { ComputeNodeDisableSchedulingPathParams };
var ComputeNodeDisableSchedulingQueryParams = /** @class */ (function (_super) {
    __extends(ComputeNodeDisableSchedulingQueryParams, _super);
    function ComputeNodeDisableSchedulingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ComputeNodeDisableSchedulingQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], ComputeNodeDisableSchedulingQueryParams.prototype, "timeout", void 0);
    return ComputeNodeDisableSchedulingQueryParams;
}(SpeakeasyBase));
export { ComputeNodeDisableSchedulingQueryParams };
var ComputeNodeDisableSchedulingHeaders = /** @class */ (function (_super) {
    __extends(ComputeNodeDisableSchedulingHeaders, _super);
    function ComputeNodeDisableSchedulingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], ComputeNodeDisableSchedulingHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], ComputeNodeDisableSchedulingHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], ComputeNodeDisableSchedulingHeaders.prototype, "returnClientRequestId", void 0);
    return ComputeNodeDisableSchedulingHeaders;
}(SpeakeasyBase));
export { ComputeNodeDisableSchedulingHeaders };
var ComputeNodeDisableSchedulingRequest = /** @class */ (function (_super) {
    __extends(ComputeNodeDisableSchedulingRequest, _super);
    function ComputeNodeDisableSchedulingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeDisableSchedulingPathParams)
    ], ComputeNodeDisableSchedulingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeDisableSchedulingQueryParams)
    ], ComputeNodeDisableSchedulingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeDisableSchedulingHeaders)
    ], ComputeNodeDisableSchedulingRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ComputeNodeDisableSchedulingRequest.prototype, "request", void 0);
    return ComputeNodeDisableSchedulingRequest;
}(SpeakeasyBase));
export { ComputeNodeDisableSchedulingRequest };
var ComputeNodeDisableSchedulingResponse = /** @class */ (function (_super) {
    __extends(ComputeNodeDisableSchedulingResponse, _super);
    function ComputeNodeDisableSchedulingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ComputeNodeDisableSchedulingResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComputeNodeDisableSchedulingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ComputeNodeDisableSchedulingResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComputeNodeDisableSchedulingResponse.prototype, "statusCode", void 0);
    return ComputeNodeDisableSchedulingResponse;
}(SpeakeasyBase));
export { ComputeNodeDisableSchedulingResponse };
