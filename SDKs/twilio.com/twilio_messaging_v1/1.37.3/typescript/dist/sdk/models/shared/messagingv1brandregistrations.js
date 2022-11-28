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
import { BrandRegistrationsEnumIdentityStatusEnum } from "./brandregistrationsenumidentitystatusenum";
import { BrandRegistrationsEnumStatusEnum } from "./brandregistrationsenumstatusenum";
var MessagingV1BrandRegistrations = /** @class */ (function (_super) {
    __extends(MessagingV1BrandRegistrations, _super);
    function MessagingV1BrandRegistrations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=a2p_profile_bundle_sid" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "a2pProfileBundleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand_feedback" }),
        __metadata("design:type", Array)
    ], MessagingV1BrandRegistrations.prototype, "brandFeedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand_score" }),
        __metadata("design:type", Number)
    ], MessagingV1BrandRegistrations.prototype, "brandScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand_type" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "brandType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_profile_bundle_sid" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "customerProfileBundleSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], MessagingV1BrandRegistrations.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], MessagingV1BrandRegistrations.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failure_reason" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=government_entity" }),
        __metadata("design:type", Boolean)
    ], MessagingV1BrandRegistrations.prototype, "governmentEntity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity_status" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "identityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], MessagingV1BrandRegistrations.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mock" }),
        __metadata("design:type", Boolean)
    ], MessagingV1BrandRegistrations.prototype, "mock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=russell_3000" }),
        __metadata("design:type", Boolean)
    ], MessagingV1BrandRegistrations.prototype, "russell3000", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_automatic_sec_vet" }),
        __metadata("design:type", Boolean)
    ], MessagingV1BrandRegistrations.prototype, "skipAutomaticSecVet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_exempt_status" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "taxExemptStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tcr_id" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "tcrId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MessagingV1BrandRegistrations.prototype, "url", void 0);
    return MessagingV1BrandRegistrations;
}(SpeakeasyBase));
export { MessagingV1BrandRegistrations };
