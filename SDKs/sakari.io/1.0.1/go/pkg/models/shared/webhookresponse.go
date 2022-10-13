package shared

type WebhookResponse struct {
	Data    *Webhook `json:"data"`
	Success *bool    `json:"success"`
}
