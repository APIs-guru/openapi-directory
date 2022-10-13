package shared

type SandboxPublicTokenCreateRequest struct {
	ClientID        *string                                 `json:"client_id"`
	InitialProducts []ProductsEnum                          `json:"initial_products"`
	InstitutionID   string                                  `json:"institution_id"`
	Options         *SandboxPublicTokenCreateRequestOptions `json:"options"`
	Secret          *string                                 `json:"secret"`
}
