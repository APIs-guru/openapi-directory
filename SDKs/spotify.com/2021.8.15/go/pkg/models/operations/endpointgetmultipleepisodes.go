package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetMultipleEpisodesQueryParams struct {
	Ids    string  `queryParam:"style=form,explode=true,name=ids"`
	Market *string `queryParam:"style=form,explode=true,name=market"`
}

type EndpointGetMultipleEpisodesHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointGetMultipleEpisodesSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetMultipleEpisodesRequest struct {
	QueryParams EndpointGetMultipleEpisodesQueryParams
	Headers     EndpointGetMultipleEpisodesHeaders
	Security    EndpointGetMultipleEpisodesSecurity
}

type EndpointGetMultipleEpisodesResponse struct {
	ContentType         string
	EpisodesObject      *shared.EpisodesObject
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
