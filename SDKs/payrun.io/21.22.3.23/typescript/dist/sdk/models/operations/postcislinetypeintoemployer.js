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
var PostCisLineTypeIntoEmployerPathParams = /** @class */ (function (_super) {
    __extends(PostCisLineTypeIntoEmployerPathParams, _super);
    function PostCisLineTypeIntoEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PostCisLineTypeIntoEmployerPathParams.prototype, "employerId", void 0);
    return PostCisLineTypeIntoEmployerPathParams;
}(SpeakeasyBase));
export { PostCisLineTypeIntoEmployerPathParams };
var PostCisLineTypeIntoEmployerHeaders = /** @class */ (function (_super) {
    __extends(PostCisLineTypeIntoEmployerHeaders, _super);
    function PostCisLineTypeIntoEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PostCisLineTypeIntoEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostCisLineTypeIntoEmployerHeaders.prototype, "authorization", void 0);
    return PostCisLineTypeIntoEmployerHeaders;
}(SpeakeasyBase));
export { PostCisLineTypeIntoEmployerHeaders };
var PostCisLineTypeIntoEmployerRequest = /** @class */ (function (_super) {
    __extends(PostCisLineTypeIntoEmployerRequest, _super);
    function PostCisLineTypeIntoEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCisLineTypeIntoEmployerPathParams)
    ], PostCisLineTypeIntoEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCisLineTypeIntoEmployerHeaders)
    ], PostCisLineTypeIntoEmployerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CisLineType)
    ], PostCisLineTypeIntoEmployerRequest.prototype, "request", void 0);
    return PostCisLineTypeIntoEmployerRequest;
}(SpeakeasyBase));
export { PostCisLineTypeIntoEmployerRequest };
var PostCisLineTypeIntoEmployerResponse = /** @class */ (function (_super) {
    __extends(PostCisLineTypeIntoEmployerResponse, _super);
    function PostCisLineTypeIntoEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCisLineTypeIntoEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PostCisLineTypeIntoEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Link)
    ], PostCisLineTypeIntoEmployerResponse.prototype, "link", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCisLineTypeIntoEmployerResponse.prototype, "statusCode", void 0);
    return PostCisLineTypeIntoEmployerResponse;
}(SpeakeasyBase));
export { PostCisLineTypeIntoEmployerResponse };
