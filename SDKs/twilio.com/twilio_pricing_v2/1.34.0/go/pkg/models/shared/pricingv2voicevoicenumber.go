package shared

type PricingV2VoiceVoiceNumberInboundCallPrice struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
	NumberType   *string  `json:"number_type"`
}

type PricingV2VoiceVoiceNumberOutboundCallPrices struct {
	BasePrice           *float64 `json:"base_price"`
	CurrentPrice        *float64 `json:"current_price"`
	OriginationPrefixes []string `json:"origination_prefixes"`
}

type PricingV2VoiceVoiceNumber struct {
	Country            *string                                       `json:"country"`
	DestinationNumber  *string                                       `json:"destination_number"`
	InboundCallPrice   *PricingV2VoiceVoiceNumberInboundCallPrice    `json:"inbound_call_price"`
	IsoCountry         *string                                       `json:"iso_country"`
	OriginationNumber  *string                                       `json:"origination_number"`
	OutboundCallPrices []PricingV2VoiceVoiceNumberOutboundCallPrices `json:"outbound_call_prices"`
	PriceUnit          *string                                       `json:"price_unit"`
	URL                *string                                       `json:"url"`
}
