package operations

import (
	"openapi/pkg/models/shared"
)

type CheckWatchLaterQueuePathParams struct {
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CheckWatchLaterQueueSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CheckWatchLaterQueueRequest struct {
	PathParams CheckWatchLaterQueuePathParams
	Security   CheckWatchLaterQueueSecurity
}

type CheckWatchLaterQueueResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Video       *shared.Video
}
