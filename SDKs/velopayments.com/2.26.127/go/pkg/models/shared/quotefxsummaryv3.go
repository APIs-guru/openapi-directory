package shared

import (
"time")


type QuoteFxSummaryV3FundingStatusEnum string

const (
    QuoteFxSummaryV3FundingStatusEnumUnfunded QuoteFxSummaryV3FundingStatusEnum = "UNFUNDED"
QuoteFxSummaryV3FundingStatusEnumInstructed QuoteFxSummaryV3FundingStatusEnum = "INSTRUCTED"
QuoteFxSummaryV3FundingStatusEnumFunded QuoteFxSummaryV3FundingStatusEnum = "FUNDED"
)



type QuoteFxSummaryV3StatusEnum string

const (
    QuoteFxSummaryV3StatusEnumUnquoted QuoteFxSummaryV3StatusEnum = "UNQUOTED"
QuoteFxSummaryV3StatusEnumQuoted QuoteFxSummaryV3StatusEnum = "QUOTED"
QuoteFxSummaryV3StatusEnumExpired QuoteFxSummaryV3StatusEnum = "EXPIRED"
QuoteFxSummaryV3StatusEnumExecuted QuoteFxSummaryV3StatusEnum = "EXECUTED"
QuoteFxSummaryV3StatusEnumRejected QuoteFxSummaryV3StatusEnum = "REJECTED"
)


type QuoteFxSummaryV3 struct {
    CreationTime time.Time `json:"creationTime"`
    ExpiryTime *time.Time `json:"expiryTime,omitempty"`
    FundingStatus QuoteFxSummaryV3FundingStatusEnum `json:"fundingStatus"`
    InvertedRate *float32 `json:"invertedRate,omitempty"`
    PaymentCurrency string `json:"paymentCurrency"`
    QuoteID string `json:"quoteId"`
    Rate float32 `json:"rate"`
    SourceCurrency string `json:"sourceCurrency"`
    Status QuoteFxSummaryV3StatusEnum `json:"status"`
    TotalPaymentAmount int64 `json:"totalPaymentAmount"`
    TotalSourceAmount int64 `json:"totalSourceAmount"`
    
}

