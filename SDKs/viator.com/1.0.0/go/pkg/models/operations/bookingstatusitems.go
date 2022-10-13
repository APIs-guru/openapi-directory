package operations

import (
	"openapi/pkg/models/shared"
)

type BookingStatusItemsHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingStatusItemsRequestBody struct {
	BookingDateFrom     *string  `json:"bookingDateFrom"`
	BookingDateTo       *string  `json:"bookingDateTo"`
	DistributorItemRefs []string `json:"distributorItemRefs"`
	DistributorRefs     []string `json:"distributorRefs"`
	ItemIds             []int64  `json:"itemIds"`
	LeadFirstName       *string  `json:"leadFirstName"`
	LeadSurname         *string  `json:"leadSurname"`
	Test                *bool    `json:"test"`
}

type BookingStatusItemsRequest struct {
	Headers BookingStatusItemsHeaders
	Request *BookingStatusItemsRequestBody `request:"mediaType=application/json"`
}

type BookingStatusItems200ApplicationJSONData struct {
	BookingStatus      *shared.BookingStatusItem `json:"bookingStatus"`
	DistributorItemRef *string                   `json:"distributorItemRef"`
	ItemID             *int64                    `json:"itemId"`
}

type BookingStatusItems200ApplicationJSON struct {
	Data             []BookingStatusItems200ApplicationJSONData `json:"data"`
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

type BookingStatusItemsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	BookingStatusItems200ApplicationJSONObject *BookingStatusItems200ApplicationJSON
}
