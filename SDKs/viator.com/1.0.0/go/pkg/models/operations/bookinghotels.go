package operations

type BookingHotelsQueryParams struct {
	DestID      *int64  `queryParam:"style=form,explode=true,name=destId"`
	ProductCode *string `queryParam:"style=form,explode=true,name=productCode"`
}

type BookingHotelsHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingHotelsRequest struct {
	QueryParams BookingHotelsQueryParams
	Headers     BookingHotelsHeaders
}

type BookingHotels200ApplicationJSONData struct {
	Address       *string  `json:"address"`
	Brand         *string  `json:"brand"`
	City          *string  `json:"city"`
	DestinationID *int64   `json:"destinationId"`
	HotelString   *string  `json:"hotelString"`
	ID            *string  `json:"id"`
	Latitude      *float64 `json:"latitude"`
	Longitude     *float64 `json:"longitude"`
	Name          *string  `json:"name"`
	Notes         *string  `json:"notes"`
	Phone         *string  `json:"phone"`
	Postcode      *string  `json:"postcode"`
	ProductCodes  []string `json:"productCodes"`
	SortOrder     *int64   `json:"sortOrder"`
}

type BookingHotels200ApplicationJSON struct {
	Data             []BookingHotels200ApplicationJSONData `json:"data"`
	DateStamp        *string                               `json:"dateStamp"`
	ErrorCodes       []string                              `json:"errorCodes"`
	ErrorMessage     []interface{}                         `json:"errorMessage"`
	ErrorMessageText *string                               `json:"errorMessageText"`
	ErrorName        *string                               `json:"errorName"`
	ErrorReference   *string                               `json:"errorReference"`
	ErrorType        *string                               `json:"errorType"`
	ExtraInfo        map[string]interface{}                `json:"extraInfo"`
	ExtraObject      map[string]interface{}                `json:"extraObject"`
	Success          *bool                                 `json:"success"`
	TotalCount       *int64                                `json:"totalCount"`
	Vmid             *string                               `json:"vmid"`
}

type BookingHotelsResponse struct {
	ContentType                           string
	StatusCode                            int64
	BookingHotels200ApplicationJSONObject *BookingHotels200ApplicationJSON
}
