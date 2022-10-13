package shared

type RefreshProfileTelemetryPropertiesRequest struct {
	Partner  *string `json:"partner"`
	TenantID *string `json:"tenantId"`
	UserIds  *string `json:"userIds"`
}
