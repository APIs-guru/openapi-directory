package shared

type PayoutSummaryAuditV3 struct {
	FxSummaries             []FxSummaryV3            `json:"fxSummaries"`
	InstructedDateTime      *string                  `json:"instructedDateTime"`
	PayorID                 *string                  `json:"payorId"`
	PayoutID                string                   `json:"payoutId"`
	PayoutMemo              *string                  `json:"payoutMemo"`
	SourceAccountSummary    []SourceAccountSummaryV3 `json:"sourceAccountSummary"`
	Status                  PayoutStatusV3Enum       `json:"status"`
	SubmittedDateTime       string                   `json:"submittedDateTime"`
	TotalFailedPayments     *int64                   `json:"totalFailedPayments"`
	TotalIncompletePayments *int64                   `json:"totalIncompletePayments"`
	TotalPayments           *int64                   `json:"totalPayments"`
	WithdrawnDateTime       *string                  `json:"withdrawnDateTime"`
}
