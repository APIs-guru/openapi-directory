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
var PostJournalInstructionPathParams = /** @class */ (function (_super) {
    __extends(PostJournalInstructionPathParams, _super);
    function PostJournalInstructionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PostJournalInstructionPathParams.prototype, "employerId", void 0);
    return PostJournalInstructionPathParams;
}(SpeakeasyBase));
export { PostJournalInstructionPathParams };
var PostJournalInstructionHeaders = /** @class */ (function (_super) {
    __extends(PostJournalInstructionHeaders, _super);
    function PostJournalInstructionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PostJournalInstructionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostJournalInstructionHeaders.prototype, "authorization", void 0);
    return PostJournalInstructionHeaders;
}(SpeakeasyBase));
export { PostJournalInstructionHeaders };
var PostJournalInstructionRequest = /** @class */ (function (_super) {
    __extends(PostJournalInstructionRequest, _super);
    function PostJournalInstructionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostJournalInstructionPathParams)
    ], PostJournalInstructionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostJournalInstructionHeaders)
    ], PostJournalInstructionRequest.prototype, "headers", void 0);
    return PostJournalInstructionRequest;
}(SpeakeasyBase));
export { PostJournalInstructionRequest };
var PostJournalInstructionResponse = /** @class */ (function (_super) {
    __extends(PostJournalInstructionResponse, _super);
    function PostJournalInstructionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostJournalInstructionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PostJournalInstructionResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Link)
    ], PostJournalInstructionResponse.prototype, "link", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostJournalInstructionResponse.prototype, "statusCode", void 0);
    return PostJournalInstructionResponse;
}(SpeakeasyBase));
export { PostJournalInstructionResponse };
