package shared



type WebhookInfo struct {
    Enabled *bool `json:"enabled,omitempty"`
    ExternalAddress *string `json:"externalAddress,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    SubscriptionID *string `json:"subscriptionId,omitempty"`
    TeamID *string `json:"teamId,omitempty"`
    
}

