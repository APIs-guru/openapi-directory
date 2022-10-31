package shared

type WebhookResponse struct {
	AuthorizationHeader *string        `json:"authorizationHeader,omitempty"`
	Categories          []CategoryEnum `json:"categories,omitempty"`
	Enabled             *bool          `json:"enabled,omitempty"`
	ID                  *string        `json:"id,omitempty"`
	PayorID             *string        `json:"payorId,omitempty"`
	WebhookURL          *string        `json:"webhookUrl,omitempty"`
}
