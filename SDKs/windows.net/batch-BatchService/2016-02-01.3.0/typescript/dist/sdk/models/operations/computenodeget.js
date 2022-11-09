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
var ComputeNodeGetPathParams = /** @class */ (function (_super) {
    __extends(ComputeNodeGetPathParams, _super);
    function ComputeNodeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ComputeNodeGetPathParams.prototype, "nodeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], ComputeNodeGetPathParams.prototype, "poolId", void 0);
    return ComputeNodeGetPathParams;
}(SpeakeasyBase));
export { ComputeNodeGetPathParams };
var ComputeNodeGetQueryParams = /** @class */ (function (_super) {
    __extends(ComputeNodeGetQueryParams, _super);
    function ComputeNodeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$select" }),
        __metadata("design:type", String)
    ], ComputeNodeGetQueryParams.prototype, "dollarSelect", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ComputeNodeGetQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], ComputeNodeGetQueryParams.prototype, "timeout", void 0);
    return ComputeNodeGetQueryParams;
}(SpeakeasyBase));
export { ComputeNodeGetQueryParams };
var ComputeNodeGetHeaders = /** @class */ (function (_super) {
    __extends(ComputeNodeGetHeaders, _super);
    function ComputeNodeGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], ComputeNodeGetHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], ComputeNodeGetHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], ComputeNodeGetHeaders.prototype, "returnClientRequestId", void 0);
    return ComputeNodeGetHeaders;
}(SpeakeasyBase));
export { ComputeNodeGetHeaders };
var ComputeNodeGetRequest = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRequest, _super);
    function ComputeNodeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeGetPathParams)
    ], ComputeNodeGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeGetQueryParams)
    ], ComputeNodeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeGetHeaders)
    ], ComputeNodeGetRequest.prototype, "headers", void 0);
    return ComputeNodeGetRequest;
}(SpeakeasyBase));
export { ComputeNodeGetRequest };
var ComputeNodeGetResponse = /** @class */ (function (_super) {
    __extends(ComputeNodeGetResponse, _super);
    function ComputeNodeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ComputeNodeGetResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ComputeNodeGetResponse.prototype, "computeNode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComputeNodeGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ComputeNodeGetResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComputeNodeGetResponse.prototype, "statusCode", void 0);
    return ComputeNodeGetResponse;
}(SpeakeasyBase));
export { ComputeNodeGetResponse };
