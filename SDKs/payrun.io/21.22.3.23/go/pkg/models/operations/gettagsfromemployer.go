package operations

import (
"openapi/pkg/models/shared")

type GetTagsFromEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetTagsFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagsFromEmployerRequest struct {
    PathParams GetTagsFromEmployerPathParams 
    Headers GetTagsFromEmployerHeaders 
    
}

type GetTagsFromEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

