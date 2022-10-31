package operations

import (
"openapi/pkg/models/shared")

type TransactionsGetRequest struct {
    Request shared.TransactionsGetRequest `request:"mediaType=application/json"`
    
}

type TransactionsGetResponse struct {
    ContentType string 
    Error map[string]interface{} 
    StatusCode int64 
    TransactionsGetResponse map[string]interface{} 
    
}

