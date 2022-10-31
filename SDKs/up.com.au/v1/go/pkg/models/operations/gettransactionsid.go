package operations

import (
"openapi/pkg/models/shared")

type GetTransactionsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetTransactionsIDRequest struct {
    PathParams GetTransactionsIDPathParams 
    
}

type GetTransactionsIDResponse struct {
    ContentType string 
    GetTransactionResponse *shared.GetTransactionResponse 
    StatusCode int64 
    
}

