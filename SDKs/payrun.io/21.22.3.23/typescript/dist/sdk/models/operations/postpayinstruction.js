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
var PostPayInstructionPathParams = /** @class */ (function (_super) {
    __extends(PostPayInstructionPathParams, _super);
    function PostPayInstructionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], PostPayInstructionPathParams.prototype, "employeeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PostPayInstructionPathParams.prototype, "employerId", void 0);
    return PostPayInstructionPathParams;
}(SpeakeasyBase));
export { PostPayInstructionPathParams };
var PostPayInstructionHeaders = /** @class */ (function (_super) {
    __extends(PostPayInstructionHeaders, _super);
    function PostPayInstructionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PostPayInstructionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostPayInstructionHeaders.prototype, "authorization", void 0);
    return PostPayInstructionHeaders;
}(SpeakeasyBase));
export { PostPayInstructionHeaders };
var PostPayInstructionRequest = /** @class */ (function (_super) {
    __extends(PostPayInstructionRequest, _super);
    function PostPayInstructionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostPayInstructionPathParams)
    ], PostPayInstructionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostPayInstructionHeaders)
    ], PostPayInstructionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PayInstruction)
    ], PostPayInstructionRequest.prototype, "request", void 0);
    return PostPayInstructionRequest;
}(SpeakeasyBase));
export { PostPayInstructionRequest };
var PostPayInstructionResponse = /** @class */ (function (_super) {
    __extends(PostPayInstructionResponse, _super);
    function PostPayInstructionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostPayInstructionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PostPayInstructionResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Link)
    ], PostPayInstructionResponse.prototype, "link", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostPayInstructionResponse.prototype, "statusCode", void 0);
    return PostPayInstructionResponse;
}(SpeakeasyBase));
export { PostPayInstructionResponse };
