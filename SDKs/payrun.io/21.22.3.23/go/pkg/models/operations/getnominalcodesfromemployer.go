package operations

import (
"openapi/pkg/models/shared")

type GetNominalCodesFromEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetNominalCodesFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetNominalCodesFromEmployerRequest struct {
    PathParams GetNominalCodesFromEmployerPathParams 
    Headers GetNominalCodesFromEmployerHeaders 
    
}

type GetNominalCodesFromEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

