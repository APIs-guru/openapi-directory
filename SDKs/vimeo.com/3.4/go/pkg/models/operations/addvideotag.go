package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoTagPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
	Word    string  `pathParam:"style=simple,explode=false,name=word"`
}

type AddVideoTagSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideoTagRequest struct {
	PathParams AddVideoTagPathParams
	Security   AddVideoTagSecurity
}

type AddVideoTagResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Tag         *shared.Tag
}
