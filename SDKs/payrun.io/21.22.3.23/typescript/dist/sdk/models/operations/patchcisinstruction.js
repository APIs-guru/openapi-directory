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
var PatchCisInstructionPathParams = /** @class */ (function (_super) {
    __extends(PatchCisInstructionPathParams, _super);
    function PatchCisInstructionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CisInstructionId" }),
        __metadata("design:type", String)
    ], PatchCisInstructionPathParams.prototype, "cisInstructionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PatchCisInstructionPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], PatchCisInstructionPathParams.prototype, "subContractorId", void 0);
    return PatchCisInstructionPathParams;
}(SpeakeasyBase));
export { PatchCisInstructionPathParams };
var PatchCisInstructionHeaders = /** @class */ (function (_super) {
    __extends(PatchCisInstructionHeaders, _super);
    function PatchCisInstructionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PatchCisInstructionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PatchCisInstructionHeaders.prototype, "authorization", void 0);
    return PatchCisInstructionHeaders;
}(SpeakeasyBase));
export { PatchCisInstructionHeaders };
var PatchCisInstructionRequest = /** @class */ (function (_super) {
    __extends(PatchCisInstructionRequest, _super);
    function PatchCisInstructionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PatchCisInstructionPathParams)
    ], PatchCisInstructionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PatchCisInstructionHeaders)
    ], PatchCisInstructionRequest.prototype, "headers", void 0);
    return PatchCisInstructionRequest;
}(SpeakeasyBase));
export { PatchCisInstructionRequest };
var PatchCisInstructionResponse = /** @class */ (function (_super) {
    __extends(PatchCisInstructionResponse, _super);
    function PatchCisInstructionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CisInstruction)
    ], PatchCisInstructionResponse.prototype, "cisInstruction", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PatchCisInstructionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PatchCisInstructionResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PatchCisInstructionResponse.prototype, "statusCode", void 0);
    return PatchCisInstructionResponse;
}(SpeakeasyBase));
export { PatchCisInstructionResponse };
