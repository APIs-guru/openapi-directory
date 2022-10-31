package operations

import (
"openapi/pkg/models/shared")

type PutCisInstructionTagPathParams struct {
    CisInstructionID string `pathParam:"style=simple,explode=false,name=CisInstructionId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type PutCisInstructionTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutCisInstructionTagRequest struct {
    PathParams PutCisInstructionTagPathParams 
    Headers PutCisInstructionTagHeaders 
    
}

type PutCisInstructionTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

