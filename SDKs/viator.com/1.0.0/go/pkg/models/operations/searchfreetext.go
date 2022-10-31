package operations

import (
"openapi/pkg/models/shared")

type SearchFreetextHeaders struct {
    AcceptLanguage string `header:"style=simple,explode=false,name=Accept-Language"`
    
}


type SearchFreetextRequestBodySearchTypesEnum string

const (
    SearchFreetextRequestBodySearchTypesEnumProduct SearchFreetextRequestBodySearchTypesEnum = "PRODUCT"
SearchFreetextRequestBodySearchTypesEnumDestination SearchFreetextRequestBodySearchTypesEnum = "DESTINATION"
SearchFreetextRequestBodySearchTypesEnumAttraction SearchFreetextRequestBodySearchTypesEnum = "ATTRACTION"
SearchFreetextRequestBodySearchTypesEnumRecommendation SearchFreetextRequestBodySearchTypesEnum = "RECOMMENDATION"
)


type SearchFreetextRequestBody struct {
    CurrencyCode *string `json:"currencyCode,omitempty"`
    DestID *int64 `json:"destId,omitempty"`
    SearchTypes []SearchFreetextRequestBodySearchTypesEnum `json:"searchTypes,omitempty"`
    SortOrder *shared.SortOrderEnum `json:"sortOrder,omitempty"`
    Text *string `json:"text,omitempty"`
    TopX *string `json:"topX,omitempty"`
    
}

type SearchFreetextRequest struct {
    Headers SearchFreetextHeaders 
    Request *SearchFreetextRequestBody `request:"mediaType=application/json"`
    
}

type SearchFreetext200ApplicationJSON struct {
    Data []shared.SearchFreetextResponse `json:"data,omitempty"`
    DateStamp *string `json:"dateStamp,omitempty"`
    ErrorCodes []string `json:"errorCodes,omitempty"`
    ErrorMessage []interface{} `json:"errorMessage,omitempty"`
    ErrorMessageText *string `json:"errorMessageText,omitempty"`
    ErrorName *string `json:"errorName,omitempty"`
    ErrorReference *string `json:"errorReference,omitempty"`
    ErrorType *string `json:"errorType,omitempty"`
    ExtraInfo map[string]interface{} `json:"extraInfo,omitempty"`
    ExtraObject map[string]interface{} `json:"extraObject,omitempty"`
    Success *bool `json:"success,omitempty"`
    TotalCount *int64 `json:"totalCount,omitempty"`
    Vmid *string `json:"vmid,omitempty"`
    
}

type SearchFreetextResponse struct {
    ContentType string 
    StatusCode int64 
    SearchFreetext200ApplicationJSONObject *SearchFreetext200ApplicationJSON 
    
}

