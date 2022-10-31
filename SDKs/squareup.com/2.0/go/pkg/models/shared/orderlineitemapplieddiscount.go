package shared



type OrderLineItemAppliedDiscount struct {
    AppliedMoney *Money `json:"applied_money,omitempty"`
    DiscountUID string `json:"discount_uid"`
    UID *string `json:"uid,omitempty"`
    
}

