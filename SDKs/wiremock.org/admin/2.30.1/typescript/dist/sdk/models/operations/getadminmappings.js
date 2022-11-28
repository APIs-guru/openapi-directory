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
var GetAdminMappingsQueryParams = /** @class */ (function (_super) {
    __extends(GetAdminMappingsQueryParams, _super);
    function GetAdminMappingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAdminMappingsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetAdminMappingsQueryParams.prototype, "offset", void 0);
    return GetAdminMappingsQueryParams;
}(SpeakeasyBase));
export { GetAdminMappingsQueryParams };
// GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials, _super);
    function GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials.prototype, "username", void 0);
    return GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials;
}(SpeakeasyBase));
export { GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials };
var GetAdminMappings200ApplicationJsonMappingsRequest = /** @class */ (function (_super) {
    __extends(GetAdminMappings200ApplicationJsonMappingsRequest, _super);
    function GetAdminMappings200ApplicationJsonMappingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials)
    ], GetAdminMappings200ApplicationJsonMappingsRequest.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], GetAdminMappings200ApplicationJsonMappingsRequest.prototype, "bodyPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], GetAdminMappings200ApplicationJsonMappingsRequest.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], GetAdminMappings200ApplicationJsonMappingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters" }),
        __metadata("design:type", Map)
    ], GetAdminMappings200ApplicationJsonMappingsRequest.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsRequest.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsRequest.prototype, "urlPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsRequest.prototype, "urlPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsRequest.prototype, "urlPattern", void 0);
    return GetAdminMappings200ApplicationJsonMappingsRequest;
}(SpeakeasyBase));
export { GetAdminMappings200ApplicationJsonMappingsRequest };
export var GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum;
(function (GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum) {
    GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum["ConnectionResetByPeer"] = "CONNECTION_RESET_BY_PEER";
    GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum["EmptyResponse"] = "EMPTY_RESPONSE";
    GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum["MalformedResponseChunk"] = "MALFORMED_RESPONSE_CHUNK";
    GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum["RandomDataThenClose"] = "RANDOM_DATA_THEN_CLOSE";
})(GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum || (GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum = {}));
var GetAdminMappings200ApplicationJsonMappingsResponse = /** @class */ (function (_super) {
    __extends(GetAdminMappings200ApplicationJsonMappingsResponse, _super);
    function GetAdminMappings200ApplicationJsonMappingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" }),
        __metadata("design:type", Map)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "additionalProxyRequestHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base64Body" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "base64Body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyFileName" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "bodyFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fault" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "fault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" }),
        __metadata("design:type", Number)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "fixedDelayMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" }),
        __metadata("design:type", Boolean)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "fromConfiguredStub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonBody" }),
        __metadata("design:type", Map)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "jsonBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "proxyBaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerParameters" }),
        __metadata("design:type", Map)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "transformerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformers" }),
        __metadata("design:type", Array)
    ], GetAdminMappings200ApplicationJsonMappingsResponse.prototype, "transformers", void 0);
    return GetAdminMappings200ApplicationJsonMappingsResponse;
}(SpeakeasyBase));
export { GetAdminMappings200ApplicationJsonMappingsResponse };
var GetAdminMappings200ApplicationJsonMappings = /** @class */ (function (_super) {
    __extends(GetAdminMappings200ApplicationJsonMappings, _super);
    function GetAdminMappings200ApplicationJsonMappings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newScenarioState" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "newScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistent" }),
        __metadata("design:type", Boolean)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "persistent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postServeActions" }),
        __metadata("design:type", Map)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "postServeActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", GetAdminMappings200ApplicationJsonMappingsRequest)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredScenarioState" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "requiredScenarioState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", GetAdminMappings200ApplicationJsonMappingsResponse)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarioName" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "scenarioName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], GetAdminMappings200ApplicationJsonMappings.prototype, "uuid", void 0);
    return GetAdminMappings200ApplicationJsonMappings;
}(SpeakeasyBase));
export { GetAdminMappings200ApplicationJsonMappings };
var GetAdminMappings200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetAdminMappings200ApplicationJsonMeta, _super);
    function GetAdminMappings200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetAdminMappings200ApplicationJsonMeta.prototype, "total", void 0);
    return GetAdminMappings200ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetAdminMappings200ApplicationJsonMeta };
var GetAdminMappings200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAdminMappings200ApplicationJson, _super);
    function GetAdminMappings200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mappings", elemType: GetAdminMappings200ApplicationJsonMappings }),
        __metadata("design:type", Array)
    ], GetAdminMappings200ApplicationJson.prototype, "mappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetAdminMappings200ApplicationJsonMeta)
    ], GetAdminMappings200ApplicationJson.prototype, "meta", void 0);
    return GetAdminMappings200ApplicationJson;
}(SpeakeasyBase));
export { GetAdminMappings200ApplicationJson };
var GetAdminMappingsRequest = /** @class */ (function (_super) {
    __extends(GetAdminMappingsRequest, _super);
    function GetAdminMappingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdminMappingsQueryParams)
    ], GetAdminMappingsRequest.prototype, "queryParams", void 0);
    return GetAdminMappingsRequest;
}(SpeakeasyBase));
export { GetAdminMappingsRequest };
var GetAdminMappingsResponse = /** @class */ (function (_super) {
    __extends(GetAdminMappingsResponse, _super);
    function GetAdminMappingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAdminMappingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdminMappings200ApplicationJson)
    ], GetAdminMappingsResponse.prototype, "getAdminMappings200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAdminMappingsResponse.prototype, "statusCode", void 0);
    return GetAdminMappingsResponse;
}(SpeakeasyBase));
export { GetAdminMappingsResponse };
