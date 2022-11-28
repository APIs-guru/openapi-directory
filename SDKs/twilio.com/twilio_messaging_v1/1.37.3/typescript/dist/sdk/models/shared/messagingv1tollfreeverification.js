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
import { TollfreeVerificationEnumOptInTypeEnum } from "./tollfreeverificationenumoptintypeenum";
import { TollfreeVerificationEnumStatusEnum } from "./tollfreeverificationenumstatusenum";
var MessagingV1TollfreeVerification = /** @class */ (function (_super) {
    __extends(MessagingV1TollfreeVerification, _super);
    function MessagingV1TollfreeVerification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additional_information" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "additionalInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_city" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_contact_email" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessContactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_contact_first_name" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessContactFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_contact_last_name" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessContactLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_contact_phone" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessContactPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_country" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_name" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_postal_code" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessPostalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_state_province_region" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessStateProvinceRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_street_address" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessStreetAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_street_address2" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessStreetAddress2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business_website" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "businessWebsite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_profile_sid" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "customerProfileSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], MessagingV1TollfreeVerification.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], MessagingV1TollfreeVerification.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message_volume" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "messageVolume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_email" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "notificationEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opt_in_image_urls" }),
        __metadata("design:type", Array)
    ], MessagingV1TollfreeVerification.prototype, "optInImageUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opt_in_type" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "optInType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=production_message_sample" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "productionMessageSample", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regulated_item_sid" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "regulatedItemSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_links" }),
        __metadata("design:type", Object)
    ], MessagingV1TollfreeVerification.prototype, "resourceLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tollfree_phone_number_sid" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "tollfreePhoneNumberSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trust_product_sid" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "trustProductSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_case_categories" }),
        __metadata("design:type", Array)
    ], MessagingV1TollfreeVerification.prototype, "useCaseCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_case_summary" }),
        __metadata("design:type", String)
    ], MessagingV1TollfreeVerification.prototype, "useCaseSummary", void 0);
    return MessagingV1TollfreeVerification;
}(SpeakeasyBase));
export { MessagingV1TollfreeVerification };
