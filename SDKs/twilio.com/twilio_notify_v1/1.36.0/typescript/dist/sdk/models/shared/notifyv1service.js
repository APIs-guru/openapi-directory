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
var NotifyV1Service = /** @class */ (function (_super) {
    __extends(NotifyV1Service, _super);
    function NotifyV1Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=alexa_skill_id" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "alexaSkillId", void 0);
    __decorate([
        Metadata({ data: "json, name=apn_credential_sid" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "apnCredentialSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], NotifyV1Service.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], NotifyV1Service.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=default_alexa_notification_protocol_version" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "defaultAlexaNotificationProtocolVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=default_apn_notification_protocol_version" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "defaultApnNotificationProtocolVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=default_fcm_notification_protocol_version" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "defaultFcmNotificationProtocolVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=default_gcm_notification_protocol_version" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "defaultGcmNotificationProtocolVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=delivery_callback_enabled" }),
        __metadata("design:type", Boolean)
    ], NotifyV1Service.prototype, "deliveryCallbackEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=delivery_callback_url" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "deliveryCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=facebook_messenger_page_id" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "facebookMessengerPageId", void 0);
    __decorate([
        Metadata({ data: "json, name=fcm_credential_sid" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "fcmCredentialSid", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=gcm_credential_sid" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "gcmCredentialSid", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], NotifyV1Service.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=log_enabled" }),
        __metadata("design:type", Boolean)
    ], NotifyV1Service.prototype, "logEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=messaging_service_sid" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "messagingServiceSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], NotifyV1Service.prototype, "url", void 0);
    return NotifyV1Service;
}(SpeakeasyBase));
export { NotifyV1Service };
