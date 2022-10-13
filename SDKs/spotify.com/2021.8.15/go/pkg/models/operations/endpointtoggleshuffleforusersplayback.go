package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointToggleShuffleForUsersPlaybackQueryParams struct {
	DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
	State    bool    `queryParam:"style=form,explode=true,name=state"`
}

type EndpointToggleShuffleForUsersPlaybackHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointToggleShuffleForUsersPlaybackSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointToggleShuffleForUsersPlaybackRequest struct {
	QueryParams EndpointToggleShuffleForUsersPlaybackQueryParams
	Headers     EndpointToggleShuffleForUsersPlaybackHeaders
	Security    EndpointToggleShuffleForUsersPlaybackSecurity
}

type EndpointToggleShuffleForUsersPlaybackResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
