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
export var VoiceV1ByocTrunkStatusCallbackMethodEnum;
(function (VoiceV1ByocTrunkStatusCallbackMethodEnum) {
    VoiceV1ByocTrunkStatusCallbackMethodEnum["Head"] = "HEAD";
    VoiceV1ByocTrunkStatusCallbackMethodEnum["Get"] = "GET";
    VoiceV1ByocTrunkStatusCallbackMethodEnum["Post"] = "POST";
    VoiceV1ByocTrunkStatusCallbackMethodEnum["Patch"] = "PATCH";
    VoiceV1ByocTrunkStatusCallbackMethodEnum["Put"] = "PUT";
    VoiceV1ByocTrunkStatusCallbackMethodEnum["Delete"] = "DELETE";
})(VoiceV1ByocTrunkStatusCallbackMethodEnum || (VoiceV1ByocTrunkStatusCallbackMethodEnum = {}));
export var VoiceV1ByocTrunkVoiceFallbackMethodEnum;
(function (VoiceV1ByocTrunkVoiceFallbackMethodEnum) {
    VoiceV1ByocTrunkVoiceFallbackMethodEnum["Head"] = "HEAD";
    VoiceV1ByocTrunkVoiceFallbackMethodEnum["Get"] = "GET";
    VoiceV1ByocTrunkVoiceFallbackMethodEnum["Post"] = "POST";
    VoiceV1ByocTrunkVoiceFallbackMethodEnum["Patch"] = "PATCH";
    VoiceV1ByocTrunkVoiceFallbackMethodEnum["Put"] = "PUT";
    VoiceV1ByocTrunkVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(VoiceV1ByocTrunkVoiceFallbackMethodEnum || (VoiceV1ByocTrunkVoiceFallbackMethodEnum = {}));
export var VoiceV1ByocTrunkVoiceMethodEnum;
(function (VoiceV1ByocTrunkVoiceMethodEnum) {
    VoiceV1ByocTrunkVoiceMethodEnum["Head"] = "HEAD";
    VoiceV1ByocTrunkVoiceMethodEnum["Get"] = "GET";
    VoiceV1ByocTrunkVoiceMethodEnum["Post"] = "POST";
    VoiceV1ByocTrunkVoiceMethodEnum["Patch"] = "PATCH";
    VoiceV1ByocTrunkVoiceMethodEnum["Put"] = "PUT";
    VoiceV1ByocTrunkVoiceMethodEnum["Delete"] = "DELETE";
})(VoiceV1ByocTrunkVoiceMethodEnum || (VoiceV1ByocTrunkVoiceMethodEnum = {}));
var VoiceV1ByocTrunk = /** @class */ (function (_super) {
    __extends(VoiceV1ByocTrunk, _super);
    function VoiceV1ByocTrunk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cnam_lookup_enabled" }),
        __metadata("design:type", Boolean)
    ], VoiceV1ByocTrunk.prototype, "cnamLookupEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_policy_sid" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "connectionPolicySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VoiceV1ByocTrunk.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], VoiceV1ByocTrunk.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from_domain_sid" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "fromDomainSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback_url" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "statusCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "voiceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], VoiceV1ByocTrunk.prototype, "voiceUrl", void 0);
    return VoiceV1ByocTrunk;
}(SpeakeasyBase));
export { VoiceV1ByocTrunk };
