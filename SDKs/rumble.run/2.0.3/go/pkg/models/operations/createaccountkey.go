package operations

import (
"openapi/pkg/models/shared")

type CreateAccountKeySecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateAccountKeyRequest struct {
    Request shared.APIKeyOptions `request:"mediaType=application/json"`
    Security CreateAccountKeySecurity 
    
}

type CreateAccountKeyResponse struct {
    APIKey *shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

