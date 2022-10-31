package operations

import (
"openapi/pkg/models/shared")

type GetTagsFromCisLinePathParams struct {
    CisLineID string `pathParam:"style=simple,explode=false,name=CisLineId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
    
}

type GetTagsFromCisLineHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagsFromCisLineRequest struct {
    PathParams GetTagsFromCisLinePathParams 
    Headers GetTagsFromCisLineHeaders 
    
}

type GetTagsFromCisLineResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

