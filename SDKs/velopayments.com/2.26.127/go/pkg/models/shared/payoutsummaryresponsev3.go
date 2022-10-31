package shared

type PayoutSummaryResponseV3 struct {
	AcceptedPayments  []AcceptedPaymentV3 `json:"acceptedPayments"`
	Accounts          []SourceAccountV3   `json:"accounts"`
	FxSummaries       []QuoteFxSummaryV3  `json:"fxSummaries"`
	PaymentsAccepted  *int64              `json:"paymentsAccepted,omitempty"`
	PaymentsRejected  *int64              `json:"paymentsRejected,omitempty"`
	PaymentsSubmitted *int64              `json:"paymentsSubmitted,omitempty"`
	PaymentsWithdrawn int64               `json:"paymentsWithdrawn"`
	PayoutID          *string             `json:"payoutId,omitempty"`
	RejectedPayments  []RejectedPaymentV3 `json:"rejectedPayments"`
	Status            *string             `json:"status,omitempty"`
}
