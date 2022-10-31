package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoToWatchLaterAlt1PathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type AddVideoToWatchLaterAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideoToWatchLaterAlt1Request struct {
	PathParams AddVideoToWatchLaterAlt1PathParams
	Security   AddVideoToWatchLaterAlt1Security
}

type AddVideoToWatchLaterAlt1Response struct {
	ContentType string
	StatusCode  int64
}
