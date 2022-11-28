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
var GetBatchJobInfoPathParams = /** @class */ (function (_super) {
    __extends(GetBatchJobInfoPathParams, _super);
    function GetBatchJobInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" }),
        __metadata("design:type", String)
    ], GetBatchJobInfoPathParams.prototype, "jobId", void 0);
    return GetBatchJobInfoPathParams;
}(SpeakeasyBase));
export { GetBatchJobInfoPathParams };
var GetBatchJobInfoHeaders = /** @class */ (function (_super) {
    __extends(GetBatchJobInfoHeaders, _super);
    function GetBatchJobInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetBatchJobInfoHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetBatchJobInfoHeaders.prototype, "authorization", void 0);
    return GetBatchJobInfoHeaders;
}(SpeakeasyBase));
export { GetBatchJobInfoHeaders };
var GetBatchJobInfoRequest = /** @class */ (function (_super) {
    __extends(GetBatchJobInfoRequest, _super);
    function GetBatchJobInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBatchJobInfoPathParams)
    ], GetBatchJobInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBatchJobInfoHeaders)
    ], GetBatchJobInfoRequest.prototype, "headers", void 0);
    return GetBatchJobInfoRequest;
}(SpeakeasyBase));
export { GetBatchJobInfoRequest };
var GetBatchJobInfoResponse = /** @class */ (function (_super) {
    __extends(GetBatchJobInfoResponse, _super);
    function GetBatchJobInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBatchJobInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetBatchJobInfoResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.JobInfo)
    ], GetBatchJobInfoResponse.prototype, "jobInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBatchJobInfoResponse.prototype, "statusCode", void 0);
    return GetBatchJobInfoResponse;
}(SpeakeasyBase));
export { GetBatchJobInfoResponse };
