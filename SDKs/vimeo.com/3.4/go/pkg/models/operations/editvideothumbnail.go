package operations

import (
	"openapi/pkg/models/shared"
)

type EditVideoThumbnailPathParams struct {
	PictureID float64 `pathParam:"style=simple,explode=false,name=picture_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type EditVideoThumbnailRequestBody struct {
	Active *bool `json:"active,omitempty"`
}

type EditVideoThumbnailSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type EditVideoThumbnailRequest struct {
	PathParams EditVideoThumbnailPathParams
	Request    *EditVideoThumbnailRequestBody `request:"mediaType=application/vnd.vimeo.picture+json"`
	Security   EditVideoThumbnailSecurity
}

type EditVideoThumbnailResponse struct {
	ContentType string
	StatusCode  int64
	Picture     *shared.Picture
}
