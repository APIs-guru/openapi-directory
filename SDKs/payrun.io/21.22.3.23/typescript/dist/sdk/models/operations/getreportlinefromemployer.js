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
var GetReportLineFromEmployerPathParams = /** @class */ (function (_super) {
    __extends(GetReportLineFromEmployerPathParams, _super);
    function GetReportLineFromEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetReportLineFromEmployerPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReportLineId" }),
        __metadata("design:type", String)
    ], GetReportLineFromEmployerPathParams.prototype, "reportLineId", void 0);
    return GetReportLineFromEmployerPathParams;
}(SpeakeasyBase));
export { GetReportLineFromEmployerPathParams };
var GetReportLineFromEmployerHeaders = /** @class */ (function (_super) {
    __extends(GetReportLineFromEmployerHeaders, _super);
    function GetReportLineFromEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetReportLineFromEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetReportLineFromEmployerHeaders.prototype, "authorization", void 0);
    return GetReportLineFromEmployerHeaders;
}(SpeakeasyBase));
export { GetReportLineFromEmployerHeaders };
var GetReportLineFromEmployerRequest = /** @class */ (function (_super) {
    __extends(GetReportLineFromEmployerRequest, _super);
    function GetReportLineFromEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportLineFromEmployerPathParams)
    ], GetReportLineFromEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportLineFromEmployerHeaders)
    ], GetReportLineFromEmployerRequest.prototype, "headers", void 0);
    return GetReportLineFromEmployerRequest;
}(SpeakeasyBase));
export { GetReportLineFromEmployerRequest };
var GetReportLineFromEmployerResponse = /** @class */ (function (_super) {
    __extends(GetReportLineFromEmployerResponse, _super);
    function GetReportLineFromEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReportLineFromEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetReportLineFromEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReportLine)
    ], GetReportLineFromEmployerResponse.prototype, "reportLine", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReportLineFromEmployerResponse.prototype, "statusCode", void 0);
    return GetReportLineFromEmployerResponse;
}(SpeakeasyBase));
export { GetReportLineFromEmployerResponse };
