package shared

type PaymentRefund struct {
	AmountMoney   Money           `json:"amount_money"`
	AppFeeMoney   *Money          `json:"app_fee_money"`
	CreatedAt     *string         `json:"created_at"`
	ID            string          `json:"id"`
	LocationID    *string         `json:"location_id"`
	OrderID       *string         `json:"order_id"`
	PaymentID     *string         `json:"payment_id"`
	ProcessingFee []ProcessingFee `json:"processing_fee"`
	Reason        *string         `json:"reason"`
	Status        *string         `json:"status"`
	UpdatedAt     *string         `json:"updated_at"`
}
