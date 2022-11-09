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
var GetPassReportOuputQueryParams = /** @class */ (function (_super) {
    __extends(GetPassReportOuputQueryParams, _super);
    function GetPassReportOuputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DocumentId" }),
        __metadata("design:type", String)
    ], GetPassReportOuputQueryParams.prototype, "documentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetPassReportOuputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IntermediaryId" }),
        __metadata("design:type", String)
    ], GetPassReportOuputQueryParams.prototype, "intermediaryId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MessageFunctionCode" }),
        __metadata("design:type", String)
    ], GetPassReportOuputQueryParams.prototype, "messageFunctionCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" }),
        __metadata("design:type", String)
    ], GetPassReportOuputQueryParams.prototype, "payScheduleKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PaymentDate" }),
        __metadata("design:type", Date)
    ], GetPassReportOuputQueryParams.prototype, "paymentDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PensionKey" }),
        __metadata("design:type", String)
    ], GetPassReportOuputQueryParams.prototype, "pensionKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaxYear" }),
        __metadata("design:type", String)
    ], GetPassReportOuputQueryParams.prototype, "taxYear", void 0);
    return GetPassReportOuputQueryParams;
}(SpeakeasyBase));
export { GetPassReportOuputQueryParams };
var GetPassReportOuputHeaders = /** @class */ (function (_super) {
    __extends(GetPassReportOuputHeaders, _super);
    function GetPassReportOuputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetPassReportOuputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetPassReportOuputHeaders.prototype, "authorization", void 0);
    return GetPassReportOuputHeaders;
}(SpeakeasyBase));
export { GetPassReportOuputHeaders };
var GetPassReportOuputRequest = /** @class */ (function (_super) {
    __extends(GetPassReportOuputRequest, _super);
    function GetPassReportOuputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPassReportOuputQueryParams)
    ], GetPassReportOuputRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPassReportOuputHeaders)
    ], GetPassReportOuputRequest.prototype, "headers", void 0);
    return GetPassReportOuputRequest;
}(SpeakeasyBase));
export { GetPassReportOuputRequest };
var GetPassReportOuputResponse = /** @class */ (function (_super) {
    __extends(GetPassReportOuputResponse, _super);
    function GetPassReportOuputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPassReportOuputResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetPassReportOuputResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPassReportOuputResponse.prototype, "getPassReportOuput200ApplicationJsonBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPassReportOuputResponse.prototype, "statusCode", void 0);
    return GetPassReportOuputResponse;
}(SpeakeasyBase));
export { GetPassReportOuputResponse };
