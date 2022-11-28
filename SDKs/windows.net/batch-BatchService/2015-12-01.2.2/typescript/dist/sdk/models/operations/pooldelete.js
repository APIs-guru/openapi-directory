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
var PoolDeletePathParams = /** @class */ (function (_super) {
    __extends(PoolDeletePathParams, _super);
    function PoolDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], PoolDeletePathParams.prototype, "poolId", void 0);
    return PoolDeletePathParams;
}(SpeakeasyBase));
export { PoolDeletePathParams };
var PoolDeleteQueryParams = /** @class */ (function (_super) {
    __extends(PoolDeleteQueryParams, _super);
    function PoolDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolDeleteQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolDeleteQueryParams.prototype, "timeout", void 0);
    return PoolDeleteQueryParams;
}(SpeakeasyBase));
export { PoolDeleteQueryParams };
var PoolDeleteHeaders = /** @class */ (function (_super) {
    __extends(PoolDeleteHeaders, _super);
    function PoolDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], PoolDeleteHeaders.prototype, "ifMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], PoolDeleteHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], PoolDeleteHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], PoolDeleteHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolDeleteHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolDeleteHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolDeleteHeaders.prototype, "returnClientRequestId", void 0);
    return PoolDeleteHeaders;
}(SpeakeasyBase));
export { PoolDeleteHeaders };
var PoolDeleteRequest = /** @class */ (function (_super) {
    __extends(PoolDeleteRequest, _super);
    function PoolDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PoolDeletePathParams)
    ], PoolDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PoolDeleteQueryParams)
    ], PoolDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PoolDeleteHeaders)
    ], PoolDeleteRequest.prototype, "headers", void 0);
    return PoolDeleteRequest;
}(SpeakeasyBase));
export { PoolDeleteRequest };
var PoolDeleteResponse = /** @class */ (function (_super) {
    __extends(PoolDeleteResponse, _super);
    function PoolDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PoolDeleteResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PoolDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PoolDeleteResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PoolDeleteResponse.prototype, "statusCode", void 0);
    return PoolDeleteResponse;
}(SpeakeasyBase));
export { PoolDeleteResponse };
