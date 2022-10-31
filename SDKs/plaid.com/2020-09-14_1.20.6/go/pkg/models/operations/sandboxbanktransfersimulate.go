package operations

import (
"openapi/pkg/models/shared")

type SandboxBankTransferSimulateRequest struct {
    Request shared.SandboxBankTransferSimulateRequest `request:"mediaType=application/json"`
    
}

type SandboxBankTransferSimulateResponse struct {
    ContentType string 
    Error map[string]interface{} 
    SandboxBankTransferSimulateResponse map[string]interface{} 
    StatusCode int64 
    
}

