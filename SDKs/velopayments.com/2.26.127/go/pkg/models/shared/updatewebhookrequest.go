package shared

type UpdateWebhookRequest struct {
	AuthorizationHeader *string        `json:"authorizationHeader,omitempty"`
	Categories          []CategoryEnum `json:"categories,omitempty"`
	Enabled             *bool          `json:"enabled,omitempty"`
	WebhookURL          *string        `json:"webhookUrl,omitempty"`
}
