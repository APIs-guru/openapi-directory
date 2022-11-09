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
var CertificateGetPathParams = /** @class */ (function (_super) {
    __extends(CertificateGetPathParams, _super);
    function CertificateGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprint" }),
        __metadata("design:type", String)
    ], CertificateGetPathParams.prototype, "thumbprint", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=thumbprintAlgorithm" }),
        __metadata("design:type", String)
    ], CertificateGetPathParams.prototype, "thumbprintAlgorithm", void 0);
    return CertificateGetPathParams;
}(SpeakeasyBase));
export { CertificateGetPathParams };
var CertificateGetQueryParams = /** @class */ (function (_super) {
    __extends(CertificateGetQueryParams, _super);
    function CertificateGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$select" }),
        __metadata("design:type", String)
    ], CertificateGetQueryParams.prototype, "dollarSelect", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], CertificateGetQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], CertificateGetQueryParams.prototype, "timeout", void 0);
    return CertificateGetQueryParams;
}(SpeakeasyBase));
export { CertificateGetQueryParams };
var CertificateGetHeaders = /** @class */ (function (_super) {
    __extends(CertificateGetHeaders, _super);
    function CertificateGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], CertificateGetHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], CertificateGetHeaders.prototype, "ocpDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], CertificateGetHeaders.prototype, "returnClientRequestId", void 0);
    return CertificateGetHeaders;
}(SpeakeasyBase));
export { CertificateGetHeaders };
var CertificateGetRequest = /** @class */ (function (_super) {
    __extends(CertificateGetRequest, _super);
    function CertificateGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CertificateGetPathParams)
    ], CertificateGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificateGetQueryParams)
    ], CertificateGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CertificateGetHeaders)
    ], CertificateGetRequest.prototype, "headers", void 0);
    return CertificateGetRequest;
}(SpeakeasyBase));
export { CertificateGetRequest };
var CertificateGetResponse = /** @class */ (function (_super) {
    __extends(CertificateGetResponse, _super);
    function CertificateGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CertificateGetResponse.prototype, "batchError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CertificateGetResponse.prototype, "certificate", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CertificateGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], CertificateGetResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CertificateGetResponse.prototype, "statusCode", void 0);
    return CertificateGetResponse;
}(SpeakeasyBase));
export { CertificateGetResponse };
