package shared

type PricingV2TrunkingNumberOriginatingCallPrice struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
	NumberType   *string  `json:"number_type"`
}

type PricingV2TrunkingNumberTerminatingPrefixPrices struct {
	BasePrice           *float64 `json:"base_price"`
	CurrentPrice        *float64 `json:"current_price"`
	DestinationPrefixes []string `json:"destination_prefixes"`
	FriendlyName        *string  `json:"friendly_name"`
	OriginationPrefixes []string `json:"origination_prefixes"`
}

type PricingV2TrunkingNumber struct {
	Country                 *string                                          `json:"country"`
	DestinationNumber       *string                                          `json:"destination_number"`
	IsoCountry              *string                                          `json:"iso_country"`
	OriginatingCallPrice    *PricingV2TrunkingNumberOriginatingCallPrice     `json:"originating_call_price"`
	OriginationNumber       *string                                          `json:"origination_number"`
	PriceUnit               *string                                          `json:"price_unit"`
	TerminatingPrefixPrices []PricingV2TrunkingNumberTerminatingPrefixPrices `json:"terminating_prefix_prices"`
	URL                     *string                                          `json:"url"`
}
