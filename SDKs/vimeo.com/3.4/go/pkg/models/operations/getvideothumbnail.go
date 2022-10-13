package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoThumbnailPathParams struct {
	PictureID float64 `pathParam:"style=simple,explode=false,name=picture_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetVideoThumbnailRequest struct {
	PathParams GetVideoThumbnailPathParams
}

type GetVideoThumbnailResponse struct {
	ContentType string
	StatusCode  int64
	Picture     *shared.Picture
}
