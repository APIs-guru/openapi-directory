package shared

type PricingV2TrunkingCountryInstanceOriginatingCallPrices struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
	NumberType   *string  `json:"number_type"`
}

type PricingV2TrunkingCountryInstanceTerminatingPrefixPrices struct {
	BasePrice           *float64 `json:"base_price"`
	CurrentPrice        *float64 `json:"current_price"`
	DestinationPrefixes []string `json:"destination_prefixes"`
	FriendlyName        *string  `json:"friendly_name"`
	OriginationPrefixes []string `json:"origination_prefixes"`
}

type PricingV2TrunkingCountryInstance struct {
	Country                 *string                                                   `json:"country"`
	IsoCountry              *string                                                   `json:"iso_country"`
	OriginatingCallPrices   []PricingV2TrunkingCountryInstanceOriginatingCallPrices   `json:"originating_call_prices"`
	PriceUnit               *string                                                   `json:"price_unit"`
	TerminatingPrefixPrices []PricingV2TrunkingCountryInstanceTerminatingPrefixPrices `json:"terminating_prefix_prices"`
	URL                     *string                                                   `json:"url"`
}
