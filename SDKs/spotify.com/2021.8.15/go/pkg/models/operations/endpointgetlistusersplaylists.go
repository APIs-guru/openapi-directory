package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetListUsersPlaylistsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type EndpointGetListUsersPlaylistsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetListUsersPlaylistsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetListUsersPlaylistsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

// EndpointGetListUsersPlaylists200ApplicationJSON

// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type EndpointGetListUsersPlaylists200ApplicationJSON struct {
	Href     *string                           `json:"href,omitempty"`
	Items    []shared.SimplifiedPlaylistObject `json:"items,omitempty"`
	Limit    *int32                            `json:"limit,omitempty"`
	Next     *string                           `json:"next,omitempty"`
	Offset   *int32                            `json:"offset,omitempty"`
	Previous *string                           `json:"previous,omitempty"`
	Total    *int32                            `json:"total,omitempty"`
}

type EndpointGetListUsersPlaylistsRequest struct {
	PathParams  EndpointGetListUsersPlaylistsPathParams
	QueryParams EndpointGetListUsersPlaylistsQueryParams
	Headers     EndpointGetListUsersPlaylistsHeaders
	Security    EndpointGetListUsersPlaylistsSecurity
}

type EndpointGetListUsersPlaylistsResponse struct {
	ContentType                                           string
	ErrorResponseObject                                   *shared.ErrorResponseObject
	StatusCode                                            int64
	EndpointGetListUsersPlaylists200ApplicationJSONObject *EndpointGetListUsersPlaylists200ApplicationJSON
}
