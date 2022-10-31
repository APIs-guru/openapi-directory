package operations

import (
"openapi/pkg/models/shared")

type GetPensionFromEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PensionID string `pathParam:"style=simple,explode=false,name=PensionId"`
    
}

type GetPensionFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPensionFromEmployerRequest struct {
    PathParams GetPensionFromEmployerPathParams 
    Headers GetPensionFromEmployerHeaders 
    
}

type GetPensionFromEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Pension *shared.Pension 
    StatusCode int64 
    
}

