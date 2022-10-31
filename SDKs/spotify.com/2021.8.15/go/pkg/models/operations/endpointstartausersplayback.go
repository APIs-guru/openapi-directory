package operations

import (
"openapi/pkg/models/shared")

type EndpointStartAUsersPlaybackQueryParams struct {
    DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
    
}

type EndpointStartAUsersPlaybackHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointStartAUsersPlaybackRequestBody struct {
    ContextURI *string `json:"context_uri,omitempty"`
    Offset map[string]interface{} `json:"offset,omitempty"`
    PositionMs *int32 `json:"position_ms,omitempty"`
    Uris []string `json:"uris,omitempty"`
    
}

type EndpointStartAUsersPlaybackSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointStartAUsersPlaybackRequest struct {
    QueryParams EndpointStartAUsersPlaybackQueryParams 
    Headers EndpointStartAUsersPlaybackHeaders 
    Request *EndpointStartAUsersPlaybackRequestBody `request:"mediaType=application/json"`
    Security EndpointStartAUsersPlaybackSecurity 
    
}

type EndpointStartAUsersPlaybackResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

