package shared

type TerminalRefund struct {
	AmountMoney      Money   `json:"amount_money"`
	AppID            *string `json:"app_id"`
	CancelReason     *string `json:"cancel_reason"`
	CreatedAt        *string `json:"created_at"`
	DeadlineDuration *string `json:"deadline_duration"`
	DeviceID         *string `json:"device_id"`
	ID               *string `json:"id"`
	LocationID       *string `json:"location_id"`
	OrderID          *string `json:"order_id"`
	PaymentID        string  `json:"payment_id"`
	Reason           *string `json:"reason"`
	RefundID         *string `json:"refund_id"`
	Status           *string `json:"status"`
	UpdatedAt        *string `json:"updated_at"`
}
