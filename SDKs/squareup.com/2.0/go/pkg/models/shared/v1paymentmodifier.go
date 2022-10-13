package shared

type V1PaymentModifier struct {
	AppliedMoney     *V1Money `json:"applied_money"`
	ModifierOptionID *string  `json:"modifier_option_id"`
	Name             *string  `json:"name"`
}
