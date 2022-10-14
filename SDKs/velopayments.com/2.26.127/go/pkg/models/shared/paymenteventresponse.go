package shared

import (
	"time"
)

type PaymentEventResponseEventTypeEnum string

const (
	PaymentEventResponseEventTypeEnumPayoutSubmitted                    PaymentEventResponseEventTypeEnum = "PAYOUT_SUBMITTED"
	PaymentEventResponseEventTypeEnumPayoutCompleted                    PaymentEventResponseEventTypeEnum = "PAYOUT_COMPLETED"
	PaymentEventResponseEventTypeEnumPayoutInstructedV3                 PaymentEventResponseEventTypeEnum = "PAYOUT_INSTRUCTED_V3"
	PaymentEventResponseEventTypeEnumBankPaymentRequested               PaymentEventResponseEventTypeEnum = "BANK_PAYMENT_REQUESTED"
	PaymentEventResponseEventTypeEnumSourceAmountConfirmed              PaymentEventResponseEventTypeEnum = "SOURCE_AMOUNT_CONFIRMED"
	PaymentEventResponseEventTypeEnumPaymentSubmitted                   PaymentEventResponseEventTypeEnum = "PAYMENT_SUBMITTED"
	PaymentEventResponseEventTypeEnumPaymentSubmittedAccepted           PaymentEventResponseEventTypeEnum = "PAYMENT_SUBMITTED_ACCEPTED"
	PaymentEventResponseEventTypeEnumPaymentSubmittedRejected           PaymentEventResponseEventTypeEnum = "PAYMENT_SUBMITTED_REJECTED"
	PaymentEventResponseEventTypeEnumPaymentConfirmed                   PaymentEventResponseEventTypeEnum = "PAYMENT_CONFIRMED"
	PaymentEventResponseEventTypeEnumPaymentAwaitingFunds               PaymentEventResponseEventTypeEnum = "PAYMENT_AWAITING_FUNDS"
	PaymentEventResponseEventTypeEnumPaymentFunded                      PaymentEventResponseEventTypeEnum = "PAYMENT_FUNDED"
	PaymentEventResponseEventTypeEnumPaymentUnfunded                    PaymentEventResponseEventTypeEnum = "PAYMENT_UNFUNDED"
	PaymentEventResponseEventTypeEnumPaymentFailed                      PaymentEventResponseEventTypeEnum = "PAYMENT_FAILED"
	PaymentEventResponseEventTypeEnumAchSubmittedToOdfi                 PaymentEventResponseEventTypeEnum = "ACH_SUBMITTED_TO_ODFI"
	PaymentEventResponseEventTypeEnumPaymentAcceptedByRails             PaymentEventResponseEventTypeEnum = "PAYMENT_ACCEPTED_BY_RAILS"
	PaymentEventResponseEventTypeEnumAchReturnReceived                  PaymentEventResponseEventTypeEnum = "ACH_RETURN_RECEIVED"
	PaymentEventResponseEventTypeEnumReturnPaymentFundingRequested      PaymentEventResponseEventTypeEnum = "RETURN_PAYMENT_FUNDING_REQUESTED"
	PaymentEventResponseEventTypeEnumPayoutBatchExecuted                PaymentEventResponseEventTypeEnum = "PAYOUT_BATCH_EXECUTED"
	PaymentEventResponseEventTypeEnumPayoutBatchQuoteExpired            PaymentEventResponseEventTypeEnum = "PAYOUT_BATCH_QUOTE_EXPIRED"
	PaymentEventResponseEventTypeEnumPayoutBatchFunded                  PaymentEventResponseEventTypeEnum = "PAYOUT_BATCH_FUNDED"
	PaymentEventResponseEventTypeEnumPayoutBatchFundsReturnRequest      PaymentEventResponseEventTypeEnum = "PAYOUT_BATCH_FUNDS_RETURN_REQUEST"
	PaymentEventResponseEventTypeEnumPayoutBatchFundsReturned           PaymentEventResponseEventTypeEnum = "PAYOUT_BATCH_FUNDS_RETURNED"
	PaymentEventResponseEventTypeEnumPayoutFundsRequest                 PaymentEventResponseEventTypeEnum = "PAYOUT_FUNDS_REQUEST"
	PaymentEventResponseEventTypeEnumPayoutFundsGranted                 PaymentEventResponseEventTypeEnum = "PAYOUT_FUNDS_GRANTED"
	PaymentEventResponseEventTypeEnumPayoutFundsDenied                  PaymentEventResponseEventTypeEnum = "PAYOUT_FUNDS_DENIED"
	PaymentEventResponseEventTypeEnumPayoutBatchQuoted                  PaymentEventResponseEventTypeEnum = "PAYOUT_BATCH_QUOTED"
	PaymentEventResponseEventTypeEnumPayoutQuoted                       PaymentEventResponseEventTypeEnum = "PAYOUT_QUOTED"
	PaymentEventResponseEventTypeEnumAchPaymentReturnCancelled          PaymentEventResponseEventTypeEnum = "ACH_PAYMENT_RETURN_CANCELLED"
	PaymentEventResponseEventTypeEnumReturnPaymentCancellationRequested PaymentEventResponseEventTypeEnum = "RETURN_PAYMENT_CANCELLATION_REQUESTED"
	PaymentEventResponseEventTypeEnumPayoutWithdrawn                    PaymentEventResponseEventTypeEnum = "PAYOUT_WITHDRAWN"
	PaymentEventResponseEventTypeEnumOrchestratedPaymentBatchRequested  PaymentEventResponseEventTypeEnum = "ORCHESTRATED_PAYMENT_BATCH_REQUESTED"
	PaymentEventResponseEventTypeEnumOrchestratedPaymentBatchConfirmed  PaymentEventResponseEventTypeEnum = "ORCHESTRATED_PAYMENT_BATCH_CONFIRMED"
	PaymentEventResponseEventTypeEnumOrchestratedPaymentRequested       PaymentEventResponseEventTypeEnum = "ORCHESTRATED_PAYMENT_REQUESTED"
)

type PaymentEventResponse struct {
	AccountName     *string                           `json:"accountName,omitempty"`
	AccountNumber   *string                           `json:"accountNumber,omitempty"`
	EventDateTime   time.Time                         `json:"eventDateTime"`
	EventID         string                            `json:"eventId"`
	EventType       PaymentEventResponseEventTypeEnum `json:"eventType"`
	Iban            *string                           `json:"iban,omitempty"`
	PaymentAmount   *int64                            `json:"paymentAmount,omitempty"`
	PaymentCurrency *PaymentAuditCurrencyEnum         `json:"paymentCurrency,omitempty"`
	Principal       *string                           `json:"principal,omitempty"`
	RoutingNumber   *string                           `json:"routingNumber,omitempty"`
	SourceAmount    *int64                            `json:"sourceAmount,omitempty"`
	SourceCurrency  *PaymentAuditCurrencyEnum         `json:"sourceCurrency,omitempty"`
}
