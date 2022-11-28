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
var GetAdminMappingsStubMappingIdPathParams = /** @class */ (function (_super) {
    __extends(GetAdminMappingsStubMappingIdPathParams, _super);
    function GetAdminMappingsStubMappingIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stubMappingId" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingIdPathParams.prototype, "stubMappingId", void 0);
    return GetAdminMappingsStubMappingIdPathParams;
}(SpeakeasyBase));
export { GetAdminMappingsStubMappingIdPathParams };
// GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials, _super);
    function GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials.prototype, "username", void 0);
    return GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials;
}(SpeakeasyBase));
export { GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials };
var GetAdminMappingsStubMappingId200ApplicationJsonRequest = /** @class */ (function (_super) {
    __extends(GetAdminMappingsStubMappingId200ApplicationJsonRequest, _super);
    function GetAdminMappingsStubMappingId200ApplicationJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonRequest.prototype, "urlPattern", void 0);
    return GetAdminMappingsStubMappingId200ApplicationJsonRequest;
}(SpeakeasyBase));
export { GetAdminMappingsStubMappingId200ApplicationJsonRequest };
export var GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum;
(function (GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum) {
    GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum["ConnectionResetByPeer"] = "CONNECTION_RESET_BY_PEER";
    GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum["EmptyResponse"] = "EMPTY_RESPONSE";
    GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum["MalformedResponseChunk"] = "MALFORMED_RESPONSE_CHUNK";
    GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum["RandomDataThenClose"] = "RANDOM_DATA_THEN_CLOSE";
})(GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum || (GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum = {}));
var GetAdminMappingsStubMappingId200ApplicationJsonResponse = /** @class */ (function (_super) {
    __extends(GetAdminMappingsStubMappingId200ApplicationJsonResponse, _super);
    function GetAdminMappingsStubMappingId200ApplicationJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" }),
        __metadata("design:type", Map)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "additionalProxyRequestHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base64Body" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "base64Body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyFileName" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "bodyFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fault" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "fault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" }),
        __metadata("design:type", Number)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "fixedDelayMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" }),
        __metadata("design:type", Boolean)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "fromConfiguredStub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonBody" }),
        __metadata("design:type", Map)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "jsonBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "proxyBaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], GetAdminMappingsStubMappingId200ApplicationJsonResponse.prototype, "transformers", void 0);
    return GetAdminMappingsStubMappingId200ApplicationJsonResponse;
}(SpeakeasyBase));
export { GetAdminMappingsStubMappingId200ApplicationJsonResponse };
var GetAdminMappingsStubMappingId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAdminMappingsStubMappingId200ApplicationJson, _super);
    function GetAdminMappingsStubMappingId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newScenarioState" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "newScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistent" }),
        __metadata("design:type", Boolean)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "persistent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postServeActions" }),
        __metadata("design:type", Map)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "postServeActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", GetAdminMappingsStubMappingId200ApplicationJsonRequest)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredScenarioState" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "requiredScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", GetAdminMappingsStubMappingId200ApplicationJsonResponse)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarioName" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "scenarioName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingId200ApplicationJson.prototype, "uuid", void 0);
    return GetAdminMappingsStubMappingId200ApplicationJson;
}(SpeakeasyBase));
export { GetAdminMappingsStubMappingId200ApplicationJson };
var GetAdminMappingsStubMappingIdRequest = /** @class */ (function (_super) {
    __extends(GetAdminMappingsStubMappingIdRequest, _super);
    function GetAdminMappingsStubMappingIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdminMappingsStubMappingIdPathParams)
    ], GetAdminMappingsStubMappingIdRequest.prototype, "pathParams", void 0);
    return GetAdminMappingsStubMappingIdRequest;
}(SpeakeasyBase));
export { GetAdminMappingsStubMappingIdRequest };
var GetAdminMappingsStubMappingIdResponse = /** @class */ (function (_super) {
    __extends(GetAdminMappingsStubMappingIdResponse, _super);
    function GetAdminMappingsStubMappingIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAdminMappingsStubMappingIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdminMappingsStubMappingId200ApplicationJson)
    ], GetAdminMappingsStubMappingIdResponse.prototype, "getAdminMappingsStubMappingId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAdminMappingsStubMappingIdResponse.prototype, "statusCode", void 0);
    return GetAdminMappingsStubMappingIdResponse;
}(SpeakeasyBase));
export { GetAdminMappingsStubMappingIdResponse };
