package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointSkipUsersPlaybackToPreviousTrackQueryParams struct {
	DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
}

type EndpointSkipUsersPlaybackToPreviousTrackHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointSkipUsersPlaybackToPreviousTrackSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointSkipUsersPlaybackToPreviousTrackRequest struct {
	QueryParams EndpointSkipUsersPlaybackToPreviousTrackQueryParams
	Headers     EndpointSkipUsersPlaybackToPreviousTrackHeaders
	Security    EndpointSkipUsersPlaybackToPreviousTrackSecurity
}

type EndpointSkipUsersPlaybackToPreviousTrackResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
