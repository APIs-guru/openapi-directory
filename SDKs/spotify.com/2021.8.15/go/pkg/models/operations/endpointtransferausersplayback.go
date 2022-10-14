package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointTransferAUsersPlaybackHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointTransferAUsersPlaybackRequestBody struct {
	DeviceIds []string `json:"device_ids"`
	Play      *bool    `json:"play,omitempty"`
}

type EndpointTransferAUsersPlaybackSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointTransferAUsersPlaybackRequest struct {
	Headers  EndpointTransferAUsersPlaybackHeaders
	Request  EndpointTransferAUsersPlaybackRequestBody `request:"mediaType=application/json"`
	Security EndpointTransferAUsersPlaybackSecurity
}

type EndpointTransferAUsersPlaybackResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
