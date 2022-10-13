package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointReorderOrReplacePlaylistsTracksPathParams struct {
	PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type EndpointReorderOrReplacePlaylistsTracksQueryParams struct {
	Uris *string `queryParam:"style=form,explode=true,name=uris"`
}

type EndpointReorderOrReplacePlaylistsTracksHeaders struct {
	Authorization string  `header:"name=Authorization"`
	ContentType   *string `header:"name=Content-Type"`
}

type EndpointReorderOrReplacePlaylistsTracksRequestBody struct {
	InsertBefore *int32   `json:"insert_before"`
	RangeLength  *int32   `json:"range_length"`
	RangeStart   *int32   `json:"range_start"`
	SnapshotID   *string  `json:"snapshot_id"`
	Uris         []string `json:"uris"`
}

type EndpointReorderOrReplacePlaylistsTracksSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointReorderOrReplacePlaylistsTracksRequest struct {
	PathParams  EndpointReorderOrReplacePlaylistsTracksPathParams
	QueryParams EndpointReorderOrReplacePlaylistsTracksQueryParams
	Headers     EndpointReorderOrReplacePlaylistsTracksHeaders
	Request     *EndpointReorderOrReplacePlaylistsTracksRequestBody `request:"mediaType=application/json"`
	Security    EndpointReorderOrReplacePlaylistsTracksSecurity
}

type EndpointReorderOrReplacePlaylistsTracksResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	SnapshotIDObject    *shared.SnapshotIDObject
	StatusCode          int64
}
