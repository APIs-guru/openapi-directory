package shared

type UpdateWebhookRequest struct {
	AuthorizationHeader *string        `json:"authorizationHeader"`
	Categories          []CategoryEnum `json:"categories"`
	Enabled             *bool          `json:"enabled"`
	WebhookURL          *string        `json:"webhookUrl"`
}
