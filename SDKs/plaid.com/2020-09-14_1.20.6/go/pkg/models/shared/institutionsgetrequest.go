package shared

type InstitutionsGetRequest struct {
	ClientID     *string                        `json:"client_id"`
	Count        int64                          `json:"count"`
	CountryCodes []CountryCodeEnum              `json:"country_codes"`
	Offset       int64                          `json:"offset"`
	Options      *InstitutionsGetRequestOptions `json:"options"`
	Secret       *string                        `json:"secret"`
}
