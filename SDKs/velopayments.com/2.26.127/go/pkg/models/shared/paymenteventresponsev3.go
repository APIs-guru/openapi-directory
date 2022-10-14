package shared

import (
	"time"
)

type PaymentEventResponseV3EventTypeEnum string

const (
	PaymentEventResponseV3EventTypeEnumPayoutSubmitted                    PaymentEventResponseV3EventTypeEnum = "PAYOUT_SUBMITTED"
	PaymentEventResponseV3EventTypeEnumPayoutCompleted                    PaymentEventResponseV3EventTypeEnum = "PAYOUT_COMPLETED"
	PaymentEventResponseV3EventTypeEnumPayoutInstructedV3                 PaymentEventResponseV3EventTypeEnum = "PAYOUT_INSTRUCTED_V3"
	PaymentEventResponseV3EventTypeEnumBankPaymentRequested               PaymentEventResponseV3EventTypeEnum = "BANK_PAYMENT_REQUESTED"
	PaymentEventResponseV3EventTypeEnumSourceAmountConfirmed              PaymentEventResponseV3EventTypeEnum = "SOURCE_AMOUNT_CONFIRMED"
	PaymentEventResponseV3EventTypeEnumPaymentSubmitted                   PaymentEventResponseV3EventTypeEnum = "PAYMENT_SUBMITTED"
	PaymentEventResponseV3EventTypeEnumPaymentSubmittedAccepted           PaymentEventResponseV3EventTypeEnum = "PAYMENT_SUBMITTED_ACCEPTED"
	PaymentEventResponseV3EventTypeEnumPaymentSubmittedRejected           PaymentEventResponseV3EventTypeEnum = "PAYMENT_SUBMITTED_REJECTED"
	PaymentEventResponseV3EventTypeEnumPaymentConfirmed                   PaymentEventResponseV3EventTypeEnum = "PAYMENT_CONFIRMED"
	PaymentEventResponseV3EventTypeEnumPaymentAwaitingFunds               PaymentEventResponseV3EventTypeEnum = "PAYMENT_AWAITING_FUNDS"
	PaymentEventResponseV3EventTypeEnumPaymentFunded                      PaymentEventResponseV3EventTypeEnum = "PAYMENT_FUNDED"
	PaymentEventResponseV3EventTypeEnumPaymentUnfunded                    PaymentEventResponseV3EventTypeEnum = "PAYMENT_UNFUNDED"
	PaymentEventResponseV3EventTypeEnumPaymentFailed                      PaymentEventResponseV3EventTypeEnum = "PAYMENT_FAILED"
	PaymentEventResponseV3EventTypeEnumAchSubmittedToOdfi                 PaymentEventResponseV3EventTypeEnum = "ACH_SUBMITTED_TO_ODFI"
	PaymentEventResponseV3EventTypeEnumPaymentAcceptedByRails             PaymentEventResponseV3EventTypeEnum = "PAYMENT_ACCEPTED_BY_RAILS"
	PaymentEventResponseV3EventTypeEnumAchReturnReceived                  PaymentEventResponseV3EventTypeEnum = "ACH_RETURN_RECEIVED"
	PaymentEventResponseV3EventTypeEnumReturnPaymentFundingRequested      PaymentEventResponseV3EventTypeEnum = "RETURN_PAYMENT_FUNDING_REQUESTED"
	PaymentEventResponseV3EventTypeEnumPayoutBatchExecuted                PaymentEventResponseV3EventTypeEnum = "PAYOUT_BATCH_EXECUTED"
	PaymentEventResponseV3EventTypeEnumPayoutBatchQuoteExpired            PaymentEventResponseV3EventTypeEnum = "PAYOUT_BATCH_QUOTE_EXPIRED"
	PaymentEventResponseV3EventTypeEnumPayoutBatchFunded                  PaymentEventResponseV3EventTypeEnum = "PAYOUT_BATCH_FUNDED"
	PaymentEventResponseV3EventTypeEnumPayoutBatchFundsReturnRequest      PaymentEventResponseV3EventTypeEnum = "PAYOUT_BATCH_FUNDS_RETURN_REQUEST"
	PaymentEventResponseV3EventTypeEnumPayoutBatchFundsReturned           PaymentEventResponseV3EventTypeEnum = "PAYOUT_BATCH_FUNDS_RETURNED"
	PaymentEventResponseV3EventTypeEnumPayoutFundsRequest                 PaymentEventResponseV3EventTypeEnum = "PAYOUT_FUNDS_REQUEST"
	PaymentEventResponseV3EventTypeEnumPayoutFundsGranted                 PaymentEventResponseV3EventTypeEnum = "PAYOUT_FUNDS_GRANTED"
	PaymentEventResponseV3EventTypeEnumPayoutFundsDenied                  PaymentEventResponseV3EventTypeEnum = "PAYOUT_FUNDS_DENIED"
	PaymentEventResponseV3EventTypeEnumPayoutBatchQuoted                  PaymentEventResponseV3EventTypeEnum = "PAYOUT_BATCH_QUOTED"
	PaymentEventResponseV3EventTypeEnumPayoutQuoted                       PaymentEventResponseV3EventTypeEnum = "PAYOUT_QUOTED"
	PaymentEventResponseV3EventTypeEnumAchPaymentReturnCancelled          PaymentEventResponseV3EventTypeEnum = "ACH_PAYMENT_RETURN_CANCELLED"
	PaymentEventResponseV3EventTypeEnumReturnPaymentCancellationRequested PaymentEventResponseV3EventTypeEnum = "RETURN_PAYMENT_CANCELLATION_REQUESTED"
	PaymentEventResponseV3EventTypeEnumPayoutWithdrawn                    PaymentEventResponseV3EventTypeEnum = "PAYOUT_WITHDRAWN"
)

type PaymentEventResponseV3 struct {
	AccountName     *string                             `json:"accountName,omitempty"`
	AccountNumber   *string                             `json:"accountNumber,omitempty"`
	EventDateTime   time.Time                           `json:"eventDateTime"`
	EventID         string                              `json:"eventId"`
	EventType       PaymentEventResponseV3EventTypeEnum `json:"eventType"`
	Iban            *string                             `json:"iban,omitempty"`
	PaymentAmount   *int64                              `json:"paymentAmount,omitempty"`
	PaymentCurrency *PaymentAuditCurrencyV3Enum         `json:"paymentCurrency,omitempty"`
	Principal       *string                             `json:"principal,omitempty"`
	RoutingNumber   *string                             `json:"routingNumber,omitempty"`
	SourceAmount    *int64                              `json:"sourceAmount,omitempty"`
	SourceCurrency  *PaymentAuditCurrencyV3Enum         `json:"sourceCurrency,omitempty"`
}
