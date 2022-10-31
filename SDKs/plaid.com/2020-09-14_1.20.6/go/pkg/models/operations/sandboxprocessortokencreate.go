package operations

import (
"openapi/pkg/models/shared")

type SandboxProcessorTokenCreateRequest struct {
    Request shared.SandboxProcessorTokenCreateRequest `request:"mediaType=application/json"`
    
}

type SandboxProcessorTokenCreateResponse struct {
    ContentType string 
    Error map[string]interface{} 
    SandboxProcessorTokenCreateResponse map[string]interface{} 
    StatusCode int64 
    
}

