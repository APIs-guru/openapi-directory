package operations

import (
"openapi/pkg/models/shared")

type PostSubContractorIntoEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type PostSubContractorIntoEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostSubContractorIntoEmployerRequest struct {
    PathParams PostSubContractorIntoEmployerPathParams 
    Headers PostSubContractorIntoEmployerHeaders 
    Request shared.SubContractor `request:"mediaType=application/json"`
    
}

type PostSubContractorIntoEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Link *shared.Link 
    StatusCode int64 
    
}

