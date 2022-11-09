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
export var ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum;
(function (ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum) {
    ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum || (ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum = {}));
export var ApiV2010AccountSipSipDomainVoiceMethodEnum;
(function (ApiV2010AccountSipSipDomainVoiceMethodEnum) {
    ApiV2010AccountSipSipDomainVoiceMethodEnum["Head"] = "HEAD";
    ApiV2010AccountSipSipDomainVoiceMethodEnum["Get"] = "GET";
    ApiV2010AccountSipSipDomainVoiceMethodEnum["Post"] = "POST";
    ApiV2010AccountSipSipDomainVoiceMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountSipSipDomainVoiceMethodEnum["Put"] = "PUT";
    ApiV2010AccountSipSipDomainVoiceMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountSipSipDomainVoiceMethodEnum || (ApiV2010AccountSipSipDomainVoiceMethodEnum = {}));
export var ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum;
(function (ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum) {
    ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum || (ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum = {}));
var ApiV2010AccountSipSipDomain = /** @class */ (function (_super) {
    __extends(ApiV2010AccountSipSipDomain, _super);
    function ApiV2010AccountSipSipDomain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=auth_type" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "authType", void 0);
    __decorate([
        Metadata({ data: "json, name=byoc_trunk_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "byocTrunkSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=domain_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_caller_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "emergencyCallerSid", void 0);
    __decorate([
        Metadata({ data: "json, name=emergency_calling_enabled" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountSipSipDomain.prototype, "emergencyCallingEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=secure" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountSipSipDomain.prototype, "secure", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=sip_registration" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountSipSipDomain.prototype, "sipRegistration", void 0);
    __decorate([
        Metadata({ data: "json, name=subresource_uris" }),
        __metadata("design:type", Map)
    ], ApiV2010AccountSipSipDomain.prototype, "subresourceUris", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "uri", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "voiceMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_status_callback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "voiceStatusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_status_callback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "voiceStatusCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountSipSipDomain.prototype, "voiceUrl", void 0);
    return ApiV2010AccountSipSipDomain;
}(SpeakeasyBase));
export { ApiV2010AccountSipSipDomain };
