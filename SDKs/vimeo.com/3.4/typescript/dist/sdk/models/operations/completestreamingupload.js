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
var CompleteStreamingUploadPathParams = /** @class */ (function (_super) {
    __extends(CompleteStreamingUploadPathParams, _super);
    function CompleteStreamingUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload" }),
        __metadata("design:type", Number)
    ], CompleteStreamingUploadPathParams.prototype, "upload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], CompleteStreamingUploadPathParams.prototype, "userId", void 0);
    return CompleteStreamingUploadPathParams;
}(SpeakeasyBase));
export { CompleteStreamingUploadPathParams };
var CompleteStreamingUploadQueryParams = /** @class */ (function (_super) {
    __extends(CompleteStreamingUploadQueryParams, _super);
    function CompleteStreamingUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], CompleteStreamingUploadQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=video_file_id" }),
        __metadata("design:type", Number)
    ], CompleteStreamingUploadQueryParams.prototype, "videoFileId", void 0);
    return CompleteStreamingUploadQueryParams;
}(SpeakeasyBase));
export { CompleteStreamingUploadQueryParams };
var CompleteStreamingUploadSecurity = /** @class */ (function (_super) {
    __extends(CompleteStreamingUploadSecurity, _super);
    function CompleteStreamingUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CompleteStreamingUploadSecurity.prototype, "oauth2", void 0);
    return CompleteStreamingUploadSecurity;
}(SpeakeasyBase));
export { CompleteStreamingUploadSecurity };
var CompleteStreamingUploadRequest = /** @class */ (function (_super) {
    __extends(CompleteStreamingUploadRequest, _super);
    function CompleteStreamingUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompleteStreamingUploadPathParams)
    ], CompleteStreamingUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompleteStreamingUploadQueryParams)
    ], CompleteStreamingUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompleteStreamingUploadSecurity)
    ], CompleteStreamingUploadRequest.prototype, "security", void 0);
    return CompleteStreamingUploadRequest;
}(SpeakeasyBase));
export { CompleteStreamingUploadRequest };
var CompleteStreamingUploadResponse = /** @class */ (function (_super) {
    __extends(CompleteStreamingUploadResponse, _super);
    function CompleteStreamingUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompleteStreamingUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompleteStreamingUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CompleteStreamingUploadResponse.prototype, "error", void 0);
    return CompleteStreamingUploadResponse;
}(SpeakeasyBase));
export { CompleteStreamingUploadResponse };
