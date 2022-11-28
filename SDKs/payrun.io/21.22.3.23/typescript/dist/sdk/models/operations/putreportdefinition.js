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
var PutReportDefinitionPathParams = /** @class */ (function (_super) {
    __extends(PutReportDefinitionPathParams, _super);
    function PutReportDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReportDefinitionId" }),
        __metadata("design:type", String)
    ], PutReportDefinitionPathParams.prototype, "reportDefinitionId", void 0);
    return PutReportDefinitionPathParams;
}(SpeakeasyBase));
export { PutReportDefinitionPathParams };
var PutReportDefinitionHeaders = /** @class */ (function (_super) {
    __extends(PutReportDefinitionHeaders, _super);
    function PutReportDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutReportDefinitionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutReportDefinitionHeaders.prototype, "authorization", void 0);
    return PutReportDefinitionHeaders;
}(SpeakeasyBase));
export { PutReportDefinitionHeaders };
var PutReportDefinitionRequest = /** @class */ (function (_super) {
    __extends(PutReportDefinitionRequest, _super);
    function PutReportDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportDefinitionPathParams)
    ], PutReportDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportDefinitionHeaders)
    ], PutReportDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportDefinition)
    ], PutReportDefinitionRequest.prototype, "request", void 0);
    return PutReportDefinitionRequest;
}(SpeakeasyBase));
export { PutReportDefinitionRequest };
var PutReportDefinitionResponse = /** @class */ (function (_super) {
    __extends(PutReportDefinitionResponse, _super);
    function PutReportDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutReportDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutReportDefinitionResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReportDefinition)
    ], PutReportDefinitionResponse.prototype, "reportDefinition", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutReportDefinitionResponse.prototype, "statusCode", void 0);
    return PutReportDefinitionResponse;
}(SpeakeasyBase));
export { PutReportDefinitionResponse };
