package operations

type BookingAvailabilityHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type BookingAvailabilityRequestBodyAgeBands struct {
	BandID *int64 `json:"bandId,omitempty"`
	Count  *int64 `json:"count,omitempty"`
}

type BookingAvailabilityRequestBody struct {
	AgeBands     []BookingAvailabilityRequestBodyAgeBands `json:"ageBands,omitempty"`
	CurrencyCode *string                                  `json:"currencyCode,omitempty"`
	Month        *string                                  `json:"month,omitempty"`
	ProductCode  *string                                  `json:"productCode,omitempty"`
	Year         *string                                  `json:"year,omitempty"`
}

type BookingAvailabilityRequest struct {
	Headers BookingAvailabilityHeaders
	Request *BookingAvailabilityRequestBody `request:"mediaType=application/json"`
}

type BookingAvailability200ApplicationJSONDataAvailability struct {
	Available                 *bool    `json:"available,omitempty"`
	BookingDate               *string  `json:"bookingDate,omitempty"`
	CurrencyCode              *string  `json:"currencyCode,omitempty"`
	GradeCode                 *string  `json:"gradeCode,omitempty"`
	MerchantNetPrice          *float64 `json:"merchantNetPrice,omitempty"`
	MerchantNetPriceFormatted *string  `json:"merchantNetPriceFormatted,omitempty"`
	RetailPrice               *float64 `json:"retailPrice,omitempty"`
	RetailPriceFormatted      *string  `json:"retailPriceFormatted,omitempty"`
	SortOrder                 *int64   `json:"sortOrder,omitempty"`
	UnavailableReason         *string  `json:"unavailableReason,omitempty"`
}

type BookingAvailability200ApplicationJSONData struct {
	Availability       []BookingAvailability200ApplicationJSONDataAvailability `json:"availability,omitempty"`
	FirstAvailableDate *string                                                 `json:"firstAvailableDate,omitempty"`
	LastAvailableDate  *string                                                 `json:"lastAvailableDate,omitempty"`
	ProductCode        *string                                                 `json:"productCode,omitempty"`
}

type BookingAvailability200ApplicationJSON struct {
	Data             *BookingAvailability200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                                    `json:"dateStamp,omitempty"`
	ErrorCodes       []string                                   `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                              `json:"errorMessage,omitempty"`
	ErrorMessageText *string                                    `json:"errorMessageText,omitempty"`
	ErrorName        *string                                    `json:"errorName,omitempty"`
	ErrorReference   *string                                    `json:"errorReference,omitempty"`
	ErrorType        *string                                    `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                     `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                     `json:"extraObject,omitempty"`
	Success          *bool                                      `json:"success,omitempty"`
	TotalCount       *int64                                     `json:"totalCount,omitempty"`
	Vmid             *string                                    `json:"vmid,omitempty"`
}

type BookingAvailabilityResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	BookingAvailability200ApplicationJSONObject *BookingAvailability200ApplicationJSON
}
