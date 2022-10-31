package shared



type WebhookResponse struct {
    Data *Webhook `json:"data,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

