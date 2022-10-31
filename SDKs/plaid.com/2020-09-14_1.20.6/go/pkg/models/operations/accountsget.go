package operations

import (
"openapi/pkg/models/shared")

type AccountsGetRequest struct {
    Request shared.AccountsGetRequest `request:"mediaType=application/json"`
    
}

type AccountsGetResponse struct {
    AccountsGetResponse map[string]interface{} 
    ContentType string 
    Error map[string]interface{} 
    StatusCode int64 
    
}

