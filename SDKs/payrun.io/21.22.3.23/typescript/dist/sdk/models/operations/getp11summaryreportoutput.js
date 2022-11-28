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
var GetP11SummaryReportOutputQueryParams = /** @class */ (function (_super) {
    __extends(GetP11SummaryReportOutputQueryParams, _super);
    function GetP11SummaryReportOutputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetP11SummaryReportOutputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" }),
        __metadata("design:type", String)
    ], GetP11SummaryReportOutputQueryParams.prototype, "maxIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" }),
        __metadata("design:type", String)
    ], GetP11SummaryReportOutputQueryParams.prototype, "payScheduleKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartIndex" }),
        __metadata("design:type", String)
    ], GetP11SummaryReportOutputQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" }),
        __metadata("design:type", String)
    ], GetP11SummaryReportOutputQueryParams.prototype, "taxYear", void 0);
    return GetP11SummaryReportOutputQueryParams;
}(SpeakeasyBase));
export { GetP11SummaryReportOutputQueryParams };
var GetP11SummaryReportOutputHeaders = /** @class */ (function (_super) {
    __extends(GetP11SummaryReportOutputHeaders, _super);
    function GetP11SummaryReportOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetP11SummaryReportOutputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetP11SummaryReportOutputHeaders.prototype, "authorization", void 0);
    return GetP11SummaryReportOutputHeaders;
}(SpeakeasyBase));
export { GetP11SummaryReportOutputHeaders };
var GetP11SummaryReportOutputRequest = /** @class */ (function (_super) {
    __extends(GetP11SummaryReportOutputRequest, _super);
    function GetP11SummaryReportOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetP11SummaryReportOutputQueryParams)
    ], GetP11SummaryReportOutputRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetP11SummaryReportOutputHeaders)
    ], GetP11SummaryReportOutputRequest.prototype, "headers", void 0);
    return GetP11SummaryReportOutputRequest;
}(SpeakeasyBase));
export { GetP11SummaryReportOutputRequest };
var GetP11SummaryReportOutputResponse = /** @class */ (function (_super) {
    __extends(GetP11SummaryReportOutputResponse, _super);
    function GetP11SummaryReportOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetP11SummaryReportOutputResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetP11SummaryReportOutputResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetP11SummaryReportOutputResponse.prototype, "getP11SummaryReportOutput200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetP11SummaryReportOutputResponse.prototype, "statusCode", void 0);
    return GetP11SummaryReportOutputResponse;
}(SpeakeasyBase));
export { GetP11SummaryReportOutputResponse };
