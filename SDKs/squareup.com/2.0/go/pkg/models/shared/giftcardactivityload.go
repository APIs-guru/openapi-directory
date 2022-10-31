package shared



type GiftCardActivityLoad struct {
    AmountMoney *Money `json:"amount_money,omitempty"`
    BuyerPaymentInstrumentIds []string `json:"buyer_payment_instrument_ids,omitempty"`
    LineItemUID *string `json:"line_item_uid,omitempty"`
    OrderID *string `json:"order_id,omitempty"`
    ReferenceID *string `json:"reference_id,omitempty"`
    
}

