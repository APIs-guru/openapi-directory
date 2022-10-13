package operations

type BookingAvailabilityTourgradesHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingAvailabilityTourgradesRequestBodyAgeBands struct {
	BandID *int64 `json:"bandId"`
	Count  *int64 `json:"count"`
}

type BookingAvailabilityTourgradesRequestBody struct {
	AgeBands     []BookingAvailabilityTourgradesRequestBodyAgeBands `json:"ageBands"`
	BookingDate  *string                                            `json:"bookingDate"`
	CurrencyCode *string                                            `json:"currencyCode"`
	ProductCode  *string                                            `json:"productCode"`
}

type BookingAvailabilityTourgradesRequest struct {
	Headers BookingAvailabilityTourgradesHeaders
	Request *BookingAvailabilityTourgradesRequestBody `request:"mediaType=application/json"`
}

type BookingAvailabilityTourgrades200ApplicationJSONDataAgeBandsRequired struct {
	BandID               *int64 `json:"bandId"`
	MaximumCountRequired *int64 `json:"maximumCountRequired"`
	MinimumCountRequired *int64 `json:"minimumCountRequired"`
}

type BookingAvailabilityTourgrades200ApplicationJSONData struct {
	AgeBands                  []interface{}                                                           `json:"ageBands"`
	AgeBandsRequired          [][]BookingAvailabilityTourgrades200ApplicationJSONDataAgeBandsRequired `json:"ageBandsRequired"`
	Available                 *bool                                                                   `json:"available"`
	BookingDate               *string                                                                 `json:"bookingDate"`
	CurrencyCode              *string                                                                 `json:"currencyCode"`
	DefaultLanguageCode       *string                                                                 `json:"defaultLanguageCode"`
	GradeCode                 *string                                                                 `json:"gradeCode"`
	GradeDepartureTime        *string                                                                 `json:"gradeDepartureTime"`
	GradeDescription          *string                                                                 `json:"gradeDescription"`
	GradeTitle                *string                                                                 `json:"gradeTitle"`
	LangServices              map[string]interface{}                                                  `json:"langServices"`
	MerchantNetPrice          *float64                                                                `json:"merchantNetPrice"`
	MerchantNetPriceFormatted *string                                                                 `json:"merchantNetPriceFormatted"`
	RetailPrice               *float64                                                                `json:"retailPrice"`
	RetailPriceFormatted      *string                                                                 `json:"retailPriceFormatted"`
	SortOrder                 *int64                                                                  `json:"sortOrder"`
	UnavailableReason         *string                                                                 `json:"unavailableReason"`
}

type BookingAvailabilityTourgrades200ApplicationJSON struct {
	Data             []BookingAvailabilityTourgrades200ApplicationJSONData `json:"data"`
	DateStamp        *string                                               `json:"dateStamp"`
	ErrorCodes       []string                                              `json:"errorCodes"`
	ErrorMessage     []interface{}                                         `json:"errorMessage"`
	ErrorMessageText *string                                               `json:"errorMessageText"`
	ErrorName        *string                                               `json:"errorName"`
	ErrorReference   *string                                               `json:"errorReference"`
	ErrorType        *string                                               `json:"errorType"`
	ExtraInfo        map[string]interface{}                                `json:"extraInfo"`
	ExtraObject      map[string]interface{}                                `json:"extraObject"`
	Success          *bool                                                 `json:"success"`
	TotalCount       *int64                                                `json:"totalCount"`
	Vmid             *string                                               `json:"vmid"`
}

type BookingAvailabilityTourgradesResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	BookingAvailabilityTourgrades200ApplicationJSONObject *BookingAvailabilityTourgrades200ApplicationJSON
}
