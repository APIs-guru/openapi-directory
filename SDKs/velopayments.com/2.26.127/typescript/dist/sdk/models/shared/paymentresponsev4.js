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
import { PaymentEventResponse } from "./paymenteventresponse";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";
export var PaymentResponseV4FundingStatusEnum;
(function (PaymentResponseV4FundingStatusEnum) {
    PaymentResponseV4FundingStatusEnum["Funded"] = "FUNDED";
    PaymentResponseV4FundingStatusEnum["Instructed"] = "INSTRUCTED";
    PaymentResponseV4FundingStatusEnum["Unfunded"] = "UNFUNDED";
})(PaymentResponseV4FundingStatusEnum || (PaymentResponseV4FundingStatusEnum = {}));
export var PaymentResponseV4StatusEnum;
(function (PaymentResponseV4StatusEnum) {
    PaymentResponseV4StatusEnum["Accepted"] = "ACCEPTED";
    PaymentResponseV4StatusEnum["AwaitingFunds"] = "AWAITING_FUNDS";
    PaymentResponseV4StatusEnum["Funded"] = "FUNDED";
    PaymentResponseV4StatusEnum["Unfunded"] = "UNFUNDED";
    PaymentResponseV4StatusEnum["BankPaymentRequested"] = "BANK_PAYMENT_REQUESTED";
    PaymentResponseV4StatusEnum["Rejected"] = "REJECTED";
    PaymentResponseV4StatusEnum["AcceptedByRails"] = "ACCEPTED_BY_RAILS";
    PaymentResponseV4StatusEnum["Confirmed"] = "CONFIRMED";
    PaymentResponseV4StatusEnum["Returned"] = "RETURNED";
    PaymentResponseV4StatusEnum["Withdrawn"] = "WITHDRAWN";
})(PaymentResponseV4StatusEnum || (PaymentResponseV4StatusEnum = {}));
var PaymentResponseV4 = /** @class */ (function (_super) {
    __extends(PaymentResponseV4, _super);
    function PaymentResponseV4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: PaymentEventResponse }),
        __metadata("design:type", Array)
    ], PaymentResponseV4.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filenameReference" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "filenameReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundingStatus" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "fundingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individualIdentificationNumber" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "individualIdentificationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invertedRate" }),
        __metadata("design:type", Number)
    ], PaymentResponseV4.prototype, "invertedRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPaymentCcyBaseCcy" }),
        __metadata("design:type", Boolean)
    ], PaymentResponseV4.prototype, "isPaymentCcyBaseCcy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "payeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentAmount" }),
        __metadata("design:type", Number)
    ], PaymentResponseV4.prototype, "paymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "paymentChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentChannelName" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "paymentChannelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentCurrency" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "paymentCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "paymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentMemo" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "paymentMemo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentMetadata" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "paymentMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentTrackingReference" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "paymentTrackingReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorName" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "payorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorPaymentId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "payorPaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payout" }),
        __metadata("design:type", Object)
    ], PaymentResponseV4.prototype, "payout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quoteId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "quoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=railsBatchId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "railsBatchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=railsId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "railsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=railsPaymentId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "railsPaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], PaymentResponseV4.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectionReason" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "rejectionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "remoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteSystemId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "remoteSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteSystemPaymentId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "remoteSystemPaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnCost" }),
        __metadata("design:type", Number)
    ], PaymentResponseV4.prototype, "returnCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnReason" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "returnReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "routingNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceAccountId" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "sourceAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceAccountName" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "sourceAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceAmount" }),
        __metadata("design:type", Number)
    ], PaymentResponseV4.prototype, "sourceAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceCurrency" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "sourceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submittedDateTime" }),
        __metadata("design:type", Date)
    ], PaymentResponseV4.prototype, "submittedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traceNumber" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "traceNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transmissionType" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "transmissionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=withdrawable" }),
        __metadata("design:type", Boolean)
    ], PaymentResponseV4.prototype, "withdrawable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=withdrawnReason" }),
        __metadata("design:type", String)
    ], PaymentResponseV4.prototype, "withdrawnReason", void 0);
    return PaymentResponseV4;
}(SpeakeasyBase));
export { PaymentResponseV4 };
