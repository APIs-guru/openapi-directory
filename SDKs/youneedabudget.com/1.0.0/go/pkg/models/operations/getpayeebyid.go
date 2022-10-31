package operations

import (
"openapi/pkg/models/shared")

type GetPayeeByIDPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    PayeeID string `pathParam:"style=simple,explode=false,name=payee_id"`
    
}

type GetPayeeByIDRequest struct {
    PathParams GetPayeeByIDPathParams 
    
}

type GetPayeeByIDResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    PayeeResponse *shared.PayeeResponse 
    StatusCode int64 
    
}

