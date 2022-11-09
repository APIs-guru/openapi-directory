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
var PoolEvaluateAutoScalePathParams = /** @class */ (function (_super) {
    __extends(PoolEvaluateAutoScalePathParams, _super);
    function PoolEvaluateAutoScalePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], PoolEvaluateAutoScalePathParams.prototype, "poolId", void 0);
    return PoolEvaluateAutoScalePathParams;
}(SpeakeasyBase));
export { PoolEvaluateAutoScalePathParams };
var PoolEvaluateAutoScaleQueryParams = /** @class */ (function (_super) {
    __extends(PoolEvaluateAutoScaleQueryParams, _super);
    function PoolEvaluateAutoScaleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolEvaluateAutoScaleQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolEvaluateAutoScaleQueryParams.prototype, "timeout", void 0);
    return PoolEvaluateAutoScaleQueryParams;
}(SpeakeasyBase));
export { PoolEvaluateAutoScaleQueryParams };
var PoolEvaluateAutoScaleHeaders = /** @class */ (function (_super) {
    __extends(PoolEvaluateAutoScaleHeaders, _super);
    function PoolEvaluateAutoScaleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolEvaluateAutoScaleHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolEvaluateAutoScaleHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolEvaluateAutoScaleHeaders.prototype, "returnClientRequestId", void 0);
    return PoolEvaluateAutoScaleHeaders;
}(SpeakeasyBase));
export { PoolEvaluateAutoScaleHeaders };
var PoolEvaluateAutoScaleRequest = /** @class */ (function (_super) {
    __extends(PoolEvaluateAutoScaleRequest, _super);
    function PoolEvaluateAutoScaleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PoolEvaluateAutoScalePathParams)
    ], PoolEvaluateAutoScaleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PoolEvaluateAutoScaleQueryParams)
    ], PoolEvaluateAutoScaleRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PoolEvaluateAutoScaleHeaders)
    ], PoolEvaluateAutoScaleRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PoolEvaluateAutoScaleRequest.prototype, "request", void 0);
    return PoolEvaluateAutoScaleRequest;
}(SpeakeasyBase));
export { PoolEvaluateAutoScaleRequest };
var PoolEvaluateAutoScaleResponse = /** @class */ (function (_super) {
    __extends(PoolEvaluateAutoScaleResponse, _super);
    function PoolEvaluateAutoScaleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PoolEvaluateAutoScaleResponse.prototype, "autoScaleRun", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PoolEvaluateAutoScaleResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PoolEvaluateAutoScaleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PoolEvaluateAutoScaleResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PoolEvaluateAutoScaleResponse.prototype, "statusCode", void 0);
    return PoolEvaluateAutoScaleResponse;
}(SpeakeasyBase));
export { PoolEvaluateAutoScaleResponse };
