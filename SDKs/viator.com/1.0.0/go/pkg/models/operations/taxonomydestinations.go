package operations

import (
	"openapi/pkg/models/shared"
)

type TaxonomyDestinationsHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type TaxonomyDestinationsRequest struct {
	Headers TaxonomyDestinationsHeaders
}

type TaxonomyDestinations200ApplicationJSONData struct {
	DefaultCurrencyCode *string                     `json:"defaultCurrencyCode"`
	DestinationID       *int64                      `json:"destinationId"`
	DestinationName     *string                     `json:"destinationName"`
	DestinationType     *shared.DestinationTypeEnum `json:"destinationType"`
	DestinationURLName  *string                     `json:"destinationUrlName"`
	IataCode            *string                     `json:"iataCode"`
	Latitude            *float64                    `json:"latitude"`
	Longitude           *float64                    `json:"longitude"`
	LookupID            *string                     `json:"lookupId"`
	ParentID            *int64                      `json:"parentId"`
	Selectable          *bool                       `json:"selectable"`
	SortOrder           *int64                      `json:"sortOrder"`
	TimeZone            *string                     `json:"timeZone"`
}

type TaxonomyDestinations200ApplicationJSON struct {
	Data             []TaxonomyDestinations200ApplicationJSONData `json:"data"`
	DateStamp        *string                                      `json:"dateStamp"`
	ErrorCodes       []string                                     `json:"errorCodes"`
	ErrorMessage     []interface{}                                `json:"errorMessage"`
	ErrorMessageText *string                                      `json:"errorMessageText"`
	ErrorName        *string                                      `json:"errorName"`
	ErrorReference   *string                                      `json:"errorReference"`
	ErrorType        *string                                      `json:"errorType"`
	ExtraInfo        map[string]interface{}                       `json:"extraInfo"`
	ExtraObject      map[string]interface{}                       `json:"extraObject"`
	Success          *bool                                        `json:"success"`
	TotalCount       *int64                                       `json:"totalCount"`
	Vmid             *string                                      `json:"vmid"`
}

type TaxonomyDestinationsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	TaxonomyDestinations200ApplicationJSONObject *TaxonomyDestinations200ApplicationJSON
}
