package operations

import (
"openapi/pkg/models/shared")

type DeleteFromWatchHistoryPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type DeleteFromWatchHistorySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteFromWatchHistoryRequest struct {
    PathParams DeleteFromWatchHistoryPathParams 
    Security DeleteFromWatchHistorySecurity 
    
}

type DeleteFromWatchHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

