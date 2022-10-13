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
	AccountName                    *string                            `json:"accountName"`
	AccountNumber                  *string                            `json:"accountNumber"`
	CountryCode                    *string                            `json:"countryCode"`
	Events                         []PaymentEventResponse             `json:"events"`
	FilenameReference              *string                            `json:"filenameReference"`
	FundingStatus                  PaymentResponseV4FundingStatusEnum `json:"fundingStatus"`
	Iban                           *string                            `json:"iban"`
	IndividualIdentificationNumber *string                            `json:"individualIdentificationNumber"`
	InvertedRate                   *float64                           `json:"invertedRate"`
	IsPaymentCcyBaseCcy            *bool                              `json:"isPaymentCcyBaseCcy"`
	PayeeID                        string                             `json:"payeeId"`
	PaymentAmount                  int64                              `json:"paymentAmount"`
	PaymentChannelID               *string                            `json:"paymentChannelId"`
	PaymentChannelName             *string                            `json:"paymentChannelName"`
	PaymentCurrency                *PaymentAuditCurrencyEnum          `json:"paymentCurrency"`
	PaymentID                      string                             `json:"paymentId"`
	PaymentMemo                    *string                            `json:"paymentMemo"`
	PaymentMetadata                *string                            `json:"paymentMetadata"`
	PaymentTrackingReference       *string                            `json:"paymentTrackingReference"`
	PayorID                        string                             `json:"payorId"`
	PayorName                      *string                            `json:"payorName"`
	PayorPaymentID                 *string                            `json:"payorPaymentId"`
	Payout                         *interface{}                       `json:"payout"`
	QuoteID                        string                             `json:"quoteId"`
	RailsBatchID                   *string                            `json:"railsBatchId"`
	RailsID                        string                             `json:"railsId"`
	RailsPaymentID                 *string                            `json:"railsPaymentId"`
	Rate                           *float64                           `json:"rate"`
	RejectionReason                *string                            `json:"rejectionReason"`
	RemoteID                       *string                            `json:"remoteId"`
	RemoteSystemID                 *string                            `json:"remoteSystemId"`
	RemoteSystemPaymentID          *string                            `json:"remoteSystemPaymentId"`
	ReturnCost                     *int64                             `json:"returnCost"`
	ReturnReason                   *string                            `json:"returnReason"`
	RoutingNumber                  *string                            `json:"routingNumber"`
	SourceAccountID                string                             `json:"sourceAccountId"`
	SourceAccountName              *string                            `json:"sourceAccountName"`
	SourceAmount                   *int64                             `json:"sourceAmount"`
	SourceCurrency                 *PaymentAuditCurrencyEnum          `json:"sourceCurrency"`
	Status                         PaymentResponseV4StatusEnum        `json:"status"`
	SubmittedDateTime              time.Time                          `json:"submittedDateTime"`
	TraceNumber                    *string                            `json:"traceNumber"`
	TransmissionType               *string                            `json:"transmissionType"`
	Withdrawable                   *bool                              `json:"withdrawable"`
	WithdrawnReason                *string                            `json:"withdrawnReason"`
}
