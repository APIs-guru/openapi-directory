package shared



type TerminalCheckoutQueryFilter struct {
    CreatedAt *TimeRange `json:"created_at,omitempty"`
    DeviceID *string `json:"device_id,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

