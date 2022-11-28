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
var GetCisJobStatusPathParams = /** @class */ (function (_super) {
    __extends(GetCisJobStatusPathParams, _super);
    function GetCisJobStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" }),
        __metadata("design:type", String)
    ], GetCisJobStatusPathParams.prototype, "jobId", void 0);
    return GetCisJobStatusPathParams;
}(SpeakeasyBase));
export { GetCisJobStatusPathParams };
var GetCisJobStatusHeaders = /** @class */ (function (_super) {
    __extends(GetCisJobStatusHeaders, _super);
    function GetCisJobStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetCisJobStatusHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetCisJobStatusHeaders.prototype, "authorization", void 0);
    return GetCisJobStatusHeaders;
}(SpeakeasyBase));
export { GetCisJobStatusHeaders };
var GetCisJobStatusRequest = /** @class */ (function (_super) {
    __extends(GetCisJobStatusRequest, _super);
    function GetCisJobStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCisJobStatusPathParams)
    ], GetCisJobStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCisJobStatusHeaders)
    ], GetCisJobStatusRequest.prototype, "headers", void 0);
    return GetCisJobStatusRequest;
}(SpeakeasyBase));
export { GetCisJobStatusRequest };
var GetCisJobStatusResponse = /** @class */ (function (_super) {
    __extends(GetCisJobStatusResponse, _super);
    function GetCisJobStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCisJobStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetCisJobStatusResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCisJobStatusResponse.prototype, "statusCode", void 0);
    return GetCisJobStatusResponse;
}(SpeakeasyBase));
export { GetCisJobStatusResponse };
