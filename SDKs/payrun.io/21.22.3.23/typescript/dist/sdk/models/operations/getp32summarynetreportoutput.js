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
var GetP32SummaryNetReportOutputQueryParams = /** @class */ (function (_super) {
    __extends(GetP32SummaryNetReportOutputQueryParams, _super);
    function GetP32SummaryNetReportOutputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetP32SummaryNetReportOutputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaxYear" }),
        __metadata("design:type", String)
    ], GetP32SummaryNetReportOutputQueryParams.prototype, "taxYear", void 0);
    return GetP32SummaryNetReportOutputQueryParams;
}(SpeakeasyBase));
export { GetP32SummaryNetReportOutputQueryParams };
var GetP32SummaryNetReportOutputHeaders = /** @class */ (function (_super) {
    __extends(GetP32SummaryNetReportOutputHeaders, _super);
    function GetP32SummaryNetReportOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetP32SummaryNetReportOutputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetP32SummaryNetReportOutputHeaders.prototype, "authorization", void 0);
    return GetP32SummaryNetReportOutputHeaders;
}(SpeakeasyBase));
export { GetP32SummaryNetReportOutputHeaders };
var GetP32SummaryNetReportOutputRequest = /** @class */ (function (_super) {
    __extends(GetP32SummaryNetReportOutputRequest, _super);
    function GetP32SummaryNetReportOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetP32SummaryNetReportOutputQueryParams)
    ], GetP32SummaryNetReportOutputRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetP32SummaryNetReportOutputHeaders)
    ], GetP32SummaryNetReportOutputRequest.prototype, "headers", void 0);
    return GetP32SummaryNetReportOutputRequest;
}(SpeakeasyBase));
export { GetP32SummaryNetReportOutputRequest };
var GetP32SummaryNetReportOutputResponse = /** @class */ (function (_super) {
    __extends(GetP32SummaryNetReportOutputResponse, _super);
    function GetP32SummaryNetReportOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetP32SummaryNetReportOutputResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetP32SummaryNetReportOutputResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetP32SummaryNetReportOutputResponse.prototype, "getP32SummaryNetReportOutput200ApplicationJsonBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetP32SummaryNetReportOutputResponse.prototype, "statusCode", void 0);
    return GetP32SummaryNetReportOutputResponse;
}(SpeakeasyBase));
export { GetP32SummaryNetReportOutputResponse };
