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
var GetHolidayBalanceReportOutputQueryParams = /** @class */ (function (_super) {
    __extends(GetHolidayBalanceReportOutputQueryParams, _super);
    function GetHolidayBalanceReportOutputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployeeCodes" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputQueryParams.prototype, "employeeCodes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HolidayYearEnd" }),
        __metadata("design:type", Date)
    ], GetHolidayBalanceReportOutputQueryParams.prototype, "holidayYearEnd", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputQueryParams.prototype, "maxIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartIndex" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputQueryParams.prototype, "startIndex", void 0);
    return GetHolidayBalanceReportOutputQueryParams;
}(SpeakeasyBase));
export { GetHolidayBalanceReportOutputQueryParams };
var GetHolidayBalanceReportOutputHeaders = /** @class */ (function (_super) {
    __extends(GetHolidayBalanceReportOutputHeaders, _super);
    function GetHolidayBalanceReportOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputHeaders.prototype, "authorization", void 0);
    return GetHolidayBalanceReportOutputHeaders;
}(SpeakeasyBase));
export { GetHolidayBalanceReportOutputHeaders };
var GetHolidayBalanceReportOutputRequest = /** @class */ (function (_super) {
    __extends(GetHolidayBalanceReportOutputRequest, _super);
    function GetHolidayBalanceReportOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetHolidayBalanceReportOutputQueryParams)
    ], GetHolidayBalanceReportOutputRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetHolidayBalanceReportOutputHeaders)
    ], GetHolidayBalanceReportOutputRequest.prototype, "headers", void 0);
    return GetHolidayBalanceReportOutputRequest;
}(SpeakeasyBase));
export { GetHolidayBalanceReportOutputRequest };
var GetHolidayBalanceReportOutputResponse = /** @class */ (function (_super) {
    __extends(GetHolidayBalanceReportOutputResponse, _super);
    function GetHolidayBalanceReportOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetHolidayBalanceReportOutputResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetHolidayBalanceReportOutputResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetHolidayBalanceReportOutputResponse.prototype, "getHolidayBalanceReportOutput200ApplicationJsonBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetHolidayBalanceReportOutputResponse.prototype, "statusCode", void 0);
    return GetHolidayBalanceReportOutputResponse;
}(SpeakeasyBase));
export { GetHolidayBalanceReportOutputResponse };
