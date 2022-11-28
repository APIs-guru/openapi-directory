package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetUsersSavedTracksQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Market *string `queryParam:"style=form,explode=true,name=market"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetUsersSavedTracksHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetUsersSavedTracksSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

// EndpointGetUsersSavedTracks200ApplicationJSON

// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type EndpointGetUsersSavedTracks200ApplicationJSON struct {
	Href     *string                   `json:"href,omitempty"`
	Items    []shared.SavedTrackObject `json:"items,omitempty"`
	Limit    *int32                    `json:"limit,omitempty"`
	Next     *string                   `json:"next,omitempty"`
	Offset   *int32                    `json:"offset,omitempty"`
	Previous *string                   `json:"previous,omitempty"`
	Total    *int32                    `json:"total,omitempty"`
}

type EndpointGetUsersSavedTracksRequest struct {
	QueryParams EndpointGetUsersSavedTracksQueryParams
	Headers     EndpointGetUsersSavedTracksHeaders
	Security    EndpointGetUsersSavedTracksSecurity
}

type EndpointGetUsersSavedTracksResponse struct {
	ContentType                                         string
	ErrorResponseObject                                 *shared.ErrorResponseObject
	StatusCode                                          int64
	EndpointGetUsersSavedTracks200ApplicationJSONObject *EndpointGetUsersSavedTracks200ApplicationJSON
}
