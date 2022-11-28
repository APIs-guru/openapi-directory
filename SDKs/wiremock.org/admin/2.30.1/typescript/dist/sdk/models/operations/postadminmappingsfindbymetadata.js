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
var PostAdminMappingsFindByMetadataRequestBodyStringEquals = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadataRequestBodyStringEquals, _super);
    function PostAdminMappingsFindByMetadataRequestBodyStringEquals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseInsensitive" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsFindByMetadataRequestBodyStringEquals.prototype, "caseInsensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalTo" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsFindByMetadataRequestBodyStringEquals.prototype, "equalTo", void 0);
    return PostAdminMappingsFindByMetadataRequestBodyStringEquals;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadataRequestBodyStringEquals };
var PostAdminMappingsFindByMetadataRequestBodyStringContains = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadataRequestBodyStringContains, _super);
    function PostAdminMappingsFindByMetadataRequestBodyStringContains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contains" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadataRequestBodyStringContains.prototype, "contains", void 0);
    return PostAdminMappingsFindByMetadataRequestBodyStringContains;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadataRequestBodyStringContains };
var PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch, _super);
    function PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matches" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch.prototype, "matches", void 0);
    return PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch };
var PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch, _super);
    function PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doesNotMatch" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch.prototype, "doesNotMatch", void 0);
    return PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch };
var PostAdminMappingsFindByMetadataRequestBodyJsonEquals = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadataRequestBodyJsonEquals, _super);
    function PostAdminMappingsFindByMetadataRequestBodyJsonEquals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalToJson" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadataRequestBodyJsonEquals.prototype, "equalToJson", void 0);
    return PostAdminMappingsFindByMetadataRequestBodyJsonEquals;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadataRequestBodyJsonEquals };
var PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch, _super);
    function PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreArrayOrder" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch.prototype, "ignoreArrayOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreExtraElements" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch.prototype, "ignoreExtraElements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchesJsonPath" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch.prototype, "matchesJsonPath", void 0);
    return PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch };
var PostAdminMappingsFindByMetadataRequestBodyXmlEquality = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadataRequestBodyXmlEquality, _super);
    function PostAdminMappingsFindByMetadataRequestBodyXmlEquality() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equalToXml" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadataRequestBodyXmlEquality.prototype, "equalToXml", void 0);
    return PostAdminMappingsFindByMetadataRequestBodyXmlEquality;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadataRequestBodyXmlEquality };
var PostAdminMappingsFindByMetadataRequestBodyXPathMatch = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadataRequestBodyXPathMatch, _super);
    function PostAdminMappingsFindByMetadataRequestBodyXPathMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchesXpath" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadataRequestBodyXPathMatch.prototype, "matchesXpath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaces" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadataRequestBodyXPathMatch.prototype, "namespaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valuePattern" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadataRequestBodyXPathMatch.prototype, "valuePattern", void 0);
    return PostAdminMappingsFindByMetadataRequestBodyXPathMatch;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadataRequestBodyXPathMatch };
// PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials, _super);
    function PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials };
var PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest, _super);
    function PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest.prototype, "urlPattern", void 0);
    return PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest };
export var PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum;
(function (PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum) {
    PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum["ConnectionResetByPeer"] = "CONNECTION_RESET_BY_PEER";
    PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum["EmptyResponse"] = "EMPTY_RESPONSE";
    PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum["MalformedResponseChunk"] = "MALFORMED_RESPONSE_CHUNK";
    PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum["RandomDataThenClose"] = "RANDOM_DATA_THEN_CLOSE";
})(PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum || (PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum = {}));
var PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse, _super);
    function PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "additionalProxyRequestHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base64Body" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "base64Body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyFileName" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "bodyFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fault" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "fault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" }),
        __metadata("design:type", Number)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "fixedDelayMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "fromConfiguredStub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonBody" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "jsonBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "proxyBaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse.prototype, "transformers", void 0);
    return PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse };
var PostAdminMappingsFindByMetadata200ApplicationJsonMappings = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadata200ApplicationJsonMappings, _super);
    function PostAdminMappingsFindByMetadata200ApplicationJsonMappings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newScenarioState" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "newScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistent" }),
        __metadata("design:type", Boolean)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "persistent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postServeActions" }),
        __metadata("design:type", Map)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "postServeActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredScenarioState" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "requiredScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarioName" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "scenarioName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMappings.prototype, "uuid", void 0);
    return PostAdminMappingsFindByMetadata200ApplicationJsonMappings;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadata200ApplicationJsonMappings };
var PostAdminMappingsFindByMetadata200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadata200ApplicationJsonMeta, _super);
    function PostAdminMappingsFindByMetadata200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PostAdminMappingsFindByMetadata200ApplicationJsonMeta.prototype, "total", void 0);
    return PostAdminMappingsFindByMetadata200ApplicationJsonMeta;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadata200ApplicationJsonMeta };
var PostAdminMappingsFindByMetadata200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadata200ApplicationJson, _super);
    function PostAdminMappingsFindByMetadata200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mappings", elemType: PostAdminMappingsFindByMetadata200ApplicationJsonMappings }),
        __metadata("design:type", Array)
    ], PostAdminMappingsFindByMetadata200ApplicationJson.prototype, "mappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", PostAdminMappingsFindByMetadata200ApplicationJsonMeta)
    ], PostAdminMappingsFindByMetadata200ApplicationJson.prototype, "meta", void 0);
    return PostAdminMappingsFindByMetadata200ApplicationJson;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadata200ApplicationJson };
var PostAdminMappingsFindByMetadataRequest = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadataRequest, _super);
    function PostAdminMappingsFindByMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAdminMappingsFindByMetadataRequest.prototype, "request", void 0);
    return PostAdminMappingsFindByMetadataRequest;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadataRequest };
var PostAdminMappingsFindByMetadataResponse = /** @class */ (function (_super) {
    __extends(PostAdminMappingsFindByMetadataResponse, _super);
    function PostAdminMappingsFindByMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAdminMappingsFindByMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAdminMappingsFindByMetadata200ApplicationJson)
    ], PostAdminMappingsFindByMetadataResponse.prototype, "postAdminMappingsFindByMetadata200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAdminMappingsFindByMetadataResponse.prototype, "statusCode", void 0);
    return PostAdminMappingsFindByMetadataResponse;
}(SpeakeasyBase));
export { PostAdminMappingsFindByMetadataResponse };
