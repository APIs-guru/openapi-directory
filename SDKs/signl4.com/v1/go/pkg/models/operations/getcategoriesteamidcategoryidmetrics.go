package operations

import (
"openapi/pkg/models/shared")

type GetCategoriesTeamIDCategoryIDMetricsPathParams struct {
    CategoryID string `pathParam:"style=simple,explode=false,name=categoryId"`
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type GetCategoriesTeamIDCategoryIDMetricsRequest struct {
    PathParams GetCategoriesTeamIDCategoryIDMetricsPathParams 
    
}

type GetCategoriesTeamIDCategoryIDMetricsResponse struct {
    Body []byte 
    CategoryMetrics *shared.CategoryMetrics 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

