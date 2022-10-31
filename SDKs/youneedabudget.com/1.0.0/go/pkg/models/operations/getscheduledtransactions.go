package operations

import (
"openapi/pkg/models/shared")

type GetScheduledTransactionsPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}

type GetScheduledTransactionsQueryParams struct {
    LastKnowledgeOfServer *int64 `queryParam:"style=form,explode=true,name=last_knowledge_of_server"`
    
}

type GetScheduledTransactionsRequest struct {
    PathParams GetScheduledTransactionsPathParams 
    QueryParams GetScheduledTransactionsQueryParams 
    
}

type GetScheduledTransactionsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    ScheduledTransactionsResponse *shared.ScheduledTransactionsResponse 
    StatusCode int64 
    
}

