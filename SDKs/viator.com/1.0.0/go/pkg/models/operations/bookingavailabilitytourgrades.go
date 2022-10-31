package operations

type BookingAvailabilityTourgradesHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type BookingAvailabilityTourgradesRequestBodyAgeBands struct {
	BandID *int64 `json:"bandId,omitempty"`
	Count  *int64 `json:"count,omitempty"`
}

type BookingAvailabilityTourgradesRequestBody struct {
	AgeBands     []BookingAvailabilityTourgradesRequestBodyAgeBands `json:"ageBands,omitempty"`
	BookingDate  *string                                            `json:"bookingDate,omitempty"`
	CurrencyCode *string                                            `json:"currencyCode,omitempty"`
	ProductCode  *string                                            `json:"productCode,omitempty"`
}

type BookingAvailabilityTourgradesRequest struct {
	Headers BookingAvailabilityTourgradesHeaders
	Request *BookingAvailabilityTourgradesRequestBody `request:"mediaType=application/json"`
}

type BookingAvailabilityTourgrades200ApplicationJSONDataAgeBandsRequired struct {
	BandID               *int64 `json:"bandId,omitempty"`
	MaximumCountRequired *int64 `json:"maximumCountRequired,omitempty"`
	MinimumCountRequired *int64 `json:"minimumCountRequired,omitempty"`
}

type BookingAvailabilityTourgrades200ApplicationJSONData struct {
	AgeBands                  []interface{}                                                           `json:"ageBands,omitempty"`
	AgeBandsRequired          [][]BookingAvailabilityTourgrades200ApplicationJSONDataAgeBandsRequired `json:"ageBandsRequired,omitempty"`
	Available                 *bool                                                                   `json:"available,omitempty"`
	BookingDate               *string                                                                 `json:"bookingDate,omitempty"`
	CurrencyCode              *string                                                                 `json:"currencyCode,omitempty"`
	DefaultLanguageCode       *string                                                                 `json:"defaultLanguageCode,omitempty"`
	GradeCode                 *string                                                                 `json:"gradeCode,omitempty"`
	GradeDepartureTime        *string                                                                 `json:"gradeDepartureTime,omitempty"`
	GradeDescription          *string                                                                 `json:"gradeDescription,omitempty"`
	GradeTitle                *string                                                                 `json:"gradeTitle,omitempty"`
	LangServices              map[string]interface{}                                                  `json:"langServices,omitempty"`
	MerchantNetPrice          *float64                                                                `json:"merchantNetPrice,omitempty"`
	MerchantNetPriceFormatted *string                                                                 `json:"merchantNetPriceFormatted,omitempty"`
	RetailPrice               *float64                                                                `json:"retailPrice,omitempty"`
	RetailPriceFormatted      *string                                                                 `json:"retailPriceFormatted,omitempty"`
	SortOrder                 *int64                                                                  `json:"sortOrder,omitempty"`
	UnavailableReason         *string                                                                 `json:"unavailableReason,omitempty"`
}

type BookingAvailabilityTourgrades200ApplicationJSON struct {
	Data             []BookingAvailabilityTourgrades200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                                               `json:"dateStamp,omitempty"`
	ErrorCodes       []string                                              `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                                         `json:"errorMessage,omitempty"`
	ErrorMessageText *string                                               `json:"errorMessageText,omitempty"`
	ErrorName        *string                                               `json:"errorName,omitempty"`
	ErrorReference   *string                                               `json:"errorReference,omitempty"`
	ErrorType        *string                                               `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                                `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                                `json:"extraObject,omitempty"`
	Success          *bool                                                 `json:"success,omitempty"`
	TotalCount       *int64                                                `json:"totalCount,omitempty"`
	Vmid             *string                                               `json:"vmid,omitempty"`
}

type BookingAvailabilityTourgradesResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	BookingAvailabilityTourgrades200ApplicationJSONObject *BookingAvailabilityTourgrades200ApplicationJSON
}
