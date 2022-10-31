package shared

type WebhooksResponse struct {
	Content []WebhookResponse `json:"content,omitempty"`
	Links   []interface{}     `json:"links,omitempty"`
	Page    *interface{}      `json:"page,omitempty"`
}
