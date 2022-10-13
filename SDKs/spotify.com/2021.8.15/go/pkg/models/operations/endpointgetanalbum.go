package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetAnAlbumPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EndpointGetAnAlbumQueryParams struct {
	Market *string `queryParam:"style=form,explode=true,name=market"`
}

type EndpointGetAnAlbumHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointGetAnAlbumSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetAnAlbumRequest struct {
	PathParams  EndpointGetAnAlbumPathParams
	QueryParams EndpointGetAnAlbumQueryParams
	Headers     EndpointGetAnAlbumHeaders
	Security    EndpointGetAnAlbumSecurity
}

type EndpointGetAnAlbumResponse struct {
	AlbumObject         *shared.AlbumObject
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
