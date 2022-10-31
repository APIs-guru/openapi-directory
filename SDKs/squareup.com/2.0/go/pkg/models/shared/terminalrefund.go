package shared



type TerminalRefund struct {
    AmountMoney Money `json:"amount_money"`
    AppID *string `json:"app_id,omitempty"`
    CancelReason *string `json:"cancel_reason,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    DeadlineDuration *string `json:"deadline_duration,omitempty"`
    DeviceID *string `json:"device_id,omitempty"`
    ID *string `json:"id,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    OrderID *string `json:"order_id,omitempty"`
    PaymentID string `json:"payment_id"`
    Reason *string `json:"reason,omitempty"`
    RefundID *string `json:"refund_id,omitempty"`
    Status *string `json:"status,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

