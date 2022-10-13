package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvailableVideoChannelsPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetAvailableVideoChannelsRequest struct {
	PathParams GetAvailableVideoChannelsPathParams
}

type GetAvailableVideoChannelsResponse struct {
	ContentType string
	StatusCode  int64
	Channels    []shared.Channel
	LegacyError *shared.LegacyError
}
