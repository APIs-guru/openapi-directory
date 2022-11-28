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
var GetP60ReportOutputQueryParams = /** @class */ (function (_super) {
    __extends(GetP60ReportOutputQueryParams, _super);
    function GetP60ReportOutputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployeeCodes" }),
        __metadata("design:type", String)
    ], GetP60ReportOutputQueryParams.prototype, "employeeCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetP60ReportOutputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" }),
        __metadata("design:type", String)
    ], GetP60ReportOutputQueryParams.prototype, "maxIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartIndex" }),
        __metadata("design:type", String)
    ], GetP60ReportOutputQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" }),
        __metadata("design:type", String)
    ], GetP60ReportOutputQueryParams.prototype, "taxYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransformDefinitionKey" }),
        __metadata("design:type", String)
    ], GetP60ReportOutputQueryParams.prototype, "transformDefinitionKey", void 0);
    return GetP60ReportOutputQueryParams;
}(SpeakeasyBase));
export { GetP60ReportOutputQueryParams };
var GetP60ReportOutputHeaders = /** @class */ (function (_super) {
    __extends(GetP60ReportOutputHeaders, _super);
    function GetP60ReportOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetP60ReportOutputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetP60ReportOutputHeaders.prototype, "authorization", void 0);
    return GetP60ReportOutputHeaders;
}(SpeakeasyBase));
export { GetP60ReportOutputHeaders };
var GetP60ReportOutputRequest = /** @class */ (function (_super) {
    __extends(GetP60ReportOutputRequest, _super);
    function GetP60ReportOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetP60ReportOutputQueryParams)
    ], GetP60ReportOutputRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetP60ReportOutputHeaders)
    ], GetP60ReportOutputRequest.prototype, "headers", void 0);
    return GetP60ReportOutputRequest;
}(SpeakeasyBase));
export { GetP60ReportOutputRequest };
var GetP60ReportOutputResponse = /** @class */ (function (_super) {
    __extends(GetP60ReportOutputResponse, _super);
    function GetP60ReportOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetP60ReportOutputResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetP60ReportOutputResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetP60ReportOutputResponse.prototype, "getP60ReportOutput200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetP60ReportOutputResponse.prototype, "statusCode", void 0);
    return GetP60ReportOutputResponse;
}(SpeakeasyBase));
export { GetP60ReportOutputResponse };
