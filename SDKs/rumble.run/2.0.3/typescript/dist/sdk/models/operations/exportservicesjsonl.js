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
import * as shared from "../shared";
var ExportServicesJsonlQueryParams = /** @class */ (function (_super) {
    __extends(ExportServicesJsonlQueryParams, _super);
    function ExportServicesJsonlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ExportServicesJsonlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportServicesJsonlQueryParams.prototype, "search", void 0);
    return ExportServicesJsonlQueryParams;
}(SpeakeasyBase));
export { ExportServicesJsonlQueryParams };
var ExportServicesJsonlSecurity = /** @class */ (function (_super) {
    __extends(ExportServicesJsonlSecurity, _super);
    function ExportServicesJsonlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ExportServicesJsonlSecurity.prototype, "bearerAuth", void 0);
    return ExportServicesJsonlSecurity;
}(SpeakeasyBase));
export { ExportServicesJsonlSecurity };
var ExportServicesJsonlRequest = /** @class */ (function (_super) {
    __extends(ExportServicesJsonlRequest, _super);
    function ExportServicesJsonlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportServicesJsonlQueryParams)
    ], ExportServicesJsonlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportServicesJsonlSecurity)
    ], ExportServicesJsonlRequest.prototype, "security", void 0);
    return ExportServicesJsonlRequest;
}(SpeakeasyBase));
export { ExportServicesJsonlRequest };
var ExportServicesJsonlResponse = /** @class */ (function (_super) {
    __extends(ExportServicesJsonlResponse, _super);
    function ExportServicesJsonlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportServicesJsonlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportServicesJsonlResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ExportServicesJsonlResponse.prototype, "exportServicesJsonl200ApplicationJsonBinaryString", void 0);
    return ExportServicesJsonlResponse;
}(SpeakeasyBase));
export { ExportServicesJsonlResponse };
