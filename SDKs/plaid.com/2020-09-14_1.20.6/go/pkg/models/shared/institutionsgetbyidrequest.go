package shared

// InstitutionsGetByIDRequest
// InstitutionsGetByIdRequest defines the request schema for `/institutions/get_by_id`
type InstitutionsGetByIDRequest struct {
	ClientID      *string                            `json:"client_id,omitempty"`
	CountryCodes  []CountryCodeEnum                  `json:"country_codes"`
	InstitutionID string                             `json:"institution_id"`
	Options       *InstitutionsGetByIDRequestOptions `json:"options,omitempty"`
	Secret        *string                            `json:"secret,omitempty"`
}
