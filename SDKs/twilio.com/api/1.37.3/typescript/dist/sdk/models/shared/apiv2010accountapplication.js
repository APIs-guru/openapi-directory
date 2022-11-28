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
export var ApiV2010AccountApplicationSmsFallbackMethodEnum;
(function (ApiV2010AccountApplicationSmsFallbackMethodEnum) {
    ApiV2010AccountApplicationSmsFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountApplicationSmsFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountApplicationSmsFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountApplicationSmsFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountApplicationSmsFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountApplicationSmsFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountApplicationSmsFallbackMethodEnum || (ApiV2010AccountApplicationSmsFallbackMethodEnum = {}));
export var ApiV2010AccountApplicationSmsMethodEnum;
(function (ApiV2010AccountApplicationSmsMethodEnum) {
    ApiV2010AccountApplicationSmsMethodEnum["Head"] = "HEAD";
    ApiV2010AccountApplicationSmsMethodEnum["Get"] = "GET";
    ApiV2010AccountApplicationSmsMethodEnum["Post"] = "POST";
    ApiV2010AccountApplicationSmsMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountApplicationSmsMethodEnum["Put"] = "PUT";
    ApiV2010AccountApplicationSmsMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountApplicationSmsMethodEnum || (ApiV2010AccountApplicationSmsMethodEnum = {}));
export var ApiV2010AccountApplicationStatusCallbackMethodEnum;
(function (ApiV2010AccountApplicationStatusCallbackMethodEnum) {
    ApiV2010AccountApplicationStatusCallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountApplicationStatusCallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountApplicationStatusCallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountApplicationStatusCallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountApplicationStatusCallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountApplicationStatusCallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountApplicationStatusCallbackMethodEnum || (ApiV2010AccountApplicationStatusCallbackMethodEnum = {}));
export var ApiV2010AccountApplicationVoiceFallbackMethodEnum;
(function (ApiV2010AccountApplicationVoiceFallbackMethodEnum) {
    ApiV2010AccountApplicationVoiceFallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountApplicationVoiceFallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountApplicationVoiceFallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountApplicationVoiceFallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountApplicationVoiceFallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountApplicationVoiceFallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountApplicationVoiceFallbackMethodEnum || (ApiV2010AccountApplicationVoiceFallbackMethodEnum = {}));
export var ApiV2010AccountApplicationVoiceMethodEnum;
(function (ApiV2010AccountApplicationVoiceMethodEnum) {
    ApiV2010AccountApplicationVoiceMethodEnum["Head"] = "HEAD";
    ApiV2010AccountApplicationVoiceMethodEnum["Get"] = "GET";
    ApiV2010AccountApplicationVoiceMethodEnum["Post"] = "POST";
    ApiV2010AccountApplicationVoiceMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountApplicationVoiceMethodEnum["Put"] = "PUT";
    ApiV2010AccountApplicationVoiceMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountApplicationVoiceMethodEnum || (ApiV2010AccountApplicationVoiceMethodEnum = {}));
var ApiV2010AccountApplication = /** @class */ (function (_super) {
    __extends(ApiV2010AccountApplication, _super);
    function ApiV2010AccountApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message_status_callback" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "messageStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "smsFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "smsFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "smsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_status_callback" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "smsStatusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "smsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_caller_id_lookup" }),
        __metadata("design:type", Boolean)
    ], ApiV2010AccountApplication.prototype, "voiceCallerIdLookup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_fallback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "voiceFallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_fallback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "voiceFallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "voiceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountApplication.prototype, "voiceUrl", void 0);
    return ApiV2010AccountApplication;
}(SpeakeasyBase));
export { ApiV2010AccountApplication };
