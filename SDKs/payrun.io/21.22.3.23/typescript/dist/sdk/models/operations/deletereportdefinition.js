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
var DeleteReportDefinitionPathParams = /** @class */ (function (_super) {
    __extends(DeleteReportDefinitionPathParams, _super);
    function DeleteReportDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ReportDefinitionId" }),
        __metadata("design:type", String)
    ], DeleteReportDefinitionPathParams.prototype, "reportDefinitionId", void 0);
    return DeleteReportDefinitionPathParams;
}(SpeakeasyBase));
export { DeleteReportDefinitionPathParams };
var DeleteReportDefinitionHeaders = /** @class */ (function (_super) {
    __extends(DeleteReportDefinitionHeaders, _super);
    function DeleteReportDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeleteReportDefinitionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteReportDefinitionHeaders.prototype, "authorization", void 0);
    return DeleteReportDefinitionHeaders;
}(SpeakeasyBase));
export { DeleteReportDefinitionHeaders };
var DeleteReportDefinitionRequest = /** @class */ (function (_super) {
    __extends(DeleteReportDefinitionRequest, _super);
    function DeleteReportDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteReportDefinitionPathParams)
    ], DeleteReportDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteReportDefinitionHeaders)
    ], DeleteReportDefinitionRequest.prototype, "headers", void 0);
    return DeleteReportDefinitionRequest;
}(SpeakeasyBase));
export { DeleteReportDefinitionRequest };
var DeleteReportDefinitionResponse = /** @class */ (function (_super) {
    __extends(DeleteReportDefinitionResponse, _super);
    function DeleteReportDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteReportDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeleteReportDefinitionResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteReportDefinitionResponse.prototype, "statusCode", void 0);
    return DeleteReportDefinitionResponse;
}(SpeakeasyBase));
export { DeleteReportDefinitionResponse };
