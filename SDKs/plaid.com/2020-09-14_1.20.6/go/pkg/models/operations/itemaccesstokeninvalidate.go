package operations

import (
"openapi/pkg/models/shared")

type ItemAccessTokenInvalidateRequest struct {
    Request shared.ItemAccessTokenInvalidateRequest `request:"mediaType=application/json"`
    
}

type ItemAccessTokenInvalidateResponse struct {
    ContentType string 
    ItemAccessTokenInvalidateResponse map[string]interface{} 
    StatusCode int64 
    
}

