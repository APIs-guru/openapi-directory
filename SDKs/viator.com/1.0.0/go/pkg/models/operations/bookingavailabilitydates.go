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
	Data             map[string][]string    `json:"data"`
	DateStamp        *string                `json:"dateStamp"`
	ErrorCodes       []string               `json:"errorCodes"`
	ErrorMessage     []interface{}          `json:"errorMessage"`
	ErrorMessageText *string                `json:"errorMessageText"`
	ErrorName        *string                `json:"errorName"`
	ErrorReference   *string                `json:"errorReference"`
	ErrorType        *string                `json:"errorType"`
	ExtraInfo        map[string]interface{} `json:"extraInfo"`
	ExtraObject      map[string]interface{} `json:"extraObject"`
	Success          *bool                  `json:"success"`
	TotalCount       *int64                 `json:"totalCount"`
	Vmid             *string                `json:"vmid"`
}

type BookingAvailabilityDatesResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	BookingAvailabilityDates200ApplicationJSONObject *BookingAvailabilityDates200ApplicationJSON
}
