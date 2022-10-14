package operations

type BookingAvailabilityDatesQueryParams struct {
	ProductCode *string `queryParam:"style=form,explode=true,name=productCode"`
}

type BookingAvailabilityDatesHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingAvailabilityDatesRequest struct {
	QueryParams BookingAvailabilityDatesQueryParams
	Headers     BookingAvailabilityDatesHeaders
}

type BookingAvailabilityDates200ApplicationJSON struct {
	Data             map[string][]string    `json:"data,omitempty"`
	DateStamp        *string                `json:"dateStamp,omitempty"`
	ErrorCodes       []string               `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}          `json:"errorMessage,omitempty"`
	ErrorMessageText *string                `json:"errorMessageText,omitempty"`
	ErrorName        *string                `json:"errorName,omitempty"`
	ErrorReference   *string                `json:"errorReference,omitempty"`
	ErrorType        *string                `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{} `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{} `json:"extraObject,omitempty"`
	Success          *bool                  `json:"success,omitempty"`
	TotalCount       *int64                 `json:"totalCount,omitempty"`
	Vmid             *string                `json:"vmid,omitempty"`
}

type BookingAvailabilityDatesResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	BookingAvailabilityDates200ApplicationJSONObject *BookingAvailabilityDates200ApplicationJSON
}
