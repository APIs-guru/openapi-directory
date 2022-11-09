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
var GetDpsMessageReportOutputQueryParams = /** @class */ (function (_super) {
    __extends(GetDpsMessageReportOutputQueryParams, _super);
    function GetDpsMessageReportOutputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetDpsMessageReportOutputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FromDate" }),
        __metadata("design:type", Date)
    ], GetDpsMessageReportOutputQueryParams.prototype, "fromDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" }),
        __metadata("design:type", String)
    ], GetDpsMessageReportOutputQueryParams.prototype, "maxIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MessageStatuses" }),
        __metadata("design:type", String)
    ], GetDpsMessageReportOutputQueryParams.prototype, "messageStatuses", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MessageTypes" }),
        __metadata("design:type", String)
    ], GetDpsMessageReportOutputQueryParams.prototype, "messageTypes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartIndex" }),
        __metadata("design:type", String)
    ], GetDpsMessageReportOutputQueryParams.prototype, "startIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ToDate" }),
        __metadata("design:type", Date)
    ], GetDpsMessageReportOutputQueryParams.prototype, "toDate", void 0);
    return GetDpsMessageReportOutputQueryParams;
}(SpeakeasyBase));
export { GetDpsMessageReportOutputQueryParams };
var GetDpsMessageReportOutputHeaders = /** @class */ (function (_super) {
    __extends(GetDpsMessageReportOutputHeaders, _super);
    function GetDpsMessageReportOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetDpsMessageReportOutputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetDpsMessageReportOutputHeaders.prototype, "authorization", void 0);
    return GetDpsMessageReportOutputHeaders;
}(SpeakeasyBase));
export { GetDpsMessageReportOutputHeaders };
var GetDpsMessageReportOutputRequest = /** @class */ (function (_super) {
    __extends(GetDpsMessageReportOutputRequest, _super);
    function GetDpsMessageReportOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDpsMessageReportOutputQueryParams)
    ], GetDpsMessageReportOutputRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDpsMessageReportOutputHeaders)
    ], GetDpsMessageReportOutputRequest.prototype, "headers", void 0);
    return GetDpsMessageReportOutputRequest;
}(SpeakeasyBase));
export { GetDpsMessageReportOutputRequest };
var GetDpsMessageReportOutputResponse = /** @class */ (function (_super) {
    __extends(GetDpsMessageReportOutputResponse, _super);
    function GetDpsMessageReportOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDpsMessageReportOutputResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetDpsMessageReportOutputResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDpsMessageReportOutputResponse.prototype, "getDpsMessageReportOutput200ApplicationJsonBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDpsMessageReportOutputResponse.prototype, "statusCode", void 0);
    return GetDpsMessageReportOutputResponse;
}(SpeakeasyBase));
export { GetDpsMessageReportOutputResponse };
