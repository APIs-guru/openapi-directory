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
var PoolListQueryParams = /** @class */ (function (_super) {
    __extends(PoolListQueryParams, _super);
    function PoolListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$expand" }),
        __metadata("design:type", String)
    ], PoolListQueryParams.prototype, "dollarExpand", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], PoolListQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$select" }),
        __metadata("design:type", String)
    ], PoolListQueryParams.prototype, "dollarSelect", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolListQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxresults" }),
        __metadata("design:type", Number)
    ], PoolListQueryParams.prototype, "maxresults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolListQueryParams.prototype, "timeout", void 0);
    return PoolListQueryParams;
}(SpeakeasyBase));
export { PoolListQueryParams };
var PoolListHeaders = /** @class */ (function (_super) {
    __extends(PoolListHeaders, _super);
    function PoolListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolListHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolListHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolListHeaders.prototype, "returnClientRequestId", void 0);
    return PoolListHeaders;
}(SpeakeasyBase));
export { PoolListHeaders };
var PoolListRequest = /** @class */ (function (_super) {
    __extends(PoolListRequest, _super);
    function PoolListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PoolListQueryParams)
    ], PoolListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PoolListHeaders)
    ], PoolListRequest.prototype, "headers", void 0);
    return PoolListRequest;
}(SpeakeasyBase));
export { PoolListRequest };
var PoolListResponse = /** @class */ (function (_super) {
    __extends(PoolListResponse, _super);
    function PoolListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PoolListResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PoolListResponse.prototype, "cloudPoolListResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PoolListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PoolListResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PoolListResponse.prototype, "statusCode", void 0);
    return PoolListResponse;
}(SpeakeasyBase));
export { PoolListResponse };
