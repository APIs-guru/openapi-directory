package shared

type TerminalCheckout struct {
	AmountMoney      Money                 `json:"amount_money"`
	AppID            *string               `json:"app_id,omitempty"`
	CancelReason     *string               `json:"cancel_reason,omitempty"`
	CreatedAt        *string               `json:"created_at,omitempty"`
	DeadlineDuration *string               `json:"deadline_duration,omitempty"`
	DeviceOptions    DeviceCheckoutOptions `json:"device_options"`
	ID               *string               `json:"id,omitempty"`
	LocationID       *string               `json:"location_id,omitempty"`
	Note             *string               `json:"note,omitempty"`
	PaymentIds       []string              `json:"payment_ids,omitempty"`
	PaymentType      *string               `json:"payment_type,omitempty"`
	ReferenceID      *string               `json:"reference_id,omitempty"`
	Status           *string               `json:"status,omitempty"`
	UpdatedAt        *string               `json:"updated_at,omitempty"`
}
