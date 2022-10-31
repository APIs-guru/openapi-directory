package operations

import (
"openapi/pkg/models/shared")

type GetRelatedVideosPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}


type GetRelatedVideosFilterEnum string

const (
    GetRelatedVideosFilterEnumRelated GetRelatedVideosFilterEnum = "related"
)


type GetRelatedVideosQueryParams struct {
    Filter *GetRelatedVideosFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetRelatedVideosRequest struct {
    PathParams GetRelatedVideosPathParams 
    QueryParams GetRelatedVideosQueryParams 
    
}

type GetRelatedVideosResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Videos []shared.Video 
    
}

