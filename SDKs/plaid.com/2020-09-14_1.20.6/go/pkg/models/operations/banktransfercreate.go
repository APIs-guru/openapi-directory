package operations

import (
"openapi/pkg/models/shared")

type BankTransferCreateRequest struct {
    Request shared.BankTransferCreateRequest `request:"mediaType=application/json"`
    
}

type BankTransferCreateResponse struct {
    BankTransferCreateResponse map[string]interface{} 
    ContentType string 
    Error map[string]interface{} 
    StatusCode int64 
    
}

