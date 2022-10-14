package shared

type PlanResourceIdentity struct {
	PrincipalID *string `json:"principalId,omitempty"`
	TenantID    *string `json:"tenantId,omitempty"`
	Type        *string `json:"type,omitempty"`
}
