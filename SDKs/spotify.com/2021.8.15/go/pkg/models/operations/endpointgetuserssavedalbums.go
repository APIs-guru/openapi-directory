package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetUsersSavedAlbumsQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Market *string `queryParam:"style=form,explode=true,name=market"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetUsersSavedAlbumsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetUsersSavedAlbumsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

// EndpointGetUsersSavedAlbums200ApplicationJSON

// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type EndpointGetUsersSavedAlbums200ApplicationJSON struct {
	Href     *string                   `json:"href,omitempty"`
	Items    []shared.SavedAlbumObject `json:"items,omitempty"`
	Limit    *int32                    `json:"limit,omitempty"`
	Next     *string                   `json:"next,omitempty"`
	Offset   *int32                    `json:"offset,omitempty"`
	Previous *string                   `json:"previous,omitempty"`
	Total    *int32                    `json:"total,omitempty"`
}

type EndpointGetUsersSavedAlbumsRequest struct {
	QueryParams EndpointGetUsersSavedAlbumsQueryParams
	Headers     EndpointGetUsersSavedAlbumsHeaders
	Security    EndpointGetUsersSavedAlbumsSecurity
}

type EndpointGetUsersSavedAlbumsResponse struct {
	ContentType                                         string
	ErrorResponseObject                                 *shared.ErrorResponseObject
	StatusCode                                          int64
	EndpointGetUsersSavedAlbums200ApplicationJSONObject *EndpointGetUsersSavedAlbums200ApplicationJSON
}
