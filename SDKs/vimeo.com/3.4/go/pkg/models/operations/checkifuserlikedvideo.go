package operations

import (
	"openapi/pkg/models/shared"
)

type CheckIfUserLikedVideoPathParams struct {
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CheckIfUserLikedVideoRequest struct {
	PathParams CheckIfUserLikedVideoPathParams
}

type CheckIfUserLikedVideoResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
