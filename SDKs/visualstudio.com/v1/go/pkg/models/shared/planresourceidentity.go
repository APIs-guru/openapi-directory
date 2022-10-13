package shared

type PlanResourceIdentity struct {
	PrincipalID *string `json:"principalId"`
	TenantID    *string `json:"tenantId"`
	Type        *string `json:"type"`
}
