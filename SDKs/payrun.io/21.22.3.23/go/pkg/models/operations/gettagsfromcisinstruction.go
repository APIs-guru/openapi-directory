package operations

import (
"openapi/pkg/models/shared")

type GetTagsFromCisInstructionPathParams struct {
    CisInstructionID string `pathParam:"style=simple,explode=false,name=CisInstructionId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
    
}

type GetTagsFromCisInstructionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagsFromCisInstructionRequest struct {
    PathParams GetTagsFromCisInstructionPathParams 
    Headers GetTagsFromCisInstructionHeaders 
    
}

type GetTagsFromCisInstructionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

