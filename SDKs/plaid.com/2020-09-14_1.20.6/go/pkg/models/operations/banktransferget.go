package operations

import (
"openapi/pkg/models/shared")

type BankTransferGetRequest struct {
    Request shared.BankTransferGetRequest `request:"mediaType=application/json"`
    
}

type BankTransferGetResponse struct {
    BankTransferGetResponse map[string]interface{} 
    ContentType string 
    Error map[string]interface{} 
    StatusCode int64 
    
}

