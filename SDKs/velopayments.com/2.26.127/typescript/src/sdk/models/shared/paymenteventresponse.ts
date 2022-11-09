import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";

export enum PaymentEventResponseEventTypeEnum {
    PayoutSubmitted = "PAYOUT_SUBMITTED"
,    PayoutCompleted = "PAYOUT_COMPLETED"
,    PayoutInstructedV3 = "PAYOUT_INSTRUCTED_V3"
,    BankPaymentRequested = "BANK_PAYMENT_REQUESTED"
,    SourceAmountConfirmed = "SOURCE_AMOUNT_CONFIRMED"
,    PaymentSubmitted = "PAYMENT_SUBMITTED"
,    PaymentSubmittedAccepted = "PAYMENT_SUBMITTED_ACCEPTED"
,    PaymentSubmittedRejected = "PAYMENT_SUBMITTED_REJECTED"
,    PaymentConfirmed = "PAYMENT_CONFIRMED"
,    PaymentAwaitingFunds = "PAYMENT_AWAITING_FUNDS"
,    PaymentFunded = "PAYMENT_FUNDED"
,    PaymentUnfunded = "PAYMENT_UNFUNDED"
,    PaymentFailed = "PAYMENT_FAILED"
,    AchSubmittedToOdfi = "ACH_SUBMITTED_TO_ODFI"
,    PaymentAcceptedByRails = "PAYMENT_ACCEPTED_BY_RAILS"
,    AchReturnReceived = "ACH_RETURN_RECEIVED"
,    ReturnPaymentFundingRequested = "RETURN_PAYMENT_FUNDING_REQUESTED"
,    PayoutBatchExecuted = "PAYOUT_BATCH_EXECUTED"
,    PayoutBatchQuoteExpired = "PAYOUT_BATCH_QUOTE_EXPIRED"
,    PayoutBatchFunded = "PAYOUT_BATCH_FUNDED"
,    PayoutBatchFundsReturnRequest = "PAYOUT_BATCH_FUNDS_RETURN_REQUEST"
,    PayoutBatchFundsReturned = "PAYOUT_BATCH_FUNDS_RETURNED"
,    PayoutFundsRequest = "PAYOUT_FUNDS_REQUEST"
,    PayoutFundsGranted = "PAYOUT_FUNDS_GRANTED"
,    PayoutFundsDenied = "PAYOUT_FUNDS_DENIED"
,    PayoutBatchQuoted = "PAYOUT_BATCH_QUOTED"
,    PayoutQuoted = "PAYOUT_QUOTED"
,    AchPaymentReturnCancelled = "ACH_PAYMENT_RETURN_CANCELLED"
,    ReturnPaymentCancellationRequested = "RETURN_PAYMENT_CANCELLATION_REQUESTED"
,    PayoutWithdrawn = "PAYOUT_WITHDRAWN"
,    OrchestratedPaymentBatchRequested = "ORCHESTRATED_PAYMENT_BATCH_REQUESTED"
,    OrchestratedPaymentBatchConfirmed = "ORCHESTRATED_PAYMENT_BATCH_CONFIRMED"
,    OrchestratedPaymentRequested = "ORCHESTRATED_PAYMENT_REQUESTED"
}


export class PaymentEventResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=eventDateTime" })
  eventDateTime: Date;

  @Metadata({ data: "json, name=eventId" })
  eventId: string;

  @Metadata({ data: "json, name=eventType" })
  eventType: PaymentEventResponseEventTypeEnum;

  @Metadata({ data: "json, name=iban" })
  iban?: string;

  @Metadata({ data: "json, name=paymentAmount" })
  paymentAmount?: number;

  @Metadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: PaymentAuditCurrencyEnum;

  @Metadata({ data: "json, name=principal" })
  principal?: string;

  @Metadata({ data: "json, name=routingNumber" })
  routingNumber?: string;

  @Metadata({ data: "json, name=sourceAmount" })
  sourceAmount?: number;

  @Metadata({ data: "json, name=sourceCurrency" })
  sourceCurrency?: PaymentAuditCurrencyEnum;
}
