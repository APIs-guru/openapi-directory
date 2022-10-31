package operations

import (
"openapi/pkg/models/shared")

type TransferFundsV3PathParams struct {
    SourceAccountID string `pathParam:"style=simple,explode=false,name=sourceAccountId"`
    
}

type TransferFundsV3Request struct {
    PathParams TransferFundsV3PathParams 
    Request shared.TransferRequest2 `request:"mediaType=application/json"`
    
}

type TransferFundsV3Response struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

