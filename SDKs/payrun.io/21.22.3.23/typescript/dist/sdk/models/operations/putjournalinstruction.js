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
var PutJournalInstructionPathParams = /** @class */ (function (_super) {
    __extends(PutJournalInstructionPathParams, _super);
    function PutJournalInstructionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutJournalInstructionPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=JournalInstructionId" }),
        __metadata("design:type", String)
    ], PutJournalInstructionPathParams.prototype, "journalInstructionId", void 0);
    return PutJournalInstructionPathParams;
}(SpeakeasyBase));
export { PutJournalInstructionPathParams };
var PutJournalInstructionHeaders = /** @class */ (function (_super) {
    __extends(PutJournalInstructionHeaders, _super);
    function PutJournalInstructionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutJournalInstructionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutJournalInstructionHeaders.prototype, "authorization", void 0);
    return PutJournalInstructionHeaders;
}(SpeakeasyBase));
export { PutJournalInstructionHeaders };
var PutJournalInstructionRequest = /** @class */ (function (_super) {
    __extends(PutJournalInstructionRequest, _super);
    function PutJournalInstructionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutJournalInstructionPathParams)
    ], PutJournalInstructionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutJournalInstructionHeaders)
    ], PutJournalInstructionRequest.prototype, "headers", void 0);
    return PutJournalInstructionRequest;
}(SpeakeasyBase));
export { PutJournalInstructionRequest };
var PutJournalInstructionResponse = /** @class */ (function (_super) {
    __extends(PutJournalInstructionResponse, _super);
    function PutJournalInstructionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutJournalInstructionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutJournalInstructionResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.JournalInstruction)
    ], PutJournalInstructionResponse.prototype, "journalInstruction", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutJournalInstructionResponse.prototype, "statusCode", void 0);
    return PutJournalInstructionResponse;
}(SpeakeasyBase));
export { PutJournalInstructionResponse };
