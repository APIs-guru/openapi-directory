package operations

import (
"time"
"openapi/pkg/models/shared")

type GetBudgetMonthPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    Month time.Time `pathParam:"style=simple,explode=false,name=month"`
    
}

type GetBudgetMonthRequest struct {
    PathParams GetBudgetMonthPathParams 
    
}

type GetBudgetMonthResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    MonthDetailResponse *shared.MonthDetailResponse 
    StatusCode int64 
    
}

