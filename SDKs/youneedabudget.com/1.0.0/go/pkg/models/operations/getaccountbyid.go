package operations

import (
"openapi/pkg/models/shared")

type GetAccountByIDPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}

type GetAccountByIDRequest struct {
    PathParams GetAccountByIDPathParams 
    
}

type GetAccountByIDResponse struct {
    AccountResponse *shared.AccountResponse 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

