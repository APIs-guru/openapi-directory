package shared

type SupportedCountryV2 struct {
	Currencies     []string   `json:"currencies"`
	IsoCountryCode *string    `json:"isoCountryCode"`
	Regions        []RegionV2 `json:"regions"`
}
