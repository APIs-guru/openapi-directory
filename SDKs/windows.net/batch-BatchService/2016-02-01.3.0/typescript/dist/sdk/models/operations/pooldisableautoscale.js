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
var PoolDisableAutoScalePathParams = /** @class */ (function (_super) {
    __extends(PoolDisableAutoScalePathParams, _super);
    function PoolDisableAutoScalePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], PoolDisableAutoScalePathParams.prototype, "poolId", void 0);
    return PoolDisableAutoScalePathParams;
}(SpeakeasyBase));
export { PoolDisableAutoScalePathParams };
var PoolDisableAutoScaleQueryParams = /** @class */ (function (_super) {
    __extends(PoolDisableAutoScaleQueryParams, _super);
    function PoolDisableAutoScaleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolDisableAutoScaleQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolDisableAutoScaleQueryParams.prototype, "timeout", void 0);
    return PoolDisableAutoScaleQueryParams;
}(SpeakeasyBase));
export { PoolDisableAutoScaleQueryParams };
var PoolDisableAutoScaleHeaders = /** @class */ (function (_super) {
    __extends(PoolDisableAutoScaleHeaders, _super);
    function PoolDisableAutoScaleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolDisableAutoScaleHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolDisableAutoScaleHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolDisableAutoScaleHeaders.prototype, "returnClientRequestId", void 0);
    return PoolDisableAutoScaleHeaders;
}(SpeakeasyBase));
export { PoolDisableAutoScaleHeaders };
var PoolDisableAutoScaleRequest = /** @class */ (function (_super) {
    __extends(PoolDisableAutoScaleRequest, _super);
    function PoolDisableAutoScaleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PoolDisableAutoScalePathParams)
    ], PoolDisableAutoScaleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PoolDisableAutoScaleQueryParams)
    ], PoolDisableAutoScaleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PoolDisableAutoScaleHeaders)
    ], PoolDisableAutoScaleRequest.prototype, "headers", void 0);
    return PoolDisableAutoScaleRequest;
}(SpeakeasyBase));
export { PoolDisableAutoScaleRequest };
var PoolDisableAutoScaleResponse = /** @class */ (function (_super) {
    __extends(PoolDisableAutoScaleResponse, _super);
    function PoolDisableAutoScaleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PoolDisableAutoScaleResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PoolDisableAutoScaleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PoolDisableAutoScaleResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PoolDisableAutoScaleResponse.prototype, "statusCode", void 0);
    return PoolDisableAutoScaleResponse;
}(SpeakeasyBase));
export { PoolDisableAutoScaleResponse };
