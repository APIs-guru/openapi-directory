package shared

import (
	"time"
)

type FxSummaryV3FundingStatusEnum string

const (
	FxSummaryV3FundingStatusEnumFunded     FxSummaryV3FundingStatusEnum = "FUNDED"
	FxSummaryV3FundingStatusEnumInstructed FxSummaryV3FundingStatusEnum = "INSTRUCTED"
	FxSummaryV3FundingStatusEnumUnfunded   FxSummaryV3FundingStatusEnum = "UNFUNDED"
)

type FxSummaryV3StatusEnum string

const (
	FxSummaryV3StatusEnumUnquoted FxSummaryV3StatusEnum = "UNQUOTED"
	FxSummaryV3StatusEnumQuoted   FxSummaryV3StatusEnum = "QUOTED"
	FxSummaryV3StatusEnumExpired  FxSummaryV3StatusEnum = "EXPIRED"
	FxSummaryV3StatusEnumExecuted FxSummaryV3StatusEnum = "EXECUTED"
)

type FxSummaryV3 struct {
	CreationDateTime   time.Time                    `json:"creationDateTime"`
	FundingStatus      FxSummaryV3FundingStatusEnum `json:"fundingStatus"`
	InvertedRate       float32                      `json:"invertedRate"`
	PaymentCurrency    *PaymentAuditCurrencyV3Enum  `json:"paymentCurrency"`
	QuoteID            string                       `json:"quoteId"`
	Rate               float32                      `json:"rate"`
	SourceCurrency     *PaymentAuditCurrencyV3Enum  `json:"sourceCurrency"`
	Status             FxSummaryV3StatusEnum        `json:"status"`
	TotalCost          int64                        `json:"totalCost"`
	TotalPaymentAmount int64                        `json:"totalPaymentAmount"`
}
