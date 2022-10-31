package operations

import (
"openapi/pkg/models/shared")

type DeleteEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type DeleteEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeleteEmployerRequest struct {
    PathParams DeleteEmployerPathParams 
    Headers DeleteEmployerHeaders 
    
}

type DeleteEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

