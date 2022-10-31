package operations

import (
"openapi/pkg/models/shared")

type GetGroupVideoPathParams struct {
    GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetGroupVideoRequest struct {
    PathParams GetGroupVideoPathParams 
    
}

type GetGroupVideoResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Video *shared.Video 
    
}

