package shared

type OrderLineItemAppliedDiscount struct {
	AppliedMoney *Money  `json:"applied_money"`
	DiscountUID  string  `json:"discount_uid"`
	UID          *string `json:"uid"`
}
