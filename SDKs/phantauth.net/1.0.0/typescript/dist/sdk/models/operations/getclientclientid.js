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
var GetClientClientIdPathParams = /** @class */ (function (_super) {
    __extends(GetClientClientIdPathParams, _super);
    function GetClientClientIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" }),
        __metadata("design:type", String)
    ], GetClientClientIdPathParams.prototype, "clientId", void 0);
    return GetClientClientIdPathParams;
}(SpeakeasyBase));
export { GetClientClientIdPathParams };
var GetClientClientId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetClientClientId200ApplicationJson, _super);
    function GetClientClientId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@id" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "atId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_name" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "clientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_secret" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_uri" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "clientUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contacts" }),
        __metadata("design:type", Array)
    ], GetClientClientId200ApplicationJson.prototype, "contacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grant_types" }),
        __metadata("design:type", Array)
    ], GetClientClientId200ApplicationJson.prototype, "grantTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jwks" }),
        __metadata("design:type", Array)
    ], GetClientClientId200ApplicationJson.prototype, "jwks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jwks_uri" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "jwksUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo_email" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "logoEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo_uri" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "logoUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy_uri" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "policyUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_uris" }),
        __metadata("design:type", Array)
    ], GetClientClientId200ApplicationJson.prototype, "redirectUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response_types" }),
        __metadata("design:type", Array)
    ], GetClientClientId200ApplicationJson.prototype, "responseTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=software_id" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "softwareId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=software_version" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "softwareVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token_endpoint_auth_method" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "tokenEndpointAuthMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tos_uri" }),
        __metadata("design:type", String)
    ], GetClientClientId200ApplicationJson.prototype, "tosUri", void 0);
    return GetClientClientId200ApplicationJson;
}(SpeakeasyBase));
export { GetClientClientId200ApplicationJson };
var GetClientClientIdRequest = /** @class */ (function (_super) {
    __extends(GetClientClientIdRequest, _super);
    function GetClientClientIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClientClientIdPathParams)
    ], GetClientClientIdRequest.prototype, "pathParams", void 0);
    return GetClientClientIdRequest;
}(SpeakeasyBase));
export { GetClientClientIdRequest };
var GetClientClientIdResponse = /** @class */ (function (_super) {
    __extends(GetClientClientIdResponse, _super);
    function GetClientClientIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetClientClientIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClientClientId200ApplicationJson)
    ], GetClientClientIdResponse.prototype, "getClientClientId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetClientClientIdResponse.prototype, "statusCode", void 0);
    return GetClientClientIdResponse;
}(SpeakeasyBase));
export { GetClientClientIdResponse };
