package operations

import (
"openapi/pkg/models/shared")

type PayorCreateAPIKeyRequestPathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=applicationId"`
    PayorID string `pathParam:"style=simple,explode=false,name=payorId"`
    
}

type PayorCreateAPIKeyRequestRequest struct {
    PathParams PayorCreateAPIKeyRequestPathParams 
    Request shared.PayorCreateAPIKeyRequest `request:"mediaType=application/json"`
    
}

type PayorCreateAPIKeyRequestResponse struct {
    ContentType string 
    PayorCreateAPIKeyResponse *shared.PayorCreateAPIKeyResponse 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

