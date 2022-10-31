package operations

import (
"openapi/pkg/models/shared")

type PutSubContractorTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type PutSubContractorTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutSubContractorTagRequest struct {
    PathParams PutSubContractorTagPathParams 
    Headers PutSubContractorTagHeaders 
    
}

type PutSubContractorTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

