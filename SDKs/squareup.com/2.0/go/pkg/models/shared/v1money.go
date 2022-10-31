package shared

type V1Money struct {
	Amount       *int64  `json:"amount,omitempty"`
	CurrencyCode *string `json:"currency_code,omitempty"`
}
