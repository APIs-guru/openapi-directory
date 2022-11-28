package operations

import (
	"openapi/pkg/models/shared"
)

type TaxonomyDestinationsHeaders struct {
	AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
}

type TaxonomyDestinations200ApplicationJSONData struct {
	DefaultCurrencyCode *string                     `json:"defaultCurrencyCode,omitempty"`
	DestinationID       *int64                      `json:"destinationId,omitempty"`
	DestinationName     *string                     `json:"destinationName,omitempty"`
	DestinationType     *shared.DestinationTypeEnum `json:"destinationType,omitempty"`
	DestinationURLName  *string                     `json:"destinationUrlName,omitempty"`
	IataCode            *string                     `json:"iataCode,omitempty"`
	Latitude            *float64                    `json:"latitude,omitempty"`
	Longitude           *float64                    `json:"longitude,omitempty"`
	LookupID            *string                     `json:"lookupId,omitempty"`
	ParentID            *int64                      `json:"parentId,omitempty"`
	Selectable          *bool                       `json:"selectable,omitempty"`
	SortOrder           *int64                      `json:"sortOrder,omitempty"`
	TimeZone            *string                     `json:"timeZone,omitempty"`
}

type TaxonomyDestinations200ApplicationJSON struct {
	Data             []TaxonomyDestinations200ApplicationJSONData `json:"data,omitempty"`
	DateStamp        *string                                      `json:"dateStamp,omitempty"`
	ErrorCodes       []string                                     `json:"errorCodes,omitempty"`
	ErrorMessage     []interface{}                                `json:"errorMessage,omitempty"`
	ErrorMessageText *string                                      `json:"errorMessageText,omitempty"`
	ErrorName        *string                                      `json:"errorName,omitempty"`
	ErrorReference   *string                                      `json:"errorReference,omitempty"`
	ErrorType        *string                                      `json:"errorType,omitempty"`
	ExtraInfo        map[string]interface{}                       `json:"extraInfo,omitempty"`
	ExtraObject      map[string]interface{}                       `json:"extraObject,omitempty"`
	Success          *bool                                        `json:"success,omitempty"`
	TotalCount       *int64                                       `json:"totalCount,omitempty"`
	Vmid             *string                                      `json:"vmid,omitempty"`
}

type TaxonomyDestinationsRequest struct {
	Headers TaxonomyDestinationsHeaders
}

type TaxonomyDestinationsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	TaxonomyDestinations200ApplicationJSONObject *TaxonomyDestinations200ApplicationJSON
}
