package operations

type BookingPricingmatrixHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingPricingmatrixRequestBody struct {
	BookingDate   *string `json:"bookingDate"`
	CurrencyCode  *string `json:"currencyCode"`
	ProductCode   *string `json:"productCode"`
	TourGradeCode *string `json:"tourGradeCode"`
}

type BookingPricingmatrixRequest struct {
	Headers BookingPricingmatrixHeaders
	Request *BookingPricingmatrixRequestBody `request:"mediaType=application/json"`
}

type BookingPricingmatrix200ApplicationJSONDataAgeBandPricesPrices struct {
	CurrencyCode                      *string  `json:"currencyCode"`
	MerchantNetPrice                  *float64 `json:"merchantNetPrice"`
	MerchantNetPriceFormatted         *string  `json:"merchantNetPriceFormatted"`
	MinNoOfTravellersRequiredForPrice *int64   `json:"minNoOfTravellersRequiredForPrice"`
	Price                             *float64 `json:"price"`
	PriceFormatted                    *string  `json:"priceFormatted"`
	SortOrder                         *string  `json:"sortOrder"`
}

type BookingPricingmatrix200ApplicationJSONDataAgeBandPrices struct {
	BandID               *int64                                                          `json:"bandId"`
	MaximumCountRequired *int64                                                          `json:"maximumCountRequired"`
	MinimumCountRequired *int64                                                          `json:"minimumCountRequired"`
	Prices               []BookingPricingmatrix200ApplicationJSONDataAgeBandPricesPrices `json:"prices"`
	SortOrder            *int64                                                          `json:"sortOrder"`
}

type BookingPricingmatrix200ApplicationJSONData struct {
	AgeBandPrices []BookingPricingmatrix200ApplicationJSONDataAgeBandPrices `json:"ageBandPrices"`
	BookingDate   *string                                                   `json:"bookingDate"`
	PricingUnit   *string                                                   `json:"pricingUnit"`
	SortOrder     *int64                                                    `json:"sortOrder"`
}

type BookingPricingmatrix200ApplicationJSON struct {
	Data             []BookingPricingmatrix200ApplicationJSONData `json:"data"`
	DateStamp        *string                                      `json:"dateStamp"`
	ErrorCodes       []string                                     `json:"errorCodes"`
	ErrorMessage     []interface{}                                `json:"errorMessage"`
	ErrorMessageText *string                                      `json:"errorMessageText"`
	ErrorName        *string                                      `json:"errorName"`
	ErrorReference   *string                                      `json:"errorReference"`
	ErrorType        *string                                      `json:"errorType"`
	ExtraInfo        map[string]interface{}                       `json:"extraInfo"`
	ExtraObject      map[string]interface{}                       `json:"extraObject"`
	Success          *bool                                        `json:"success"`
	TotalCount       *int64                                       `json:"totalCount"`
	Vmid             *string                                      `json:"vmid"`
}

type BookingPricingmatrixResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	BookingPricingmatrix200ApplicationJSONObject *BookingPricingmatrix200ApplicationJSON
}
