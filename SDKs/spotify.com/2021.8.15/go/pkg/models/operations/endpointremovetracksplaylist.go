package operations

import (
"openapi/pkg/models/shared")

type EndpointRemoveTracksPlaylistPathParams struct {
    PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
    
}

type EndpointRemoveTracksPlaylistHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    ContentType string `header:"style=simple,explode=false,name=Content-Type"`
    
}

type EndpointRemoveTracksPlaylistRequestBody struct {
    SnapshotID *string `json:"snapshot_id,omitempty"`
    Tracks []string `json:"tracks"`
    
}

type EndpointRemoveTracksPlaylistSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointRemoveTracksPlaylistRequest struct {
    PathParams EndpointRemoveTracksPlaylistPathParams 
    Headers EndpointRemoveTracksPlaylistHeaders 
    Request EndpointRemoveTracksPlaylistRequestBody `request:"mediaType=application/json"`
    Security EndpointRemoveTracksPlaylistSecurity 
    
}

type EndpointRemoveTracksPlaylistResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    SnapshotIDObject *shared.SnapshotIDObject 
    StatusCode int64 
    
}

