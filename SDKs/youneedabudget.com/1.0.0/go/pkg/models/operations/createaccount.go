package operations

import (
"openapi/pkg/models/shared")

type CreateAccountPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}

type CreateAccountRequest struct {
    PathParams CreateAccountPathParams 
    Request shared.SaveAccountWrapper `request:"mediaType=application/json"`
    
}

type CreateAccountResponse struct {
    AccountResponse *shared.AccountResponse 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

