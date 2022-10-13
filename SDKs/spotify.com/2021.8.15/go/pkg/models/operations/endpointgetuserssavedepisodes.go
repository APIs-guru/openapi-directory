package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetUsersSavedEpisodesQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Market *string `queryParam:"style=form,explode=true,name=market"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetUsersSavedEpisodesHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointGetUsersSavedEpisodesSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetUsersSavedEpisodesRequest struct {
	QueryParams EndpointGetUsersSavedEpisodesQueryParams
	Headers     EndpointGetUsersSavedEpisodesHeaders
	Security    EndpointGetUsersSavedEpisodesSecurity
}

type EndpointGetUsersSavedEpisodes200ApplicationJSON struct {
	Href     *string                     `json:"href"`
	Items    []shared.SavedEpisodeObject `json:"items"`
	Limit    *int32                      `json:"limit"`
	Next     *string                     `json:"next"`
	Offset   *int32                      `json:"offset"`
	Previous *string                     `json:"previous"`
	Total    *int32                      `json:"total"`
}

type EndpointGetUsersSavedEpisodesResponse struct {
	ContentType                                           string
	ErrorResponseObject                                   *shared.ErrorResponseObject
	StatusCode                                            int64
	EndpointGetUsersSavedEpisodes200ApplicationJSONObject *EndpointGetUsersSavedEpisodes200ApplicationJSON
}
