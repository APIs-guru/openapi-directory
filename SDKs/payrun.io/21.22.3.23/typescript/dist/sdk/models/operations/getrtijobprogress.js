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
var GetRtiJobProgressPathParams = /** @class */ (function (_super) {
    __extends(GetRtiJobProgressPathParams, _super);
    function GetRtiJobProgressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" }),
        __metadata("design:type", String)
    ], GetRtiJobProgressPathParams.prototype, "jobId", void 0);
    return GetRtiJobProgressPathParams;
}(SpeakeasyBase));
export { GetRtiJobProgressPathParams };
var GetRtiJobProgressHeaders = /** @class */ (function (_super) {
    __extends(GetRtiJobProgressHeaders, _super);
    function GetRtiJobProgressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetRtiJobProgressHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetRtiJobProgressHeaders.prototype, "authorization", void 0);
    return GetRtiJobProgressHeaders;
}(SpeakeasyBase));
export { GetRtiJobProgressHeaders };
var GetRtiJobProgressRequest = /** @class */ (function (_super) {
    __extends(GetRtiJobProgressRequest, _super);
    function GetRtiJobProgressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRtiJobProgressPathParams)
    ], GetRtiJobProgressRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRtiJobProgressHeaders)
    ], GetRtiJobProgressRequest.prototype, "headers", void 0);
    return GetRtiJobProgressRequest;
}(SpeakeasyBase));
export { GetRtiJobProgressRequest };
var GetRtiJobProgressResponse = /** @class */ (function (_super) {
    __extends(GetRtiJobProgressResponse, _super);
    function GetRtiJobProgressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRtiJobProgressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetRtiJobProgressResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRtiJobProgressResponse.prototype, "statusCode", void 0);
    return GetRtiJobProgressResponse;
}(SpeakeasyBase));
export { GetRtiJobProgressResponse };
