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
var GetJournalReportOuputQueryParams = /** @class */ (function (_super) {
    __extends(GetJournalReportOuputQueryParams, _super);
    function GetJournalReportOuputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetJournalReportOuputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LedgerTarget" }),
        __metadata("design:type", String)
    ], GetJournalReportOuputQueryParams.prototype, "ledgerTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PayFrequency" }),
        __metadata("design:type", String)
    ], GetJournalReportOuputQueryParams.prototype, "payFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxPeriod" }),
        __metadata("design:type", String)
    ], GetJournalReportOuputQueryParams.prototype, "taxPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" }),
        __metadata("design:type", String)
    ], GetJournalReportOuputQueryParams.prototype, "taxYear", void 0);
    return GetJournalReportOuputQueryParams;
}(SpeakeasyBase));
export { GetJournalReportOuputQueryParams };
var GetJournalReportOuputHeaders = /** @class */ (function (_super) {
    __extends(GetJournalReportOuputHeaders, _super);
    function GetJournalReportOuputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetJournalReportOuputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetJournalReportOuputHeaders.prototype, "authorization", void 0);
    return GetJournalReportOuputHeaders;
}(SpeakeasyBase));
export { GetJournalReportOuputHeaders };
var GetJournalReportOuputRequest = /** @class */ (function (_super) {
    __extends(GetJournalReportOuputRequest, _super);
    function GetJournalReportOuputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJournalReportOuputQueryParams)
    ], GetJournalReportOuputRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJournalReportOuputHeaders)
    ], GetJournalReportOuputRequest.prototype, "headers", void 0);
    return GetJournalReportOuputRequest;
}(SpeakeasyBase));
export { GetJournalReportOuputRequest };
var GetJournalReportOuputResponse = /** @class */ (function (_super) {
    __extends(GetJournalReportOuputResponse, _super);
    function GetJournalReportOuputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetJournalReportOuputResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetJournalReportOuputResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetJournalReportOuputResponse.prototype, "getJournalReportOuput200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetJournalReportOuputResponse.prototype, "statusCode", void 0);
    return GetJournalReportOuputResponse;
}(SpeakeasyBase));
export { GetJournalReportOuputResponse };
