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
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetUsersSavedEpisodesSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

// EndpointGetUsersSavedEpisodes200ApplicationJSON

// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type EndpointGetUsersSavedEpisodes200ApplicationJSON struct {
	Href     *string                     `json:"href,omitempty"`
	Items    []shared.SavedEpisodeObject `json:"items,omitempty"`
	Limit    *int32                      `json:"limit,omitempty"`
	Next     *string                     `json:"next,omitempty"`
	Offset   *int32                      `json:"offset,omitempty"`
	Previous *string                     `json:"previous,omitempty"`
	Total    *int32                      `json:"total,omitempty"`
}

type EndpointGetUsersSavedEpisodesRequest struct {
	QueryParams EndpointGetUsersSavedEpisodesQueryParams
	Headers     EndpointGetUsersSavedEpisodesHeaders
	Security    EndpointGetUsersSavedEpisodesSecurity
}

type EndpointGetUsersSavedEpisodesResponse struct {
	ContentType                                           string
	ErrorResponseObject                                   *shared.ErrorResponseObject
	StatusCode                                            int64
	EndpointGetUsersSavedEpisodes200ApplicationJSONObject *EndpointGetUsersSavedEpisodes200ApplicationJSON
}
