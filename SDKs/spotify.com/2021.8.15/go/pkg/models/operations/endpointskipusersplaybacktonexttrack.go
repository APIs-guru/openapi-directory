package operations

import (
"openapi/pkg/models/shared")

type EndpointSkipUsersPlaybackToNextTrackQueryParams struct {
    DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
    
}

type EndpointSkipUsersPlaybackToNextTrackHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointSkipUsersPlaybackToNextTrackSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointSkipUsersPlaybackToNextTrackRequest struct {
    QueryParams EndpointSkipUsersPlaybackToNextTrackQueryParams 
    Headers EndpointSkipUsersPlaybackToNextTrackHeaders 
    Security EndpointSkipUsersPlaybackToNextTrackSecurity 
    
}

type EndpointSkipUsersPlaybackToNextTrackResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

