package shared



type PlanResourceHeaders struct {
    ClientTenantID *string `header:"name=clientTenantId"`
    HomeTenantID *string `header:"name=homeTenantId"`
    IdentityPrincipalID *string `header:"name=identityPrincipalId"`
    IdentityURL *string `header:"name=identityUrl"`
    
}

