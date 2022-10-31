package shared



type InvoicePaymentReminder struct {
    Message *string `json:"message,omitempty"`
    RelativeScheduledDays *int64 `json:"relative_scheduled_days,omitempty"`
    SentAt *string `json:"sent_at,omitempty"`
    Status *string `json:"status,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

