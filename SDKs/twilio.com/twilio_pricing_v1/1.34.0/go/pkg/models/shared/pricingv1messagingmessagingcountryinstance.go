package shared

type PricingV1MessagingMessagingCountryInstanceInboundSmsPrices struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
	NumberType   *string  `json:"number_type"`
}

type PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
	NumberType   *string  `json:"number_type"`
}

type PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices struct {
	Carrier *string                                                             `json:"carrier"`
	Mcc     *string                                                             `json:"mcc"`
	Mnc     *string                                                             `json:"mnc"`
	Prices  []PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices `json:"prices"`
}

type PricingV1MessagingMessagingCountryInstance struct {
	Country           *string                                                       `json:"country"`
	InboundSmsPrices  []PricingV1MessagingMessagingCountryInstanceInboundSmsPrices  `json:"inbound_sms_prices"`
	IsoCountry        *string                                                       `json:"iso_country"`
	OutboundSmsPrices []PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices `json:"outbound_sms_prices"`
	PriceUnit         *string                                                       `json:"price_unit"`
	URL               *string                                                       `json:"url"`
}
