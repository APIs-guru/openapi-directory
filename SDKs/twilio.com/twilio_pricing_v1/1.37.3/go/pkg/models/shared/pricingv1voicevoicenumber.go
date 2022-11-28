package shared

// PricingV1VoiceVoiceNumberInboundCallPrice
// The InboundCallPrice record
type PricingV1VoiceVoiceNumberInboundCallPrice struct {
	BasePrice    *float64 `json:"base_price,omitempty"`
	CurrentPrice *float64 `json:"current_price,omitempty"`
	NumberType   *string  `json:"number_type,omitempty"`
}

// PricingV1VoiceVoiceNumberOutboundCallPrice
// The OutboundCallPrice record
type PricingV1VoiceVoiceNumberOutboundCallPrice struct {
	BasePrice    *float64 `json:"base_price,omitempty"`
	CurrentPrice *float64 `json:"current_price,omitempty"`
}

type PricingV1VoiceVoiceNumber struct {
	Country           *string                                     `json:"country,omitempty"`
	InboundCallPrice  *PricingV1VoiceVoiceNumberInboundCallPrice  `json:"inbound_call_price,omitempty"`
	IsoCountry        *string                                     `json:"iso_country,omitempty"`
	Number            *string                                     `json:"number,omitempty"`
	OutboundCallPrice *PricingV1VoiceVoiceNumberOutboundCallPrice `json:"outbound_call_price,omitempty"`
	PriceUnit         *string                                     `json:"price_unit,omitempty"`
	URL               *string                                     `json:"url,omitempty"`
}
