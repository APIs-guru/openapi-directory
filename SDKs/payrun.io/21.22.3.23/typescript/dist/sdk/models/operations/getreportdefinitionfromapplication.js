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
var GetReportDefinitionFromApplicationPathParams = /** @class */ (function (_super) {
    __extends(GetReportDefinitionFromApplicationPathParams, _super);
    function GetReportDefinitionFromApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReportDefinitionId" }),
        __metadata("design:type", String)
    ], GetReportDefinitionFromApplicationPathParams.prototype, "reportDefinitionId", void 0);
    return GetReportDefinitionFromApplicationPathParams;
}(SpeakeasyBase));
export { GetReportDefinitionFromApplicationPathParams };
var GetReportDefinitionFromApplicationHeaders = /** @class */ (function (_super) {
    __extends(GetReportDefinitionFromApplicationHeaders, _super);
    function GetReportDefinitionFromApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetReportDefinitionFromApplicationHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetReportDefinitionFromApplicationHeaders.prototype, "authorization", void 0);
    return GetReportDefinitionFromApplicationHeaders;
}(SpeakeasyBase));
export { GetReportDefinitionFromApplicationHeaders };
var GetReportDefinitionFromApplicationRequest = /** @class */ (function (_super) {
    __extends(GetReportDefinitionFromApplicationRequest, _super);
    function GetReportDefinitionFromApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportDefinitionFromApplicationPathParams)
    ], GetReportDefinitionFromApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportDefinitionFromApplicationHeaders)
    ], GetReportDefinitionFromApplicationRequest.prototype, "headers", void 0);
    return GetReportDefinitionFromApplicationRequest;
}(SpeakeasyBase));
export { GetReportDefinitionFromApplicationRequest };
var GetReportDefinitionFromApplicationResponse = /** @class */ (function (_super) {
    __extends(GetReportDefinitionFromApplicationResponse, _super);
    function GetReportDefinitionFromApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReportDefinitionFromApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetReportDefinitionFromApplicationResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReportDefinition)
    ], GetReportDefinitionFromApplicationResponse.prototype, "reportDefinition", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReportDefinitionFromApplicationResponse.prototype, "statusCode", void 0);
    return GetReportDefinitionFromApplicationResponse;
}(SpeakeasyBase));
export { GetReportDefinitionFromApplicationResponse };
