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
var CertificateCancelDeletionPathParams = /** @class */ (function (_super) {
    __extends(CertificateCancelDeletionPathParams, _super);
    function CertificateCancelDeletionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprint" }),
        __metadata("design:type", String)
    ], CertificateCancelDeletionPathParams.prototype, "thumbprint", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprintAlgorithm" }),
        __metadata("design:type", String)
    ], CertificateCancelDeletionPathParams.prototype, "thumbprintAlgorithm", void 0);
    return CertificateCancelDeletionPathParams;
}(SpeakeasyBase));
export { CertificateCancelDeletionPathParams };
var CertificateCancelDeletionQueryParams = /** @class */ (function (_super) {
    __extends(CertificateCancelDeletionQueryParams, _super);
    function CertificateCancelDeletionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], CertificateCancelDeletionQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], CertificateCancelDeletionQueryParams.prototype, "timeout", void 0);
    return CertificateCancelDeletionQueryParams;
}(SpeakeasyBase));
export { CertificateCancelDeletionQueryParams };
var CertificateCancelDeletionHeaders = /** @class */ (function (_super) {
    __extends(CertificateCancelDeletionHeaders, _super);
    function CertificateCancelDeletionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], CertificateCancelDeletionHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], CertificateCancelDeletionHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], CertificateCancelDeletionHeaders.prototype, "returnClientRequestId", void 0);
    return CertificateCancelDeletionHeaders;
}(SpeakeasyBase));
export { CertificateCancelDeletionHeaders };
var CertificateCancelDeletionRequest = /** @class */ (function (_super) {
    __extends(CertificateCancelDeletionRequest, _super);
    function CertificateCancelDeletionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CertificateCancelDeletionPathParams)
    ], CertificateCancelDeletionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificateCancelDeletionQueryParams)
    ], CertificateCancelDeletionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificateCancelDeletionHeaders)
    ], CertificateCancelDeletionRequest.prototype, "headers", void 0);
    return CertificateCancelDeletionRequest;
}(SpeakeasyBase));
export { CertificateCancelDeletionRequest };
var CertificateCancelDeletionResponse = /** @class */ (function (_super) {
    __extends(CertificateCancelDeletionResponse, _super);
    function CertificateCancelDeletionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CertificateCancelDeletionResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CertificateCancelDeletionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], CertificateCancelDeletionResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CertificateCancelDeletionResponse.prototype, "statusCode", void 0);
    return CertificateCancelDeletionResponse;
}(SpeakeasyBase));
export { CertificateCancelDeletionResponse };
