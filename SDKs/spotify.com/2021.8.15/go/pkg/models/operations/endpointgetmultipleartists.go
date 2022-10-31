package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetMultipleArtistsQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointGetMultipleArtistsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetMultipleArtistsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetMultipleArtistsRequest struct {
	QueryParams EndpointGetMultipleArtistsQueryParams
	Headers     EndpointGetMultipleArtistsHeaders
	Security    EndpointGetMultipleArtistsSecurity
}

type EndpointGetMultipleArtistsResponse struct {
	ArtistsObject       *shared.ArtistsObject
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
