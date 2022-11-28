package shared

// WebhookEventCallback
// Asynchronous callback request used for webhook event delivery.
type WebhookEventCallback struct {
	Data WebhookEventResource `json:"data"`
}
