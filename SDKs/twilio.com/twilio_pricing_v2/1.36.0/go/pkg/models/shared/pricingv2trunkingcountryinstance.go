package shared

type PricingV2TrunkingCountryInstanceOriginatingCallPrices struct {
	BasePrice    *float64 `json:"base_price,omitempty"`
	CurrentPrice *float64 `json:"current_price,omitempty"`
	NumberType   *string  `json:"number_type,omitempty"`
}

type PricingV2TrunkingCountryInstanceTerminatingPrefixPrices struct {
	BasePrice           *float64 `json:"base_price,omitempty"`
	CurrentPrice        *float64 `json:"current_price,omitempty"`
	DestinationPrefixes []string `json:"destination_prefixes,omitempty"`
	FriendlyName        *string  `json:"friendly_name,omitempty"`
	OriginationPrefixes []string `json:"origination_prefixes,omitempty"`
}

type PricingV2TrunkingCountryInstance struct {
	Country                 *string                                                   `json:"country,omitempty"`
	IsoCountry              *string                                                   `json:"iso_country,omitempty"`
	OriginatingCallPrices   []PricingV2TrunkingCountryInstanceOriginatingCallPrices   `json:"originating_call_prices,omitempty"`
	PriceUnit               *string                                                   `json:"price_unit,omitempty"`
	TerminatingPrefixPrices []PricingV2TrunkingCountryInstanceTerminatingPrefixPrices `json:"terminating_prefix_prices,omitempty"`
	URL                     *string                                                   `json:"url,omitempty"`
}
