package shared

type PricingV1VoiceVoiceNumberInboundCallPrice struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
	NumberType   *string  `json:"number_type"`
}

type PricingV1VoiceVoiceNumberOutboundCallPrice struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
}

type PricingV1VoiceVoiceNumber struct {
	Country           *string                                     `json:"country"`
	InboundCallPrice  *PricingV1VoiceVoiceNumberInboundCallPrice  `json:"inbound_call_price"`
	IsoCountry        *string                                     `json:"iso_country"`
	Number            *string                                     `json:"number"`
	OutboundCallPrice *PricingV1VoiceVoiceNumberOutboundCallPrice `json:"outbound_call_price"`
	PriceUnit         *string                                     `json:"price_unit"`
	URL               *string                                     `json:"url"`
}
