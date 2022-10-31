package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointCheckUsersSavedTracksQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type EndpointCheckUsersSavedTracksHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointCheckUsersSavedTracksSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointCheckUsersSavedTracksRequest struct {
	QueryParams EndpointCheckUsersSavedTracksQueryParams
	Headers     EndpointCheckUsersSavedTracksHeaders
	Security    EndpointCheckUsersSavedTracksSecurity
}

type EndpointCheckUsersSavedTracksResponse struct {
	ContentType                                             string
	ErrorResponseObject                                     *shared.ErrorResponseObject
	StatusCode                                              int64
	EndpointCheckUsersSavedTracks200ApplicationJSONBooleans []bool
}
