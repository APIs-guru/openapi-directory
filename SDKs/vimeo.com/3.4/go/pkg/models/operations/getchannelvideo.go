package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelVideoPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetChannelVideoRequest struct {
	PathParams GetChannelVideoPathParams
}

type GetChannelVideoResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Video       *shared.Video
}
