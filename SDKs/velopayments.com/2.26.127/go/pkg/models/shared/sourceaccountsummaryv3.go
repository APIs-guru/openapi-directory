package shared

type SourceAccountSummaryV3 struct {
	Currency        *PaymentAuditCurrencyV3Enum `json:"currency,omitempty"`
	SourceAccountID string                      `json:"sourceAccountId"`
	TotalCost       int64                       `json:"totalCost"`
}
