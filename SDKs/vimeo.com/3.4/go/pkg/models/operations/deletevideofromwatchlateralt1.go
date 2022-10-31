package operations

import (
"openapi/pkg/models/shared")

type DeleteVideoFromWatchLaterAlt1PathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type DeleteVideoFromWatchLaterAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteVideoFromWatchLaterAlt1Request struct {
    PathParams DeleteVideoFromWatchLaterAlt1PathParams 
    Security DeleteVideoFromWatchLaterAlt1Security 
    
}

type DeleteVideoFromWatchLaterAlt1Response struct {
    ContentType string 
    StatusCode int64 
    
}

