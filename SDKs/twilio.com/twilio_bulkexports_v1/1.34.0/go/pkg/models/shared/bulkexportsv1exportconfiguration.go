package shared

type BulkexportsV1ExportConfiguration struct {
	Enabled       *bool   `json:"enabled"`
	ResourceType  *string `json:"resource_type"`
	URL           *string `json:"url"`
	WebhookMethod *string `json:"webhook_method"`
	WebhookURL    *string `json:"webhook_url"`
}
