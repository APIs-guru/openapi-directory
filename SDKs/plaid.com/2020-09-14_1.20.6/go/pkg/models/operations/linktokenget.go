package operations

import (
"openapi/pkg/models/shared")

type LinkTokenGetRequest struct {
    Request shared.LinkTokenGetRequest `request:"mediaType=application/json"`
    
}

type LinkTokenGetResponse struct {
    ContentType string 
    LinkTokenGetResponse map[string]interface{} 
    StatusCode int64 
    
}

