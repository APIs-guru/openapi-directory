package shared

import (
	"time"
)

type PaymentResponseV3FundingStatusEnum string

const (
	PaymentResponseV3FundingStatusEnumFunded     PaymentResponseV3FundingStatusEnum = "FUNDED"
	PaymentResponseV3FundingStatusEnumInstructed PaymentResponseV3FundingStatusEnum = "INSTRUCTED"
	PaymentResponseV3FundingStatusEnumUnfunded   PaymentResponseV3FundingStatusEnum = "UNFUNDED"
)

type PaymentResponseV3StatusEnum string

const (
	PaymentResponseV3StatusEnumAccepted             PaymentResponseV3StatusEnum = "ACCEPTED"
	PaymentResponseV3StatusEnumAwaitingFunds        PaymentResponseV3StatusEnum = "AWAITING_FUNDS"
	PaymentResponseV3StatusEnumFunded               PaymentResponseV3StatusEnum = "FUNDED"
	PaymentResponseV3StatusEnumUnfunded             PaymentResponseV3StatusEnum = "UNFUNDED"
	PaymentResponseV3StatusEnumBankPaymentRequested PaymentResponseV3StatusEnum = "BANK_PAYMENT_REQUESTED"
	PaymentResponseV3StatusEnumRejected             PaymentResponseV3StatusEnum = "REJECTED"
	PaymentResponseV3StatusEnumAcceptedByRails      PaymentResponseV3StatusEnum = "ACCEPTED_BY_RAILS"
	PaymentResponseV3StatusEnumConfirmed            PaymentResponseV3StatusEnum = "CONFIRMED"
	PaymentResponseV3StatusEnumFailed               PaymentResponseV3StatusEnum = "FAILED"
	PaymentResponseV3StatusEnumWithdrawn            PaymentResponseV3StatusEnum = "WITHDRAWN"
)

type PaymentResponseV3 struct {
	AccountName                    *string                            `json:"accountName,omitempty"`
	AccountNumber                  *string                            `json:"accountNumber,omitempty"`
	CountryCode                    *string                            `json:"countryCode,omitempty"`
	Events                         []PaymentEventResponseV3           `json:"events"`
	FilenameReference              *string                            `json:"filenameReference,omitempty"`
	FundingStatus                  PaymentResponseV3FundingStatusEnum `json:"fundingStatus"`
	Iban                           *string                            `json:"iban,omitempty"`
	IndividualIdentificationNumber *string                            `json:"individualIdentificationNumber,omitempty"`
	InvertedRate                   *float32                           `json:"invertedRate,omitempty"`
	PayeeID                        string                             `json:"payeeId"`
	PaymentAmount                  int64                              `json:"paymentAmount"`
	PaymentChannelID               *string                            `json:"paymentChannelId,omitempty"`
	PaymentChannelName             *string                            `json:"paymentChannelName,omitempty"`
	PaymentCurrency                *PaymentAuditCurrencyV3Enum        `json:"paymentCurrency,omitempty"`
	PaymentID                      string                             `json:"paymentId"`
	PaymentMemo                    *string                            `json:"paymentMemo,omitempty"`
	PayorID                        string                             `json:"payorId"`
	PayorName                      *string                            `json:"payorName,omitempty"`
	PayorPaymentID                 *string                            `json:"payorPaymentId,omitempty"`
	QuoteID                        string                             `json:"quoteId"`
	RailsBatchID                   *string                            `json:"railsBatchId,omitempty"`
	RailsID                        string                             `json:"railsId"`
	RailsPaymentID                 *string                            `json:"railsPaymentId,omitempty"`
	Rate                           *float32                           `json:"rate,omitempty"`
	RejectionReason                *string                            `json:"rejectionReason,omitempty"`
	RemoteID                       *string                            `json:"remoteId,omitempty"`
	ReturnCost                     *int64                             `json:"returnCost,omitempty"`
	ReturnReason                   *string                            `json:"returnReason,omitempty"`
	RoutingNumber                  *string                            `json:"routingNumber,omitempty"`
	SourceAccountID                string                             `json:"sourceAccountId"`
	SourceAccountName              *string                            `json:"sourceAccountName,omitempty"`
	SourceAmount                   *int64                             `json:"sourceAmount,omitempty"`
	SourceCurrency                 *PaymentAuditCurrencyV3Enum        `json:"sourceCurrency,omitempty"`
	Status                         PaymentResponseV3StatusEnum        `json:"status"`
	SubmittedDateTime              time.Time                          `json:"submittedDateTime"`
	TraceNumber                    *string                            `json:"traceNumber,omitempty"`
}
