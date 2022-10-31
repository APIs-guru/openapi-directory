package shared

type PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices struct {
	BasePrice    *float64 `json:"base_price,omitempty"`
	CurrentPrice *float64 `json:"current_price,omitempty"`
	NumberType   *string  `json:"number_type,omitempty"`
}

type PricingV1PhoneNumberPhoneNumberCountryInstance struct {
	Country           *string                                                           `json:"country,omitempty"`
	IsoCountry        *string                                                           `json:"iso_country,omitempty"`
	PhoneNumberPrices []PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices `json:"phone_number_prices,omitempty"`
	PriceUnit         *string                                                           `json:"price_unit,omitempty"`
	URL               *string                                                           `json:"url,omitempty"`
}
