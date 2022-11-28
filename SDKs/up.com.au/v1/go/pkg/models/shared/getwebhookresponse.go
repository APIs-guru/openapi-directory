package shared

// GetWebhookResponse
// Successful response to get a single webhook.
type GetWebhookResponse struct {
	Data WebhookResource `json:"data"`
}
