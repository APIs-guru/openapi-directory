package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointUnfollowPlaylistPathParams struct {
	PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type EndpointUnfollowPlaylistHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointUnfollowPlaylistSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointUnfollowPlaylistRequest struct {
	PathParams EndpointUnfollowPlaylistPathParams
	Headers    EndpointUnfollowPlaylistHeaders
	Security   EndpointUnfollowPlaylistSecurity
}

type EndpointUnfollowPlaylistResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
