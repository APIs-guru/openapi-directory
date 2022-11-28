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
import { PayeeAddress } from "./payeeaddress";
import { Challenge } from "./challenge";
import { Company } from "./company";
import { Individual } from "./individual";
import { OnboardedStatus2Enum } from "./onboardedstatus2enum";
import { PayeeTypeEnum } from "./payeetypeenum";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
import { WatchlistStatusEnum } from "./watchliststatusenum";
var PayeeDetailResponse = /** @class */ (function (_super) {
    __extends(PayeeDetailResponse, _super);
    function PayeeDetailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceptTermsAndConditionsTimestamp" }),
        __metadata("design:type", Date)
    ], PayeeDetailResponse.prototype, "acceptTermsAndConditionsTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PayeeAddress)
    ], PayeeDetailResponse.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cellphoneNumber" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "cellphoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=challenge" }),
        __metadata("design:type", Challenge)
    ], PayeeDetailResponse.prototype, "challenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", Company)
    ], PayeeDetailResponse.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], PayeeDetailResponse.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PayeeDetailResponse.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabledComment" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "disabledComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabledUpdatedTimestamp" }),
        __metadata("design:type", Date)
    ], PayeeDetailResponse.prototype, "disabledUpdatedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enhancedKycCompleted" }),
        __metadata("design:type", Boolean)
    ], PayeeDetailResponse.prototype, "enhancedKycCompleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gracePeriodEndDate" }),
        __metadata("design:type", Date)
    ], PayeeDetailResponse.prototype, "gracePeriodEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual" }),
        __metadata("design:type", Individual)
    ], PayeeDetailResponse.prototype, "individual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kycCompletedTimestamp" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "kycCompletedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketingOptInDecision" }),
        __metadata("design:type", Boolean)
    ], PayeeDetailResponse.prototype, "marketingOptInDecision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketingOptInTimestamp" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "marketingOptInTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onboardedStatus" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "onboardedStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pausePayment" }),
        __metadata("design:type", Boolean)
    ], PayeeDetailResponse.prototype, "pausePayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pausePaymentTimestamp" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "pausePaymentTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeId" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "payeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeType" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "payeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorRefs", elemType: PayeePayorRefV3 }),
        __metadata("design:type", Array)
    ], PayeeDetailResponse.prototype, "payorRefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlistOverrideComment" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "watchlistOverrideComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlistOverrideExpiresAtTimestamp" }),
        __metadata("design:type", Date)
    ], PayeeDetailResponse.prototype, "watchlistOverrideExpiresAtTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlistStatus" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "watchlistStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlistStatusUpdatedTimestamp" }),
        __metadata("design:type", String)
    ], PayeeDetailResponse.prototype, "watchlistStatusUpdatedTimestamp", void 0);
    return PayeeDetailResponse;
}(SpeakeasyBase));
export { PayeeDetailResponse };
