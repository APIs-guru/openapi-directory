package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointCheckUsersSavedAlbumsQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointCheckUsersSavedAlbumsHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointCheckUsersSavedAlbumsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointCheckUsersSavedAlbumsRequest struct {
	QueryParams EndpointCheckUsersSavedAlbumsQueryParams
	Headers     EndpointCheckUsersSavedAlbumsHeaders
	Security    EndpointCheckUsersSavedAlbumsSecurity
}

type EndpointCheckUsersSavedAlbumsResponse struct {
	ContentType                                             string
	ErrorResponseObject                                     *shared.ErrorResponseObject
	StatusCode                                              int64
	EndpointCheckUsersSavedAlbums200ApplicationJSONBooleans []bool
}
