package shared



type BulkexportsV1ExportConfiguration struct {
    Enabled *bool `json:"enabled,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    URL *string `json:"url,omitempty"`
    WebhookMethod *string `json:"webhook_method,omitempty"`
    WebhookURL *string `json:"webhook_url,omitempty"`
    
}

