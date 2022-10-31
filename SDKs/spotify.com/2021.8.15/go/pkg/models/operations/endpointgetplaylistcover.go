package operations

import (
"openapi/pkg/models/shared")

type EndpointGetPlaylistCoverPathParams struct {
    PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
    
}

type EndpointGetPlaylistCoverHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetPlaylistCoverSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetPlaylistCoverRequest struct {
    PathParams EndpointGetPlaylistCoverPathParams 
    Headers EndpointGetPlaylistCoverHeaders 
    Security EndpointGetPlaylistCoverSecurity 
    
}

type EndpointGetPlaylistCoverResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    ImageObjects []shared.ImageObject 
    StatusCode int64 
    
}

