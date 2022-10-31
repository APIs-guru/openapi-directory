package operations

import (
"openapi/pkg/models/shared")

type UpdateTransactionsPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}

type UpdateTransactionsRequest struct {
    PathParams UpdateTransactionsPathParams 
    Request shared.UpdateTransactionsWrapper `request:"mediaType=application/json"`
    
}

type UpdateTransactionsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    SaveTransactionsResponse *shared.SaveTransactionsResponse 
    StatusCode int64 
    
}

