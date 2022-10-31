package shared



type V1Order struct {
    BtcPriceSatoshi *float64 `json:"btc_price_satoshi,omitempty"`
    BtcReceiveAddress *string `json:"btc_receive_address,omitempty"`
    BuyerEmail *string `json:"buyer_email,omitempty"`
    BuyerNote *string `json:"buyer_note,omitempty"`
    CanceledNote *string `json:"canceled_note,omitempty"`
    CompletedNote *string `json:"completed_note,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    ExpiresAt *string `json:"expires_at,omitempty"`
    ID *string `json:"id,omitempty"`
    OrderHistory []V1OrderHistoryEntry `json:"order_history,omitempty"`
    PaymentID *string `json:"payment_id,omitempty"`
    PromoCode *string `json:"promo_code,omitempty"`
    RecipientName *string `json:"recipient_name,omitempty"`
    RecipientPhoneNumber *string `json:"recipient_phone_number,omitempty"`
    RefundedNote *string `json:"refunded_note,omitempty"`
    ShippingAddress *Address `json:"shipping_address,omitempty"`
    State *string `json:"state,omitempty"`
    SubtotalMoney *V1Money `json:"subtotal_money,omitempty"`
    Tender *V1Tender `json:"tender,omitempty"`
    TotalDiscountMoney *V1Money `json:"total_discount_money,omitempty"`
    TotalPriceMoney *V1Money `json:"total_price_money,omitempty"`
    TotalShippingMoney *V1Money `json:"total_shipping_money,omitempty"`
    TotalTaxMoney *V1Money `json:"total_tax_money,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

