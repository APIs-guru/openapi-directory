package operations

import (
"openapi/pkg/models/shared")


type GetCategoriesDirectionEnum string

const (
    GetCategoriesDirectionEnumAsc GetCategoriesDirectionEnum = "asc"
GetCategoriesDirectionEnumDesc GetCategoriesDirectionEnum = "desc"
)



type GetCategoriesSortEnum string

const (
    GetCategoriesSortEnumLastVideoFeaturedTime GetCategoriesSortEnum = "last_video_featured_time"
GetCategoriesSortEnumName GetCategoriesSortEnum = "name"
)


type GetCategoriesQueryParams struct {
    Direction *GetCategoriesDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *GetCategoriesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetCategoriesRequest struct {
    QueryParams GetCategoriesQueryParams 
    
}

type GetCategoriesResponse struct {
    ContentType string 
    StatusCode int64 
    Categories []shared.Category 
    
}

