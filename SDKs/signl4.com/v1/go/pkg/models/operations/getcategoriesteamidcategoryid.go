package operations

import (
"openapi/pkg/models/shared")

type GetCategoriesTeamIDCategoryIDPathParams struct {
    CategoryID string `pathParam:"style=simple,explode=false,name=categoryId"`
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type GetCategoriesTeamIDCategoryIDRequest struct {
    PathParams GetCategoriesTeamIDCategoryIDPathParams 
    
}

type GetCategoriesTeamIDCategoryIDResponse struct {
    Body []byte 
    CategoryInfo *shared.CategoryInfo 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

