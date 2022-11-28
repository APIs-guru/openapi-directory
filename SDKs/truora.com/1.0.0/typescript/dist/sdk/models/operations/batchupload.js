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
var BatchUploadPathParams = /** @class */ (function (_super) {
    __extends(BatchUploadPathParams, _super);
    function BatchUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_id" }),
        __metadata("design:type", String)
    ], BatchUploadPathParams.prototype, "reportId", void 0);
    return BatchUploadPathParams;
}(SpeakeasyBase));
export { BatchUploadPathParams };
var BatchUploadSecurity = /** @class */ (function (_super) {
    __extends(BatchUploadSecurity, _super);
    function BatchUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BatchUploadSecurity.prototype, "apiKey", void 0);
    return BatchUploadSecurity;
}(SpeakeasyBase));
export { BatchUploadSecurity };
var BatchUploadRequest = /** @class */ (function (_super) {
    __extends(BatchUploadRequest, _super);
    function BatchUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchUploadPathParams)
    ], BatchUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", shared.BatchUploadInput)
    ], BatchUploadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchUploadSecurity)
    ], BatchUploadRequest.prototype, "security", void 0);
    return BatchUploadRequest;
}(SpeakeasyBase));
export { BatchUploadRequest };
var BatchUploadResponse = /** @class */ (function (_super) {
    __extends(BatchUploadResponse, _super);
    function BatchUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchUploadResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReportOutput)
    ], BatchUploadResponse.prototype, "reportOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchUploadResponse.prototype, "statusCode", void 0);
    return BatchUploadResponse;
}(SpeakeasyBase));
export { BatchUploadResponse };
