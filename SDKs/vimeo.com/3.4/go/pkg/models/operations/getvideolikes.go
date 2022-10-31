package operations

import (
"openapi/pkg/models/shared")

type GetVideoLikesPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}


type GetVideoLikesDirectionEnum string

const (
    GetVideoLikesDirectionEnumAsc GetVideoLikesDirectionEnum = "asc"
GetVideoLikesDirectionEnumDesc GetVideoLikesDirectionEnum = "desc"
)



type GetVideoLikesSortEnum string

const (
    GetVideoLikesSortEnumAlphabetical GetVideoLikesSortEnum = "alphabetical"
GetVideoLikesSortEnumDate GetVideoLikesSortEnum = "date"
)


type GetVideoLikesQueryParams struct {
    Direction *GetVideoLikesDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *GetVideoLikesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetVideoLikesRequest struct {
    PathParams GetVideoLikesPathParams 
    QueryParams GetVideoLikesQueryParams 
    
}

type GetVideoLikesResponse struct {
    ContentType string 
    StatusCode int64 
    Users []shared.User 
    
}

