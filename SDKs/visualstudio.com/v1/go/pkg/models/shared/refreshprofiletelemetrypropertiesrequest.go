package shared

type RefreshProfileTelemetryPropertiesRequest struct {
	Partner  *string `json:"partner,omitempty"`
	TenantID *string `json:"tenantId,omitempty"`
	UserIds  *string `json:"userIds,omitempty"`
}
