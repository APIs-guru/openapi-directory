package operations

type BookingAvailabilityTourgradesPricingmatrixHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type BookingAvailabilityTourgradesPricingmatrixRequestBody struct {
	CurrencyCode *string `json:"currencyCode,omitempty"`
	Month        *string `json:"month,omitempty"`
	ProductCode  *string `json:"productCode,omitempty"`
	Year         *string `json:"year,omitempty"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPricesPrices struct {
	CurrencyCode                      *string  `json:"currencyCode,omitempty"`
	MerchantNetPrice                  *float64 `json:"merchantNetPrice,omitempty"`
	MerchantNetPriceFormatted         *string  `json:"merchantNetPriceFormatted,omitempty"`
	MinNoOfTravellersRequiredForPrice *int64   `json:"minNoOfTravellersRequiredForPrice,omitempty"`
	Price                             *float64 `json:"price,omitempty"`
	PriceFormatted                    *string  `json:"priceFormatted,omitempty"`
	SortOrder                         *int64   `json:"sortOrder,omitempty"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPrices struct {
	BandID               *int64                                                                                                            `json:"bandId,omitempty"`
	MaximumCountRequired *int64                                                                                                            `json:"maximumCountRequired,omitempty"`
	MinimumCountRequired *int64                                                                                                            `json:"minimumCountRequired,omitempty"`
	Prices               []BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPricesPrices `json:"prices,omitempty"`
	SortOrder            *int64                                                                                                            `json:"sortOrder,omitempty"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrix struct {
	AgeBandPrices []BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPrices `json:"ageBandPrices,omitempty"`
	BookingDate   *string                                                                                                     `json:"bookingDate,omitempty"`
	PricingUnit   *string                                                                                                     `json:"pricingUnit,omitempty"`
	SortOrder     *int64                                                                                                      `json:"sortOrder,omitempty"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGrades struct {
	GradeCode     *string                                                                                        `json:"gradeCode,omitempty"`
	GradeTitle    *string                                                                                        `json:"gradeTitle,omitempty"`
	PricingMatrix []BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrix `json:"pricingMatrix,omitempty"`
	SortOrder     *int64                                                                                         `json:"sortOrder,omitempty"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDates struct {
	BookingDate                *string                                                                           `json:"bookingDate,omitempty"`
	CallForLastMinAvailability *bool                                                                             `json:"callForLastMinAvailability,omitempty"`
	SortOrder                  *int64                                                                            `json:"sortOrder,omitempty"`
	TourGrades                 []BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGrades `json:"tourGrades,omitempty"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONData struct {
	BookingMonth *string                                                                 `json:"bookingMonth,omitempty"`
	Dates        []BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDates `json:"dates,omitempty"`
	PricingUnit  *string                                                                 `json:"pricingUnit,omitempty"`
}

type BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON struct {
	Data             *BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                                                           `json:"dateStamp,omitempty"`
	ErrorCodes       []string                                                          `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                                                     `json:"errorMessage,omitempty"`
	ErrorMessageText *string                                                           `json:"errorMessageText,omitempty"`
	ErrorName        *string                                                           `json:"errorName,omitempty"`
	ErrorReference   *string                                                           `json:"errorReference,omitempty"`
	ErrorType        *string                                                           `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                                            `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                                            `json:"extraObject,omitempty"`
	Success          *bool                                                             `json:"success,omitempty"`
	TotalCount       *int64                                                            `json:"totalCount,omitempty"`
	Vmid             *string                                                           `json:"vmid,omitempty"`
}

type BookingAvailabilityTourgradesPricingmatrixRequest struct {
	Headers BookingAvailabilityTourgradesPricingmatrixHeaders
	Request *BookingAvailabilityTourgradesPricingmatrixRequestBody `request:"mediaType=application/json"`
}

type BookingAvailabilityTourgradesPricingmatrixResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONObject *BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON
}
