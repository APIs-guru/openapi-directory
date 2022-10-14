package shared

import (
	"time"
)

type PaymentResponseV4FundingStatusEnum string

const (
	PaymentResponseV4FundingStatusEnumFunded     PaymentResponseV4FundingStatusEnum = "FUNDED"
	PaymentResponseV4FundingStatusEnumInstructed PaymentResponseV4FundingStatusEnum = "INSTRUCTED"
	PaymentResponseV4FundingStatusEnumUnfunded   PaymentResponseV4FundingStatusEnum = "UNFUNDED"
)

type PaymentResponseV4StatusEnum string

const (
	PaymentResponseV4StatusEnumAccepted             PaymentResponseV4StatusEnum = "ACCEPTED"
	PaymentResponseV4StatusEnumAwaitingFunds        PaymentResponseV4StatusEnum = "AWAITING_FUNDS"
	PaymentResponseV4StatusEnumFunded               PaymentResponseV4StatusEnum = "FUNDED"
	PaymentResponseV4StatusEnumUnfunded             PaymentResponseV4StatusEnum = "UNFUNDED"
	PaymentResponseV4StatusEnumBankPaymentRequested PaymentResponseV4StatusEnum = "BANK_PAYMENT_REQUESTED"
	PaymentResponseV4StatusEnumRejected             PaymentResponseV4StatusEnum = "REJECTED"
	PaymentResponseV4StatusEnumAcceptedByRails      PaymentResponseV4StatusEnum = "ACCEPTED_BY_RAILS"
	PaymentResponseV4StatusEnumConfirmed            PaymentResponseV4StatusEnum = "CONFIRMED"
	PaymentResponseV4StatusEnumReturned             PaymentResponseV4StatusEnum = "RETURNED"
	PaymentResponseV4StatusEnumWithdrawn            PaymentResponseV4StatusEnum = "WITHDRAWN"
)

type PaymentResponseV4 struct {
	AccountName                    *string                            `json:"accountName,omitempty"`
	AccountNumber                  *string                            `json:"accountNumber,omitempty"`
	CountryCode                    *string                            `json:"countryCode,omitempty"`
	Events                         []PaymentEventResponse             `json:"events"`
	FilenameReference              *string                            `json:"filenameReference,omitempty"`
	FundingStatus                  PaymentResponseV4FundingStatusEnum `json:"fundingStatus"`
	Iban                           *string                            `json:"iban,omitempty"`
	IndividualIdentificationNumber *string                            `json:"individualIdentificationNumber,omitempty"`
	InvertedRate                   *float64                           `json:"invertedRate,omitempty"`
	IsPaymentCcyBaseCcy            *bool                              `json:"isPaymentCcyBaseCcy,omitempty"`
	PayeeID                        string                             `json:"payeeId"`
	PaymentAmount                  int64                              `json:"paymentAmount"`
	PaymentChannelID               *string                            `json:"paymentChannelId,omitempty"`
	PaymentChannelName             *string                            `json:"paymentChannelName,omitempty"`
	PaymentCurrency                *PaymentAuditCurrencyEnum          `json:"paymentCurrency,omitempty"`
	PaymentID                      string                             `json:"paymentId"`
	PaymentMemo                    *string                            `json:"paymentMemo,omitempty"`
	PaymentMetadata                *string                            `json:"paymentMetadata,omitempty"`
	PaymentTrackingReference       *string                            `json:"paymentTrackingReference,omitempty"`
	PayorID                        string                             `json:"payorId"`
	PayorName                      *string                            `json:"payorName,omitempty"`
	PayorPaymentID                 *string                            `json:"payorPaymentId,omitempty"`
	Payout                         *interface{}                       `json:"payout,omitempty"`
	QuoteID                        string                             `json:"quoteId"`
	RailsBatchID                   *string                            `json:"railsBatchId,omitempty"`
	RailsID                        string                             `json:"railsId"`
	RailsPaymentID                 *string                            `json:"railsPaymentId,omitempty"`
	Rate                           *float64                           `json:"rate,omitempty"`
	RejectionReason                *string                            `json:"rejectionReason,omitempty"`
	RemoteID                       *string                            `json:"remoteId,omitempty"`
	RemoteSystemID                 *string                            `json:"remoteSystemId,omitempty"`
	RemoteSystemPaymentID          *string                            `json:"remoteSystemPaymentId,omitempty"`
	ReturnCost                     *int64                             `json:"returnCost,omitempty"`
	ReturnReason                   *string                            `json:"returnReason,omitempty"`
	RoutingNumber                  *string                            `json:"routingNumber,omitempty"`
	SourceAccountID                string                             `json:"sourceAccountId"`
	SourceAccountName              *string                            `json:"sourceAccountName,omitempty"`
	SourceAmount                   *int64                             `json:"sourceAmount,omitempty"`
	SourceCurrency                 *PaymentAuditCurrencyEnum          `json:"sourceCurrency,omitempty"`
	Status                         PaymentResponseV4StatusEnum        `json:"status"`
	SubmittedDateTime              time.Time                          `json:"submittedDateTime"`
	TraceNumber                    *string                            `json:"traceNumber,omitempty"`
	TransmissionType               *string                            `json:"transmissionType,omitempty"`
	Withdrawable                   *bool                              `json:"withdrawable,omitempty"`
	WithdrawnReason                *string                            `json:"withdrawnReason,omitempty"`
}
