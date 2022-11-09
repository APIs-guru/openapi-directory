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
var ComputeNodeUpdateUserPathParams = /** @class */ (function (_super) {
    __extends(ComputeNodeUpdateUserPathParams, _super);
    function ComputeNodeUpdateUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ComputeNodeUpdateUserPathParams.prototype, "nodeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], ComputeNodeUpdateUserPathParams.prototype, "poolId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userName" }),
        __metadata("design:type", String)
    ], ComputeNodeUpdateUserPathParams.prototype, "userName", void 0);
    return ComputeNodeUpdateUserPathParams;
}(SpeakeasyBase));
export { ComputeNodeUpdateUserPathParams };
var ComputeNodeUpdateUserQueryParams = /** @class */ (function (_super) {
    __extends(ComputeNodeUpdateUserQueryParams, _super);
    function ComputeNodeUpdateUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ComputeNodeUpdateUserQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], ComputeNodeUpdateUserQueryParams.prototype, "timeout", void 0);
    return ComputeNodeUpdateUserQueryParams;
}(SpeakeasyBase));
export { ComputeNodeUpdateUserQueryParams };
var ComputeNodeUpdateUserHeaders = /** @class */ (function (_super) {
    __extends(ComputeNodeUpdateUserHeaders, _super);
    function ComputeNodeUpdateUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], ComputeNodeUpdateUserHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], ComputeNodeUpdateUserHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], ComputeNodeUpdateUserHeaders.prototype, "returnClientRequestId", void 0);
    return ComputeNodeUpdateUserHeaders;
}(SpeakeasyBase));
export { ComputeNodeUpdateUserHeaders };
var ComputeNodeUpdateUserRequest = /** @class */ (function (_super) {
    __extends(ComputeNodeUpdateUserRequest, _super);
    function ComputeNodeUpdateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeUpdateUserPathParams)
    ], ComputeNodeUpdateUserRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeUpdateUserQueryParams)
    ], ComputeNodeUpdateUserRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ComputeNodeUpdateUserHeaders)
    ], ComputeNodeUpdateUserRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ComputeNodeUpdateUserRequest.prototype, "request", void 0);
    return ComputeNodeUpdateUserRequest;
}(SpeakeasyBase));
export { ComputeNodeUpdateUserRequest };
var ComputeNodeUpdateUserResponse = /** @class */ (function (_super) {
    __extends(ComputeNodeUpdateUserResponse, _super);
    function ComputeNodeUpdateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ComputeNodeUpdateUserResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ComputeNodeUpdateUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ComputeNodeUpdateUserResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ComputeNodeUpdateUserResponse.prototype, "statusCode", void 0);
    return ComputeNodeUpdateUserResponse;
}(SpeakeasyBase));
export { ComputeNodeUpdateUserResponse };
