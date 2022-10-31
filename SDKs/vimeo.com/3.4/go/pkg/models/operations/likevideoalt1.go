package operations

import (
	"openapi/pkg/models/shared"
)

type LikeVideoAlt1PathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type LikeVideoAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type LikeVideoAlt1Request struct {
	PathParams LikeVideoAlt1PathParams
	Security   LikeVideoAlt1Security
}

type LikeVideoAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
