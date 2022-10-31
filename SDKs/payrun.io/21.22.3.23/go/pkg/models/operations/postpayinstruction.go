package operations

import (
"openapi/pkg/models/shared")

type PostPayInstructionPathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type PostPayInstructionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostPayInstructionRequest struct {
    PathParams PostPayInstructionPathParams 
    Headers PostPayInstructionHeaders 
    Request shared.PayInstruction `request:"mediaType=application/json"`
    
}

type PostPayInstructionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Link *shared.Link 
    StatusCode int64 
    
}

