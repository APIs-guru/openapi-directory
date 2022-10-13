package shared

type GiftCardActivityRedeem struct {
	AmountMoney Money   `json:"amount_money"`
	PaymentID   *string `json:"payment_id"`
	ReferenceID *string `json:"reference_id"`
}
