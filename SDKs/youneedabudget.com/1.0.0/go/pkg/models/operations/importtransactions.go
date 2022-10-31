package operations

import (
"openapi/pkg/models/shared")

type ImportTransactionsPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}

type ImportTransactionsRequest struct {
    PathParams ImportTransactionsPathParams 
    
}

type ImportTransactionsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    TransactionsImportResponse *shared.TransactionsImportResponse 
    
}

