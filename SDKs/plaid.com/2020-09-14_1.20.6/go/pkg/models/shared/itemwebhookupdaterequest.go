package shared

// ItemWebhookUpdateRequest
// ItemWebhookUpdateRequest defines the request schema for `/item/webhook/update`
type ItemWebhookUpdateRequest struct {
	AccessToken string  `json:"access_token"`
	ClientID    *string `json:"client_id,omitempty"`
	Secret      *string `json:"secret,omitempty"`
	Webhook     string  `json:"webhook"`
}
