package operations

import (
"openapi/pkg/models/shared")

type PutCategoriesTeamIDCategoryIDPathParams struct {
    CategoryID string `pathParam:"style=simple,explode=false,name=categoryId"`
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type PutCategoriesTeamIDCategoryIDRequests struct {
    CategoryInfo *shared.CategoryInfo `request:"mediaType=application/*+json"`
    CategoryInfo1 *shared.CategoryInfo `request:"mediaType=application/json"`
    CategoryInfo2 *shared.CategoryInfo `request:"mediaType=application/json-patch+json"`
    CategoryInfo3 *shared.CategoryInfo `request:"mediaType=text/json"`
    
}

type PutCategoriesTeamIDCategoryIDRequest struct {
    PathParams PutCategoriesTeamIDCategoryIDPathParams 
    Request *PutCategoriesTeamIDCategoryIDRequests 
    
}

type PutCategoriesTeamIDCategoryIDResponse struct {
    Body []byte 
    CategoryInfo *shared.CategoryInfo 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

