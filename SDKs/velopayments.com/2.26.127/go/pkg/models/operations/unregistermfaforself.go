package operations

import (
"openapi/pkg/models/shared")

type UnregisterMfaForSelfHeaders struct {
    Authorization *string `header:"style=simple,explode=false,name=Authorization"`
    
}

type UnregisterMfaForSelfRequest struct {
    Headers UnregisterMfaForSelfHeaders 
    Request shared.SelfMfaTypeUnregisterRequest `request:"mediaType=application/json"`
    
}

type UnregisterMfaForSelfResponse struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    
}

