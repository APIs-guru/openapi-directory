package operations

import (
"openapi/pkg/models/shared")

type BankTransferEventSyncRequest struct {
    Request shared.BankTransferEventSyncRequest `request:"mediaType=application/json"`
    
}

type BankTransferEventSyncResponse struct {
    BankTransferEventSyncResponse map[string]interface{} 
    ContentType string 
    Error map[string]interface{} 
    StatusCode int64 
    
}

