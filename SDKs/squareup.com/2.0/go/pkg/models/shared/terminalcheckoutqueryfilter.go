package shared

type TerminalCheckoutQueryFilter struct {
	CreatedAt *TimeRange `json:"created_at"`
	DeviceID  *string    `json:"device_id"`
	Status    *string    `json:"status"`
}
