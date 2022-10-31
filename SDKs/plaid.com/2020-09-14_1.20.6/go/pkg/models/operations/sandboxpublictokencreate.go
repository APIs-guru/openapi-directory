package operations

import (
"openapi/pkg/models/shared")

type SandboxPublicTokenCreateRequest struct {
    Request shared.SandboxPublicTokenCreateRequest `request:"mediaType=application/json"`
    
}

type SandboxPublicTokenCreateResponse struct {
    ContentType string 
    Error map[string]interface{} 
    SandboxPublicTokenCreateResponse map[string]interface{} 
    StatusCode int64 
    
}

