package shared

type InstitutionsSearchRequest struct {
	ClientID     *string                           `json:"client_id,omitempty"`
	CountryCodes []CountryCodeEnum                 `json:"country_codes"`
	Options      *InstitutionsSearchRequestOptions `json:"options,omitempty"`
	Products     []ProductsEnum                    `json:"products"`
	Query        string                            `json:"query"`
	Secret       *string                           `json:"secret,omitempty"`
}
