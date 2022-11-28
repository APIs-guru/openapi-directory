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
var PutAdminMappingsStubMappingIdPathParams = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingIdPathParams, _super);
    function PutAdminMappingsStubMappingIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stubMappingId" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdPathParams.prototype, "stubMappingId", void 0);
    return PutAdminMappingsStubMappingIdPathParams;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingIdPathParams };
// PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials, _super);
    function PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials.prototype, "username", void 0);
    return PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials };
var PutAdminMappingsStubMappingIdRequestBodyRequest = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingIdRequestBodyRequest, _super);
    function PutAdminMappingsStubMappingIdRequestBodyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials)
    ], PutAdminMappingsStubMappingIdRequestBodyRequest.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PutAdminMappingsStubMappingIdRequestBodyRequest.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingIdRequestBodyRequest.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingIdRequestBodyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingIdRequestBodyRequest.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyRequest.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyRequest.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyRequest.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyRequest.prototype, "urlPattern", void 0);
    return PutAdminMappingsStubMappingIdRequestBodyRequest;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingIdRequestBodyRequest };
export var PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum;
(function (PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum) {
    PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum["ConnectionResetByPeer"] = "CONNECTION_RESET_BY_PEER";
    PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum["EmptyResponse"] = "EMPTY_RESPONSE";
    PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum["MalformedResponseChunk"] = "MALFORMED_RESPONSE_CHUNK";
    PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum["RandomDataThenClose"] = "RANDOM_DATA_THEN_CLOSE";
})(PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum || (PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum = {}));
var PutAdminMappingsStubMappingIdRequestBodyResponse = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingIdRequestBodyResponse, _super);
    function PutAdminMappingsStubMappingIdRequestBodyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "additionalProxyRequestHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base64Body" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "base64Body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyFileName" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "bodyFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fault" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "fault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" }),
        __metadata("design:type", Number)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "fixedDelayMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" }),
        __metadata("design:type", Boolean)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "fromConfiguredStub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonBody" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "jsonBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "proxyBaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], PutAdminMappingsStubMappingIdRequestBodyResponse.prototype, "transformers", void 0);
    return PutAdminMappingsStubMappingIdRequestBodyResponse;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingIdRequestBodyResponse };
var PutAdminMappingsStubMappingIdRequestBody = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingIdRequestBody, _super);
    function PutAdminMappingsStubMappingIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newScenarioState" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "newScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistent" }),
        __metadata("design:type", Boolean)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "persistent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postServeActions" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "postServeActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", PutAdminMappingsStubMappingIdRequestBodyRequest)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredScenarioState" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "requiredScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", PutAdminMappingsStubMappingIdRequestBodyResponse)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarioName" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "scenarioName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdRequestBody.prototype, "uuid", void 0);
    return PutAdminMappingsStubMappingIdRequestBody;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingIdRequestBody };
// PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials, _super);
    function PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials.prototype, "username", void 0);
    return PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials };
var PutAdminMappingsStubMappingId200ApplicationJsonRequest = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingId200ApplicationJsonRequest, _super);
    function PutAdminMappingsStubMappingId200ApplicationJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "urlPattern", void 0);
    return PutAdminMappingsStubMappingId200ApplicationJsonRequest;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingId200ApplicationJsonRequest };
export var PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum;
(function (PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum) {
    PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum["ConnectionResetByPeer"] = "CONNECTION_RESET_BY_PEER";
    PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum["EmptyResponse"] = "EMPTY_RESPONSE";
    PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum["MalformedResponseChunk"] = "MALFORMED_RESPONSE_CHUNK";
    PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum["RandomDataThenClose"] = "RANDOM_DATA_THEN_CLOSE";
})(PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum || (PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum = {}));
var PutAdminMappingsStubMappingId200ApplicationJsonResponse = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingId200ApplicationJsonResponse, _super);
    function PutAdminMappingsStubMappingId200ApplicationJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "additionalProxyRequestHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base64Body" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "base64Body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyFileName" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "bodyFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fault" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "fault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" }),
        __metadata("design:type", Number)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "fixedDelayMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" }),
        __metadata("design:type", Boolean)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "fromConfiguredStub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonBody" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "jsonBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "proxyBaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], PutAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "transformers", void 0);
    return PutAdminMappingsStubMappingId200ApplicationJsonResponse;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingId200ApplicationJsonResponse };
var PutAdminMappingsStubMappingId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingId200ApplicationJson, _super);
    function PutAdminMappingsStubMappingId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newScenarioState" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "newScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistent" }),
        __metadata("design:type", Boolean)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "persistent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postServeActions" }),
        __metadata("design:type", Map)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "postServeActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", PutAdminMappingsStubMappingId200ApplicationJsonRequest)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredScenarioState" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "requiredScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", PutAdminMappingsStubMappingId200ApplicationJsonResponse)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarioName" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "scenarioName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingId200ApplicationJson.prototype, "uuid", void 0);
    return PutAdminMappingsStubMappingId200ApplicationJson;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingId200ApplicationJson };
var PutAdminMappingsStubMappingIdRequest = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingIdRequest, _super);
    function PutAdminMappingsStubMappingIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAdminMappingsStubMappingIdPathParams)
    ], PutAdminMappingsStubMappingIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutAdminMappingsStubMappingIdRequestBody)
    ], PutAdminMappingsStubMappingIdRequest.prototype, "request", void 0);
    return PutAdminMappingsStubMappingIdRequest;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingIdRequest };
var PutAdminMappingsStubMappingIdResponse = /** @class */ (function (_super) {
    __extends(PutAdminMappingsStubMappingIdResponse, _super);
    function PutAdminMappingsStubMappingIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutAdminMappingsStubMappingIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAdminMappingsStubMappingId200ApplicationJson)
    ], PutAdminMappingsStubMappingIdResponse.prototype, "putAdminMappingsStubMappingId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutAdminMappingsStubMappingIdResponse.prototype, "statusCode", void 0);
    return PutAdminMappingsStubMappingIdResponse;
}(SpeakeasyBase));
export { PutAdminMappingsStubMappingIdResponse };
