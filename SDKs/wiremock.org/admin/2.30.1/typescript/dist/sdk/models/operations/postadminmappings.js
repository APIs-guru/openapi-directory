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
// PostAdminMappingsRequestBodyRequestBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminMappingsRequestBodyRequestBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRequestBodyRequestBasicAuthCredentials, _super);
    function PostAdminMappingsRequestBodyRequestBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyRequestBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyRequestBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminMappingsRequestBodyRequestBasicAuthCredentials;
}(SpeakeasyBase));
export { PostAdminMappingsRequestBodyRequestBasicAuthCredentials };
var PostAdminMappingsRequestBodyRequest = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRequestBodyRequest, _super);
    function PostAdminMappingsRequestBodyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminMappingsRequestBodyRequestBasicAuthCredentials)
    ], PostAdminMappingsRequestBodyRequest.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminMappingsRequestBodyRequest.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRequestBodyRequest.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRequestBodyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRequestBodyRequest.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyRequest.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyRequest.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyRequest.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyRequest.prototype, "urlPattern", void 0);
    return PostAdminMappingsRequestBodyRequest;
}(SpeakeasyBase));
export { PostAdminMappingsRequestBodyRequest };
export var PostAdminMappingsRequestBodyResponseFaultEnum;
(function (PostAdminMappingsRequestBodyResponseFaultEnum) {
    PostAdminMappingsRequestBodyResponseFaultEnum["ConnectionResetByPeer"] = "CONNECTION_RESET_BY_PEER";
    PostAdminMappingsRequestBodyResponseFaultEnum["EmptyResponse"] = "EMPTY_RESPONSE";
    PostAdminMappingsRequestBodyResponseFaultEnum["MalformedResponseChunk"] = "MALFORMED_RESPONSE_CHUNK";
    PostAdminMappingsRequestBodyResponseFaultEnum["RandomDataThenClose"] = "RANDOM_DATA_THEN_CLOSE";
})(PostAdminMappingsRequestBodyResponseFaultEnum || (PostAdminMappingsRequestBodyResponseFaultEnum = {}));
var PostAdminMappingsRequestBodyResponse = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRequestBodyResponse, _super);
    function PostAdminMappingsRequestBodyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRequestBodyResponse.prototype, "additionalProxyRequestHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base64Body" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyResponse.prototype, "base64Body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyFileName" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyResponse.prototype, "bodyFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fault" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyResponse.prototype, "fault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" }),
        __metadata("design:type", Number)
    ], PostAdminMappingsRequestBodyResponse.prototype, "fixedDelayMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsRequestBodyResponse.prototype, "fromConfiguredStub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRequestBodyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonBody" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRequestBodyResponse.prototype, "jsonBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyResponse.prototype, "proxyBaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], PostAdminMappingsRequestBodyResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBodyResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRequestBodyResponse.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], PostAdminMappingsRequestBodyResponse.prototype, "transformers", void 0);
    return PostAdminMappingsRequestBodyResponse;
}(SpeakeasyBase));
export { PostAdminMappingsRequestBodyResponse };
var PostAdminMappingsRequestBody = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRequestBody, _super);
    function PostAdminMappingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBody.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRequestBody.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newScenarioState" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBody.prototype, "newScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistent" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsRequestBody.prototype, "persistent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postServeActions" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsRequestBody.prototype, "postServeActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], PostAdminMappingsRequestBody.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", PostAdminMappingsRequestBodyRequest)
    ], PostAdminMappingsRequestBody.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredScenarioState" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBody.prototype, "requiredScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", PostAdminMappingsRequestBodyResponse)
    ], PostAdminMappingsRequestBody.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarioName" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBody.prototype, "scenarioName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PostAdminMappingsRequestBody.prototype, "uuid", void 0);
    return PostAdminMappingsRequestBody;
}(SpeakeasyBase));
export { PostAdminMappingsRequestBody };
// PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials, _super);
    function PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials;
}(SpeakeasyBase));
export { PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials };
var PostAdminMappings201ApplicationJsonRequest = /** @class */ (function (_super) {
    __extends(PostAdminMappings201ApplicationJsonRequest, _super);
    function PostAdminMappings201ApplicationJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials)
    ], PostAdminMappings201ApplicationJsonRequest.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminMappings201ApplicationJsonRequest.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PostAdminMappings201ApplicationJsonRequest.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminMappings201ApplicationJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], PostAdminMappings201ApplicationJsonRequest.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonRequest.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonRequest.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonRequest.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonRequest.prototype, "urlPattern", void 0);
    return PostAdminMappings201ApplicationJsonRequest;
}(SpeakeasyBase));
export { PostAdminMappings201ApplicationJsonRequest };
export var PostAdminMappings201ApplicationJsonResponseFaultEnum;
(function (PostAdminMappings201ApplicationJsonResponseFaultEnum) {
    PostAdminMappings201ApplicationJsonResponseFaultEnum["ConnectionResetByPeer"] = "CONNECTION_RESET_BY_PEER";
    PostAdminMappings201ApplicationJsonResponseFaultEnum["EmptyResponse"] = "EMPTY_RESPONSE";
    PostAdminMappings201ApplicationJsonResponseFaultEnum["MalformedResponseChunk"] = "MALFORMED_RESPONSE_CHUNK";
    PostAdminMappings201ApplicationJsonResponseFaultEnum["RandomDataThenClose"] = "RANDOM_DATA_THEN_CLOSE";
})(PostAdminMappings201ApplicationJsonResponseFaultEnum || (PostAdminMappings201ApplicationJsonResponseFaultEnum = {}));
var PostAdminMappings201ApplicationJsonResponse = /** @class */ (function (_super) {
    __extends(PostAdminMappings201ApplicationJsonResponse, _super);
    function PostAdminMappings201ApplicationJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" }),
        __metadata("design:type", Map)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "additionalProxyRequestHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base64Body" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "base64Body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyFileName" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "bodyFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fault" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "fault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" }),
        __metadata("design:type", Number)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "fixedDelayMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "fromConfiguredStub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonBody" }),
        __metadata("design:type", Map)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "jsonBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "proxyBaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], PostAdminMappings201ApplicationJsonResponse.prototype, "transformers", void 0);
    return PostAdminMappings201ApplicationJsonResponse;
}(SpeakeasyBase));
export { PostAdminMappings201ApplicationJsonResponse };
var PostAdminMappings201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAdminMappings201ApplicationJson, _super);
    function PostAdminMappings201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], PostAdminMappings201ApplicationJson.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newScenarioState" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJson.prototype, "newScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistent" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappings201ApplicationJson.prototype, "persistent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postServeActions" }),
        __metadata("design:type", Map)
    ], PostAdminMappings201ApplicationJson.prototype, "postServeActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], PostAdminMappings201ApplicationJson.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", PostAdminMappings201ApplicationJsonRequest)
    ], PostAdminMappings201ApplicationJson.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredScenarioState" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJson.prototype, "requiredScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", PostAdminMappings201ApplicationJsonResponse)
    ], PostAdminMappings201ApplicationJson.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarioName" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJson.prototype, "scenarioName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PostAdminMappings201ApplicationJson.prototype, "uuid", void 0);
    return PostAdminMappings201ApplicationJson;
}(SpeakeasyBase));
export { PostAdminMappings201ApplicationJson };
var PostAdminMappingsRequest = /** @class */ (function (_super) {
    __extends(PostAdminMappingsRequest, _super);
    function PostAdminMappingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAdminMappingsRequestBody)
    ], PostAdminMappingsRequest.prototype, "request", void 0);
    return PostAdminMappingsRequest;
}(SpeakeasyBase));
export { PostAdminMappingsRequest };
var PostAdminMappingsResponse = /** @class */ (function (_super) {
    __extends(PostAdminMappingsResponse, _super);
    function PostAdminMappingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAdminMappingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAdminMappings201ApplicationJson)
    ], PostAdminMappingsResponse.prototype, "postAdminMappings201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAdminMappingsResponse.prototype, "statusCode", void 0);
    return PostAdminMappingsResponse;
}(SpeakeasyBase));
export { PostAdminMappingsResponse };
