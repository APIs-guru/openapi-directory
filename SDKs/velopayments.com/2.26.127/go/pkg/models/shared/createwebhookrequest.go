package shared



type CreateWebhookRequest struct {
    AuthorizationHeader *string `json:"authorizationHeader,omitempty"`
    Categories []CategoryEnum `json:"categories,omitempty"`
    Enabled bool `json:"enabled"`
    PayorID string `json:"payorId"`
    WebhookURL string `json:"webhookUrl"`
    
}

