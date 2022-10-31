package shared

import (
"time")


type FxSummaryFundingStatusEnum string

const (
    FxSummaryFundingStatusEnumFunded FxSummaryFundingStatusEnum = "FUNDED"
FxSummaryFundingStatusEnumInstructed FxSummaryFundingStatusEnum = "INSTRUCTED"
FxSummaryFundingStatusEnumUnfunded FxSummaryFundingStatusEnum = "UNFUNDED"
)



type FxSummaryStatusEnum string

const (
    FxSummaryStatusEnumUnquoted FxSummaryStatusEnum = "UNQUOTED"
FxSummaryStatusEnumQuoted FxSummaryStatusEnum = "QUOTED"
FxSummaryStatusEnumExpired FxSummaryStatusEnum = "EXPIRED"
FxSummaryStatusEnumExecuted FxSummaryStatusEnum = "EXECUTED"
)


type FxSummary struct {
    CreationDateTime time.Time `json:"creationDateTime"`
    FundingStatus FxSummaryFundingStatusEnum `json:"fundingStatus"`
    InvertedRate float64 `json:"invertedRate"`
    PaymentCurrency *PaymentAuditCurrencyEnum `json:"paymentCurrency,omitempty"`
    QuoteID string `json:"quoteId"`
    Rate float64 `json:"rate"`
    SourceCurrency *PaymentAuditCurrencyEnum `json:"sourceCurrency,omitempty"`
    Status FxSummaryStatusEnum `json:"status"`
    TotalCost int64 `json:"totalCost"`
    TotalPaymentAmount int64 `json:"totalPaymentAmount"`
    
}

