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
var GetRtiJobInfoPathParams = /** @class */ (function (_super) {
    __extends(GetRtiJobInfoPathParams, _super);
    function GetRtiJobInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=JobId" }),
        __metadata("design:type", String)
    ], GetRtiJobInfoPathParams.prototype, "jobId", void 0);
    return GetRtiJobInfoPathParams;
}(SpeakeasyBase));
export { GetRtiJobInfoPathParams };
var GetRtiJobInfoHeaders = /** @class */ (function (_super) {
    __extends(GetRtiJobInfoHeaders, _super);
    function GetRtiJobInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetRtiJobInfoHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetRtiJobInfoHeaders.prototype, "authorization", void 0);
    return GetRtiJobInfoHeaders;
}(SpeakeasyBase));
export { GetRtiJobInfoHeaders };
var GetRtiJobInfoRequest = /** @class */ (function (_super) {
    __extends(GetRtiJobInfoRequest, _super);
    function GetRtiJobInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRtiJobInfoPathParams)
    ], GetRtiJobInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRtiJobInfoHeaders)
    ], GetRtiJobInfoRequest.prototype, "headers", void 0);
    return GetRtiJobInfoRequest;
}(SpeakeasyBase));
export { GetRtiJobInfoRequest };
var GetRtiJobInfoResponse = /** @class */ (function (_super) {
    __extends(GetRtiJobInfoResponse, _super);
    function GetRtiJobInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRtiJobInfoResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetRtiJobInfoResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.JobInfo)
    ], GetRtiJobInfoResponse.prototype, "jobInfo", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRtiJobInfoResponse.prototype, "statusCode", void 0);
    return GetRtiJobInfoResponse;
}(SpeakeasyBase));
export { GetRtiJobInfoResponse };
