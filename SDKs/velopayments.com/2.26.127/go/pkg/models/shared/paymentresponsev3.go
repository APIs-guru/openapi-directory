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
	AccountName                    *string                            `json:"accountName"`
	AccountNumber                  *string                            `json:"accountNumber"`
	CountryCode                    *string                            `json:"countryCode"`
	Events                         []PaymentEventResponseV3           `json:"events"`
	FilenameReference              *string                            `json:"filenameReference"`
	FundingStatus                  PaymentResponseV3FundingStatusEnum `json:"fundingStatus"`
	Iban                           *string                            `json:"iban"`
	IndividualIdentificationNumber *string                            `json:"individualIdentificationNumber"`
	InvertedRate                   *float32                           `json:"invertedRate"`
	PayeeID                        string                             `json:"payeeId"`
	PaymentAmount                  int64                              `json:"paymentAmount"`
	PaymentChannelID               *string                            `json:"paymentChannelId"`
	PaymentChannelName             *string                            `json:"paymentChannelName"`
	PaymentCurrency                *PaymentAuditCurrencyV3Enum        `json:"paymentCurrency"`
	PaymentID                      string                             `json:"paymentId"`
	PaymentMemo                    *string                            `json:"paymentMemo"`
	PayorID                        string                             `json:"payorId"`
	PayorName                      *string                            `json:"payorName"`
	PayorPaymentID                 *string                            `json:"payorPaymentId"`
	QuoteID                        string                             `json:"quoteId"`
	RailsBatchID                   *string                            `json:"railsBatchId"`
	RailsID                        string                             `json:"railsId"`
	RailsPaymentID                 *string                            `json:"railsPaymentId"`
	Rate                           *float32                           `json:"rate"`
	RejectionReason                *string                            `json:"rejectionReason"`
	RemoteID                       *string                            `json:"remoteId"`
	ReturnCost                     *int64                             `json:"returnCost"`
	ReturnReason                   *string                            `json:"returnReason"`
	RoutingNumber                  *string                            `json:"routingNumber"`
	SourceAccountID                string                             `json:"sourceAccountId"`
	SourceAccountName              *string                            `json:"sourceAccountName"`
	SourceAmount                   *int64                             `json:"sourceAmount"`
	SourceCurrency                 *PaymentAuditCurrencyV3Enum        `json:"sourceCurrency"`
	Status                         PaymentResponseV3StatusEnum        `json:"status"`
	SubmittedDateTime              time.Time                          `json:"submittedDateTime"`
	TraceNumber                    *string                            `json:"traceNumber"`
}
