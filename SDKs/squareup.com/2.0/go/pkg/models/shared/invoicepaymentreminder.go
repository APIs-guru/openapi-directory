package shared

type InvoicePaymentReminder struct {
	Message               *string `json:"message"`
	RelativeScheduledDays *int64  `json:"relative_scheduled_days"`
	SentAt                *string `json:"sent_at"`
	Status                *string `json:"status"`
	UID                   *string `json:"uid"`
}
