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
// PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials, _super);
    function PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials;
}(SpeakeasyBase));
export { PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials };
var PostAdminRecordingsStop200ApplicationJsonMappingsRequest = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStop200ApplicationJsonMappingsRequest, _super);
    function PostAdminRecordingsStop200ApplicationJsonMappingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequest.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequest.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequest.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequest.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequest.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequest.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequest.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsRequest.prototype, "urlPattern", void 0);
    return PostAdminRecordingsStop200ApplicationJsonMappingsRequest;
}(SpeakeasyBase));
export { PostAdminRecordingsStop200ApplicationJsonMappingsRequest };
export var PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum;
(function (PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum) {
    PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum["ConnectionResetByPeer"] = "CONNECTION_RESET_BY_PEER";
    PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum["EmptyResponse"] = "EMPTY_RESPONSE";
    PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum["MalformedResponseChunk"] = "MALFORMED_RESPONSE_CHUNK";
    PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum["RandomDataThenClose"] = "RANDOM_DATA_THEN_CLOSE";
})(PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum || (PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum = {}));
var PostAdminRecordingsStop200ApplicationJsonMappingsResponse = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStop200ApplicationJsonMappingsResponse, _super);
    function PostAdminRecordingsStop200ApplicationJsonMappingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "additionalProxyRequestHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base64Body" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "base64Body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyFileName" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "bodyFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fault" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "fault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" }),
        __metadata("design:type", Number)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "fixedDelayMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" }),
        __metadata("design:type", Boolean)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "fromConfiguredStub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonBody" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "jsonBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "proxyBaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsStop200ApplicationJsonMappingsResponse.prototype, "transformers", void 0);
    return PostAdminRecordingsStop200ApplicationJsonMappingsResponse;
}(SpeakeasyBase));
export { PostAdminRecordingsStop200ApplicationJsonMappingsResponse };
var PostAdminRecordingsStop200ApplicationJsonMappings = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStop200ApplicationJsonMappings, _super);
    function PostAdminRecordingsStop200ApplicationJsonMappings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newScenarioState" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "newScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistent" }),
        __metadata("design:type", Boolean)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "persistent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postServeActions" }),
        __metadata("design:type", Map)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "postServeActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", PostAdminRecordingsStop200ApplicationJsonMappingsRequest)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredScenarioState" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "requiredScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", PostAdminRecordingsStop200ApplicationJsonMappingsResponse)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarioName" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "scenarioName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PostAdminRecordingsStop200ApplicationJsonMappings.prototype, "uuid", void 0);
    return PostAdminRecordingsStop200ApplicationJsonMappings;
}(SpeakeasyBase));
export { PostAdminRecordingsStop200ApplicationJsonMappings };
var PostAdminRecordingsStop200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStop200ApplicationJsonMeta, _super);
    function PostAdminRecordingsStop200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PostAdminRecordingsStop200ApplicationJsonMeta.prototype, "total", void 0);
    return PostAdminRecordingsStop200ApplicationJsonMeta;
}(SpeakeasyBase));
export { PostAdminRecordingsStop200ApplicationJsonMeta };
var PostAdminRecordingsStop200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStop200ApplicationJson, _super);
    function PostAdminRecordingsStop200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mappings", elemType: PostAdminRecordingsStop200ApplicationJsonMappings }),
        __metadata("design:type", Array)
    ], PostAdminRecordingsStop200ApplicationJson.prototype, "mappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", PostAdminRecordingsStop200ApplicationJsonMeta)
    ], PostAdminRecordingsStop200ApplicationJson.prototype, "meta", void 0);
    return PostAdminRecordingsStop200ApplicationJson;
}(SpeakeasyBase));
export { PostAdminRecordingsStop200ApplicationJson };
var PostAdminRecordingsStopResponse = /** @class */ (function (_super) {
    __extends(PostAdminRecordingsStopResponse, _super);
    function PostAdminRecordingsStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAdminRecordingsStopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAdminRecordingsStop200ApplicationJson)
    ], PostAdminRecordingsStopResponse.prototype, "postAdminRecordingsStop200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAdminRecordingsStopResponse.prototype, "statusCode", void 0);
    return PostAdminRecordingsStopResponse;
}(SpeakeasyBase));
export { PostAdminRecordingsStopResponse };
