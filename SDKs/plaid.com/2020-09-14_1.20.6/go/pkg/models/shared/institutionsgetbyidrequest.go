package shared

type InstitutionsGetByIDRequest struct {
	ClientID      *string                            `json:"client_id"`
	CountryCodes  []CountryCodeEnum                  `json:"country_codes"`
	InstitutionID string                             `json:"institution_id"`
	Options       *InstitutionsGetByIDRequestOptions `json:"options"`
	Secret        *string                            `json:"secret"`
}
