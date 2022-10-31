package operations

import (
"openapi/pkg/models/shared")

type GetAccountKeysSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAccountKeysRequest struct {
    Security GetAccountKeysSecurity 
    
}

type GetAccountKeysResponse struct {
    APIKeys []shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

