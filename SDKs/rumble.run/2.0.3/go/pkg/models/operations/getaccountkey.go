package operations

import (
"openapi/pkg/models/shared")

type GetAccountKeyPathParams struct {
    KeyID string `pathParam:"style=simple,explode=false,name=key_id"`
    
}

type GetAccountKeySecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAccountKeyRequest struct {
    PathParams GetAccountKeyPathParams 
    Security GetAccountKeySecurity 
    
}

type GetAccountKeyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

