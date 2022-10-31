package shared

type SupportedCurrencyV2 struct {
	Currency         *string `json:"currency,omitempty"`
	MaxPaymentAmount *int64  `json:"maxPaymentAmount,omitempty"`
}
