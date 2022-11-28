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
var PostAdminRecordingsStartRequestBodyCaptureHeaders = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStartRequestBodyCaptureHeaders, _super);
    function PostAdminRecordingsStartRequestBodyCaptureHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseInsensitive" }),
        __metadata("design:type", Boolean)
    ], PostAdminRecordingsStartRequestBodyCaptureHeaders.prototype, "caseInsensitive", void 0);
    return PostAdminRecordingsStartRequestBodyCaptureHeaders;
}(SpeakeasyBase));
export { PostAdminRecordingsStartRequestBodyCaptureHeaders };
// PostAdminRecordingsStartRequestBodyExtractBodyCriteria
/**
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
**/
var PostAdminRecordingsStartRequestBodyExtractBodyCriteria = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStartRequestBodyExtractBodyCriteria, _super);
    function PostAdminRecordingsStartRequestBodyExtractBodyCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=binarySizeThreshold" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartRequestBodyExtractBodyCriteria.prototype, "binarySizeThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textSizeThreshold" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartRequestBodyExtractBodyCriteria.prototype, "textSizeThreshold", void 0);
    return PostAdminRecordingsStartRequestBodyExtractBodyCriteria;
}(SpeakeasyBase));
export { PostAdminRecordingsStartRequestBodyExtractBodyCriteria };
// PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials, _super);
    function PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials;
}(SpeakeasyBase));
export { PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials };
var PostAdminRecordingsStartRequestBodyFilters = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStartRequestBodyFilters, _super);
    function PostAdminRecordingsStartRequestBodyFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials)
    ], PostAdminRecordingsStartRequestBodyFilters.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsStartRequestBodyFilters.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStartRequestBodyFilters.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStartRequestBodyFilters.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartRequestBodyFilters.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStartRequestBodyFilters.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartRequestBodyFilters.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartRequestBodyFilters.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartRequestBodyFilters.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartRequestBodyFilters.prototype, "urlPattern", void 0);
    return PostAdminRecordingsStartRequestBodyFilters;
}(SpeakeasyBase));
export { PostAdminRecordingsStartRequestBodyFilters };
var PostAdminRecordingsStartRequestBody = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStartRequestBody, _super);
    function PostAdminRecordingsStartRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=captureHeaders", elemType: PostAdminRecordingsStartRequestBodyCaptureHeaders }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStartRequestBody.prototype, "captureHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extractBodyCriteria" }),
        __metadata("design:type", PostAdminRecordingsStartRequestBodyExtractBodyCriteria)
    ], PostAdminRecordingsStartRequestBody.prototype, "extractBodyCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", PostAdminRecordingsStartRequestBodyFilters)
    ], PostAdminRecordingsStartRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persist" }),
        __metadata("design:type", Boolean)
    ], PostAdminRecordingsStartRequestBody.prototype, "persist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeatsAsScenarios" }),
        __metadata("design:type", Boolean)
    ], PostAdminRecordingsStartRequestBody.prototype, "repeatsAsScenarios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestBodyPattern" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStartRequestBody.prototype, "requestBodyPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetBaseUrl" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartRequestBody.prototype, "targetBaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStartRequestBody.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsStartRequestBody.prototype, "transformers", void 0);
    return PostAdminRecordingsStartRequestBody;
}(SpeakeasyBase));
export { PostAdminRecordingsStartRequestBody };
var PostAdminRecordingsStartRequest = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStartRequest, _super);
    function PostAdminRecordingsStartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAdminRecordingsStartRequestBody)
    ], PostAdminRecordingsStartRequest.prototype, "request", void 0);
    return PostAdminRecordingsStartRequest;
}(SpeakeasyBase));
export { PostAdminRecordingsStartRequest };
var PostAdminRecordingsStartResponse = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStartResponse, _super);
    function PostAdminRecordingsStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAdminRecordingsStartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAdminRecordingsStartResponse.prototype, "statusCode", void 0);
    return PostAdminRecordingsStartResponse;
}(SpeakeasyBase));
export { PostAdminRecordingsStartResponse };
