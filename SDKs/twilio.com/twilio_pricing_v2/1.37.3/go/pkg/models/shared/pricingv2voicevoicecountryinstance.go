package shared

type PricingV2VoiceVoiceCountryInstanceInboundCallPrices struct {
	BasePrice    *float64 `json:"base_price,omitempty"`
	CurrentPrice *float64 `json:"current_price,omitempty"`
	NumberType   *string  `json:"number_type,omitempty"`
}

type PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices struct {
	BasePrice           *float64 `json:"base_price,omitempty"`
	CurrentPrice        *float64 `json:"current_price,omitempty"`
	DestinationPrefixes []string `json:"destination_prefixes,omitempty"`
	FriendlyName        *string  `json:"friendly_name,omitempty"`
	OriginationPrefixes []string `json:"origination_prefixes,omitempty"`
}

type PricingV2VoiceVoiceCountryInstance struct {
	Country              *string                                                  `json:"country,omitempty"`
	InboundCallPrices    []PricingV2VoiceVoiceCountryInstanceInboundCallPrices    `json:"inbound_call_prices,omitempty"`
	IsoCountry           *string                                                  `json:"iso_country,omitempty"`
	OutboundPrefixPrices []PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices `json:"outbound_prefix_prices,omitempty"`
	PriceUnit            *string                                                  `json:"price_unit,omitempty"`
	URL                  *string                                                  `json:"url,omitempty"`
}
