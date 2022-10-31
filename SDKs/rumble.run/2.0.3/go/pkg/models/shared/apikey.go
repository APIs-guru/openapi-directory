package shared

type APIKey struct {
	ClientID       *string `json:"client_id,omitempty"`
	Comment        *string `json:"comment,omitempty"`
	Counter        *int64  `json:"counter,omitempty"`
	CreatedAt      *int64  `json:"created_at,omitempty"`
	CreatedBy      *string `json:"created_by,omitempty"`
	ID             string  `json:"id"`
	Inactive       *bool   `json:"inactive,omitempty"`
	LastUsedAt     *int64  `json:"last_used_at,omitempty"`
	LastUsedIP     *string `json:"last_used_ip,omitempty"`
	LastUsedUa     *string `json:"last_used_ua,omitempty"`
	OrganizationID *string `json:"organization_id,omitempty"`
	Token          *string `json:"token,omitempty"`
	Type           *string `json:"type,omitempty"`
	UsageLimit     *int64  `json:"usage_limit,omitempty"`
	UsageToday     *int64  `json:"usage_today,omitempty"`
}
