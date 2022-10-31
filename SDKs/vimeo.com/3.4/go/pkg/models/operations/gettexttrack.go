package operations

import (
"openapi/pkg/models/shared")

type GetTextTrackPathParams struct {
    TexttrackID float64 `pathParam:"style=simple,explode=false,name=texttrack_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetTextTrackRequest struct {
    PathParams GetTextTrackPathParams 
    
}

type GetTextTrackResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    LegacyError *shared.LegacyError 
    TextTrack *shared.TextTrack 
    
}

