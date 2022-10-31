package operations

import (
"openapi/pkg/models/shared")

type CallAnswerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type CallAnswerRequest struct {
    PathParams CallAnswerPathParams 
    
}

type CallAnswerResponse struct {
    Call *shared.Call 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

