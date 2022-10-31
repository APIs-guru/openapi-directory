package operations

import (
"time"
"openapi/pkg/models/shared")

type GetTagsFromEmployerRevisionPathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetTagsFromEmployerRevisionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagsFromEmployerRevisionRequest struct {
    PathParams GetTagsFromEmployerRevisionPathParams 
    Headers GetTagsFromEmployerRevisionHeaders 
    
}

type GetTagsFromEmployerRevisionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

