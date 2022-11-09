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
var GetPayDashboardPayslipReportOuputQueryParams = /** @class */ (function (_super) {
    __extends(GetPayDashboardPayslipReportOuputQueryParams, _super);
    function GetPayDashboardPayslipReportOuputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployeeCodes" }),
        __metadata("design:type", String)
    ], GetPayDashboardPayslipReportOuputQueryParams.prototype, "employeeCodes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetPayDashboardPayslipReportOuputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" }),
        __metadata("design:type", String)
    ], GetPayDashboardPayslipReportOuputQueryParams.prototype, "maxIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" }),
        __metadata("design:type", String)
    ], GetPayDashboardPayslipReportOuputQueryParams.prototype, "payScheduleKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PaymentDate" }),
        __metadata("design:type", Date)
    ], GetPayDashboardPayslipReportOuputQueryParams.prototype, "paymentDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PublicationDate" }),
        __metadata("design:type", Date)
    ], GetPayDashboardPayslipReportOuputQueryParams.prototype, "publicationDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartIndex" }),
        __metadata("design:type", String)
    ], GetPayDashboardPayslipReportOuputQueryParams.prototype, "startIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaxYear" }),
        __metadata("design:type", String)
    ], GetPayDashboardPayslipReportOuputQueryParams.prototype, "taxYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransformDefinitionKey" }),
        __metadata("design:type", String)
    ], GetPayDashboardPayslipReportOuputQueryParams.prototype, "transformDefinitionKey", void 0);
    return GetPayDashboardPayslipReportOuputQueryParams;
}(SpeakeasyBase));
export { GetPayDashboardPayslipReportOuputQueryParams };
var GetPayDashboardPayslipReportOuputHeaders = /** @class */ (function (_super) {
    __extends(GetPayDashboardPayslipReportOuputHeaders, _super);
    function GetPayDashboardPayslipReportOuputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetPayDashboardPayslipReportOuputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetPayDashboardPayslipReportOuputHeaders.prototype, "authorization", void 0);
    return GetPayDashboardPayslipReportOuputHeaders;
}(SpeakeasyBase));
export { GetPayDashboardPayslipReportOuputHeaders };
var GetPayDashboardPayslipReportOuputRequest = /** @class */ (function (_super) {
    __extends(GetPayDashboardPayslipReportOuputRequest, _super);
    function GetPayDashboardPayslipReportOuputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPayDashboardPayslipReportOuputQueryParams)
    ], GetPayDashboardPayslipReportOuputRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPayDashboardPayslipReportOuputHeaders)
    ], GetPayDashboardPayslipReportOuputRequest.prototype, "headers", void 0);
    return GetPayDashboardPayslipReportOuputRequest;
}(SpeakeasyBase));
export { GetPayDashboardPayslipReportOuputRequest };
var GetPayDashboardPayslipReportOuputResponse = /** @class */ (function (_super) {
    __extends(GetPayDashboardPayslipReportOuputResponse, _super);
    function GetPayDashboardPayslipReportOuputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPayDashboardPayslipReportOuputResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetPayDashboardPayslipReportOuputResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPayDashboardPayslipReportOuputResponse.prototype, "getPayDashboardPayslipReportOuput200ApplicationJsonBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPayDashboardPayslipReportOuputResponse.prototype, "statusCode", void 0);
    return GetPayDashboardPayslipReportOuputResponse;
}(SpeakeasyBase));
export { GetPayDashboardPayslipReportOuputResponse };
