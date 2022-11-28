package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetUsersSavedShowsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetUsersSavedShowsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetUsersSavedShowsSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

// EndpointGetUsersSavedShows200ApplicationJSON

// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type EndpointGetUsersSavedShows200ApplicationJSON struct {
	Href     *string                  `json:"href,omitempty"`
	Items    []shared.SavedShowObject `json:"items,omitempty"`
	Limit    *int32                   `json:"limit,omitempty"`
	Next     *string                  `json:"next,omitempty"`
	Offset   *int32                   `json:"offset,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Total    *int32                   `json:"total,omitempty"`
}

type EndpointGetUsersSavedShowsRequest struct {
	QueryParams EndpointGetUsersSavedShowsQueryParams
	Headers     EndpointGetUsersSavedShowsHeaders
	Security    EndpointGetUsersSavedShowsSecurity
}

type EndpointGetUsersSavedShowsResponse struct {
	ContentType                                        string
	ErrorResponseObject                                *shared.ErrorResponseObject
	StatusCode                                         int64
	EndpointGetUsersSavedShows200ApplicationJSONObject *EndpointGetUsersSavedShows200ApplicationJSON
}
