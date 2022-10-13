package shared

type V1Money struct {
	Amount       *int64  `json:"amount"`
	CurrencyCode *string `json:"currency_code"`
}
