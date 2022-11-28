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
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";
export var PaymentEventResponseV3EventTypeEnum;
(function (PaymentEventResponseV3EventTypeEnum) {
    PaymentEventResponseV3EventTypeEnum["PayoutSubmitted"] = "PAYOUT_SUBMITTED";
    PaymentEventResponseV3EventTypeEnum["PayoutCompleted"] = "PAYOUT_COMPLETED";
    PaymentEventResponseV3EventTypeEnum["PayoutInstructedV3"] = "PAYOUT_INSTRUCTED_V3";
    PaymentEventResponseV3EventTypeEnum["BankPaymentRequested"] = "BANK_PAYMENT_REQUESTED";
    PaymentEventResponseV3EventTypeEnum["SourceAmountConfirmed"] = "SOURCE_AMOUNT_CONFIRMED";
    PaymentEventResponseV3EventTypeEnum["PaymentSubmitted"] = "PAYMENT_SUBMITTED";
    PaymentEventResponseV3EventTypeEnum["PaymentSubmittedAccepted"] = "PAYMENT_SUBMITTED_ACCEPTED";
    PaymentEventResponseV3EventTypeEnum["PaymentSubmittedRejected"] = "PAYMENT_SUBMITTED_REJECTED";
    PaymentEventResponseV3EventTypeEnum["PaymentConfirmed"] = "PAYMENT_CONFIRMED";
    PaymentEventResponseV3EventTypeEnum["PaymentAwaitingFunds"] = "PAYMENT_AWAITING_FUNDS";
    PaymentEventResponseV3EventTypeEnum["PaymentFunded"] = "PAYMENT_FUNDED";
    PaymentEventResponseV3EventTypeEnum["PaymentUnfunded"] = "PAYMENT_UNFUNDED";
    PaymentEventResponseV3EventTypeEnum["PaymentFailed"] = "PAYMENT_FAILED";
    PaymentEventResponseV3EventTypeEnum["AchSubmittedToOdfi"] = "ACH_SUBMITTED_TO_ODFI";
    PaymentEventResponseV3EventTypeEnum["PaymentAcceptedByRails"] = "PAYMENT_ACCEPTED_BY_RAILS";
    PaymentEventResponseV3EventTypeEnum["AchReturnReceived"] = "ACH_RETURN_RECEIVED";
    PaymentEventResponseV3EventTypeEnum["ReturnPaymentFundingRequested"] = "RETURN_PAYMENT_FUNDING_REQUESTED";
    PaymentEventResponseV3EventTypeEnum["PayoutBatchExecuted"] = "PAYOUT_BATCH_EXECUTED";
    PaymentEventResponseV3EventTypeEnum["PayoutBatchQuoteExpired"] = "PAYOUT_BATCH_QUOTE_EXPIRED";
    PaymentEventResponseV3EventTypeEnum["PayoutBatchFunded"] = "PAYOUT_BATCH_FUNDED";
    PaymentEventResponseV3EventTypeEnum["PayoutBatchFundsReturnRequest"] = "PAYOUT_BATCH_FUNDS_RETURN_REQUEST";
    PaymentEventResponseV3EventTypeEnum["PayoutBatchFundsReturned"] = "PAYOUT_BATCH_FUNDS_RETURNED";
    PaymentEventResponseV3EventTypeEnum["PayoutFundsRequest"] = "PAYOUT_FUNDS_REQUEST";
    PaymentEventResponseV3EventTypeEnum["PayoutFundsGranted"] = "PAYOUT_FUNDS_GRANTED";
    PaymentEventResponseV3EventTypeEnum["PayoutFundsDenied"] = "PAYOUT_FUNDS_DENIED";
    PaymentEventResponseV3EventTypeEnum["PayoutBatchQuoted"] = "PAYOUT_BATCH_QUOTED";
    PaymentEventResponseV3EventTypeEnum["PayoutQuoted"] = "PAYOUT_QUOTED";
    PaymentEventResponseV3EventTypeEnum["AchPaymentReturnCancelled"] = "ACH_PAYMENT_RETURN_CANCELLED";
    PaymentEventResponseV3EventTypeEnum["ReturnPaymentCancellationRequested"] = "RETURN_PAYMENT_CANCELLATION_REQUESTED";
    PaymentEventResponseV3EventTypeEnum["PayoutWithdrawn"] = "PAYOUT_WITHDRAWN";
})(PaymentEventResponseV3EventTypeEnum || (PaymentEventResponseV3EventTypeEnum = {}));
var PaymentEventResponseV3 = /** @class */ (function (_super) {
    __extends(PaymentEventResponseV3, _super);
    function PaymentEventResponseV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], PaymentEventResponseV3.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], PaymentEventResponseV3.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventDateTime" }),
        __metadata("design:type", Date)
    ], PaymentEventResponseV3.prototype, "eventDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventId" }),
        __metadata("design:type", String)
    ], PaymentEventResponseV3.prototype, "eventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], PaymentEventResponseV3.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], PaymentEventResponseV3.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentAmount" }),
        __metadata("design:type", Number)
    ], PaymentEventResponseV3.prototype, "paymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentCurrency" }),
        __metadata("design:type", String)
    ], PaymentEventResponseV3.prototype, "paymentCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principal" }),
        __metadata("design:type", String)
    ], PaymentEventResponseV3.prototype, "principal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], PaymentEventResponseV3.prototype, "routingNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceAmount" }),
        __metadata("design:type", Number)
    ], PaymentEventResponseV3.prototype, "sourceAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceCurrency" }),
        __metadata("design:type", String)
    ], PaymentEventResponseV3.prototype, "sourceCurrency", void 0);
    return PaymentEventResponseV3;
}(SpeakeasyBase));
export { PaymentEventResponseV3 };
