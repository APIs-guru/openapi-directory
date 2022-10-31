package shared



type PricingV1MessagingMessagingCountryInstanceInboundSmsPrices struct {
    BasePrice *float64 `json:"base_price,omitempty"`
    CurrentPrice *float64 `json:"current_price,omitempty"`
    NumberType *string `json:"number_type,omitempty"`
    
}

type PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices struct {
    BasePrice *float64 `json:"base_price,omitempty"`
    CurrentPrice *float64 `json:"current_price,omitempty"`
    NumberType *string `json:"number_type,omitempty"`
    
}

type PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices struct {
    Carrier *string `json:"carrier,omitempty"`
    Mcc *string `json:"mcc,omitempty"`
    Mnc *string `json:"mnc,omitempty"`
    Prices []PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices `json:"prices,omitempty"`
    
}

type PricingV1MessagingMessagingCountryInstance struct {
    Country *string `json:"country,omitempty"`
    InboundSmsPrices []PricingV1MessagingMessagingCountryInstanceInboundSmsPrices `json:"inbound_sms_prices,omitempty"`
    IsoCountry *string `json:"iso_country,omitempty"`
    OutboundSmsPrices []PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices `json:"outbound_sms_prices,omitempty"`
    PriceUnit *string `json:"price_unit,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

