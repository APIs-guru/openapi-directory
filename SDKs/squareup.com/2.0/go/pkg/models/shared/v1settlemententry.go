package shared

type V1SettlementEntry struct {
	AmountMoney *V1Money `json:"amount_money"`
	FeeMoney    *V1Money `json:"fee_money"`
	PaymentID   *string  `json:"payment_id"`
	Type        *string  `json:"type"`
}
