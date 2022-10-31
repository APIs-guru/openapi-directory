package operations

import (
"openapi/pkg/models/shared")

type GetTextTracksPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetTextTracksRequest struct {
    PathParams GetTextTracksPathParams 
    
}

type GetTextTracksResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    TextTracks []shared.TextTrack 
    
}

