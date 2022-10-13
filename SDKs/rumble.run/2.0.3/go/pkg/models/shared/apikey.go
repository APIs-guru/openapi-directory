package shared

type APIKey struct {
	ClientID       *string `json:"client_id"`
	Comment        *string `json:"comment"`
	Counter        *int64  `json:"counter"`
	CreatedAt      *int64  `json:"created_at"`
	CreatedBy      *string `json:"created_by"`
	ID             string  `json:"id"`
	Inactive       *bool   `json:"inactive"`
	LastUsedAt     *int64  `json:"last_used_at"`
	LastUsedIP     *string `json:"last_used_ip"`
	LastUsedUa     *string `json:"last_used_ua"`
	OrganizationID *string `json:"organization_id"`
	Token          *string `json:"token"`
	Type           *string `json:"type"`
	UsageLimit     *int64  `json:"usage_limit"`
	UsageToday     *int64  `json:"usage_today"`
}
