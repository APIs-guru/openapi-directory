package operations

import (
"openapi/pkg/models/shared")

type GetBudgetByIDPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}

type GetBudgetByIDQueryParams struct {
    LastKnowledgeOfServer *int64 `queryParam:"style=form,explode=true,name=last_knowledge_of_server"`
    
}

type GetBudgetByIDRequest struct {
    PathParams GetBudgetByIDPathParams 
    QueryParams GetBudgetByIDQueryParams 
    
}

type GetBudgetByIDResponse struct {
    BudgetDetailResponse *shared.BudgetDetailResponse 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

