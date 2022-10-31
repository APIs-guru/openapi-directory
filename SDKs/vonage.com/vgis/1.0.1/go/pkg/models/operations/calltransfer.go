package operations

import (
"openapi/pkg/models/shared")

type CallTransferPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type CallTransferRequest struct {
    PathParams CallTransferPathParams 
    Request shared.CallTransfer `request:"mediaType=application/json"`
    
}

type CallTransferResponse struct {
    Call *shared.Call 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

