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
var ComputeNodeEnableSchedulingPathParams = /** @class */ (function (_super) {
    __extends(ComputeNodeEnableSchedulingPathParams, _super);
    function ComputeNodeEnableSchedulingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ComputeNodeEnableSchedulingPathParams.prototype, "nodeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], ComputeNodeEnableSchedulingPathParams.prototype, "poolId", void 0);
    return ComputeNodeEnableSchedulingPathParams;
}(SpeakeasyBase));
export { ComputeNodeEnableSchedulingPathParams };
var ComputeNodeEnableSchedulingQueryParams = /** @class */ (function (_super) {
    __extends(ComputeNodeEnableSchedulingQueryParams, _super);
    function ComputeNodeEnableSchedulingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ComputeNodeEnableSchedulingQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], ComputeNodeEnableSchedulingQueryParams.prototype, "timeout", void 0);
    return ComputeNodeEnableSchedulingQueryParams;
}(SpeakeasyBase));
export { ComputeNodeEnableSchedulingQueryParams };
var ComputeNodeEnableSchedulingHeaders = /** @class */ (function (_super) {
    __extends(ComputeNodeEnableSchedulingHeaders, _super);
    function ComputeNodeEnableSchedulingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], ComputeNodeEnableSchedulingHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], ComputeNodeEnableSchedulingHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], ComputeNodeEnableSchedulingHeaders.prototype, "returnClientRequestId", void 0);
    return ComputeNodeEnableSchedulingHeaders;
}(SpeakeasyBase));
export { ComputeNodeEnableSchedulingHeaders };
var ComputeNodeEnableSchedulingRequest = /** @class */ (function (_super) {
    __extends(ComputeNodeEnableSchedulingRequest, _super);
    function ComputeNodeEnableSchedulingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeEnableSchedulingPathParams)
    ], ComputeNodeEnableSchedulingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeEnableSchedulingQueryParams)
    ], ComputeNodeEnableSchedulingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeEnableSchedulingHeaders)
    ], ComputeNodeEnableSchedulingRequest.prototype, "headers", void 0);
    return ComputeNodeEnableSchedulingRequest;
}(SpeakeasyBase));
export { ComputeNodeEnableSchedulingRequest };
var ComputeNodeEnableSchedulingResponse = /** @class */ (function (_super) {
    __extends(ComputeNodeEnableSchedulingResponse, _super);
    function ComputeNodeEnableSchedulingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ComputeNodeEnableSchedulingResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComputeNodeEnableSchedulingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ComputeNodeEnableSchedulingResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComputeNodeEnableSchedulingResponse.prototype, "statusCode", void 0);
    return ComputeNodeEnableSchedulingResponse;
}(SpeakeasyBase));
export { ComputeNodeEnableSchedulingResponse };
