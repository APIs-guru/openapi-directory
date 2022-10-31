package operations

import (
"openapi/pkg/models/shared")

type GetVideoPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetVideoRequest struct {
    PathParams GetVideoPathParams 
    
}

type GetVideoResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Video *shared.Video 
    
}

