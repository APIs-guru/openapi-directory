package operations

import (
"openapi/pkg/models/shared")

type PostCachekeyInvalidateSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type PostCachekeyInvalidateRequest struct {
    Request shared.CacheInvalidationRequestSchema `request:"mediaType=application/json"`
    Security PostCachekeyInvalidateSecurity 
    
}

type PostCachekeyInvalidate400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostCachekeyInvalidate500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostCachekeyInvalidateResponse struct {
    ContentType string 
    PostCachekeyInvalidate400ApplicationJSONObject *PostCachekeyInvalidate400ApplicationJSON 
    PostCachekeyInvalidate500ApplicationJSONObject *PostCachekeyInvalidate500ApplicationJSON 
    StatusCode int64 
    
}

