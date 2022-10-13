package shared

type GiftCardActivityLoad struct {
	AmountMoney               *Money   `json:"amount_money"`
	BuyerPaymentInstrumentIds []string `json:"buyer_payment_instrument_ids"`
	LineItemUID               *string  `json:"line_item_uid"`
	OrderID                   *string  `json:"order_id"`
	ReferenceID               *string  `json:"reference_id"`
}
