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
	Authorization string `header:"name=Authorization"`
}

type EndpointGetUsersSavedAlbumsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetUsersSavedAlbumsRequest struct {
	QueryParams EndpointGetUsersSavedAlbumsQueryParams
	Headers     EndpointGetUsersSavedAlbumsHeaders
	Security    EndpointGetUsersSavedAlbumsSecurity
}

type EndpointGetUsersSavedAlbums200ApplicationJSON struct {
	Href     *string                   `json:"href"`
	Items    []shared.SavedAlbumObject `json:"items"`
	Limit    *int32                    `json:"limit"`
	Next     *string                   `json:"next"`
	Offset   *int32                    `json:"offset"`
	Previous *string                   `json:"previous"`
	Total    *int32                    `json:"total"`
}

type EndpointGetUsersSavedAlbumsResponse struct {
	ContentType                                         string
	ErrorResponseObject                                 *shared.ErrorResponseObject
	StatusCode                                          int64
	EndpointGetUsersSavedAlbums200ApplicationJSONObject *EndpointGetUsersSavedAlbums200ApplicationJSON
}
