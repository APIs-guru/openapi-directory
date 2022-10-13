package operations

import (
	"openapi/pkg/models/shared"
)

type SearchFreetextHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type SearchFreetextRequestBodySearchTypesEnum string

const (
	SearchFreetextRequestBodySearchTypesEnumProduct        SearchFreetextRequestBodySearchTypesEnum = "PRODUCT"
	SearchFreetextRequestBodySearchTypesEnumDestination    SearchFreetextRequestBodySearchTypesEnum = "DESTINATION"
	SearchFreetextRequestBodySearchTypesEnumAttraction     SearchFreetextRequestBodySearchTypesEnum = "ATTRACTION"
	SearchFreetextRequestBodySearchTypesEnumRecommendation SearchFreetextRequestBodySearchTypesEnum = "RECOMMENDATION"
)

type SearchFreetextRequestBody struct {
	CurrencyCode *string                                    `json:"currencyCode"`
	DestID       *int64                                     `json:"destId"`
	SearchTypes  []SearchFreetextRequestBodySearchTypesEnum `json:"searchTypes"`
	SortOrder    *shared.SortOrderEnum                      `json:"sortOrder"`
	Text         *string                                    `json:"text"`
	TopX         *string                                    `json:"topX"`
}

type SearchFreetextRequest struct {
	Headers SearchFreetextHeaders
	Request *SearchFreetextRequestBody `request:"mediaType=application/json"`
}

type SearchFreetext200ApplicationJSON struct {
	Data             []shared.SearchFreetextResponse `json:"data"`
	DateStamp        *string                         `json:"dateStamp"`
	ErrorCodes       []string                        `json:"errorCodes"`
	ErrorMessage     []interface{}                   `json:"errorMessage"`
	ErrorMessageText *string                         `json:"errorMessageText"`
	ErrorName        *string                         `json:"errorName"`
	ErrorReference   *string                         `json:"errorReference"`
	ErrorType        *string                         `json:"errorType"`
	ExtraInfo        map[string]interface{}          `json:"extraInfo"`
	ExtraObject      map[string]interface{}          `json:"extraObject"`
	Success          *bool                           `json:"success"`
	TotalCount       *int64                          `json:"totalCount"`
	Vmid             *string                         `json:"vmid"`
}

type SearchFreetextResponse struct {
	ContentType                            string
	StatusCode                             int64
	SearchFreetext200ApplicationJSONObject *SearchFreetext200ApplicationJSON
}
