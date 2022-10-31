package operations

import (
"openapi/pkg/models/shared")

type GetCategoriesTeamIDPathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type GetCategoriesTeamIDRequest struct {
    PathParams GetCategoriesTeamIDPathParams 
    
}

type GetCategoriesTeamIDResponse struct {
    Body []byte 
    CategoryInfos []shared.CategoryInfo 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

