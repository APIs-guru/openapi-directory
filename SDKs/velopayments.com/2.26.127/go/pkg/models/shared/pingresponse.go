package shared

type PingResponse struct {
	ID        *string `json:"id,omitempty"`
	WebhookID *string `json:"webhookId,omitempty"`
}
