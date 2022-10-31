package operations

import (
"openapi/pkg/models/shared")

type GetEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetEmployerRequest struct {
    PathParams GetEmployerPathParams 
    Headers GetEmployerHeaders 
    
}

type GetEmployerResponse struct {
    ContentType string 
    Employer *shared.Employer 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

