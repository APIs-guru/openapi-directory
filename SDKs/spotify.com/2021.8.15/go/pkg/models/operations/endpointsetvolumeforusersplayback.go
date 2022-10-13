package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointSetVolumeForUsersPlaybackQueryParams struct {
	DeviceID      *string `queryParam:"style=form,explode=true,name=device_id"`
	VolumePercent int32   `queryParam:"style=form,explode=true,name=volume_percent"`
}

type EndpointSetVolumeForUsersPlaybackHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointSetVolumeForUsersPlaybackSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointSetVolumeForUsersPlaybackRequest struct {
	QueryParams EndpointSetVolumeForUsersPlaybackQueryParams
	Headers     EndpointSetVolumeForUsersPlaybackHeaders
	Security    EndpointSetVolumeForUsersPlaybackSecurity
}

type EndpointSetVolumeForUsersPlaybackResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
