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
var PostReportingInstructionPathParams = /** @class */ (function (_super) {
    __extends(PostReportingInstructionPathParams, _super);
    function PostReportingInstructionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PostReportingInstructionPathParams.prototype, "employerId", void 0);
    return PostReportingInstructionPathParams;
}(SpeakeasyBase));
export { PostReportingInstructionPathParams };
var PostReportingInstructionHeaders = /** @class */ (function (_super) {
    __extends(PostReportingInstructionHeaders, _super);
    function PostReportingInstructionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PostReportingInstructionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostReportingInstructionHeaders.prototype, "authorization", void 0);
    return PostReportingInstructionHeaders;
}(SpeakeasyBase));
export { PostReportingInstructionHeaders };
var PostReportingInstructionRequest = /** @class */ (function (_super) {
    __extends(PostReportingInstructionRequest, _super);
    function PostReportingInstructionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostReportingInstructionPathParams)
    ], PostReportingInstructionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostReportingInstructionHeaders)
    ], PostReportingInstructionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportingInstruction)
    ], PostReportingInstructionRequest.prototype, "request", void 0);
    return PostReportingInstructionRequest;
}(SpeakeasyBase));
export { PostReportingInstructionRequest };
var PostReportingInstructionResponse = /** @class */ (function (_super) {
    __extends(PostReportingInstructionResponse, _super);
    function PostReportingInstructionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostReportingInstructionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PostReportingInstructionResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Link)
    ], PostReportingInstructionResponse.prototype, "link", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostReportingInstructionResponse.prototype, "statusCode", void 0);
    return PostReportingInstructionResponse;
}(SpeakeasyBase));
export { PostReportingInstructionResponse };
