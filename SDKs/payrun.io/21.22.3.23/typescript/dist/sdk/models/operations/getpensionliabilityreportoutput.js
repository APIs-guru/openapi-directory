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
var GetPensionLiabilityReportOutputQueryParams = /** @class */ (function (_super) {
    __extends(GetPensionLiabilityReportOutputQueryParams, _super);
    function GetPensionLiabilityReportOutputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetPensionLiabilityReportOutputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PensionKey" }),
        __metadata("design:type", String)
    ], GetPensionLiabilityReportOutputQueryParams.prototype, "pensionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" }),
        __metadata("design:type", String)
    ], GetPensionLiabilityReportOutputQueryParams.prototype, "taxYear", void 0);
    return GetPensionLiabilityReportOutputQueryParams;
}(SpeakeasyBase));
export { GetPensionLiabilityReportOutputQueryParams };
var GetPensionLiabilityReportOutputHeaders = /** @class */ (function (_super) {
    __extends(GetPensionLiabilityReportOutputHeaders, _super);
    function GetPensionLiabilityReportOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetPensionLiabilityReportOutputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetPensionLiabilityReportOutputHeaders.prototype, "authorization", void 0);
    return GetPensionLiabilityReportOutputHeaders;
}(SpeakeasyBase));
export { GetPensionLiabilityReportOutputHeaders };
var GetPensionLiabilityReportOutputRequest = /** @class */ (function (_super) {
    __extends(GetPensionLiabilityReportOutputRequest, _super);
    function GetPensionLiabilityReportOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPensionLiabilityReportOutputQueryParams)
    ], GetPensionLiabilityReportOutputRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPensionLiabilityReportOutputHeaders)
    ], GetPensionLiabilityReportOutputRequest.prototype, "headers", void 0);
    return GetPensionLiabilityReportOutputRequest;
}(SpeakeasyBase));
export { GetPensionLiabilityReportOutputRequest };
var GetPensionLiabilityReportOutputResponse = /** @class */ (function (_super) {
    __extends(GetPensionLiabilityReportOutputResponse, _super);
    function GetPensionLiabilityReportOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPensionLiabilityReportOutputResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetPensionLiabilityReportOutputResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPensionLiabilityReportOutputResponse.prototype, "getPensionLiabilityReportOutput200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPensionLiabilityReportOutputResponse.prototype, "statusCode", void 0);
    return GetPensionLiabilityReportOutputResponse;
}(SpeakeasyBase));
export { GetPensionLiabilityReportOutputResponse };
