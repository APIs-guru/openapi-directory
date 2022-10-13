package shared

type WebhooksResponse struct {
	Content []WebhookResponse `json:"content"`
	Links   []interface{}     `json:"links"`
	Page    *interface{}      `json:"page"`
}
