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
var GetPapdisReportOuputQueryParams = /** @class */ (function (_super) {
    __extends(GetPapdisReportOuputQueryParams, _super);
    function GetPapdisReportOuputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetPapdisReportOuputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageFunctionCode" }),
        __metadata("design:type", String)
    ], GetPapdisReportOuputQueryParams.prototype, "messageFunctionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" }),
        __metadata("design:type", String)
    ], GetPapdisReportOuputQueryParams.prototype, "payScheduleKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PaymentDate" }),
        __metadata("design:type", Date)
    ], GetPapdisReportOuputQueryParams.prototype, "paymentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PensionKey" }),
        __metadata("design:type", String)
    ], GetPapdisReportOuputQueryParams.prototype, "pensionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" }),
        __metadata("design:type", String)
    ], GetPapdisReportOuputQueryParams.prototype, "taxYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransformDefinitionKey" }),
        __metadata("design:type", String)
    ], GetPapdisReportOuputQueryParams.prototype, "transformDefinitionKey", void 0);
    return GetPapdisReportOuputQueryParams;
}(SpeakeasyBase));
export { GetPapdisReportOuputQueryParams };
var GetPapdisReportOuputHeaders = /** @class */ (function (_super) {
    __extends(GetPapdisReportOuputHeaders, _super);
    function GetPapdisReportOuputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetPapdisReportOuputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetPapdisReportOuputHeaders.prototype, "authorization", void 0);
    return GetPapdisReportOuputHeaders;
}(SpeakeasyBase));
export { GetPapdisReportOuputHeaders };
var GetPapdisReportOuputRequest = /** @class */ (function (_super) {
    __extends(GetPapdisReportOuputRequest, _super);
    function GetPapdisReportOuputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPapdisReportOuputQueryParams)
    ], GetPapdisReportOuputRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPapdisReportOuputHeaders)
    ], GetPapdisReportOuputRequest.prototype, "headers", void 0);
    return GetPapdisReportOuputRequest;
}(SpeakeasyBase));
export { GetPapdisReportOuputRequest };
var GetPapdisReportOuputResponse = /** @class */ (function (_super) {
    __extends(GetPapdisReportOuputResponse, _super);
    function GetPapdisReportOuputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPapdisReportOuputResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetPapdisReportOuputResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPapdisReportOuputResponse.prototype, "getPapdisReportOuput200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPapdisReportOuputResponse.prototype, "statusCode", void 0);
    return GetPapdisReportOuputResponse;
}(SpeakeasyBase));
export { GetPapdisReportOuputResponse };
