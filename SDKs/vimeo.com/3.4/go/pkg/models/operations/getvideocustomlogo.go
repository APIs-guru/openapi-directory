package operations

import (
"openapi/pkg/models/shared")

type GetVideoCustomLogoPathParams struct {
    ThumbnailID float64 `pathParam:"style=simple,explode=false,name=thumbnail_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetVideoCustomLogoRequest struct {
    PathParams GetVideoCustomLogoPathParams 
    
}

type GetVideoCustomLogoResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Picture *shared.Picture 
    
}

