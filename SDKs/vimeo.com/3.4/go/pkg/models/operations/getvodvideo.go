package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodVideoPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
	VideoID    float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetVodVideoRequest struct {
	PathParams GetVodVideoPathParams
}

type GetVodVideoResponse struct {
	ContentType string
	StatusCode  int64
	Video       *shared.Video
}
