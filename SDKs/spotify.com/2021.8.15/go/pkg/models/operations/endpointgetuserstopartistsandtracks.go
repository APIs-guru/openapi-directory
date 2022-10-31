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
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
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
	Href     *string       `json:"href,omitempty"`
	Items    []interface{} `json:"items,omitempty"`
	Limit    *int32        `json:"limit,omitempty"`
	Next     *string       `json:"next,omitempty"`
	Offset   *int32        `json:"offset,omitempty"`
	Previous *string       `json:"previous,omitempty"`
	Total    *int32        `json:"total,omitempty"`
}

type EndpointGetUsersTopArtistsAndTracksResponse struct {
	ContentType                                                 string
	ErrorResponseObject                                         *shared.ErrorResponseObject
	StatusCode                                                  int64
	EndpointGetUsersTopArtistsAndTracks200ApplicationJSONObject *EndpointGetUsersTopArtistsAndTracks200ApplicationJSON
}
