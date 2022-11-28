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
var MessagingV1ServiceUsAppToPerson = /** @class */ (function (_super) {
    __extends(MessagingV1ServiceUsAppToPerson, _super);
    function MessagingV1ServiceUsAppToPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand_registration_sid" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "brandRegistrationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaign_id" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaign_status" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "campaignStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], MessagingV1ServiceUsAppToPerson.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], MessagingV1ServiceUsAppToPerson.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_embedded_links" }),
        __metadata("design:type", Boolean)
    ], MessagingV1ServiceUsAppToPerson.prototype, "hasEmbeddedLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_embedded_phone" }),
        __metadata("design:type", Boolean)
    ], MessagingV1ServiceUsAppToPerson.prototype, "hasEmbeddedPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=help_keywords" }),
        __metadata("design:type", Array)
    ], MessagingV1ServiceUsAppToPerson.prototype, "helpKeywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=help_message" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "helpMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_externally_registered" }),
        __metadata("design:type", Boolean)
    ], MessagingV1ServiceUsAppToPerson.prototype, "isExternallyRegistered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message_flow" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "messageFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message_samples" }),
        __metadata("design:type", Array)
    ], MessagingV1ServiceUsAppToPerson.prototype, "messageSamples", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messaging_service_sid" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "messagingServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mock" }),
        __metadata("design:type", Boolean)
    ], MessagingV1ServiceUsAppToPerson.prototype, "mock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opt_in_keywords" }),
        __metadata("design:type", Array)
    ], MessagingV1ServiceUsAppToPerson.prototype, "optInKeywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opt_in_message" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "optInMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opt_out_keywords" }),
        __metadata("design:type", Array)
    ], MessagingV1ServiceUsAppToPerson.prototype, "optOutKeywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opt_out_message" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "optOutMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate_limits" }),
        __metadata("design:type", Object)
    ], MessagingV1ServiceUsAppToPerson.prototype, "rateLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=us_app_to_person_usecase" }),
        __metadata("design:type", String)
    ], MessagingV1ServiceUsAppToPerson.prototype, "usAppToPersonUsecase", void 0);
    return MessagingV1ServiceUsAppToPerson;
}(SpeakeasyBase));
export { MessagingV1ServiceUsAppToPerson };
