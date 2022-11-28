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
import { ServiceWebhookConfigurationEnumMethodEnum } from "./servicewebhookconfigurationenummethodenum";
var ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = /** @class */ (function (_super) {
    __extends(ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration, _super);
    function ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chat_service_sid" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.prototype, "chatServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", Array)
    ], ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_webhook_url" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.prototype, "postWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pre_webhook_url" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.prototype, "preWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.prototype, "url", void 0);
    return ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
}(SpeakeasyBase));
export { ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration };
