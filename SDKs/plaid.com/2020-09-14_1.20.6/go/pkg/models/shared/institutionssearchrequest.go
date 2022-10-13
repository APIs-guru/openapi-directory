package shared

type InstitutionsSearchRequest struct {
	ClientID     *string                           `json:"client_id"`
	CountryCodes []CountryCodeEnum                 `json:"country_codes"`
	Options      *InstitutionsSearchRequestOptions `json:"options"`
	Products     []ProductsEnum                    `json:"products"`
	Query        string                            `json:"query"`
	Secret       *string                           `json:"secret"`
}
