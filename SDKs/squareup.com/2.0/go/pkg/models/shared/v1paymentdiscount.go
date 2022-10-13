package shared

type V1PaymentDiscount struct {
	AppliedMoney *V1Money `json:"applied_money"`
	DiscountID   *string  `json:"discount_id"`
	Name         *string  `json:"name"`
}
