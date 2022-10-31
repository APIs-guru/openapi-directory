package shared



type SandboxProcessorTokenCreateRequest struct {
    ClientID *string `json:"client_id,omitempty"`
    InstitutionID string `json:"institution_id"`
    Options *SandboxProcessorTokenCreateRequestOptions `json:"options,omitempty"`
    Secret *string `json:"secret,omitempty"`
    
}

