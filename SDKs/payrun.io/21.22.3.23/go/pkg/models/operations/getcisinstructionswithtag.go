package operations

import (
"openapi/pkg/models/shared")

type GetCisInstructionsWithTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetCisInstructionsWithTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetCisInstructionsWithTagRequest struct {
    PathParams GetCisInstructionsWithTagPathParams 
    Headers GetCisInstructionsWithTagHeaders 
    
}

type GetCisInstructionsWithTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

