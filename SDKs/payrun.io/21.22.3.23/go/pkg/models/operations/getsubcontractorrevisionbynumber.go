package operations

import (
"openapi/pkg/models/shared")

type GetSubContractorRevisionByNumberPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    RevisionNumber string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
    SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
    
}

type GetSubContractorRevisionByNumberHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetSubContractorRevisionByNumberRequest struct {
    PathParams GetSubContractorRevisionByNumberPathParams 
    Headers GetSubContractorRevisionByNumberHeaders 
    
}

type GetSubContractorRevisionByNumberResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    SubContractor *shared.SubContractor 
    
}

