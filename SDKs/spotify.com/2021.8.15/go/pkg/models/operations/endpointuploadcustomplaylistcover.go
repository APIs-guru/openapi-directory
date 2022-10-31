package operations

import (
"openapi/pkg/models/shared")

type EndpointUploadCustomPlaylistCoverPathParams struct {
    PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
    
}

type EndpointUploadCustomPlaylistCoverHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    ContentType string `header:"style=simple,explode=false,name=Content-Type"`
    
}

type EndpointUploadCustomPlaylistCoverSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointUploadCustomPlaylistCoverRequest struct {
    PathParams EndpointUploadCustomPlaylistCoverPathParams 
    Headers EndpointUploadCustomPlaylistCoverHeaders 
    Request string `request:"mediaType=image/jpeg"`
    Security EndpointUploadCustomPlaylistCoverSecurity 
    
}

type EndpointUploadCustomPlaylistCoverResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

