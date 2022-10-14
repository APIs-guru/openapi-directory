package operations

import (
	"openapi/pkg/models/shared"
)

type BookingStatusHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type BookingStatusRequestBody struct {
	BookingDateFrom     *string  `json:"bookingDateFrom,omitempty"`
	BookingDateTo       *string  `json:"bookingDateTo,omitempty"`
	DistributorItemRefs []string `json:"distributorItemRefs,omitempty"`
	DistributorRefs     []string `json:"distributorRefs,omitempty"`
	ItemIds             []int64  `json:"itemIds,omitempty"`
	LeadFirstName       *string  `json:"leadFirstName,omitempty"`
	LeadSurname         *string  `json:"leadSurname,omitempty"`
	Test                *bool    `json:"test,omitempty"`
}

type BookingStatusRequest struct {
	Headers BookingStatusHeaders
	Request *BookingStatusRequestBody `request:"mediaType=application/json"`
}

type BookingStatus200ApplicationJSONDataItemSummaries struct {
	BookingStatus      *shared.BookingStatusItem `json:"bookingStatus,omitempty"`
	DistributorItemRef *string                   `json:"distributorItemRef,omitempty"`
	ItemID             *int64                    `json:"itemId,omitempty"`
	ItineraryID        *int64                    `json:"itineraryId,omitempty"`
	SortOrder          *int64                    `json:"sortOrder,omitempty"`
	TravelDate         *string                   `json:"travelDate,omitempty"`
}

type BookingStatus200ApplicationJSONData struct {
	BookingDate    *string                                            `json:"bookingDate,omitempty"`
	BookingStatus  *shared.BookingStatusItinerary                     `json:"bookingStatus,omitempty"`
	DistributorRef *string                                            `json:"distributorRef,omitempty"`
	ItemSummaries  []BookingStatus200ApplicationJSONDataItemSummaries `json:"itemSummaries,omitempty"`
	ItineraryID    *int64                                             `json:"itineraryId,omitempty"`
	SortOrder      *int64                                             `json:"sortOrder,omitempty"`
}

type BookingStatus200ApplicationJSON struct {
	Data             *BookingStatus200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                              `json:"dateStamp,omitempty"`
	ErrorCodes       []string                             `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                        `json:"errorMessage,omitempty"`
	ErrorMessageText *string                              `json:"errorMessageText,omitempty"`
	ErrorName        *string                              `json:"errorName,omitempty"`
	ErrorReference   *string                              `json:"errorReference,omitempty"`
	ErrorType        *string                              `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}               `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}               `json:"extraObject,omitempty"`
	Success          *bool                                `json:"success,omitempty"`
	TotalCount       *int64                               `json:"totalCount,omitempty"`
	Vmid             *string                              `json:"vmid,omitempty"`
}

type BookingStatusResponse struct {
	ContentType                           string
	StatusCode                            int64
	BookingStatus200ApplicationJSONObject *BookingStatus200ApplicationJSON
}
