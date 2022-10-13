package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetAListOfCurrentUsersPlaylistsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetAListOfCurrentUsersPlaylistsHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointGetAListOfCurrentUsersPlaylistsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetAListOfCurrentUsersPlaylistsRequest struct {
	QueryParams EndpointGetAListOfCurrentUsersPlaylistsQueryParams
	Headers     EndpointGetAListOfCurrentUsersPlaylistsHeaders
	Security    EndpointGetAListOfCurrentUsersPlaylistsSecurity
}

type EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON struct {
	Href     *string                           `json:"href"`
	Items    []shared.SimplifiedPlaylistObject `json:"items"`
	Limit    *int32                            `json:"limit"`
	Next     *string                           `json:"next"`
	Offset   *int32                            `json:"offset"`
	Previous *string                           `json:"previous"`
	Total    *int32                            `json:"total"`
}

type EndpointGetAListOfCurrentUsersPlaylistsResponse struct {
	ContentType                                                     string
	ErrorResponseObject                                             *shared.ErrorResponseObject
	StatusCode                                                      int64
	EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSONObject *EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON
}
