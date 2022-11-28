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
var PublishEventVideosPathParams = /** @class */ (function (_super) {
    __extends(PublishEventVideosPathParams, _super);
    function PublishEventVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PublishEventVideosPathParams.prototype, "id", void 0);
    return PublishEventVideosPathParams;
}(SpeakeasyBase));
export { PublishEventVideosPathParams };
var PublishEventVideosHeaders = /** @class */ (function (_super) {
    __extends(PublishEventVideosHeaders, _super);
    function PublishEventVideosHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" }),
        __metadata("design:type", String)
    ], PublishEventVideosHeaders.prototype, "tmpsCorrelationId", void 0);
    return PublishEventVideosHeaders;
}(SpeakeasyBase));
export { PublishEventVideosHeaders };
var PublishEventVideosRequest = /** @class */ (function (_super) {
    __extends(PublishEventVideosRequest, _super);
    function PublishEventVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PublishEventVideosPathParams)
    ], PublishEventVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PublishEventVideosHeaders)
    ], PublishEventVideosRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Video)
    ], PublishEventVideosRequest.prototype, "request", void 0);
    return PublishEventVideosRequest;
}(SpeakeasyBase));
export { PublishEventVideosRequest };
var PublishEventVideosResponse = /** @class */ (function (_super) {
    __extends(PublishEventVideosResponse, _super);
    function PublishEventVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PublishEventVideosResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PublishEventVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PublishEventVideosResponse.prototype, "statusCode", void 0);
    return PublishEventVideosResponse;
}(SpeakeasyBase));
export { PublishEventVideosResponse };
