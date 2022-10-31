package shared

import (
"time")

type PayoutSummaryAudit struct {
    DateTime *time.Time `json:"dateTime,omitempty"`
    FxSummaries []FxSummary `json:"fxSummaries,omitempty"`
    InstructedDateTime *string `json:"instructedDateTime,omitempty"`
    PayorID *string `json:"payorId,omitempty"`
    PayorName string `json:"payorName"`
    PayoutID *string `json:"payoutId,omitempty"`
    PayoutMemo *string `json:"payoutMemo,omitempty"`
    PayoutType PayoutTypeEnum `json:"payoutType"`
    SourceAccountSummary []SourceAccountSummary `json:"sourceAccountSummary,omitempty"`
    Status PayoutStatusEnum `json:"status"`
    SubmittedDateTime string `json:"submittedDateTime"`
    TotalIncompletePayments *int64 `json:"totalIncompletePayments,omitempty"`
    TotalPayments *int64 `json:"totalPayments,omitempty"`
    TotalReturnedPayments *int64 `json:"totalReturnedPayments,omitempty"`
    TotalWithdrawnPayments *int64 `json:"totalWithdrawnPayments,omitempty"`
    WithdrawnDateTime *time.Time `json:"withdrawnDateTime,omitempty"`
    
}

