package operations

import (
"openapi/pkg/models/shared")

type TransferFundsPathParams struct {
    SourceAccountID string `pathParam:"style=simple,explode=false,name=sourceAccountId"`
    
}

type TransferFundsRequest struct {
    PathParams TransferFundsPathParams 
    Request shared.TransferRequest `request:"mediaType=application/json"`
    
}

type TransferFundsResponse struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

