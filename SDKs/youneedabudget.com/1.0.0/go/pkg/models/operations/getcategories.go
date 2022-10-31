package operations

import (
"openapi/pkg/models/shared")

type GetCategoriesPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}

type GetCategoriesQueryParams struct {
    LastKnowledgeOfServer *int64 `queryParam:"style=form,explode=true,name=last_knowledge_of_server"`
    
}

type GetCategoriesRequest struct {
    PathParams GetCategoriesPathParams 
    QueryParams GetCategoriesQueryParams 
    
}

type GetCategoriesResponse struct {
    CategoriesResponse *shared.CategoriesResponse 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

