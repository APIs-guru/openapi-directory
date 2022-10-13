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
	Authorization string `header:"name=Authorization"`
}

type EndpointGetUsersSavedTracksSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetUsersSavedTracksRequest struct {
	QueryParams EndpointGetUsersSavedTracksQueryParams
	Headers     EndpointGetUsersSavedTracksHeaders
	Security    EndpointGetUsersSavedTracksSecurity
}

type EndpointGetUsersSavedTracks200ApplicationJSON struct {
	Href     *string                   `json:"href"`
	Items    []shared.SavedTrackObject `json:"items"`
	Limit    *int32                    `json:"limit"`
	Next     *string                   `json:"next"`
	Offset   *int32                    `json:"offset"`
	Previous *string                   `json:"previous"`
	Total    *int32                    `json:"total"`
}

type EndpointGetUsersSavedTracksResponse struct {
	ContentType                                         string
	ErrorResponseObject                                 *shared.ErrorResponseObject
	StatusCode                                          int64
	EndpointGetUsersSavedTracks200ApplicationJSONObject *EndpointGetUsersSavedTracks200ApplicationJSON
}
