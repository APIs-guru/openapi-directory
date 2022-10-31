package operations

import (
"openapi/pkg/models/shared")

type RotateAccountKeyPathParams struct {
    KeyID string `pathParam:"style=simple,explode=false,name=key_id"`
    
}

type RotateAccountKeySecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type RotateAccountKeyRequest struct {
    PathParams RotateAccountKeyPathParams 
    Security RotateAccountKeySecurity 
    
}

type RotateAccountKeyResponse struct {
    APIKey *shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

