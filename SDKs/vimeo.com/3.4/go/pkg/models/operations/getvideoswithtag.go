package operations

import (
"openapi/pkg/models/shared")

type GetVideosWithTagPathParams struct {
    Word string `pathParam:"style=simple,explode=false,name=word"`
    
}


type GetVideosWithTagDirectionEnum string

const (
    GetVideosWithTagDirectionEnumAsc GetVideosWithTagDirectionEnum = "asc"
GetVideosWithTagDirectionEnumDesc GetVideosWithTagDirectionEnum = "desc"
)



type GetVideosWithTagSortEnum string

const (
    GetVideosWithTagSortEnumCreatedTime GetVideosWithTagSortEnum = "created_time"
GetVideosWithTagSortEnumDuration GetVideosWithTagSortEnum = "duration"
GetVideosWithTagSortEnumName GetVideosWithTagSortEnum = "name"
)


type GetVideosWithTagQueryParams struct {
    Direction *GetVideosWithTagDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *GetVideosWithTagSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetVideosWithTagRequest struct {
    PathParams GetVideosWithTagPathParams 
    QueryParams GetVideosWithTagQueryParams 
    
}

type GetVideosWithTagResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Videos []shared.Video 
    
}

