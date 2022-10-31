package operations

import (
"openapi/pkg/models/shared")

type CreateFundingAccountV2Request struct {
    Request *shared.CreateFundingAccountRequestV2 `request:"mediaType=application/json"`
    
}

type CreateFundingAccountV2Response struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    
}

