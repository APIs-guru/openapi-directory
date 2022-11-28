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
var GetAeAssessmentFromEmployeePathParams = /** @class */ (function (_super) {
    __extends(GetAeAssessmentFromEmployeePathParams, _super);
    function GetAeAssessmentFromEmployeePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AEAssessmentId" }),
        __metadata("design:type", String)
    ], GetAeAssessmentFromEmployeePathParams.prototype, "aeAssessmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], GetAeAssessmentFromEmployeePathParams.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetAeAssessmentFromEmployeePathParams.prototype, "employerId", void 0);
    return GetAeAssessmentFromEmployeePathParams;
}(SpeakeasyBase));
export { GetAeAssessmentFromEmployeePathParams };
var GetAeAssessmentFromEmployeeHeaders = /** @class */ (function (_super) {
    __extends(GetAeAssessmentFromEmployeeHeaders, _super);
    function GetAeAssessmentFromEmployeeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetAeAssessmentFromEmployeeHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAeAssessmentFromEmployeeHeaders.prototype, "authorization", void 0);
    return GetAeAssessmentFromEmployeeHeaders;
}(SpeakeasyBase));
export { GetAeAssessmentFromEmployeeHeaders };
var GetAeAssessmentFromEmployeeRequest = /** @class */ (function (_super) {
    __extends(GetAeAssessmentFromEmployeeRequest, _super);
    function GetAeAssessmentFromEmployeeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAeAssessmentFromEmployeePathParams)
    ], GetAeAssessmentFromEmployeeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAeAssessmentFromEmployeeHeaders)
    ], GetAeAssessmentFromEmployeeRequest.prototype, "headers", void 0);
    return GetAeAssessmentFromEmployeeRequest;
}(SpeakeasyBase));
export { GetAeAssessmentFromEmployeeRequest };
var GetAeAssessmentFromEmployeeResponse = /** @class */ (function (_super) {
    __extends(GetAeAssessmentFromEmployeeResponse, _super);
    function GetAeAssessmentFromEmployeeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AeAssessment)
    ], GetAeAssessmentFromEmployeeResponse.prototype, "aeAssessment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAeAssessmentFromEmployeeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetAeAssessmentFromEmployeeResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAeAssessmentFromEmployeeResponse.prototype, "statusCode", void 0);
    return GetAeAssessmentFromEmployeeResponse;
}(SpeakeasyBase));
export { GetAeAssessmentFromEmployeeResponse };
