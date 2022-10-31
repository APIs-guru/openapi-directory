package operations

import (
"openapi/pkg/models/shared")

type PostTransactionsTransactionIDRelationshipsTagsPathParams struct {
    TransactionID string `pathParam:"style=simple,explode=false,name=transactionId"`
    
}

type PostTransactionsTransactionIDRelationshipsTagsRequest struct {
    PathParams PostTransactionsTransactionIDRelationshipsTagsPathParams 
    Request *shared.UpdateTransactionTagsRequest `request:"mediaType=application/json"`
    
}

type PostTransactionsTransactionIDRelationshipsTagsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

