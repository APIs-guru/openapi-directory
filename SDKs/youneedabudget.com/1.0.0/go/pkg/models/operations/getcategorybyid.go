package operations

import (
"openapi/pkg/models/shared")

type GetCategoryByIDPathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    CategoryID string `pathParam:"style=simple,explode=false,name=category_id"`
    
}

type GetCategoryByIDRequest struct {
    PathParams GetCategoryByIDPathParams 
    
}

type GetCategoryByIDResponse struct {
    CategoryResponse *shared.CategoryResponse 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

