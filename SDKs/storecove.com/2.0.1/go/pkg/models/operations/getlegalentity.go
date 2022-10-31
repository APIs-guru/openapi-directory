package operations

import (
"openapi/pkg/models/shared")

type GetLegalEntityPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetLegalEntityRequest struct {
    PathParams GetLegalEntityPathParams 
    
}

type GetLegalEntityResponse struct {
    ContentType string 
    LegalEntity *shared.LegalEntity 
    StatusCode int64 
    
}

