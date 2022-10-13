package operations

import (
	"openapi/pkg/models/shared"
)

type BookingStatusHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingStatusRequestBody struct {
	BookingDateFrom     *string  `json:"bookingDateFrom"`
	BookingDateTo       *string  `json:"bookingDateTo"`
	DistributorItemRefs []string `json:"distributorItemRefs"`
	DistributorRefs     []string `json:"distributorRefs"`
	ItemIds             []int64  `json:"itemIds"`
	LeadFirstName       *string  `json:"leadFirstName"`
	LeadSurname         *string  `json:"leadSurname"`
	Test                *bool    `json:"test"`
}

type BookingStatusRequest struct {
	Headers BookingStatusHeaders
	Request *BookingStatusRequestBody `request:"mediaType=application/json"`
}

type BookingStatus200ApplicationJSONDataItemSummaries struct {
	BookingStatus      *shared.BookingStatusItem `json:"bookingStatus"`
	DistributorItemRef *string                   `json:"distributorItemRef"`
	ItemID             *int64                    `json:"itemId"`
	ItineraryID        *int64                    `json:"itineraryId"`
	SortOrder          *int64                    `json:"sortOrder"`
	TravelDate         *string                   `json:"travelDate"`
}

type BookingStatus200ApplicationJSONData struct {
	BookingDate    *string                                            `json:"bookingDate"`
	BookingStatus  *shared.BookingStatusItinerary                     `json:"bookingStatus"`
	DistributorRef *string                                            `json:"distributorRef"`
	ItemSummaries  []BookingStatus200ApplicationJSONDataItemSummaries `json:"itemSummaries"`
	ItineraryID    *int64                                             `json:"itineraryId"`
	SortOrder      *int64                                             `json:"sortOrder"`
}

type BookingStatus200ApplicationJSON struct {
	Data             *BookingStatus200ApplicationJSONData `json:"data"`
	DateStamp        *string                              `json:"dateStamp"`
	ErrorCodes       []string                             `json:"errorCodes"`
	ErrorMessage     []interface{}                        `json:"errorMessage"`
	ErrorMessageText *string                              `json:"errorMessageText"`
	ErrorName        *string                              `json:"errorName"`
	ErrorReference   *string                              `json:"errorReference"`
	ErrorType        *string                              `json:"errorType"`
	ExtraInfo        map[string]interface{}               `json:"extraInfo"`
	ExtraObject      map[string]interface{}               `json:"extraObject"`
	Success          *bool                                `json:"success"`
	TotalCount       *int64                               `json:"totalCount"`
	Vmid             *string                              `json:"vmid"`
}

type BookingStatusResponse struct {
	ContentType                           string
	StatusCode                            int64
	BookingStatus200ApplicationJSONObject *BookingStatus200ApplicationJSON
}
