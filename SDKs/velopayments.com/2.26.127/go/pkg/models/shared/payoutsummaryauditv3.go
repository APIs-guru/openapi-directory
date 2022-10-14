package shared

type PayoutSummaryAuditV3 struct {
	FxSummaries             []FxSummaryV3            `json:"fxSummaries,omitempty"`
	InstructedDateTime      *string                  `json:"instructedDateTime,omitempty"`
	PayorID                 *string                  `json:"payorId,omitempty"`
	PayoutID                string                   `json:"payoutId"`
	PayoutMemo              *string                  `json:"payoutMemo,omitempty"`
	SourceAccountSummary    []SourceAccountSummaryV3 `json:"sourceAccountSummary,omitempty"`
	Status                  PayoutStatusV3Enum       `json:"status"`
	SubmittedDateTime       string                   `json:"submittedDateTime"`
	TotalFailedPayments     *int64                   `json:"totalFailedPayments,omitempty"`
	TotalIncompletePayments *int64                   `json:"totalIncompletePayments,omitempty"`
	TotalPayments           *int64                   `json:"totalPayments,omitempty"`
	WithdrawnDateTime       *string                  `json:"withdrawnDateTime,omitempty"`
}
