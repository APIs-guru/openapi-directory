package shared

type PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices struct {
	BasePrice    *float64 `json:"base_price"`
	CurrentPrice *float64 `json:"current_price"`
	NumberType   *string  `json:"number_type"`
}

type PricingV1PhoneNumberPhoneNumberCountryInstance struct {
	Country           *string                                                           `json:"country"`
	IsoCountry        *string                                                           `json:"iso_country"`
	PhoneNumberPrices []PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices `json:"phone_number_prices"`
	PriceUnit         *string                                                           `json:"price_unit"`
	URL               *string                                                           `json:"url"`
}
