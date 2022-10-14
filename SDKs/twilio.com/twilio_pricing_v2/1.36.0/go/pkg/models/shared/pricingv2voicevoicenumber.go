package shared

type PricingV2VoiceVoiceNumberInboundCallPrice struct {
	BasePrice    *float64 `json:"base_price,omitempty"`
	CurrentPrice *float64 `json:"current_price,omitempty"`
	NumberType   *string  `json:"number_type,omitempty"`
}

type PricingV2VoiceVoiceNumberOutboundCallPrices struct {
	BasePrice           *float64 `json:"base_price,omitempty"`
	CurrentPrice        *float64 `json:"current_price,omitempty"`
	OriginationPrefixes []string `json:"origination_prefixes,omitempty"`
}

type PricingV2VoiceVoiceNumber struct {
	Country            *string                                       `json:"country,omitempty"`
	DestinationNumber  *string                                       `json:"destination_number,omitempty"`
	InboundCallPrice   *PricingV2VoiceVoiceNumberInboundCallPrice    `json:"inbound_call_price,omitempty"`
	IsoCountry         *string                                       `json:"iso_country,omitempty"`
	OriginationNumber  *string                                       `json:"origination_number,omitempty"`
	OutboundCallPrices []PricingV2VoiceVoiceNumberOutboundCallPrices `json:"outbound_call_prices,omitempty"`
	PriceUnit          *string                                       `json:"price_unit,omitempty"`
	URL                *string                                       `json:"url,omitempty"`
}
