package shared

type GiftCardActivityRefund struct {
	AmountMoney      *Money  `json:"amount_money,omitempty"`
	PaymentID        *string `json:"payment_id,omitempty"`
	RedeemActivityID string  `json:"redeem_activity_id"`
	ReferenceID      *string `json:"reference_id,omitempty"`
}
