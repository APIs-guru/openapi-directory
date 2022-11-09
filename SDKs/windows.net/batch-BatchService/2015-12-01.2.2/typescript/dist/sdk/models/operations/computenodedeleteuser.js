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
var ComputeNodeDeleteUserPathParams = /** @class */ (function (_super) {
    __extends(ComputeNodeDeleteUserPathParams, _super);
    function ComputeNodeDeleteUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ComputeNodeDeleteUserPathParams.prototype, "nodeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], ComputeNodeDeleteUserPathParams.prototype, "poolId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userName" }),
        __metadata("design:type", String)
    ], ComputeNodeDeleteUserPathParams.prototype, "userName", void 0);
    return ComputeNodeDeleteUserPathParams;
}(SpeakeasyBase));
export { ComputeNodeDeleteUserPathParams };
var ComputeNodeDeleteUserQueryParams = /** @class */ (function (_super) {
    __extends(ComputeNodeDeleteUserQueryParams, _super);
    function ComputeNodeDeleteUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ComputeNodeDeleteUserQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], ComputeNodeDeleteUserQueryParams.prototype, "timeout", void 0);
    return ComputeNodeDeleteUserQueryParams;
}(SpeakeasyBase));
export { ComputeNodeDeleteUserQueryParams };
var ComputeNodeDeleteUserHeaders = /** @class */ (function (_super) {
    __extends(ComputeNodeDeleteUserHeaders, _super);
    function ComputeNodeDeleteUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], ComputeNodeDeleteUserHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], ComputeNodeDeleteUserHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], ComputeNodeDeleteUserHeaders.prototype, "returnClientRequestId", void 0);
    return ComputeNodeDeleteUserHeaders;
}(SpeakeasyBase));
export { ComputeNodeDeleteUserHeaders };
var ComputeNodeDeleteUserRequest = /** @class */ (function (_super) {
    __extends(ComputeNodeDeleteUserRequest, _super);
    function ComputeNodeDeleteUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeDeleteUserPathParams)
    ], ComputeNodeDeleteUserRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeDeleteUserQueryParams)
    ], ComputeNodeDeleteUserRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeDeleteUserHeaders)
    ], ComputeNodeDeleteUserRequest.prototype, "headers", void 0);
    return ComputeNodeDeleteUserRequest;
}(SpeakeasyBase));
export { ComputeNodeDeleteUserRequest };
var ComputeNodeDeleteUserResponse = /** @class */ (function (_super) {
    __extends(ComputeNodeDeleteUserResponse, _super);
    function ComputeNodeDeleteUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ComputeNodeDeleteUserResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComputeNodeDeleteUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ComputeNodeDeleteUserResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComputeNodeDeleteUserResponse.prototype, "statusCode", void 0);
    return ComputeNodeDeleteUserResponse;
}(SpeakeasyBase));
export { ComputeNodeDeleteUserResponse };
