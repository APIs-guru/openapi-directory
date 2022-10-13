package shared

type GiftCardActivityRefund struct {
	AmountMoney      *Money  `json:"amount_money"`
	PaymentID        *string `json:"payment_id"`
	RedeemActivityID string  `json:"redeem_activity_id"`
	ReferenceID      *string `json:"reference_id"`
}
