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
var PutNewAeAssessmentPathParams = /** @class */ (function (_super) {
    __extends(PutNewAeAssessmentPathParams, _super);
    function PutNewAeAssessmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AEAssessmentId" }),
        __metadata("design:type", String)
    ], PutNewAeAssessmentPathParams.prototype, "aeAssessmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], PutNewAeAssessmentPathParams.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutNewAeAssessmentPathParams.prototype, "employerId", void 0);
    return PutNewAeAssessmentPathParams;
}(SpeakeasyBase));
export { PutNewAeAssessmentPathParams };
var PutNewAeAssessmentHeaders = /** @class */ (function (_super) {
    __extends(PutNewAeAssessmentHeaders, _super);
    function PutNewAeAssessmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutNewAeAssessmentHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutNewAeAssessmentHeaders.prototype, "authorization", void 0);
    return PutNewAeAssessmentHeaders;
}(SpeakeasyBase));
export { PutNewAeAssessmentHeaders };
var PutNewAeAssessmentRequest = /** @class */ (function (_super) {
    __extends(PutNewAeAssessmentRequest, _super);
    function PutNewAeAssessmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutNewAeAssessmentPathParams)
    ], PutNewAeAssessmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutNewAeAssessmentHeaders)
    ], PutNewAeAssessmentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AeAssessment)
    ], PutNewAeAssessmentRequest.prototype, "request", void 0);
    return PutNewAeAssessmentRequest;
}(SpeakeasyBase));
export { PutNewAeAssessmentRequest };
var PutNewAeAssessmentResponse = /** @class */ (function (_super) {
    __extends(PutNewAeAssessmentResponse, _super);
    function PutNewAeAssessmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AeAssessment)
    ], PutNewAeAssessmentResponse.prototype, "aeAssessment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutNewAeAssessmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutNewAeAssessmentResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutNewAeAssessmentResponse.prototype, "statusCode", void 0);
    return PutNewAeAssessmentResponse;
}(SpeakeasyBase));
export { PutNewAeAssessmentResponse };
