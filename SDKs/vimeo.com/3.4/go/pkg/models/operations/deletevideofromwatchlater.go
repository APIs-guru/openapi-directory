package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoFromWatchLaterPathParams struct {
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type DeleteVideoFromWatchLaterSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoFromWatchLaterRequest struct {
	PathParams DeleteVideoFromWatchLaterPathParams
	Security   DeleteVideoFromWatchLaterSecurity
}

type DeleteVideoFromWatchLaterResponse struct {
	ContentType string
	StatusCode  int64
}
