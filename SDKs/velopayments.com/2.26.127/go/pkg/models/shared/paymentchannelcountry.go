package shared

type PaymentChannelCountry struct {
	IsoCountryCode string               `json:"isoCountryCode"`
	Rules          []PaymentChannelRule `json:"rules"`
}
