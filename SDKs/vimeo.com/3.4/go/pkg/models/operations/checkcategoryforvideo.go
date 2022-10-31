package operations

import (
"openapi/pkg/models/shared")

type CheckCategoryForVideoPathParams struct {
    Category string `pathParam:"style=simple,explode=false,name=category"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type CheckCategoryForVideoRequest struct {
    PathParams CheckCategoryForVideoPathParams 
    
}

type CheckCategoryForVideoResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Video *shared.Video 
    
}

