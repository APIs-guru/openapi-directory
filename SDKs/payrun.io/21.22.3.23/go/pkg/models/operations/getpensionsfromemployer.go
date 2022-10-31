package operations

import (
"openapi/pkg/models/shared")

type GetPensionsFromEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetPensionsFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPensionsFromEmployerRequest struct {
    PathParams GetPensionsFromEmployerPathParams 
    Headers GetPensionsFromEmployerHeaders 
    
}

type GetPensionsFromEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

