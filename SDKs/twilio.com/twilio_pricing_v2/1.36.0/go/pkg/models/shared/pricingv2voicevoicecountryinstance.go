package shared

type PricingV2VoiceVoiceCountryInstanceInboundCallPrices struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
	NumberType   *string  `json:"number_type"`
}

type PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices struct {
	BasePrice           *float64 `json:"base_price"`
	CurrentPrice        *float64 `json:"current_price"`
	DestinationPrefixes []string `json:"destination_prefixes"`
	FriendlyName        *string  `json:"friendly_name"`
	OriginationPrefixes []string `json:"origination_prefixes"`
}

type PricingV2VoiceVoiceCountryInstance struct {
	Country              *string                                                  `json:"country"`
	InboundCallPrices    []PricingV2VoiceVoiceCountryInstanceInboundCallPrices    `json:"inbound_call_prices"`
	IsoCountry           *string                                                  `json:"iso_country"`
	OutboundPrefixPrices []PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices `json:"outbound_prefix_prices"`
	PriceUnit            *string                                                  `json:"price_unit"`
	URL                  *string                                                  `json:"url"`
}
