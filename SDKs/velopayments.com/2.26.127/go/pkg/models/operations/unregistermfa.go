package operations

import (
"openapi/pkg/models/shared")

type UnregisterMfaPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UnregisterMfaRequest struct {
    PathParams UnregisterMfaPathParams 
    Request shared.UnregisterMfaRequest `request:"mediaType=application/json"`
    
}

type UnregisterMfaResponse struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

