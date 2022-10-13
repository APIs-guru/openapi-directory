package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointCheckUsersSavedEpisodesQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointCheckUsersSavedEpisodesHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointCheckUsersSavedEpisodesSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointCheckUsersSavedEpisodesRequest struct {
	QueryParams EndpointCheckUsersSavedEpisodesQueryParams
	Headers     EndpointCheckUsersSavedEpisodesHeaders
	Security    EndpointCheckUsersSavedEpisodesSecurity
}

type EndpointCheckUsersSavedEpisodesResponse struct {
	ContentType                                               string
	ErrorResponseObject                                       *shared.ErrorResponseObject
	StatusCode                                                int64
	EndpointCheckUsersSavedEpisodes200ApplicationJSONBooleans []bool
}
