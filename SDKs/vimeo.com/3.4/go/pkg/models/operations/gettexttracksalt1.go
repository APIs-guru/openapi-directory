package operations

import (
"openapi/pkg/models/shared")

type GetTextTracksAlt1PathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetTextTracksAlt1Request struct {
    PathParams GetTextTracksAlt1PathParams 
    
}

type GetTextTracksAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    TextTracks []shared.TextTrack 
    
}

