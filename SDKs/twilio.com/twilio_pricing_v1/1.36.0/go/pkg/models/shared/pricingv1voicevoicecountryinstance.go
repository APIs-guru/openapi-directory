package shared

type PricingV1VoiceVoiceCountryInstanceInboundCallPrices struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
	NumberType   *string  `json:"number_type"`
}

type PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
	FriendlyName *string  `json:"friendly_name"`
	Prefixes     []string `json:"prefixes"`
}

type PricingV1VoiceVoiceCountryInstance struct {
	Country              *string                                                  `json:"country"`
	InboundCallPrices    []PricingV1VoiceVoiceCountryInstanceInboundCallPrices    `json:"inbound_call_prices"`
	IsoCountry           *string                                                  `json:"iso_country"`
	OutboundPrefixPrices []PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices `json:"outbound_prefix_prices"`
	PriceUnit            *string                                                  `json:"price_unit"`
	URL                  *string                                                  `json:"url"`
}
