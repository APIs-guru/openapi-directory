package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoTagPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
	Word    string  `pathParam:"style=simple,explode=false,name=word"`
}

type DeleteVideoTagSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoTagRequest struct {
	PathParams DeleteVideoTagPathParams
	Security   DeleteVideoTagSecurity
}

type DeleteVideoTagResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
