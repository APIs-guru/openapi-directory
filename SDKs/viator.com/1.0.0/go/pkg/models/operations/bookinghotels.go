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
	Address       *string  `json:"address,omitempty"`
	Brand         *string  `json:"brand,omitempty"`
	City          *string  `json:"city,omitempty"`
	DestinationID *int64   `json:"destinationId,omitempty"`
	HotelString   *string  `json:"hotelString,omitempty"`
	ID            *string  `json:"id,omitempty"`
	Latitude      *float64 `json:"latitude,omitempty"`
	Longitude     *float64 `json:"longitude,omitempty"`
	Name          *string  `json:"name,omitempty"`
	Notes         *string  `json:"notes,omitempty"`
	Phone         *string  `json:"phone,omitempty"`
	Postcode      *string  `json:"postcode,omitempty"`
	ProductCodes  []string `json:"productCodes,omitempty"`
	SortOrder     *int64   `json:"sortOrder,omitempty"`
}

type BookingHotels200ApplicationJSON struct {
	Data             []BookingHotels200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                               `json:"dateStamp,omitempty"`
	ErrorCodes       []string                              `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                         `json:"errorMessage,omitempty"`
	ErrorMessageText *string                               `json:"errorMessageText,omitempty"`
	ErrorName        *string                               `json:"errorName,omitempty"`
	ErrorReference   *string                               `json:"errorReference,omitempty"`
	ErrorType        *string                               `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                `json:"extraObject,omitempty"`
	Success          *bool                                 `json:"success,omitempty"`
	TotalCount       *int64                                `json:"totalCount,omitempty"`
	Vmid             *string                               `json:"vmid,omitempty"`
}

type BookingHotelsResponse struct {
	ContentType                           string
	StatusCode                            int64
	BookingHotels200ApplicationJSONObject *BookingHotels200ApplicationJSON
}
