package shared

type V1PaymentDiscount struct {
	AppliedMoney *V1Money `json:"applied_money,omitempty"`
	DiscountID   *string  `json:"discount_id,omitempty"`
	Name         *string  `json:"name,omitempty"`
}
