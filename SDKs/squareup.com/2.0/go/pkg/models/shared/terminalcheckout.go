package shared

type TerminalCheckout struct {
	AmountMoney      Money                 `json:"amount_money"`
	AppID            *string               `json:"app_id"`
	CancelReason     *string               `json:"cancel_reason"`
	CreatedAt        *string               `json:"created_at"`
	DeadlineDuration *string               `json:"deadline_duration"`
	DeviceOptions    DeviceCheckoutOptions `json:"device_options"`
	ID               *string               `json:"id"`
	LocationID       *string               `json:"location_id"`
	Note             *string               `json:"note"`
	PaymentIds       []string              `json:"payment_ids"`
	PaymentType      *string               `json:"payment_type"`
	ReferenceID      *string               `json:"reference_id"`
	Status           *string               `json:"status"`
	UpdatedAt        *string               `json:"updated_at"`
}
