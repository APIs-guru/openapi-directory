package shared

type WebhookInfo struct {
	Enabled         *bool   `json:"enabled"`
	ExternalAddress *string `json:"externalAddress"`
	ID              *string `json:"id"`
	Name            *string `json:"name"`
	SubscriptionID  *string `json:"subscriptionId"`
	TeamID          *string `json:"teamId"`
}
