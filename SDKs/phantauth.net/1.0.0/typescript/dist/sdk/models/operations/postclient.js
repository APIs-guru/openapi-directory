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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var PostClientRequestBody = /** @class */ (function (_super) {
    __extends(PostClientRequestBody, _super);
    function PostClientRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@id" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "atId", void 0);
    __decorate([
        Metadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=client_name" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "clientName", void 0);
    __decorate([
        Metadata({ data: "json, name=client_secret" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "clientSecret", void 0);
    __decorate([
        Metadata({ data: "json, name=client_uri" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "clientUri", void 0);
    __decorate([
        Metadata({ data: "json, name=contacts" }),
        __metadata("design:type", Array)
    ], PostClientRequestBody.prototype, "contacts", void 0);
    __decorate([
        Metadata({ data: "json, name=grant_types" }),
        __metadata("design:type", Array)
    ], PostClientRequestBody.prototype, "grantTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=jwks" }),
        __metadata("design:type", Array)
    ], PostClientRequestBody.prototype, "jwks", void 0);
    __decorate([
        Metadata({ data: "json, name=jwks_uri" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "jwksUri", void 0);
    __decorate([
        Metadata({ data: "json, name=logo_email" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "logoEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=logo_uri" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "logoUri", void 0);
    __decorate([
        Metadata({ data: "json, name=policy_uri" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "policyUri", void 0);
    __decorate([
        Metadata({ data: "json, name=redirect_uris" }),
        __metadata("design:type", Array)
    ], PostClientRequestBody.prototype, "redirectUris", void 0);
    __decorate([
        Metadata({ data: "json, name=response_types" }),
        __metadata("design:type", Array)
    ], PostClientRequestBody.prototype, "responseTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "scope", void 0);
    __decorate([
        Metadata({ data: "json, name=software_id" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "softwareId", void 0);
    __decorate([
        Metadata({ data: "json, name=software_version" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "softwareVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=token_endpoint_auth_method" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "tokenEndpointAuthMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=tos_uri" }),
        __metadata("design:type", String)
    ], PostClientRequestBody.prototype, "tosUri", void 0);
    return PostClientRequestBody;
}(SpeakeasyBase));
export { PostClientRequestBody };
var PostClientRequest = /** @class */ (function (_super) {
    __extends(PostClientRequest, _super);
    function PostClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostClientRequestBody)
    ], PostClientRequest.prototype, "request", void 0);
    return PostClientRequest;
}(SpeakeasyBase));
export { PostClientRequest };
var PostClientResponse = /** @class */ (function (_super) {
    __extends(PostClientResponse, _super);
    function PostClientResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostClientResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostClientResponse.prototype, "statusCode", void 0);
    return PostClientResponse;
}(SpeakeasyBase));
export { PostClientResponse };
