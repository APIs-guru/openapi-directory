package operations

import (
"openapi/pkg/models/shared")

type GetVideoTagsPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetVideoTagsRequest struct {
    PathParams GetVideoTagsPathParams 
    
}

type GetVideoTagsResponse struct {
    ContentType string 
    StatusCode int64 
    Tags []shared.Tag 
    
}

