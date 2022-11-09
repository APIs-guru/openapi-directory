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
var PoolRemoveNodesPathParams = /** @class */ (function (_super) {
    __extends(PoolRemoveNodesPathParams, _super);
    function PoolRemoveNodesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], PoolRemoveNodesPathParams.prototype, "poolId", void 0);
    return PoolRemoveNodesPathParams;
}(SpeakeasyBase));
export { PoolRemoveNodesPathParams };
var PoolRemoveNodesQueryParams = /** @class */ (function (_super) {
    __extends(PoolRemoveNodesQueryParams, _super);
    function PoolRemoveNodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolRemoveNodesQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolRemoveNodesQueryParams.prototype, "timeout", void 0);
    return PoolRemoveNodesQueryParams;
}(SpeakeasyBase));
export { PoolRemoveNodesQueryParams };
var PoolRemoveNodesHeaders = /** @class */ (function (_super) {
    __extends(PoolRemoveNodesHeaders, _super);
    function PoolRemoveNodesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], PoolRemoveNodesHeaders.prototype, "ifMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], PoolRemoveNodesHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], PoolRemoveNodesHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], PoolRemoveNodesHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolRemoveNodesHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolRemoveNodesHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolRemoveNodesHeaders.prototype, "returnClientRequestId", void 0);
    return PoolRemoveNodesHeaders;
}(SpeakeasyBase));
export { PoolRemoveNodesHeaders };
var PoolRemoveNodesRequest = /** @class */ (function (_super) {
    __extends(PoolRemoveNodesRequest, _super);
    function PoolRemoveNodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PoolRemoveNodesPathParams)
    ], PoolRemoveNodesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PoolRemoveNodesQueryParams)
    ], PoolRemoveNodesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PoolRemoveNodesHeaders)
    ], PoolRemoveNodesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PoolRemoveNodesRequest.prototype, "request", void 0);
    return PoolRemoveNodesRequest;
}(SpeakeasyBase));
export { PoolRemoveNodesRequest };
var PoolRemoveNodesResponse = /** @class */ (function (_super) {
    __extends(PoolRemoveNodesResponse, _super);
    function PoolRemoveNodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PoolRemoveNodesResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PoolRemoveNodesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PoolRemoveNodesResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PoolRemoveNodesResponse.prototype, "statusCode", void 0);
    return PoolRemoveNodesResponse;
}(SpeakeasyBase));
export { PoolRemoveNodesResponse };
