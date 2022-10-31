package operations

import (
"openapi/pkg/models/shared")

type GetTransactionsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetTransactionsIDRequest struct {
    PathParams GetTransactionsIDPathParams 
    
}

type GetTransactionsIDResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    Transaction *shared.Transaction 
    
}

