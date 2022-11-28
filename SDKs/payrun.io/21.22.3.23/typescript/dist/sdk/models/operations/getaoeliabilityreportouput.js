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
var GetAoeLiabilityReportOuputQueryParams = /** @class */ (function (_super) {
    __extends(GetAoeLiabilityReportOuputQueryParams, _super);
    function GetAoeLiabilityReportOuputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetAoeLiabilityReportOuputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" }),
        __metadata("design:type", String)
    ], GetAoeLiabilityReportOuputQueryParams.prototype, "payScheduleKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxPeriod" }),
        __metadata("design:type", String)
    ], GetAoeLiabilityReportOuputQueryParams.prototype, "taxPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" }),
        __metadata("design:type", String)
    ], GetAoeLiabilityReportOuputQueryParams.prototype, "taxYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransformDefinitionKey" }),
        __metadata("design:type", String)
    ], GetAoeLiabilityReportOuputQueryParams.prototype, "transformDefinitionKey", void 0);
    return GetAoeLiabilityReportOuputQueryParams;
}(SpeakeasyBase));
export { GetAoeLiabilityReportOuputQueryParams };
var GetAoeLiabilityReportOuputHeaders = /** @class */ (function (_super) {
    __extends(GetAoeLiabilityReportOuputHeaders, _super);
    function GetAoeLiabilityReportOuputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetAoeLiabilityReportOuputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAoeLiabilityReportOuputHeaders.prototype, "authorization", void 0);
    return GetAoeLiabilityReportOuputHeaders;
}(SpeakeasyBase));
export { GetAoeLiabilityReportOuputHeaders };
var GetAoeLiabilityReportOuputRequest = /** @class */ (function (_super) {
    __extends(GetAoeLiabilityReportOuputRequest, _super);
    function GetAoeLiabilityReportOuputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAoeLiabilityReportOuputQueryParams)
    ], GetAoeLiabilityReportOuputRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAoeLiabilityReportOuputHeaders)
    ], GetAoeLiabilityReportOuputRequest.prototype, "headers", void 0);
    return GetAoeLiabilityReportOuputRequest;
}(SpeakeasyBase));
export { GetAoeLiabilityReportOuputRequest };
var GetAoeLiabilityReportOuputResponse = /** @class */ (function (_super) {
    __extends(GetAoeLiabilityReportOuputResponse, _super);
    function GetAoeLiabilityReportOuputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAoeLiabilityReportOuputResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetAoeLiabilityReportOuputResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAoeLiabilityReportOuputResponse.prototype, "getAoeLiabilityReportOuput200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAoeLiabilityReportOuputResponse.prototype, "statusCode", void 0);
    return GetAoeLiabilityReportOuputResponse;
}(SpeakeasyBase));
export { GetAoeLiabilityReportOuputResponse };
