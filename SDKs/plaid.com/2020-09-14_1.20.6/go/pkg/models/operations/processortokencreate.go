package operations

import (
"openapi/pkg/models/shared")

type ProcessorTokenCreateRequest struct {
    Request shared.ProcessorTokenCreateRequest `request:"mediaType=application/json"`
    
}

type ProcessorTokenCreateResponse struct {
    ContentType string 
    ProcessorTokenCreateResponse map[string]interface{} 
    StatusCode int64 
    
}

