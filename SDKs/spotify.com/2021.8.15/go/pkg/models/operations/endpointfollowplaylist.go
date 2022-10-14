package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointFollowPlaylistPathParams struct {
	PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type EndpointFollowPlaylistHeaders struct {
	Authorization string `header:"name=Authorization"`
	ContentType   string `header:"name=Content-Type"`
}

type EndpointFollowPlaylistRequestBody struct {
	Public *bool `json:"public,omitempty"`
}

type EndpointFollowPlaylistSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointFollowPlaylistRequest struct {
	PathParams EndpointFollowPlaylistPathParams
	Headers    EndpointFollowPlaylistHeaders
	Request    *EndpointFollowPlaylistRequestBody `request:"mediaType=application/json"`
	Security   EndpointFollowPlaylistSecurity
}

type EndpointFollowPlaylistResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
