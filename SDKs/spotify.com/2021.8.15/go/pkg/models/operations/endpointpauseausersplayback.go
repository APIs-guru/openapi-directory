package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointPauseAUsersPlaybackQueryParams struct {
	DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
}

type EndpointPauseAUsersPlaybackHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointPauseAUsersPlaybackSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointPauseAUsersPlaybackRequest struct {
	QueryParams EndpointPauseAUsersPlaybackQueryParams
	Headers     EndpointPauseAUsersPlaybackHeaders
	Security    EndpointPauseAUsersPlaybackSecurity
}

type EndpointPauseAUsersPlaybackResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
