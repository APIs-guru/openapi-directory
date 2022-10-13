package shared

type Country struct {
	CountryCode *string           `json:"countryCode"`
	Names       map[string]string `json:"names"`
}
