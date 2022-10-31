package operations

import (
"openapi/pkg/models/shared")

type DeleteTransactionsTransactionIDRelationshipsTagsPathParams struct {
    TransactionID string `pathParam:"style=simple,explode=false,name=transactionId"`
    
}

type DeleteTransactionsTransactionIDRelationshipsTagsRequest struct {
    PathParams DeleteTransactionsTransactionIDRelationshipsTagsPathParams 
    Request *shared.UpdateTransactionTagsRequest `request:"mediaType=application/json"`
    
}

type DeleteTransactionsTransactionIDRelationshipsTagsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

