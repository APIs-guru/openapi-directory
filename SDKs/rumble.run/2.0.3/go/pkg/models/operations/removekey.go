package operations

import (
"openapi/pkg/models/shared")

type RemoveKeySecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type RemoveKeyRequest struct {
    Security RemoveKeySecurity 
    
}

type RemoveKeyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

