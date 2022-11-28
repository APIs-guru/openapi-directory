package shared

// PricingV2TrunkingNumberOriginatingCallPrice
// The OriginatingCallPrice record
type PricingV2TrunkingNumberOriginatingCallPrice struct {
	BasePrice    *float64 `json:"base_price,omitempty"`
	CurrentPrice *float64 `json:"current_price,omitempty"`
	NumberType   *string  `json:"number_type,omitempty"`
}

type PricingV2TrunkingNumberTerminatingPrefixPrices struct {
	BasePrice           *float64 `json:"base_price,omitempty"`
	CurrentPrice        *float64 `json:"current_price,omitempty"`
	DestinationPrefixes []string `json:"destination_prefixes,omitempty"`
	FriendlyName        *string  `json:"friendly_name,omitempty"`
	OriginationPrefixes []string `json:"origination_prefixes,omitempty"`
}

type PricingV2TrunkingNumber struct {
	Country                 *string                                          `json:"country,omitempty"`
	DestinationNumber       *string                                          `json:"destination_number,omitempty"`
	IsoCountry              *string                                          `json:"iso_country,omitempty"`
	OriginatingCallPrice    *PricingV2TrunkingNumberOriginatingCallPrice     `json:"originating_call_price,omitempty"`
	OriginationNumber       *string                                          `json:"origination_number,omitempty"`
	PriceUnit               *string                                          `json:"price_unit,omitempty"`
	TerminatingPrefixPrices []PricingV2TrunkingNumberTerminatingPrefixPrices `json:"terminating_prefix_prices,omitempty"`
	URL                     *string                                          `json:"url,omitempty"`
}
