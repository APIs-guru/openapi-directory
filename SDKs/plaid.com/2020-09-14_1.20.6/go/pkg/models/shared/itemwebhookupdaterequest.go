package shared

type ItemWebhookUpdateRequest struct {
	AccessToken string  `json:"access_token"`
	ClientID    *string `json:"client_id"`
	Secret      *string `json:"secret"`
	Webhook     string  `json:"webhook"`
}
