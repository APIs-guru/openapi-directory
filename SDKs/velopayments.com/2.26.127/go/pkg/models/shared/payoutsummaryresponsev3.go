package shared

type PayoutSummaryResponseV3 struct {
	AcceptedPayments  []AcceptedPaymentV3 `json:"acceptedPayments"`
	Accounts          []SourceAccountV3   `json:"accounts"`
	FxSummaries       []QuoteFxSummaryV3  `json:"fxSummaries"`
	PaymentsAccepted  *int64              `json:"paymentsAccepted"`
	PaymentsRejected  *int64              `json:"paymentsRejected"`
	PaymentsSubmitted *int64              `json:"paymentsSubmitted"`
	PaymentsWithdrawn int64               `json:"paymentsWithdrawn"`
	PayoutID          *string             `json:"payoutId"`
	RejectedPayments  []RejectedPaymentV3 `json:"rejectedPayments"`
	Status            *string             `json:"status"`
}
