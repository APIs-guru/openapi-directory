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
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";
export var PaymentEventResponseEventTypeEnum;
(function (PaymentEventResponseEventTypeEnum) {
    PaymentEventResponseEventTypeEnum["PayoutSubmitted"] = "PAYOUT_SUBMITTED";
    PaymentEventResponseEventTypeEnum["PayoutCompleted"] = "PAYOUT_COMPLETED";
    PaymentEventResponseEventTypeEnum["PayoutInstructedV3"] = "PAYOUT_INSTRUCTED_V3";
    PaymentEventResponseEventTypeEnum["BankPaymentRequested"] = "BANK_PAYMENT_REQUESTED";
    PaymentEventResponseEventTypeEnum["SourceAmountConfirmed"] = "SOURCE_AMOUNT_CONFIRMED";
    PaymentEventResponseEventTypeEnum["PaymentSubmitted"] = "PAYMENT_SUBMITTED";
    PaymentEventResponseEventTypeEnum["PaymentSubmittedAccepted"] = "PAYMENT_SUBMITTED_ACCEPTED";
    PaymentEventResponseEventTypeEnum["PaymentSubmittedRejected"] = "PAYMENT_SUBMITTED_REJECTED";
    PaymentEventResponseEventTypeEnum["PaymentConfirmed"] = "PAYMENT_CONFIRMED";
    PaymentEventResponseEventTypeEnum["PaymentAwaitingFunds"] = "PAYMENT_AWAITING_FUNDS";
    PaymentEventResponseEventTypeEnum["PaymentFunded"] = "PAYMENT_FUNDED";
    PaymentEventResponseEventTypeEnum["PaymentUnfunded"] = "PAYMENT_UNFUNDED";
    PaymentEventResponseEventTypeEnum["PaymentFailed"] = "PAYMENT_FAILED";
    PaymentEventResponseEventTypeEnum["AchSubmittedToOdfi"] = "ACH_SUBMITTED_TO_ODFI";
    PaymentEventResponseEventTypeEnum["PaymentAcceptedByRails"] = "PAYMENT_ACCEPTED_BY_RAILS";
    PaymentEventResponseEventTypeEnum["AchReturnReceived"] = "ACH_RETURN_RECEIVED";
    PaymentEventResponseEventTypeEnum["ReturnPaymentFundingRequested"] = "RETURN_PAYMENT_FUNDING_REQUESTED";
    PaymentEventResponseEventTypeEnum["PayoutBatchExecuted"] = "PAYOUT_BATCH_EXECUTED";
    PaymentEventResponseEventTypeEnum["PayoutBatchQuoteExpired"] = "PAYOUT_BATCH_QUOTE_EXPIRED";
    PaymentEventResponseEventTypeEnum["PayoutBatchFunded"] = "PAYOUT_BATCH_FUNDED";
    PaymentEventResponseEventTypeEnum["PayoutBatchFundsReturnRequest"] = "PAYOUT_BATCH_FUNDS_RETURN_REQUEST";
    PaymentEventResponseEventTypeEnum["PayoutBatchFundsReturned"] = "PAYOUT_BATCH_FUNDS_RETURNED";
    PaymentEventResponseEventTypeEnum["PayoutFundsRequest"] = "PAYOUT_FUNDS_REQUEST";
    PaymentEventResponseEventTypeEnum["PayoutFundsGranted"] = "PAYOUT_FUNDS_GRANTED";
    PaymentEventResponseEventTypeEnum["PayoutFundsDenied"] = "PAYOUT_FUNDS_DENIED";
    PaymentEventResponseEventTypeEnum["PayoutBatchQuoted"] = "PAYOUT_BATCH_QUOTED";
    PaymentEventResponseEventTypeEnum["PayoutQuoted"] = "PAYOUT_QUOTED";
    PaymentEventResponseEventTypeEnum["AchPaymentReturnCancelled"] = "ACH_PAYMENT_RETURN_CANCELLED";
    PaymentEventResponseEventTypeEnum["ReturnPaymentCancellationRequested"] = "RETURN_PAYMENT_CANCELLATION_REQUESTED";
    PaymentEventResponseEventTypeEnum["PayoutWithdrawn"] = "PAYOUT_WITHDRAWN";
    PaymentEventResponseEventTypeEnum["OrchestratedPaymentBatchRequested"] = "ORCHESTRATED_PAYMENT_BATCH_REQUESTED";
    PaymentEventResponseEventTypeEnum["OrchestratedPaymentBatchConfirmed"] = "ORCHESTRATED_PAYMENT_BATCH_CONFIRMED";
    PaymentEventResponseEventTypeEnum["OrchestratedPaymentRequested"] = "ORCHESTRATED_PAYMENT_REQUESTED";
})(PaymentEventResponseEventTypeEnum || (PaymentEventResponseEventTypeEnum = {}));
var PaymentEventResponse = /** @class */ (function (_super) {
    __extends(PaymentEventResponse, _super);
    function PaymentEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], PaymentEventResponse.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], PaymentEventResponse.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventDateTime" }),
        __metadata("design:type", Date)
    ], PaymentEventResponse.prototype, "eventDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventId" }),
        __metadata("design:type", String)
    ], PaymentEventResponse.prototype, "eventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], PaymentEventResponse.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], PaymentEventResponse.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentAmount" }),
        __metadata("design:type", Number)
    ], PaymentEventResponse.prototype, "paymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentCurrency" }),
        __metadata("design:type", String)
    ], PaymentEventResponse.prototype, "paymentCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principal" }),
        __metadata("design:type", String)
    ], PaymentEventResponse.prototype, "principal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingNumber" }),
        __metadata("design:type", String)
    ], PaymentEventResponse.prototype, "routingNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceAmount" }),
        __metadata("design:type", Number)
    ], PaymentEventResponse.prototype, "sourceAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceCurrency" }),
        __metadata("design:type", String)
    ], PaymentEventResponse.prototype, "sourceCurrency", void 0);
    return PaymentEventResponse;
}(SpeakeasyBase));
export { PaymentEventResponse };
