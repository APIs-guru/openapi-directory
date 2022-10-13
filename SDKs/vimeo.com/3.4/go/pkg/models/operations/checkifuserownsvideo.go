package operations

import (
	"openapi/pkg/models/shared"
)

type CheckIfUserOwnsVideoPathParams struct {
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CheckIfUserOwnsVideoRequest struct {
	PathParams CheckIfUserOwnsVideoPathParams
}

type CheckIfUserOwnsVideoResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Video       *shared.Video
}
