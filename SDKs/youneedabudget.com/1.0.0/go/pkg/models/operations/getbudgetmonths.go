package operations

import (
"openapi/pkg/models/shared")

type GetBudgetMonthsPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}

type GetBudgetMonthsQueryParams struct {
    LastKnowledgeOfServer *int64 `queryParam:"style=form,explode=true,name=last_knowledge_of_server"`
    
}

type GetBudgetMonthsRequest struct {
    PathParams GetBudgetMonthsPathParams 
    QueryParams GetBudgetMonthsQueryParams 
    
}

type GetBudgetMonthsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    MonthSummariesResponse *shared.MonthSummariesResponse 
    StatusCode int64 
    
}

