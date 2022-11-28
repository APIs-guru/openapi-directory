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
var VerifyV2Service = /** @class */ (function (_super) {
    __extends(VerifyV2Service, _super);
    function VerifyV2Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VerifyV2Service.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code_length" }),
        __metadata("design:type", Number)
    ], VerifyV2Service.prototype, "codeLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_code_enabled" }),
        __metadata("design:type", Boolean)
    ], VerifyV2Service.prototype, "customCodeEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VerifyV2Service.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], VerifyV2Service.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_template_sid" }),
        __metadata("design:type", String)
    ], VerifyV2Service.prototype, "defaultTemplateSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=do_not_share_warning_enabled" }),
        __metadata("design:type", Boolean)
    ], VerifyV2Service.prototype, "doNotShareWarningEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dtmf_input_required" }),
        __metadata("design:type", Boolean)
    ], VerifyV2Service.prototype, "dtmfInputRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], VerifyV2Service.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], VerifyV2Service.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lookup_enabled" }),
        __metadata("design:type", Boolean)
    ], VerifyV2Service.prototype, "lookupEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=psd2_enabled" }),
        __metadata("design:type", Boolean)
    ], VerifyV2Service.prototype, "psd2Enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", Object)
    ], VerifyV2Service.prototype, "push", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VerifyV2Service.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_sms_to_landlines" }),
        __metadata("design:type", Boolean)
    ], VerifyV2Service.prototype, "skipSmsToLandlines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totp" }),
        __metadata("design:type", Object)
    ], VerifyV2Service.prototype, "totp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tts_name" }),
        __metadata("design:type", String)
    ], VerifyV2Service.prototype, "ttsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], VerifyV2Service.prototype, "url", void 0);
    return VerifyV2Service;
}(SpeakeasyBase));
export { VerifyV2Service };
