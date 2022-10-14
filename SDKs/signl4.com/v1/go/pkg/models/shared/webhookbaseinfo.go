package shared

type WebhookBaseInfo struct {
	ExternalAddress *string `json:"externalAddress,omitempty"`
	Name            *string `json:"name,omitempty"`
	TeamID          *string `json:"teamId,omitempty"`
}
