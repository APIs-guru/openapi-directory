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
var PublishAttractionVideosPathParams = /** @class */ (function (_super) {
    __extends(PublishAttractionVideosPathParams, _super);
    function PublishAttractionVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PublishAttractionVideosPathParams.prototype, "id", void 0);
    return PublishAttractionVideosPathParams;
}(SpeakeasyBase));
export { PublishAttractionVideosPathParams };
var PublishAttractionVideosHeaders = /** @class */ (function (_super) {
    __extends(PublishAttractionVideosHeaders, _super);
    function PublishAttractionVideosHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" }),
        __metadata("design:type", String)
    ], PublishAttractionVideosHeaders.prototype, "tmpsCorrelationId", void 0);
    return PublishAttractionVideosHeaders;
}(SpeakeasyBase));
export { PublishAttractionVideosHeaders };
var PublishAttractionVideosRequest = /** @class */ (function (_super) {
    __extends(PublishAttractionVideosRequest, _super);
    function PublishAttractionVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PublishAttractionVideosPathParams)
    ], PublishAttractionVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PublishAttractionVideosHeaders)
    ], PublishAttractionVideosRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Video)
    ], PublishAttractionVideosRequest.prototype, "request", void 0);
    return PublishAttractionVideosRequest;
}(SpeakeasyBase));
export { PublishAttractionVideosRequest };
var PublishAttractionVideosResponse = /** @class */ (function (_super) {
    __extends(PublishAttractionVideosResponse, _super);
    function PublishAttractionVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PublishAttractionVideosResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PublishAttractionVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PublishAttractionVideosResponse.prototype, "statusCode", void 0);
    return PublishAttractionVideosResponse;
}(SpeakeasyBase));
export { PublishAttractionVideosResponse };
