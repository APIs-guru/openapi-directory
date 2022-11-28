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
var GetP45ReportOutputQueryParams = /** @class */ (function (_super) {
    __extends(GetP45ReportOutputQueryParams, _super);
    function GetP45ReportOutputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployeeKey" }),
        __metadata("design:type", String)
    ], GetP45ReportOutputQueryParams.prototype, "employeeKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetP45ReportOutputQueryParams.prototype, "employerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransformDefinitionKey" }),
        __metadata("design:type", String)
    ], GetP45ReportOutputQueryParams.prototype, "transformDefinitionKey", void 0);
    return GetP45ReportOutputQueryParams;
}(SpeakeasyBase));
export { GetP45ReportOutputQueryParams };
var GetP45ReportOutputHeaders = /** @class */ (function (_super) {
    __extends(GetP45ReportOutputHeaders, _super);
    function GetP45ReportOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetP45ReportOutputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetP45ReportOutputHeaders.prototype, "authorization", void 0);
    return GetP45ReportOutputHeaders;
}(SpeakeasyBase));
export { GetP45ReportOutputHeaders };
var GetP45ReportOutputRequest = /** @class */ (function (_super) {
    __extends(GetP45ReportOutputRequest, _super);
    function GetP45ReportOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetP45ReportOutputQueryParams)
    ], GetP45ReportOutputRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetP45ReportOutputHeaders)
    ], GetP45ReportOutputRequest.prototype, "headers", void 0);
    return GetP45ReportOutputRequest;
}(SpeakeasyBase));
export { GetP45ReportOutputRequest };
var GetP45ReportOutputResponse = /** @class */ (function (_super) {
    __extends(GetP45ReportOutputResponse, _super);
    function GetP45ReportOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetP45ReportOutputResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetP45ReportOutputResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetP45ReportOutputResponse.prototype, "getP45ReportOutput200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetP45ReportOutputResponse.prototype, "statusCode", void 0);
    return GetP45ReportOutputResponse;
}(SpeakeasyBase));
export { GetP45ReportOutputResponse };
