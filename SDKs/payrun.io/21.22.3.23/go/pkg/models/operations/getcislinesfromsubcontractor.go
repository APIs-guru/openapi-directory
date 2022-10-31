package operations

import (
"openapi/pkg/models/shared")

type GetCisLinesFromSubContractorPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
    
}

type GetCisLinesFromSubContractorHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetCisLinesFromSubContractorRequest struct {
    PathParams GetCisLinesFromSubContractorPathParams 
    Headers GetCisLinesFromSubContractorHeaders 
    
}

type GetCisLinesFromSubContractorResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

