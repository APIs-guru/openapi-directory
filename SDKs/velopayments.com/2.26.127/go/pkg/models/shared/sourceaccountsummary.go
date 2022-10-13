package shared

type SourceAccountSummary struct {
	Currency        *PaymentAuditCurrencyEnum `json:"currency"`
	SourceAccountID string                    `json:"sourceAccountId"`
	TotalCost       int64                     `json:"totalCost"`
}
