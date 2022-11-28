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
var OauthV1OpenidDiscovery = /** @class */ (function (_super) {
    __extends(OauthV1OpenidDiscovery, _super);
    function OauthV1OpenidDiscovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorization_endpoint" }),
        __metadata("design:type", String)
    ], OauthV1OpenidDiscovery.prototype, "authorizationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=claims_supported" }),
        __metadata("design:type", Array)
    ], OauthV1OpenidDiscovery.prototype, "claimsSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_authorization_endpoint" }),
        __metadata("design:type", String)
    ], OauthV1OpenidDiscovery.prototype, "deviceAuthorizationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id_token_signing_alg_values_supported" }),
        __metadata("design:type", Array)
    ], OauthV1OpenidDiscovery.prototype, "idTokenSigningAlgValuesSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], OauthV1OpenidDiscovery.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jwk_uri" }),
        __metadata("design:type", String)
    ], OauthV1OpenidDiscovery.prototype, "jwkUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response_type_supported" }),
        __metadata("design:type", Array)
    ], OauthV1OpenidDiscovery.prototype, "responseTypeSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revocation_endpoint" }),
        __metadata("design:type", String)
    ], OauthV1OpenidDiscovery.prototype, "revocationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes_supported" }),
        __metadata("design:type", Array)
    ], OauthV1OpenidDiscovery.prototype, "scopesSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject_type_supported" }),
        __metadata("design:type", Array)
    ], OauthV1OpenidDiscovery.prototype, "subjectTypeSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token_endpoint" }),
        __metadata("design:type", String)
    ], OauthV1OpenidDiscovery.prototype, "tokenEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], OauthV1OpenidDiscovery.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userinfo_endpoint" }),
        __metadata("design:type", String)
    ], OauthV1OpenidDiscovery.prototype, "userinfoEndpoint", void 0);
    return OauthV1OpenidDiscovery;
}(SpeakeasyBase));
export { OauthV1OpenidDiscovery };
