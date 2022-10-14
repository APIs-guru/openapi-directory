package shared

type SupportedCountryV2 struct {
	Currencies     []string   `json:"currencies,omitempty"`
	IsoCountryCode *string    `json:"isoCountryCode,omitempty"`
	Regions        []RegionV2 `json:"regions,omitempty"`
}
