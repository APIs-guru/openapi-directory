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
var CreateVideoVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateVideoVersionPathParams, _super);
    function CreateVideoVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], CreateVideoVersionPathParams.prototype, "videoId", void 0);
    return CreateVideoVersionPathParams;
}(SpeakeasyBase));
export { CreateVideoVersionPathParams };
export var CreateVideoVersionRequestBodyUploadApproachEnum;
(function (CreateVideoVersionRequestBodyUploadApproachEnum) {
    CreateVideoVersionRequestBodyUploadApproachEnum["Post"] = "post";
    CreateVideoVersionRequestBodyUploadApproachEnum["Pull"] = "pull";
    CreateVideoVersionRequestBodyUploadApproachEnum["Streaming"] = "streaming";
    CreateVideoVersionRequestBodyUploadApproachEnum["Tus"] = "tus";
})(CreateVideoVersionRequestBodyUploadApproachEnum || (CreateVideoVersionRequestBodyUploadApproachEnum = {}));
var CreateVideoVersionRequestBodyUpload = /** @class */ (function (_super) {
    __extends(CreateVideoVersionRequestBodyUpload, _super);
    function CreateVideoVersionRequestBodyUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approach" }),
        __metadata("design:type", String)
    ], CreateVideoVersionRequestBodyUpload.prototype, "approach", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], CreateVideoVersionRequestBodyUpload.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], CreateVideoVersionRequestBodyUpload.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], CreateVideoVersionRequestBodyUpload.prototype, "size", void 0);
    return CreateVideoVersionRequestBodyUpload;
}(SpeakeasyBase));
export { CreateVideoVersionRequestBodyUpload };
var CreateVideoVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateVideoVersionRequestBody, _super);
    function CreateVideoVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_name" }),
        __metadata("design:type", String)
    ], CreateVideoVersionRequestBody.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload" }),
        __metadata("design:type", CreateVideoVersionRequestBodyUpload)
    ], CreateVideoVersionRequestBody.prototype, "upload", void 0);
    return CreateVideoVersionRequestBody;
}(SpeakeasyBase));
export { CreateVideoVersionRequestBody };
var CreateVideoVersionRequest = /** @class */ (function (_super) {
    __extends(CreateVideoVersionRequest, _super);
    function CreateVideoVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVideoVersionPathParams)
    ], CreateVideoVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video.version+json" }),
        __metadata("design:type", CreateVideoVersionRequestBody)
    ], CreateVideoVersionRequest.prototype, "request", void 0);
    return CreateVideoVersionRequest;
}(SpeakeasyBase));
export { CreateVideoVersionRequest };
var CreateVideoVersionResponse = /** @class */ (function (_super) {
    __extends(CreateVideoVersionResponse, _super);
    function CreateVideoVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVideoVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVideoVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CreateVideoVersionResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideoVersions)
    ], CreateVideoVersionResponse.prototype, "videoVersions", void 0);
    return CreateVideoVersionResponse;
}(SpeakeasyBase));
export { CreateVideoVersionResponse };
