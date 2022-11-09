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
var CertificateDeletePathParams = /** @class */ (function (_super) {
    __extends(CertificateDeletePathParams, _super);
    function CertificateDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprint" }),
        __metadata("design:type", String)
    ], CertificateDeletePathParams.prototype, "thumbprint", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprintAlgorithm" }),
        __metadata("design:type", String)
    ], CertificateDeletePathParams.prototype, "thumbprintAlgorithm", void 0);
    return CertificateDeletePathParams;
}(SpeakeasyBase));
export { CertificateDeletePathParams };
var CertificateDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CertificateDeleteQueryParams, _super);
    function CertificateDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], CertificateDeleteQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], CertificateDeleteQueryParams.prototype, "timeout", void 0);
    return CertificateDeleteQueryParams;
}(SpeakeasyBase));
export { CertificateDeleteQueryParams };
var CertificateDeleteHeaders = /** @class */ (function (_super) {
    __extends(CertificateDeleteHeaders, _super);
    function CertificateDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], CertificateDeleteHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], CertificateDeleteHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], CertificateDeleteHeaders.prototype, "returnClientRequestId", void 0);
    return CertificateDeleteHeaders;
}(SpeakeasyBase));
export { CertificateDeleteHeaders };
var CertificateDeleteRequest = /** @class */ (function (_super) {
    __extends(CertificateDeleteRequest, _super);
    function CertificateDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CertificateDeletePathParams)
    ], CertificateDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificateDeleteQueryParams)
    ], CertificateDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificateDeleteHeaders)
    ], CertificateDeleteRequest.prototype, "headers", void 0);
    return CertificateDeleteRequest;
}(SpeakeasyBase));
export { CertificateDeleteRequest };
var CertificateDeleteResponse = /** @class */ (function (_super) {
    __extends(CertificateDeleteResponse, _super);
    function CertificateDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CertificateDeleteResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CertificateDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], CertificateDeleteResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CertificateDeleteResponse.prototype, "statusCode", void 0);
    return CertificateDeleteResponse;
}(SpeakeasyBase));
export { CertificateDeleteResponse };
