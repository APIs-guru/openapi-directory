package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetUsersTopArtistsAndTracksPathParams struct {
	Type string `pathParam:"style=simple,explode=false,name=type"`
}

type EndpointGetUsersTopArtistsAndTracksQueryParams struct {
	Limit     *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int32  `queryParam:"style=form,explode=true,name=offset"`
	TimeRange *string `queryParam:"style=form,explode=true,name=time_range"`
}

type EndpointGetUsersTopArtistsAndTracksHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointGetUsersTopArtistsAndTracksSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetUsersTopArtistsAndTracksRequest struct {
	PathParams  EndpointGetUsersTopArtistsAndTracksPathParams
	QueryParams EndpointGetUsersTopArtistsAndTracksQueryParams
	Headers     EndpointGetUsersTopArtistsAndTracksHeaders
	Security    EndpointGetUsersTopArtistsAndTracksSecurity
}

type EndpointGetUsersTopArtistsAndTracks200ApplicationJSON struct {
	Href     *string       `json:"href"`
	Items    []interface{} `json:"items"`
	Limit    *int32        `json:"limit"`
	Next     *string       `json:"next"`
	Offset   *int32        `json:"offset"`
	Previous *string       `json:"previous"`
	Total    *int32        `json:"total"`
}

type EndpointGetUsersTopArtistsAndTracksResponse struct {
	ContentType                                                 string
	ErrorResponseObject                                         *shared.ErrorResponseObject
	StatusCode                                                  int64
	EndpointGetUsersTopArtistsAndTracks200ApplicationJSONObject *EndpointGetUsersTopArtistsAndTracks200ApplicationJSON
}
