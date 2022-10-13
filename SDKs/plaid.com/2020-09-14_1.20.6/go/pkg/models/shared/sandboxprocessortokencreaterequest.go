package shared

type SandboxProcessorTokenCreateRequest struct {
	ClientID      *string                                    `json:"client_id"`
	InstitutionID string                                     `json:"institution_id"`
	Options       *SandboxProcessorTokenCreateRequestOptions `json:"options"`
	Secret        *string                                    `json:"secret"`
}
