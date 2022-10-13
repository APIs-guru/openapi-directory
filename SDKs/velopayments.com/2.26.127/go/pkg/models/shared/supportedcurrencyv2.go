package shared

type SupportedCurrencyV2 struct {
	Currency         *string `json:"currency"`
	MaxPaymentAmount *int64  `json:"maxPaymentAmount"`
}
