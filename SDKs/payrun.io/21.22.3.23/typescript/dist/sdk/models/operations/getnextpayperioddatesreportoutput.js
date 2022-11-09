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
var GetNextPayPeriodDatesReportOutputQueryParams = /** @class */ (function (_super) {
    __extends(GetNextPayPeriodDatesReportOutputQueryParams, _super);
    function GetNextPayPeriodDatesReportOutputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetNextPayPeriodDatesReportOutputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" }),
        __metadata("design:type", String)
    ], GetNextPayPeriodDatesReportOutputQueryParams.prototype, "payScheduleKey", void 0);
    return GetNextPayPeriodDatesReportOutputQueryParams;
}(SpeakeasyBase));
export { GetNextPayPeriodDatesReportOutputQueryParams };
var GetNextPayPeriodDatesReportOutputHeaders = /** @class */ (function (_super) {
    __extends(GetNextPayPeriodDatesReportOutputHeaders, _super);
    function GetNextPayPeriodDatesReportOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetNextPayPeriodDatesReportOutputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetNextPayPeriodDatesReportOutputHeaders.prototype, "authorization", void 0);
    return GetNextPayPeriodDatesReportOutputHeaders;
}(SpeakeasyBase));
export { GetNextPayPeriodDatesReportOutputHeaders };
var GetNextPayPeriodDatesReportOutputRequest = /** @class */ (function (_super) {
    __extends(GetNextPayPeriodDatesReportOutputRequest, _super);
    function GetNextPayPeriodDatesReportOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetNextPayPeriodDatesReportOutputQueryParams)
    ], GetNextPayPeriodDatesReportOutputRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetNextPayPeriodDatesReportOutputHeaders)
    ], GetNextPayPeriodDatesReportOutputRequest.prototype, "headers", void 0);
    return GetNextPayPeriodDatesReportOutputRequest;
}(SpeakeasyBase));
export { GetNextPayPeriodDatesReportOutputRequest };
var GetNextPayPeriodDatesReportOutputResponse = /** @class */ (function (_super) {
    __extends(GetNextPayPeriodDatesReportOutputResponse, _super);
    function GetNextPayPeriodDatesReportOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetNextPayPeriodDatesReportOutputResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetNextPayPeriodDatesReportOutputResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetNextPayPeriodDatesReportOutputResponse.prototype, "getNextPayPeriodDatesReportOutput200ApplicationJsonBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetNextPayPeriodDatesReportOutputResponse.prototype, "statusCode", void 0);
    return GetNextPayPeriodDatesReportOutputResponse;
}(SpeakeasyBase));
export { GetNextPayPeriodDatesReportOutputResponse };
