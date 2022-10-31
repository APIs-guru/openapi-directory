package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetTheUsersCurrentlyPlayingTrackQueryParams struct {
	AdditionalTypes *string `queryParam:"style=form,explode=true,name=additional_types"`
	Market          string  `queryParam:"style=form,explode=true,name=market"`
}

type EndpointGetTheUsersCurrentlyPlayingTrackHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointGetTheUsersCurrentlyPlayingTrackSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetTheUsersCurrentlyPlayingTrackRequest struct {
	QueryParams EndpointGetTheUsersCurrentlyPlayingTrackQueryParams
	Headers     EndpointGetTheUsersCurrentlyPlayingTrackHeaders
	Security    EndpointGetTheUsersCurrentlyPlayingTrackSecurity
}

type EndpointGetTheUsersCurrentlyPlayingTrackResponse struct {
	ContentType            string
	CurrentlyPlayingObject *shared.CurrentlyPlayingObject
	ErrorResponseObject    *shared.ErrorResponseObject
	StatusCode             int64
}
