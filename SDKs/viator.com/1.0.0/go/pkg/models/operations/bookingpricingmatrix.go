package operations

type BookingPricingmatrixHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type BookingPricingmatrixRequestBody struct {
	BookingDate   *string `json:"bookingDate,omitempty"`
	CurrencyCode  *string `json:"currencyCode,omitempty"`
	ProductCode   *string `json:"productCode,omitempty"`
	TourGradeCode *string `json:"tourGradeCode,omitempty"`
}

type BookingPricingmatrix200ApplicationJSONDataAgeBandPricesPrices struct {
	CurrencyCode                      *string  `json:"currencyCode,omitempty"`
	MerchantNetPrice                  *float64 `json:"merchantNetPrice,omitempty"`
	MerchantNetPriceFormatted         *string  `json:"merchantNetPriceFormatted,omitempty"`
	MinNoOfTravellersRequiredForPrice *int64   `json:"minNoOfTravellersRequiredForPrice,omitempty"`
	Price                             *float64 `json:"price,omitempty"`
	PriceFormatted                    *string  `json:"priceFormatted,omitempty"`
	SortOrder                         *string  `json:"sortOrder,omitempty"`
}

type BookingPricingmatrix200ApplicationJSONDataAgeBandPrices struct {
	BandID               *int64                                                          `json:"bandId,omitempty"`
	MaximumCountRequired *int64                                                          `json:"maximumCountRequired,omitempty"`
	MinimumCountRequired *int64                                                          `json:"minimumCountRequired,omitempty"`
	Prices               []BookingPricingmatrix200ApplicationJSONDataAgeBandPricesPrices `json:"prices,omitempty"`
	SortOrder            *int64                                                          `json:"sortOrder,omitempty"`
}

type BookingPricingmatrix200ApplicationJSONData struct {
	AgeBandPrices []BookingPricingmatrix200ApplicationJSONDataAgeBandPrices `json:"ageBandPrices,omitempty"`
	BookingDate   *string                                                   `json:"bookingDate,omitempty"`
	PricingUnit   *string                                                   `json:"pricingUnit,omitempty"`
	SortOrder     *int64                                                    `json:"sortOrder,omitempty"`
}

type BookingPricingmatrix200ApplicationJSON struct {
	Data             []BookingPricingmatrix200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                                      `json:"dateStamp,omitempty"`
	ErrorCodes       []string                                     `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                                `json:"errorMessage,omitempty"`
	ErrorMessageText *string                                      `json:"errorMessageText,omitempty"`
	ErrorName        *string                                      `json:"errorName,omitempty"`
	ErrorReference   *string                                      `json:"errorReference,omitempty"`
	ErrorType        *string                                      `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                       `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                       `json:"extraObject,omitempty"`
	Success          *bool                                        `json:"success,omitempty"`
	TotalCount       *int64                                       `json:"totalCount,omitempty"`
	Vmid             *string                                      `json:"vmid,omitempty"`
}

type BookingPricingmatrixRequest struct {
	Headers BookingPricingmatrixHeaders
	Request *BookingPricingmatrixRequestBody `request:"mediaType=application/json"`
}

type BookingPricingmatrixResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	BookingPricingmatrix200ApplicationJSONObject *BookingPricingmatrix200ApplicationJSON
}
