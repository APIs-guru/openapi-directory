package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointAddTracksToPlaylistPathParams struct {
	PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type EndpointAddTracksToPlaylistQueryParams struct {
	Position *int32  `queryParam:"style=form,explode=true,name=position"`
	Uris     *string `queryParam:"style=form,explode=true,name=uris"`
}

type EndpointAddTracksToPlaylistHeaders struct {
	Authorization string `header:"name=Authorization"`
	ContentType   string `header:"name=Content-Type"`
}

type EndpointAddTracksToPlaylistRequestBody struct {
	Position *int32   `json:"position,omitempty"`
	Uris     []string `json:"uris,omitempty"`
}

type EndpointAddTracksToPlaylistSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointAddTracksToPlaylistRequest struct {
	PathParams  EndpointAddTracksToPlaylistPathParams
	QueryParams EndpointAddTracksToPlaylistQueryParams
	Headers     EndpointAddTracksToPlaylistHeaders
	Request     *EndpointAddTracksToPlaylistRequestBody `request:"mediaType=application/json"`
	Security    EndpointAddTracksToPlaylistSecurity
}

type EndpointAddTracksToPlaylistResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	SnapshotIDObject    *shared.SnapshotIDObject
	StatusCode          int64
}
