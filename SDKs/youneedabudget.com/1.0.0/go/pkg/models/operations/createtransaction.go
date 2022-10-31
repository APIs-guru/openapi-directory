package operations

import (
"openapi/pkg/models/shared")

type CreateTransactionPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}

type CreateTransactionRequest struct {
    PathParams CreateTransactionPathParams 
    Request shared.SaveTransactionsWrapper `request:"mediaType=application/json"`
    
}

type CreateTransactionResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    SaveTransactionsResponse *shared.SaveTransactionsResponse 
    StatusCode int64 
    
}

