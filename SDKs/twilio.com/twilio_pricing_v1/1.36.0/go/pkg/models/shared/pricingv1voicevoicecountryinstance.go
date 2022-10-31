package shared



type PricingV1VoiceVoiceCountryInstanceInboundCallPrices struct {
    BasePrice *float64 `json:"base_price,omitempty"`
    CurrentPrice *float64 `json:"current_price,omitempty"`
    NumberType *string `json:"number_type,omitempty"`
    
}

type PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices struct {
    BasePrice *float64 `json:"base_price,omitempty"`
    CurrentPrice *float64 `json:"current_price,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Prefixes []string `json:"prefixes,omitempty"`
    
}

type PricingV1VoiceVoiceCountryInstance struct {
    Country *string `json:"country,omitempty"`
    InboundCallPrices []PricingV1VoiceVoiceCountryInstanceInboundCallPrices `json:"inbound_call_prices,omitempty"`
    IsoCountry *string `json:"iso_country,omitempty"`
    OutboundPrefixPrices []PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices `json:"outbound_prefix_prices,omitempty"`
    PriceUnit *string `json:"price_unit,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

