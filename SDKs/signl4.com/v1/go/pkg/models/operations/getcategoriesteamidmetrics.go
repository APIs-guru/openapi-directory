package operations

import (
"openapi/pkg/models/shared")

type GetCategoriesTeamIDMetricsPathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type GetCategoriesTeamIDMetricsRequest struct {
    PathParams GetCategoriesTeamIDMetricsPathParams 
    
}

type GetCategoriesTeamIDMetricsResponse struct {
    Body []byte 
    CategoryMetrics []shared.CategoryMetrics 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

