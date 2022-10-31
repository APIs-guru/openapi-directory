package operations

import (
"openapi/pkg/models/shared")

type DeleteSubContractorRevisionByNumberPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    RevisionNumber string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
    SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
    
}

type DeleteSubContractorRevisionByNumberHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeleteSubContractorRevisionByNumberRequest struct {
    PathParams DeleteSubContractorRevisionByNumberPathParams 
    Headers DeleteSubContractorRevisionByNumberHeaders 
    
}

type DeleteSubContractorRevisionByNumberResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

