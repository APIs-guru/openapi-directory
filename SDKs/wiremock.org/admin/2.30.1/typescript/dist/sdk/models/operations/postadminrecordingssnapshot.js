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
var PostAdminRecordingsSnapshotRequestBodyCaptureHeaders = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshotRequestBodyCaptureHeaders, _super);
    function PostAdminRecordingsSnapshotRequestBodyCaptureHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseInsensitive" }),
        __metadata("design:type", Boolean)
    ], PostAdminRecordingsSnapshotRequestBodyCaptureHeaders.prototype, "caseInsensitive", void 0);
    return PostAdminRecordingsSnapshotRequestBodyCaptureHeaders;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshotRequestBodyCaptureHeaders };
// PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria
/**
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
**/
var PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria, _super);
    function PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=binarySizeThreshold" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria.prototype, "binarySizeThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textSizeThreshold" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria.prototype, "textSizeThreshold", void 0);
    return PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria };
// PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials, _super);
    function PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials };
var PostAdminRecordingsSnapshotRequestBodyFilters = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshotRequestBodyFilters, _super);
    function PostAdminRecordingsSnapshotRequestBodyFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshotRequestBodyFilters.prototype, "urlPattern", void 0);
    return PostAdminRecordingsSnapshotRequestBodyFilters;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshotRequestBodyFilters };
var PostAdminRecordingsSnapshotRequestBody = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshotRequestBody, _super);
    function PostAdminRecordingsSnapshotRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=captureHeaders", elemType: PostAdminRecordingsSnapshotRequestBodyCaptureHeaders }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshotRequestBody.prototype, "captureHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extractBodyCriteria" }),
        __metadata("design:type", PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria)
    ], PostAdminRecordingsSnapshotRequestBody.prototype, "extractBodyCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", PostAdminRecordingsSnapshotRequestBodyFilters)
    ], PostAdminRecordingsSnapshotRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persist" }),
        __metadata("design:type", Boolean)
    ], PostAdminRecordingsSnapshotRequestBody.prototype, "persist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeatsAsScenarios" }),
        __metadata("design:type", Boolean)
    ], PostAdminRecordingsSnapshotRequestBody.prototype, "repeatsAsScenarios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestBodyPattern" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshotRequestBody.prototype, "requestBodyPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshotRequestBody.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsSnapshotRequestBody.prototype, "transformers", void 0);
    return PostAdminRecordingsSnapshotRequestBody;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshotRequestBody };
// PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials, _super);
    function PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials };
var PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest, _super);
    function PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest.prototype, "urlPattern", void 0);
    return PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest };
export var PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum;
(function (PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum) {
    PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum["ConnectionResetByPeer"] = "CONNECTION_RESET_BY_PEER";
    PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum["EmptyResponse"] = "EMPTY_RESPONSE";
    PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum["MalformedResponseChunk"] = "MALFORMED_RESPONSE_CHUNK";
    PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum["RandomDataThenClose"] = "RANDOM_DATA_THEN_CLOSE";
})(PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum || (PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum = {}));
var PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse, _super);
    function PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "additionalProxyRequestHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base64Body" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "base64Body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyFileName" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "bodyFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fault" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "fault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" }),
        __metadata("design:type", Number)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "fixedDelayMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" }),
        __metadata("design:type", Boolean)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "fromConfiguredStub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonBody" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "jsonBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "proxyBaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse.prototype, "transformers", void 0);
    return PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse };
var PostAdminRecordingsSnapshot200ApplicationJsonMappings = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshot200ApplicationJsonMappings, _super);
    function PostAdminRecordingsSnapshot200ApplicationJsonMappings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newScenarioState" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "newScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistent" }),
        __metadata("design:type", Boolean)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "persistent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postServeActions" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "postServeActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredScenarioState" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "requiredScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarioName" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "scenarioName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMappings.prototype, "uuid", void 0);
    return PostAdminRecordingsSnapshot200ApplicationJsonMappings;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshot200ApplicationJsonMappings };
var PostAdminRecordingsSnapshot200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshot200ApplicationJsonMeta, _super);
    function PostAdminRecordingsSnapshot200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PostAdminRecordingsSnapshot200ApplicationJsonMeta.prototype, "total", void 0);
    return PostAdminRecordingsSnapshot200ApplicationJsonMeta;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshot200ApplicationJsonMeta };
var PostAdminRecordingsSnapshot200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshot200ApplicationJson, _super);
    function PostAdminRecordingsSnapshot200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mappings", elemType: PostAdminRecordingsSnapshot200ApplicationJsonMappings }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsSnapshot200ApplicationJson.prototype, "mappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", PostAdminRecordingsSnapshot200ApplicationJsonMeta)
    ], PostAdminRecordingsSnapshot200ApplicationJson.prototype, "meta", void 0);
    return PostAdminRecordingsSnapshot200ApplicationJson;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshot200ApplicationJson };
var PostAdminRecordingsSnapshotRequest = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshotRequest, _super);
    function PostAdminRecordingsSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAdminRecordingsSnapshotRequestBody)
    ], PostAdminRecordingsSnapshotRequest.prototype, "request", void 0);
    return PostAdminRecordingsSnapshotRequest;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshotRequest };
var PostAdminRecordingsSnapshotResponse = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsSnapshotResponse, _super);
    function PostAdminRecordingsSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAdminRecordingsSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAdminRecordingsSnapshot200ApplicationJson)
    ], PostAdminRecordingsSnapshotResponse.prototype, "postAdminRecordingsSnapshot200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAdminRecordingsSnapshotResponse.prototype, "statusCode", void 0);
    return PostAdminRecordingsSnapshotResponse;
}(SpeakeasyBase));
export { PostAdminRecordingsSnapshotResponse };
