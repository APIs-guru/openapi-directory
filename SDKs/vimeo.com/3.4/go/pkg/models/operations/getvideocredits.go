package operations

import (
"openapi/pkg/models/shared")

type GetVideoCreditsPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}


type GetVideoCreditsDirectionEnum string

const (
    GetVideoCreditsDirectionEnumAsc GetVideoCreditsDirectionEnum = "asc"
GetVideoCreditsDirectionEnumDesc GetVideoCreditsDirectionEnum = "desc"
)



type GetVideoCreditsSortEnum string

const (
    GetVideoCreditsSortEnumAlphabetical GetVideoCreditsSortEnum = "alphabetical"
GetVideoCreditsSortEnumDate GetVideoCreditsSortEnum = "date"
)


type GetVideoCreditsQueryParams struct {
    Direction *GetVideoCreditsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetVideoCreditsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetVideoCreditsRequest struct {
    PathParams GetVideoCreditsPathParams 
    QueryParams GetVideoCreditsQueryParams 
    
}

type GetVideoCreditsResponse struct {
    ContentType string 
    StatusCode int64 
    Credits []shared.Credit 
    
}

