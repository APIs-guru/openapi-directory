package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointCheckIfUserFollowsPlaylistPathParams struct {
	PlaylistID string `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type EndpointCheckIfUserFollowsPlaylistQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointCheckIfUserFollowsPlaylistHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointCheckIfUserFollowsPlaylistSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointCheckIfUserFollowsPlaylistRequest struct {
	PathParams  EndpointCheckIfUserFollowsPlaylistPathParams
	QueryParams EndpointCheckIfUserFollowsPlaylistQueryParams
	Headers     EndpointCheckIfUserFollowsPlaylistHeaders
	Security    EndpointCheckIfUserFollowsPlaylistSecurity
}

type EndpointCheckIfUserFollowsPlaylistResponse struct {
	ContentType                                                  string
	ErrorResponseObject                                          *shared.ErrorResponseObject
	StatusCode                                                   int64
	EndpointCheckIfUserFollowsPlaylist200ApplicationJSONBooleans []bool
}
