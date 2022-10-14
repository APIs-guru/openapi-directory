package shared

type ProcessingFee struct {
	AmountMoney *Money  `json:"amount_money,omitempty"`
	EffectiveAt *string `json:"effective_at,omitempty"`
	Type        *string `json:"type,omitempty"`
}
