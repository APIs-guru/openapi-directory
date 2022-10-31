package operations

import (
"openapi/pkg/models/shared")

type GetTagFromSubContractorPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetTagFromSubContractorHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagFromSubContractorRequest struct {
    PathParams GetTagFromSubContractorPathParams 
    Headers GetTagFromSubContractorHeaders 
    
}

type GetTagFromSubContractorResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

