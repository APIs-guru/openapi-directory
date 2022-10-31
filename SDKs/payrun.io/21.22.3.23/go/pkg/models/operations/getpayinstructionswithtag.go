package operations

import (
"openapi/pkg/models/shared")

type GetPayInstructionsWithTagPathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetPayInstructionsWithTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayInstructionsWithTagRequest struct {
    PathParams GetPayInstructionsWithTagPathParams 
    Headers GetPayInstructionsWithTagHeaders 
    
}

type GetPayInstructionsWithTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

