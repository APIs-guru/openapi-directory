package shared

type V1PaymentModifier struct {
	AppliedMoney     *V1Money `json:"applied_money,omitempty"`
	ModifierOptionID *string  `json:"modifier_option_id,omitempty"`
	Name             *string  `json:"name,omitempty"`
}
