package operations

import (
"openapi/pkg/models/shared")

type ProcessorBankTransferCreateRequest struct {
    Request shared.ProcessorBankTransferCreateRequest `request:"mediaType=application/json"`
    
}

type ProcessorBankTransferCreateResponse struct {
    ContentType string 
    Error map[string]interface{} 
    ProcessorBankTransferCreateResponse map[string]interface{} 
    StatusCode int64 
    
}

