package operations

import (
"openapi/pkg/models/shared")

type ProcessorStripeBankAccountTokenCreateRequest struct {
    Request shared.ProcessorStripeBankAccountTokenCreateRequest `request:"mediaType=application/json"`
    
}

type ProcessorStripeBankAccountTokenCreateResponse struct {
    ContentType string 
    ProcessorStripeBankAccountTokenCreateResponse map[string]interface{} 
    StatusCode int64 
    
}

