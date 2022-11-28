import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";


export enum PaymentEventResponseV3EventTypeEnum {
    PayoutSubmitted = "PAYOUT_SUBMITTED",
    PayoutCompleted = "PAYOUT_COMPLETED",
    PayoutInstructedV3 = "PAYOUT_INSTRUCTED_V3",
    BankPaymentRequested = "BANK_PAYMENT_REQUESTED",
    SourceAmountConfirmed = "SOURCE_AMOUNT_CONFIRMED",
    PaymentSubmitted = "PAYMENT_SUBMITTED",
    PaymentSubmittedAccepted = "PAYMENT_SUBMITTED_ACCEPTED",
    PaymentSubmittedRejected = "PAYMENT_SUBMITTED_REJECTED",
    PaymentConfirmed = "PAYMENT_CONFIRMED",
    PaymentAwaitingFunds = "PAYMENT_AWAITING_FUNDS",
    PaymentFunded = "PAYMENT_FUNDED",
    PaymentUnfunded = "PAYMENT_UNFUNDED",
    PaymentFailed = "PAYMENT_FAILED",
    AchSubmittedToOdfi = "ACH_SUBMITTED_TO_ODFI",
    PaymentAcceptedByRails = "PAYMENT_ACCEPTED_BY_RAILS",
    AchReturnReceived = "ACH_RETURN_RECEIVED",
    ReturnPaymentFundingRequested = "RETURN_PAYMENT_FUNDING_REQUESTED",
    PayoutBatchExecuted = "PAYOUT_BATCH_EXECUTED",
    PayoutBatchQuoteExpired = "PAYOUT_BATCH_QUOTE_EXPIRED",
    PayoutBatchFunded = "PAYOUT_BATCH_FUNDED",
    PayoutBatchFundsReturnRequest = "PAYOUT_BATCH_FUNDS_RETURN_REQUEST",
    PayoutBatchFundsReturned = "PAYOUT_BATCH_FUNDS_RETURNED",
    PayoutFundsRequest = "PAYOUT_FUNDS_REQUEST",
    PayoutFundsGranted = "PAYOUT_FUNDS_GRANTED",
    PayoutFundsDenied = "PAYOUT_FUNDS_DENIED",
    PayoutBatchQuoted = "PAYOUT_BATCH_QUOTED",
    PayoutQuoted = "PAYOUT_QUOTED",
    AchPaymentReturnCancelled = "ACH_PAYMENT_RETURN_CANCELLED",
    ReturnPaymentCancellationRequested = "RETURN_PAYMENT_CANCELLATION_REQUESTED",
    PayoutWithdrawn = "PAYOUT_WITHDRAWN"
}


export class PaymentEventResponseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=eventDateTime" })
  eventDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType: PaymentEventResponseV3EventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAmount" })
  paymentAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: PaymentAuditCurrencyV3Enum;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: string;

  @SpeakeasyMetadata({ data: "json, name=routingNumber" })
  routingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAmount" })
  sourceAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceCurrency" })
  sourceCurrency?: PaymentAuditCurrencyV3Enum;
}
