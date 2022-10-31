package operations

import (
"openapi/pkg/models/shared")

type RotateKeySecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type RotateKeyRequest struct {
    Security RotateKeySecurity 
    
}

type RotateKeyResponse struct {
    APIKey *shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

