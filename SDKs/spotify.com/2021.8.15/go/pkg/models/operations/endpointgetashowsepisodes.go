package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetAShowsEpisodesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EndpointGetAShowsEpisodesQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Market *string `queryParam:"style=form,explode=true,name=market"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetAShowsEpisodesHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointGetAShowsEpisodesSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetAShowsEpisodesRequest struct {
	PathParams  EndpointGetAShowsEpisodesPathParams
	QueryParams EndpointGetAShowsEpisodesQueryParams
	Headers     EndpointGetAShowsEpisodesHeaders
	Security    EndpointGetAShowsEpisodesSecurity
}

type EndpointGetAShowsEpisodes200ApplicationJSON struct {
	Href     *string                          `json:"href"`
	Items    []shared.SimplifiedEpisodeObject `json:"items"`
	Limit    *int32                           `json:"limit"`
	Next     *string                          `json:"next"`
	Offset   *int32                           `json:"offset"`
	Previous *string                          `json:"previous"`
	Total    *int32                           `json:"total"`
}

type EndpointGetAShowsEpisodesResponse struct {
	ContentType                                       string
	ErrorResponseObject                               *shared.ErrorResponseObject
	StatusCode                                        int64
	EndpointGetAShowsEpisodes200ApplicationJSONObject *EndpointGetAShowsEpisodes200ApplicationJSON
}
