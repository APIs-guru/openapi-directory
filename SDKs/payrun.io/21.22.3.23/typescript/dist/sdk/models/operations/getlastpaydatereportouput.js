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
var GetLastPayDateReportOuputQueryParams = /** @class */ (function (_super) {
    __extends(GetLastPayDateReportOuputQueryParams, _super);
    function GetLastPayDateReportOuputQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployeeKey" }),
        __metadata("design:type", String)
    ], GetLastPayDateReportOuputQueryParams.prototype, "employeeKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" }),
        __metadata("design:type", String)
    ], GetLastPayDateReportOuputQueryParams.prototype, "employerKey", void 0);
    return GetLastPayDateReportOuputQueryParams;
}(SpeakeasyBase));
export { GetLastPayDateReportOuputQueryParams };
var GetLastPayDateReportOuputHeaders = /** @class */ (function (_super) {
    __extends(GetLastPayDateReportOuputHeaders, _super);
    function GetLastPayDateReportOuputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetLastPayDateReportOuputHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetLastPayDateReportOuputHeaders.prototype, "authorization", void 0);
    return GetLastPayDateReportOuputHeaders;
}(SpeakeasyBase));
export { GetLastPayDateReportOuputHeaders };
var GetLastPayDateReportOuputRequest = /** @class */ (function (_super) {
    __extends(GetLastPayDateReportOuputRequest, _super);
    function GetLastPayDateReportOuputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetLastPayDateReportOuputQueryParams)
    ], GetLastPayDateReportOuputRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetLastPayDateReportOuputHeaders)
    ], GetLastPayDateReportOuputRequest.prototype, "headers", void 0);
    return GetLastPayDateReportOuputRequest;
}(SpeakeasyBase));
export { GetLastPayDateReportOuputRequest };
var GetLastPayDateReportOuputResponse = /** @class */ (function (_super) {
    __extends(GetLastPayDateReportOuputResponse, _super);
    function GetLastPayDateReportOuputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetLastPayDateReportOuputResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetLastPayDateReportOuputResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetLastPayDateReportOuputResponse.prototype, "getLastPayDateReportOuput200ApplicationJsonBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetLastPayDateReportOuputResponse.prototype, "statusCode", void 0);
    return GetLastPayDateReportOuputResponse;
}(SpeakeasyBase));
export { GetLastPayDateReportOuputResponse };
