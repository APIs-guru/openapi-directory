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
var GetNetPayReportOutputQueryParams = /** @class */ (function (_super) {
    __extends(GetNetPayReportOutputQueryParams, _super);
    function GetNetPayReportOutputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetNetPayReportOutputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" }),
        __metadata("design:type", String)
    ], GetNetPayReportOutputQueryParams.prototype, "maxIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" }),
        __metadata("design:type", String)
    ], GetNetPayReportOutputQueryParams.prototype, "payScheduleKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartIndex" }),
        __metadata("design:type", String)
    ], GetNetPayReportOutputQueryParams.prototype, "startIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaxPeriod" }),
        __metadata("design:type", String)
    ], GetNetPayReportOutputQueryParams.prototype, "taxPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TaxYear" }),
        __metadata("design:type", String)
    ], GetNetPayReportOutputQueryParams.prototype, "taxYear", void 0);
    return GetNetPayReportOutputQueryParams;
}(SpeakeasyBase));
export { GetNetPayReportOutputQueryParams };
var GetNetPayReportOutputHeaders = /** @class */ (function (_super) {
    __extends(GetNetPayReportOutputHeaders, _super);
    function GetNetPayReportOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetNetPayReportOutputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetNetPayReportOutputHeaders.prototype, "authorization", void 0);
    return GetNetPayReportOutputHeaders;
}(SpeakeasyBase));
export { GetNetPayReportOutputHeaders };
var GetNetPayReportOutputRequest = /** @class */ (function (_super) {
    __extends(GetNetPayReportOutputRequest, _super);
    function GetNetPayReportOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetNetPayReportOutputQueryParams)
    ], GetNetPayReportOutputRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetNetPayReportOutputHeaders)
    ], GetNetPayReportOutputRequest.prototype, "headers", void 0);
    return GetNetPayReportOutputRequest;
}(SpeakeasyBase));
export { GetNetPayReportOutputRequest };
var GetNetPayReportOutputResponse = /** @class */ (function (_super) {
    __extends(GetNetPayReportOutputResponse, _super);
    function GetNetPayReportOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetNetPayReportOutputResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetNetPayReportOutputResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetNetPayReportOutputResponse.prototype, "getNetPayReportOutput200ApplicationJsonBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetNetPayReportOutputResponse.prototype, "statusCode", void 0);
    return GetNetPayReportOutputResponse;
}(SpeakeasyBase));
export { GetNetPayReportOutputResponse };
