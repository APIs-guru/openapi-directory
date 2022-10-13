package operations

type BookingAvailabilityTourgradesPricingmatrixHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingAvailabilityTourgradesPricingmatrixRequestBody struct {
	CurrencyCode *string `json:"currencyCode"`
	Month        *string `json:"month"`
	ProductCode  *string `json:"productCode"`
	Year         *string `json:"year"`
}

type BookingAvailabilityTourgradesPricingmatrixRequest struct {
	Headers BookingAvailabilityTourgradesPricingmatrixHeaders
	Request *BookingAvailabilityTourgradesPricingmatrixRequestBody `request:"mediaType=application/json"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPricesPrices struct {
	CurrencyCode                      *string  `json:"currencyCode"`
	MerchantNetPrice                  *float64 `json:"merchantNetPrice"`
	MerchantNetPriceFormatted         *string  `json:"merchantNetPriceFormatted"`
	MinNoOfTravellersRequiredForPrice *int64   `json:"minNoOfTravellersRequiredForPrice"`
	Price                             *float64 `json:"price"`
	PriceFormatted                    *string  `json:"priceFormatted"`
	SortOrder                         *int64   `json:"sortOrder"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPrices struct {
	BandID               *int64                                                                                                            `json:"bandId"`
	MaximumCountRequired *int64                                                                                                            `json:"maximumCountRequired"`
	MinimumCountRequired *int64                                                                                                            `json:"minimumCountRequired"`
	Prices               []BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPricesPrices `json:"prices"`
	SortOrder            *int64                                                                                                            `json:"sortOrder"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrix struct {
	AgeBandPrices []BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPrices `json:"ageBandPrices"`
	BookingDate   *string                                                                                                     `json:"bookingDate"`
	PricingUnit   *string                                                                                                     `json:"pricingUnit"`
	SortOrder     *int64                                                                                                      `json:"sortOrder"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGrades struct {
	GradeCode     *string                                                                                        `json:"gradeCode"`
	GradeTitle    *string                                                                                        `json:"gradeTitle"`
	PricingMatrix []BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrix `json:"pricingMatrix"`
	SortOrder     *int64                                                                                         `json:"sortOrder"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDates struct {
	BookingDate                *string                                                                           `json:"bookingDate"`
	CallForLastMinAvailability *bool                                                                             `json:"callForLastMinAvailability"`
	SortOrder                  *int64                                                                            `json:"sortOrder"`
	TourGrades                 []BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGrades `json:"tourGrades"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONData struct {
	BookingMonth *string                                                                 `json:"bookingMonth"`
	Dates        []BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDates `json:"dates"`
	PricingUnit  *string                                                                 `json:"pricingUnit"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON struct {
	Data             *BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONData `json:"data"`
	DateStamp        *string                                                           `json:"dateStamp"`
	ErrorCodes       []string                                                          `json:"errorCodes"`
	ErrorMessage     []interface{}                                                     `json:"errorMessage"`
	ErrorMessageText *string                                                           `json:"errorMessageText"`
	ErrorName        *string                                                           `json:"errorName"`
	ErrorReference   *string                                                           `json:"errorReference"`
	ErrorType        *string                                                           `json:"errorType"`
	ExtraInfo        map[string]interface{}                                            `json:"extraInfo"`
	ExtraObject      map[string]interface{}                                            `json:"extraObject"`
	Success          *bool                                                             `json:"success"`
	TotalCount       *int64                                                            `json:"totalCount"`
	Vmid             *string                                                           `json:"vmid"`
}

type BookingAvailabilityTourgradesPricingmatrixResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONObject *BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON
}
