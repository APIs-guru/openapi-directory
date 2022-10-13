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
	Authorization string `header:"name=Authorization"`
}

type EndpointGetListUsersPlaylistsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetListUsersPlaylistsRequest struct {
	PathParams  EndpointGetListUsersPlaylistsPathParams
	QueryParams EndpointGetListUsersPlaylistsQueryParams
	Headers     EndpointGetListUsersPlaylistsHeaders
	Security    EndpointGetListUsersPlaylistsSecurity
}

type EndpointGetListUsersPlaylists200ApplicationJSON struct {
	Href     *string                           `json:"href"`
	Items    []shared.SimplifiedPlaylistObject `json:"items"`
	Limit    *int32                            `json:"limit"`
	Next     *string                           `json:"next"`
	Offset   *int32                            `json:"offset"`
	Previous *string                           `json:"previous"`
	Total    *int32                            `json:"total"`
}

type EndpointGetListUsersPlaylistsResponse struct {
	ContentType                                           string
	ErrorResponseObject                                   *shared.ErrorResponseObject
	StatusCode                                            int64
	EndpointGetListUsersPlaylists200ApplicationJSONObject *EndpointGetListUsersPlaylists200ApplicationJSON
}
