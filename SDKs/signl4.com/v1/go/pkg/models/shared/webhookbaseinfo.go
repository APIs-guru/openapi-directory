package shared

type WebhookBaseInfo struct {
	ExternalAddress *string `json:"externalAddress"`
	Name            *string `json:"name"`
	TeamID          *string `json:"teamId"`
}
