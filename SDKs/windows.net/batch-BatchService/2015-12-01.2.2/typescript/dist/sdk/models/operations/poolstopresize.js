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
var PoolStopResizePathParams = /** @class */ (function (_super) {
    __extends(PoolStopResizePathParams, _super);
    function PoolStopResizePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], PoolStopResizePathParams.prototype, "poolId", void 0);
    return PoolStopResizePathParams;
}(SpeakeasyBase));
export { PoolStopResizePathParams };
var PoolStopResizeQueryParams = /** @class */ (function (_super) {
    __extends(PoolStopResizeQueryParams, _super);
    function PoolStopResizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolStopResizeQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolStopResizeQueryParams.prototype, "timeout", void 0);
    return PoolStopResizeQueryParams;
}(SpeakeasyBase));
export { PoolStopResizeQueryParams };
var PoolStopResizeHeaders = /** @class */ (function (_super) {
    __extends(PoolStopResizeHeaders, _super);
    function PoolStopResizeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "ifMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolStopResizeHeaders.prototype, "returnClientRequestId", void 0);
    return PoolStopResizeHeaders;
}(SpeakeasyBase));
export { PoolStopResizeHeaders };
var PoolStopResizeRequest = /** @class */ (function (_super) {
    __extends(PoolStopResizeRequest, _super);
    function PoolStopResizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PoolStopResizePathParams)
    ], PoolStopResizeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PoolStopResizeQueryParams)
    ], PoolStopResizeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PoolStopResizeHeaders)
    ], PoolStopResizeRequest.prototype, "headers", void 0);
    return PoolStopResizeRequest;
}(SpeakeasyBase));
export { PoolStopResizeRequest };
var PoolStopResizeResponse = /** @class */ (function (_super) {
    __extends(PoolStopResizeResponse, _super);
    function PoolStopResizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PoolStopResizeResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PoolStopResizeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PoolStopResizeResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PoolStopResizeResponse.prototype, "statusCode", void 0);
    return PoolStopResizeResponse;
}(SpeakeasyBase));
export { PoolStopResizeResponse };
