package operations

import (
"openapi/pkg/models/shared")

type EndpointReorderOrReplacePlaylistsTracksPathParams struct {
    PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
    
}

type EndpointReorderOrReplacePlaylistsTracksQueryParams struct {
    Uris *string `queryParam:"style=form,explode=true,name=uris"`
    
}

type EndpointReorderOrReplacePlaylistsTracksHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    ContentType *string `header:"style=simple,explode=false,name=Content-Type"`
    
}

type EndpointReorderOrReplacePlaylistsTracksRequestBody struct {
    InsertBefore *int32 `json:"insert_before,omitempty"`
    RangeLength *int32 `json:"range_length,omitempty"`
    RangeStart *int32 `json:"range_start,omitempty"`
    SnapshotID *string `json:"snapshot_id,omitempty"`
    Uris []string `json:"uris,omitempty"`
    
}

type EndpointReorderOrReplacePlaylistsTracksSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointReorderOrReplacePlaylistsTracksRequest struct {
    PathParams EndpointReorderOrReplacePlaylistsTracksPathParams 
    QueryParams EndpointReorderOrReplacePlaylistsTracksQueryParams 
    Headers EndpointReorderOrReplacePlaylistsTracksHeaders 
    Request *EndpointReorderOrReplacePlaylistsTracksRequestBody `request:"mediaType=application/json"`
    Security EndpointReorderOrReplacePlaylistsTracksSecurity 
    
}

type EndpointReorderOrReplacePlaylistsTracksResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    SnapshotIDObject *shared.SnapshotIDObject 
    StatusCode int64 
    
}

