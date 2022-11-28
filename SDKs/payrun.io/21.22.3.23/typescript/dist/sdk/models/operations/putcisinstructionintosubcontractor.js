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
var PutCisInstructionIntoSubContractorPathParams = /** @class */ (function (_super) {
    __extends(PutCisInstructionIntoSubContractorPathParams, _super);
    function PutCisInstructionIntoSubContractorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CisInstructionId" }),
        __metadata("design:type", String)
    ], PutCisInstructionIntoSubContractorPathParams.prototype, "cisInstructionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutCisInstructionIntoSubContractorPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], PutCisInstructionIntoSubContractorPathParams.prototype, "subContractorId", void 0);
    return PutCisInstructionIntoSubContractorPathParams;
}(SpeakeasyBase));
export { PutCisInstructionIntoSubContractorPathParams };
var PutCisInstructionIntoSubContractorHeaders = /** @class */ (function (_super) {
    __extends(PutCisInstructionIntoSubContractorHeaders, _super);
    function PutCisInstructionIntoSubContractorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutCisInstructionIntoSubContractorHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutCisInstructionIntoSubContractorHeaders.prototype, "authorization", void 0);
    return PutCisInstructionIntoSubContractorHeaders;
}(SpeakeasyBase));
export { PutCisInstructionIntoSubContractorHeaders };
var PutCisInstructionIntoSubContractorRequest = /** @class */ (function (_super) {
    __extends(PutCisInstructionIntoSubContractorRequest, _super);
    function PutCisInstructionIntoSubContractorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCisInstructionIntoSubContractorPathParams)
    ], PutCisInstructionIntoSubContractorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCisInstructionIntoSubContractorHeaders)
    ], PutCisInstructionIntoSubContractorRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CisInstruction)
    ], PutCisInstructionIntoSubContractorRequest.prototype, "request", void 0);
    return PutCisInstructionIntoSubContractorRequest;
}(SpeakeasyBase));
export { PutCisInstructionIntoSubContractorRequest };
var PutCisInstructionIntoSubContractorResponse = /** @class */ (function (_super) {
    __extends(PutCisInstructionIntoSubContractorResponse, _super);
    function PutCisInstructionIntoSubContractorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CisInstruction)
    ], PutCisInstructionIntoSubContractorResponse.prototype, "cisInstruction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutCisInstructionIntoSubContractorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutCisInstructionIntoSubContractorResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutCisInstructionIntoSubContractorResponse.prototype, "statusCode", void 0);
    return PutCisInstructionIntoSubContractorResponse;
}(SpeakeasyBase));
export { PutCisInstructionIntoSubContractorResponse };
