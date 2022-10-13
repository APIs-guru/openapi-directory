package shared

type ProcessingFee struct {
	AmountMoney *Money  `json:"amount_money"`
	EffectiveAt *string `json:"effective_at"`
	Type        *string `json:"type"`
}
