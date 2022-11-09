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
var ComputeNodeAddUserPathParams = /** @class */ (function (_super) {
    __extends(ComputeNodeAddUserPathParams, _super);
    function ComputeNodeAddUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ComputeNodeAddUserPathParams.prototype, "nodeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], ComputeNodeAddUserPathParams.prototype, "poolId", void 0);
    return ComputeNodeAddUserPathParams;
}(SpeakeasyBase));
export { ComputeNodeAddUserPathParams };
var ComputeNodeAddUserQueryParams = /** @class */ (function (_super) {
    __extends(ComputeNodeAddUserQueryParams, _super);
    function ComputeNodeAddUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ComputeNodeAddUserQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], ComputeNodeAddUserQueryParams.prototype, "timeout", void 0);
    return ComputeNodeAddUserQueryParams;
}(SpeakeasyBase));
export { ComputeNodeAddUserQueryParams };
var ComputeNodeAddUserHeaders = /** @class */ (function (_super) {
    __extends(ComputeNodeAddUserHeaders, _super);
    function ComputeNodeAddUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], ComputeNodeAddUserHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], ComputeNodeAddUserHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], ComputeNodeAddUserHeaders.prototype, "returnClientRequestId", void 0);
    return ComputeNodeAddUserHeaders;
}(SpeakeasyBase));
export { ComputeNodeAddUserHeaders };
var ComputeNodeAddUserRequest = /** @class */ (function (_super) {
    __extends(ComputeNodeAddUserRequest, _super);
    function ComputeNodeAddUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeAddUserPathParams)
    ], ComputeNodeAddUserRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeAddUserQueryParams)
    ], ComputeNodeAddUserRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeAddUserHeaders)
    ], ComputeNodeAddUserRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ComputeNodeAddUserRequest.prototype, "request", void 0);
    return ComputeNodeAddUserRequest;
}(SpeakeasyBase));
export { ComputeNodeAddUserRequest };
var ComputeNodeAddUserResponse = /** @class */ (function (_super) {
    __extends(ComputeNodeAddUserResponse, _super);
    function ComputeNodeAddUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ComputeNodeAddUserResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComputeNodeAddUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ComputeNodeAddUserResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComputeNodeAddUserResponse.prototype, "statusCode", void 0);
    return ComputeNodeAddUserResponse;
}(SpeakeasyBase));
export { ComputeNodeAddUserResponse };
