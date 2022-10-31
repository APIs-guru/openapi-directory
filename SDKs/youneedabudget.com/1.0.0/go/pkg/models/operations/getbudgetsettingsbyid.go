package operations

import (
"openapi/pkg/models/shared")

type GetBudgetSettingsByIDPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}

type GetBudgetSettingsByIDRequest struct {
    PathParams GetBudgetSettingsByIDPathParams 
    
}

type GetBudgetSettingsByIDResponse struct {
    BudgetSettingsResponse *shared.BudgetSettingsResponse 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

