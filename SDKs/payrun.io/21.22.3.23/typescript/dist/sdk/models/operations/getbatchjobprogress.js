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
var GetBatchJobProgressPathParams = /** @class */ (function (_super) {
    __extends(GetBatchJobProgressPathParams, _super);
    function GetBatchJobProgressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=JobId" }),
        __metadata("design:type", String)
    ], GetBatchJobProgressPathParams.prototype, "jobId", void 0);
    return GetBatchJobProgressPathParams;
}(SpeakeasyBase));
export { GetBatchJobProgressPathParams };
var GetBatchJobProgressHeaders = /** @class */ (function (_super) {
    __extends(GetBatchJobProgressHeaders, _super);
    function GetBatchJobProgressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetBatchJobProgressHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetBatchJobProgressHeaders.prototype, "authorization", void 0);
    return GetBatchJobProgressHeaders;
}(SpeakeasyBase));
export { GetBatchJobProgressHeaders };
var GetBatchJobProgressRequest = /** @class */ (function (_super) {
    __extends(GetBatchJobProgressRequest, _super);
    function GetBatchJobProgressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBatchJobProgressPathParams)
    ], GetBatchJobProgressRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBatchJobProgressHeaders)
    ], GetBatchJobProgressRequest.prototype, "headers", void 0);
    return GetBatchJobProgressRequest;
}(SpeakeasyBase));
export { GetBatchJobProgressRequest };
var GetBatchJobProgressResponse = /** @class */ (function (_super) {
    __extends(GetBatchJobProgressResponse, _super);
    function GetBatchJobProgressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBatchJobProgressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetBatchJobProgressResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBatchJobProgressResponse.prototype, "statusCode", void 0);
    return GetBatchJobProgressResponse;
}(SpeakeasyBase));
export { GetBatchJobProgressResponse };
