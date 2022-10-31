package operations

import (
	"openapi/pkg/models/shared"
)

type BookingStatusItemsHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type BookingStatusItemsRequestBody struct {
	BookingDateFrom     *string  `json:"bookingDateFrom,omitempty"`
	BookingDateTo       *string  `json:"bookingDateTo,omitempty"`
	DistributorItemRefs []string `json:"distributorItemRefs,omitempty"`
	DistributorRefs     []string `json:"distributorRefs,omitempty"`
	ItemIds             []int64  `json:"itemIds,omitempty"`
	LeadFirstName       *string  `json:"leadFirstName,omitempty"`
	LeadSurname         *string  `json:"leadSurname,omitempty"`
	Test                *bool    `json:"test,omitempty"`
}

type BookingStatusItemsRequest struct {
	Headers BookingStatusItemsHeaders
	Request *BookingStatusItemsRequestBody `request:"mediaType=application/json"`
}

type BookingStatusItems200ApplicationJSONData struct {
	BookingStatus      *shared.BookingStatusItem `json:"bookingStatus,omitempty"`
	DistributorItemRef *string                   `json:"distributorItemRef,omitempty"`
	ItemID             *int64                    `json:"itemId,omitempty"`
}

type BookingStatusItems200ApplicationJSON struct {
	Data             []BookingStatusItems200ApplicationJSONData `json:"data,omitempty"`
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

type BookingStatusItemsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	BookingStatusItems200ApplicationJSONObject *BookingStatusItems200ApplicationJSON
}
