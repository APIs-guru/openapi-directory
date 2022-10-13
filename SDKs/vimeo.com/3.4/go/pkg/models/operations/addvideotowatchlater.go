package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoToWatchLaterPathParams struct {
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type AddVideoToWatchLaterSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideoToWatchLaterRequest struct {
	PathParams AddVideoToWatchLaterPathParams
	Security   AddVideoToWatchLaterSecurity
}

type AddVideoToWatchLaterResponse struct {
	ContentType string
	StatusCode  int64
}
