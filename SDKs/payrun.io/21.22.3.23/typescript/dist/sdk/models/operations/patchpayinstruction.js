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
var PatchPayInstructionPathParams = /** @class */ (function (_super) {
    __extends(PatchPayInstructionPathParams, _super);
    function PatchPayInstructionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], PatchPayInstructionPathParams.prototype, "employeeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PatchPayInstructionPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PayInstructionId" }),
        __metadata("design:type", String)
    ], PatchPayInstructionPathParams.prototype, "payInstructionId", void 0);
    return PatchPayInstructionPathParams;
}(SpeakeasyBase));
export { PatchPayInstructionPathParams };
var PatchPayInstructionHeaders = /** @class */ (function (_super) {
    __extends(PatchPayInstructionHeaders, _super);
    function PatchPayInstructionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PatchPayInstructionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PatchPayInstructionHeaders.prototype, "authorization", void 0);
    return PatchPayInstructionHeaders;
}(SpeakeasyBase));
export { PatchPayInstructionHeaders };
var PatchPayInstructionRequest = /** @class */ (function (_super) {
    __extends(PatchPayInstructionRequest, _super);
    function PatchPayInstructionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PatchPayInstructionPathParams)
    ], PatchPayInstructionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PatchPayInstructionHeaders)
    ], PatchPayInstructionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PayInstruction)
    ], PatchPayInstructionRequest.prototype, "request", void 0);
    return PatchPayInstructionRequest;
}(SpeakeasyBase));
export { PatchPayInstructionRequest };
var PatchPayInstructionResponse = /** @class */ (function (_super) {
    __extends(PatchPayInstructionResponse, _super);
    function PatchPayInstructionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PatchPayInstructionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PatchPayInstructionResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PayInstruction)
    ], PatchPayInstructionResponse.prototype, "payInstruction", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PatchPayInstructionResponse.prototype, "statusCode", void 0);
    return PatchPayInstructionResponse;
}(SpeakeasyBase));
export { PatchPayInstructionResponse };
