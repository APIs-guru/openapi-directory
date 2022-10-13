package shared

type CreateWebhookRequest struct {
	AuthorizationHeader *string        `json:"authorizationHeader"`
	Categories          []CategoryEnum `json:"categories"`
	Enabled             bool           `json:"enabled"`
	PayorID             string         `json:"payorId"`
	WebhookURL          string         `json:"webhookUrl"`
}
