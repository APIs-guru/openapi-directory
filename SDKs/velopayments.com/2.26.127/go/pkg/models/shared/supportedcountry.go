package shared

type SupportedCountry struct {
	Currencies     []string `json:"currencies"`
	IsoCountryCode *string  `json:"isoCountryCode"`
}
