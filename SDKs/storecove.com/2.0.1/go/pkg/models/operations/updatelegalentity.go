package operations

import (
"openapi/pkg/models/shared")

type UpdateLegalEntityPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateLegalEntityRequest struct {
    PathParams UpdateLegalEntityPathParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type UpdateLegalEntityResponse struct {
    ContentType string 
    ErrorModels []interface{} 
    LegalEntity *shared.LegalEntity 
    StatusCode int64 
    
}

