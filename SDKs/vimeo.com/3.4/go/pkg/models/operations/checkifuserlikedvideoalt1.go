package operations

import (
"openapi/pkg/models/shared")

type CheckIfUserLikedVideoAlt1PathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type CheckIfUserLikedVideoAlt1Request struct {
    PathParams CheckIfUserLikedVideoAlt1PathParams 
    
}

type CheckIfUserLikedVideoAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

