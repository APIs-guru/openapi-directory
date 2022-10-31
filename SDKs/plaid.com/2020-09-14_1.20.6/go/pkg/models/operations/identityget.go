package operations

import (
"openapi/pkg/models/shared")

type IdentityGetRequest struct {
    Request shared.IdentityGetRequest `request:"mediaType=application/json"`
    
}

type IdentityGetResponse struct {
    ContentType string 
    IdentityGetResponse map[string]interface{} 
    StatusCode int64 
    
}

