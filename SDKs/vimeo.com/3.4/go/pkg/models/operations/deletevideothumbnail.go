package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoThumbnailPathParams struct {
	PictureID float64 `pathParam:"style=simple,explode=false,name=picture_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type DeleteVideoThumbnailSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoThumbnailRequest struct {
	PathParams DeleteVideoThumbnailPathParams
	Security   DeleteVideoThumbnailSecurity
}

type DeleteVideoThumbnailResponse struct {
	ContentType string
	StatusCode  int64
}
