package operations

type BookingAvailabilityHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingAvailabilityRequestBodyAgeBands struct {
	BandID *int64 `json:"bandId"`
	Count  *int64 `json:"count"`
}

type BookingAvailabilityRequestBody struct {
	AgeBands     []BookingAvailabilityRequestBodyAgeBands `json:"ageBands"`
	CurrencyCode *string                                  `json:"currencyCode"`
	Month        *string                                  `json:"month"`
	ProductCode  *string                                  `json:"productCode"`
	Year         *string                                  `json:"year"`
}

type BookingAvailabilityRequest struct {
	Headers BookingAvailabilityHeaders
	Request *BookingAvailabilityRequestBody `request:"mediaType=application/json"`
}

type BookingAvailability200ApplicationJSONDataAvailability struct {
	Available                 *bool    `json:"available"`
	BookingDate               *string  `json:"bookingDate"`
	CurrencyCode              *string  `json:"currencyCode"`
	GradeCode                 *string  `json:"gradeCode"`
	MerchantNetPrice          *float64 `json:"merchantNetPrice"`
	MerchantNetPriceFormatted *string  `json:"merchantNetPriceFormatted"`
	RetailPrice               *float64 `json:"retailPrice"`
	RetailPriceFormatted      *string  `json:"retailPriceFormatted"`
	SortOrder                 *int64   `json:"sortOrder"`
	UnavailableReason         *string  `json:"unavailableReason"`
}

type BookingAvailability200ApplicationJSONData struct {
	Availability       []BookingAvailability200ApplicationJSONDataAvailability `json:"availability"`
	FirstAvailableDate *string                                                 `json:"firstAvailableDate"`
	LastAvailableDate  *string                                                 `json:"lastAvailableDate"`
	ProductCode        *string                                                 `json:"productCode"`
}

type BookingAvailability200ApplicationJSON struct {
	Data             *BookingAvailability200ApplicationJSONData `json:"data"`
	DateStamp        *string                                    `json:"dateStamp"`
	ErrorCodes       []string                                   `json:"errorCodes"`
	ErrorMessage     []interface{}                              `json:"errorMessage"`
	ErrorMessageText *string                                    `json:"errorMessageText"`
	ErrorName        *string                                    `json:"errorName"`
	ErrorReference   *string                                    `json:"errorReference"`
	ErrorType        *string                                    `json:"errorType"`
	ExtraInfo        map[string]interface{}                     `json:"extraInfo"`
	ExtraObject      map[string]interface{}                     `json:"extraObject"`
	Success          *bool                                      `json:"success"`
	TotalCount       *int64                                     `json:"totalCount"`
	Vmid             *string                                    `json:"vmid"`
}

type BookingAvailabilityResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	BookingAvailability200ApplicationJSONObject *BookingAvailability200ApplicationJSON
}
