package shared

type V1Order struct {
	BtcPriceSatoshi      *float64              `json:"btc_price_satoshi"`
	BtcReceiveAddress    *string               `json:"btc_receive_address"`
	BuyerEmail           *string               `json:"buyer_email"`
	BuyerNote            *string               `json:"buyer_note"`
	CanceledNote         *string               `json:"canceled_note"`
	CompletedNote        *string               `json:"completed_note"`
	CreatedAt            *string               `json:"created_at"`
	Errors               []Error               `json:"errors"`
	ExpiresAt            *string               `json:"expires_at"`
	ID                   *string               `json:"id"`
	OrderHistory         []V1OrderHistoryEntry `json:"order_history"`
	PaymentID            *string               `json:"payment_id"`
	PromoCode            *string               `json:"promo_code"`
	RecipientName        *string               `json:"recipient_name"`
	RecipientPhoneNumber *string               `json:"recipient_phone_number"`
	RefundedNote         *string               `json:"refunded_note"`
	ShippingAddress      *Address              `json:"shipping_address"`
	State                *string               `json:"state"`
	SubtotalMoney        *V1Money              `json:"subtotal_money"`
	Tender               *V1Tender             `json:"tender"`
	TotalDiscountMoney   *V1Money              `json:"total_discount_money"`
	TotalPriceMoney      *V1Money              `json:"total_price_money"`
	TotalShippingMoney   *V1Money              `json:"total_shipping_money"`
	TotalTaxMoney        *V1Money              `json:"total_tax_money"`
	UpdatedAt            *string               `json:"updated_at"`
}
