package operations

import (
"openapi/pkg/models/shared")

type ProcessorApexProcessorTokenCreateRequest struct {
    Request shared.ProcessorApexProcessorTokenCreateRequest `request:"mediaType=application/json"`
    
}

type ProcessorApexProcessorTokenCreateResponse struct {
    ContentType string 
    ProcessorTokenCreateResponse map[string]interface{} 
    StatusCode int64 
    
}

