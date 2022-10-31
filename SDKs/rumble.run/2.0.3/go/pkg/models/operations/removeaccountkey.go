package operations

import (
"openapi/pkg/models/shared")

type RemoveAccountKeyPathParams struct {
    KeyID string `pathParam:"style=simple,explode=false,name=key_id"`
    
}

type RemoveAccountKeySecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type RemoveAccountKeyRequest struct {
    PathParams RemoveAccountKeyPathParams 
    Security RemoveAccountKeySecurity 
    
}

type RemoveAccountKeyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

