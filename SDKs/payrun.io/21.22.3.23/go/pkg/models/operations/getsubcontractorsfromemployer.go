package operations

import (
"openapi/pkg/models/shared")

type GetSubContractorsFromEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetSubContractorsFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetSubContractorsFromEmployerRequest struct {
    PathParams GetSubContractorsFromEmployerPathParams 
    Headers GetSubContractorsFromEmployerHeaders 
    
}

type GetSubContractorsFromEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

