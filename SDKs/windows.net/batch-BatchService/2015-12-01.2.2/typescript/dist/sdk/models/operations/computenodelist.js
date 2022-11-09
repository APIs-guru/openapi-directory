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
var ComputeNodeListPathParams = /** @class */ (function (_super) {
    __extends(ComputeNodeListPathParams, _super);
    function ComputeNodeListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], ComputeNodeListPathParams.prototype, "poolId", void 0);
    return ComputeNodeListPathParams;
}(SpeakeasyBase));
export { ComputeNodeListPathParams };
var ComputeNodeListQueryParams = /** @class */ (function (_super) {
    __extends(ComputeNodeListQueryParams, _super);
    function ComputeNodeListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], ComputeNodeListQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$select" }),
        __metadata("design:type", String)
    ], ComputeNodeListQueryParams.prototype, "dollarSelect", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ComputeNodeListQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxresults" }),
        __metadata("design:type", Number)
    ], ComputeNodeListQueryParams.prototype, "maxresults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], ComputeNodeListQueryParams.prototype, "timeout", void 0);
    return ComputeNodeListQueryParams;
}(SpeakeasyBase));
export { ComputeNodeListQueryParams };
var ComputeNodeListHeaders = /** @class */ (function (_super) {
    __extends(ComputeNodeListHeaders, _super);
    function ComputeNodeListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], ComputeNodeListHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], ComputeNodeListHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], ComputeNodeListHeaders.prototype, "returnClientRequestId", void 0);
    return ComputeNodeListHeaders;
}(SpeakeasyBase));
export { ComputeNodeListHeaders };
var ComputeNodeListRequest = /** @class */ (function (_super) {
    __extends(ComputeNodeListRequest, _super);
    function ComputeNodeListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeListPathParams)
    ], ComputeNodeListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeListQueryParams)
    ], ComputeNodeListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeListHeaders)
    ], ComputeNodeListRequest.prototype, "headers", void 0);
    return ComputeNodeListRequest;
}(SpeakeasyBase));
export { ComputeNodeListRequest };
var ComputeNodeListResponse = /** @class */ (function (_super) {
    __extends(ComputeNodeListResponse, _super);
    function ComputeNodeListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ComputeNodeListResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ComputeNodeListResponse.prototype, "computeNodeListResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComputeNodeListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ComputeNodeListResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComputeNodeListResponse.prototype, "statusCode", void 0);
    return ComputeNodeListResponse;
}(SpeakeasyBase));
export { ComputeNodeListResponse };
