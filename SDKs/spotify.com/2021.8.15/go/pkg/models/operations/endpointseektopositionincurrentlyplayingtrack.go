package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams struct {
	DeviceID   *string `queryParam:"style=form,explode=true,name=device_id"`
	PositionMs int32   `queryParam:"style=form,explode=true,name=position_ms"`
}

type EndpointSeekToPositionInCurrentlyPlayingTrackHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointSeekToPositionInCurrentlyPlayingTrackSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointSeekToPositionInCurrentlyPlayingTrackRequest struct {
	QueryParams EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams
	Headers     EndpointSeekToPositionInCurrentlyPlayingTrackHeaders
	Security    EndpointSeekToPositionInCurrentlyPlayingTrackSecurity
}

type EndpointSeekToPositionInCurrentlyPlayingTrackResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
