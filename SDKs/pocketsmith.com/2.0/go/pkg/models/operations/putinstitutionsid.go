package operations

import (
"openapi/pkg/models/shared")

type PutInstitutionsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutInstitutionsIDRequestBody struct {
    CurrencyCode *string `json:"currency_code,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type PutInstitutionsIDRequest struct {
    PathParams PutInstitutionsIDPathParams 
    Request *PutInstitutionsIDRequestBody `request:"mediaType=application/json"`
    
}

type PutInstitutionsIDResponse struct {
    ContentType string 
    Error *shared.Error 
    Institution *shared.Institution 
    StatusCode int64 
    
}

