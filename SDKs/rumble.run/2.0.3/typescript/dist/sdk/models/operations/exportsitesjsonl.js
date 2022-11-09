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
import * as shared from "../shared";
var ExportSitesJsonlQueryParams = /** @class */ (function (_super) {
    __extends(ExportSitesJsonlQueryParams, _super);
    function ExportSitesJsonlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ExportSitesJsonlQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportSitesJsonlQueryParams.prototype, "search", void 0);
    return ExportSitesJsonlQueryParams;
}(SpeakeasyBase));
export { ExportSitesJsonlQueryParams };
var ExportSitesJsonlSecurity = /** @class */ (function (_super) {
    __extends(ExportSitesJsonlSecurity, _super);
    function ExportSitesJsonlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ExportSitesJsonlSecurity.prototype, "bearerAuth", void 0);
    return ExportSitesJsonlSecurity;
}(SpeakeasyBase));
export { ExportSitesJsonlSecurity };
var ExportSitesJsonlRequest = /** @class */ (function (_super) {
    __extends(ExportSitesJsonlRequest, _super);
    function ExportSitesJsonlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ExportSitesJsonlQueryParams)
    ], ExportSitesJsonlRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ExportSitesJsonlSecurity)
    ], ExportSitesJsonlRequest.prototype, "security", void 0);
    return ExportSitesJsonlRequest;
}(SpeakeasyBase));
export { ExportSitesJsonlRequest };
var ExportSitesJsonlResponse = /** @class */ (function (_super) {
    __extends(ExportSitesJsonlResponse, _super);
    function ExportSitesJsonlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ExportSitesJsonlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ExportSitesJsonlResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ExportSitesJsonlResponse.prototype, "exportSitesJsonl200ApplicationJsonBinaryString", void 0);
    return ExportSitesJsonlResponse;
}(SpeakeasyBase));
export { ExportSitesJsonlResponse };
