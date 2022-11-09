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
var ExportServicesCsvQueryParams = /** @class */ (function (_super) {
    __extends(ExportServicesCsvQueryParams, _super);
    function ExportServicesCsvQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportServicesCsvQueryParams.prototype, "search", void 0);
    return ExportServicesCsvQueryParams;
}(SpeakeasyBase));
export { ExportServicesCsvQueryParams };
var ExportServicesCsvSecurity = /** @class */ (function (_super) {
    __extends(ExportServicesCsvSecurity, _super);
    function ExportServicesCsvSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ExportServicesCsvSecurity.prototype, "bearerAuth", void 0);
    return ExportServicesCsvSecurity;
}(SpeakeasyBase));
export { ExportServicesCsvSecurity };
var ExportServicesCsvRequest = /** @class */ (function (_super) {
    __extends(ExportServicesCsvRequest, _super);
    function ExportServicesCsvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ExportServicesCsvQueryParams)
    ], ExportServicesCsvRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ExportServicesCsvSecurity)
    ], ExportServicesCsvRequest.prototype, "security", void 0);
    return ExportServicesCsvRequest;
}(SpeakeasyBase));
export { ExportServicesCsvRequest };
var ExportServicesCsvResponse = /** @class */ (function (_super) {
    __extends(ExportServicesCsvResponse, _super);
    function ExportServicesCsvResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ExportServicesCsvResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ExportServicesCsvResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ExportServicesCsvResponse.prototype, "exportServicesCsv200TextCsvBinaryString", void 0);
    return ExportServicesCsvResponse;
}(SpeakeasyBase));
export { ExportServicesCsvResponse };
