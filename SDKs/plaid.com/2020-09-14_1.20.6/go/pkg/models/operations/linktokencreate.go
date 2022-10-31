package operations

import (
"openapi/pkg/models/shared")

type LinkTokenCreateRequest struct {
    Request shared.LinkTokenCreateRequest `request:"mediaType=application/json"`
    
}

type LinkTokenCreateResponse struct {
    ContentType string 
    LinkTokenCreateResponse map[string]interface{} 
    StatusCode int64 
    
}

