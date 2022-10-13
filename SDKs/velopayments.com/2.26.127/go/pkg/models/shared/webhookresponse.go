package shared

type WebhookResponse struct {
	AuthorizationHeader *string        `json:"authorizationHeader"`
	Categories          []CategoryEnum `json:"categories"`
	Enabled             *bool          `json:"enabled"`
	ID                  *string        `json:"id"`
	PayorID             *string        `json:"payorId"`
	WebhookURL          *string        `json:"webhookUrl"`
}
