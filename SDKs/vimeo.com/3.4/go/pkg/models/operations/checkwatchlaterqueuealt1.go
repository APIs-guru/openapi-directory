package operations

import (
"openapi/pkg/models/shared")

type CheckWatchLaterQueueAlt1PathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type CheckWatchLaterQueueAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CheckWatchLaterQueueAlt1Request struct {
    PathParams CheckWatchLaterQueueAlt1PathParams 
    Security CheckWatchLaterQueueAlt1Security 
    
}

type CheckWatchLaterQueueAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Video *shared.Video 
    
}

