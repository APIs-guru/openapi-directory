package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetAListOfCurrentUsersPlaylistsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetAListOfCurrentUsersPlaylistsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetAListOfCurrentUsersPlaylistsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

// EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON

// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON struct {
	Href     *string                           `json:"href,omitempty"`
	Items    []shared.SimplifiedPlaylistObject `json:"items,omitempty"`
	Limit    *int32                            `json:"limit,omitempty"`
	Next     *string                           `json:"next,omitempty"`
	Offset   *int32                            `json:"offset,omitempty"`
	Previous *string                           `json:"previous,omitempty"`
	Total    *int32                            `json:"total,omitempty"`
}

type EndpointGetAListOfCurrentUsersPlaylistsRequest struct {
	QueryParams EndpointGetAListOfCurrentUsersPlaylistsQueryParams
	Headers     EndpointGetAListOfCurrentUsersPlaylistsHeaders
	Security    EndpointGetAListOfCurrentUsersPlaylistsSecurity
}

type EndpointGetAListOfCurrentUsersPlaylistsResponse struct {
	ContentType                                                     string
	ErrorResponseObject                                             *shared.ErrorResponseObject
	StatusCode                                                      int64
	EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSONObject *EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON
}
