package shared

// SandboxPublicTokenCreateRequest
// SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create`
type SandboxPublicTokenCreateRequest struct {
	ClientID        *string                                 `json:"client_id,omitempty"`
	InitialProducts []ProductsEnum                          `json:"initial_products"`
	InstitutionID   string                                  `json:"institution_id"`
	Options         *SandboxPublicTokenCreateRequestOptions `json:"options,omitempty"`
	Secret          *string                                 `json:"secret,omitempty"`
}
