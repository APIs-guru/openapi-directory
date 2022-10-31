package shared



type SandboxPublicTokenCreateRequest struct {
    ClientID *string `json:"client_id,omitempty"`
    InitialProducts []ProductsEnum `json:"initial_products"`
    InstitutionID string `json:"institution_id"`
    Options *SandboxPublicTokenCreateRequestOptions `json:"options,omitempty"`
    Secret *string `json:"secret,omitempty"`
    
}

