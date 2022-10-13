package shared

import (
	"time"
)

type PayoutSummaryAudit struct {
	DateTime                *time.Time             `json:"dateTime"`
	FxSummaries             []FxSummary            `json:"fxSummaries"`
	InstructedDateTime      *string                `json:"instructedDateTime"`
	PayorID                 *string                `json:"payorId"`
	PayorName               string                 `json:"payorName"`
	PayoutID                *string                `json:"payoutId"`
	PayoutMemo              *string                `json:"payoutMemo"`
	PayoutType              PayoutTypeEnum         `json:"payoutType"`
	SourceAccountSummary    []SourceAccountSummary `json:"sourceAccountSummary"`
	Status                  PayoutStatusEnum       `json:"status"`
	SubmittedDateTime       string                 `json:"submittedDateTime"`
	TotalIncompletePayments *int64                 `json:"totalIncompletePayments"`
	TotalPayments           *int64                 `json:"totalPayments"`
	TotalReturnedPayments   *int64                 `json:"totalReturnedPayments"`
	TotalWithdrawnPayments  *int64                 `json:"totalWithdrawnPayments"`
	WithdrawnDateTime       *time.Time             `json:"withdrawnDateTime"`
}
