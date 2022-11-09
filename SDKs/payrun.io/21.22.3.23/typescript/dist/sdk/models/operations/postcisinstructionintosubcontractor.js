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
var PostCisInstructionIntoSubContractorPathParams = /** @class */ (function (_super) {
    __extends(PostCisInstructionIntoSubContractorPathParams, _super);
    function PostCisInstructionIntoSubContractorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PostCisInstructionIntoSubContractorPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], PostCisInstructionIntoSubContractorPathParams.prototype, "subContractorId", void 0);
    return PostCisInstructionIntoSubContractorPathParams;
}(SpeakeasyBase));
export { PostCisInstructionIntoSubContractorPathParams };
var PostCisInstructionIntoSubContractorHeaders = /** @class */ (function (_super) {
    __extends(PostCisInstructionIntoSubContractorHeaders, _super);
    function PostCisInstructionIntoSubContractorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PostCisInstructionIntoSubContractorHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostCisInstructionIntoSubContractorHeaders.prototype, "authorization", void 0);
    return PostCisInstructionIntoSubContractorHeaders;
}(SpeakeasyBase));
export { PostCisInstructionIntoSubContractorHeaders };
var PostCisInstructionIntoSubContractorRequest = /** @class */ (function (_super) {
    __extends(PostCisInstructionIntoSubContractorRequest, _super);
    function PostCisInstructionIntoSubContractorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCisInstructionIntoSubContractorPathParams)
    ], PostCisInstructionIntoSubContractorRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCisInstructionIntoSubContractorHeaders)
    ], PostCisInstructionIntoSubContractorRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CisInstruction)
    ], PostCisInstructionIntoSubContractorRequest.prototype, "request", void 0);
    return PostCisInstructionIntoSubContractorRequest;
}(SpeakeasyBase));
export { PostCisInstructionIntoSubContractorRequest };
var PostCisInstructionIntoSubContractorResponse = /** @class */ (function (_super) {
    __extends(PostCisInstructionIntoSubContractorResponse, _super);
    function PostCisInstructionIntoSubContractorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCisInstructionIntoSubContractorResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PostCisInstructionIntoSubContractorResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Link)
    ], PostCisInstructionIntoSubContractorResponse.prototype, "link", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCisInstructionIntoSubContractorResponse.prototype, "statusCode", void 0);
    return PostCisInstructionIntoSubContractorResponse;
}(SpeakeasyBase));
export { PostCisInstructionIntoSubContractorResponse };
