package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointSetRepeatModeOnUsersPlaybackQueryParams struct {
	DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
	State    string  `queryParam:"style=form,explode=true,name=state"`
}

type EndpointSetRepeatModeOnUsersPlaybackHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type EndpointSetRepeatModeOnUsersPlaybackSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointSetRepeatModeOnUsersPlaybackRequest struct {
	QueryParams EndpointSetRepeatModeOnUsersPlaybackQueryParams
	Headers     EndpointSetRepeatModeOnUsersPlaybackHeaders
	Security    EndpointSetRepeatModeOnUsersPlaybackSecurity
}

type EndpointSetRepeatModeOnUsersPlaybackResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
