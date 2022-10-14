package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVideoThumbnailPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type CreateVideoThumbnailRequestBody struct {
	Active *bool    `json:"active,omitempty"`
	Time   *float64 `json:"time,omitempty"`
}

type CreateVideoThumbnailSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateVideoThumbnailRequest struct {
	PathParams CreateVideoThumbnailPathParams
	Request    *CreateVideoThumbnailRequestBody `request:"mediaType=application/vnd.vimeo.picture+json"`
	Security   CreateVideoThumbnailSecurity
}

type CreateVideoThumbnailResponse struct {
	ContentType string
	StatusCode  int64
	Picture     *shared.Picture
}
